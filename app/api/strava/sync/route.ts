import { NextResponse } from "next/server"
import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

export async function GET() {

  const cookieStore = cookies()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        }
      }
    }
  )

  const {
    data: { user }
  } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json([])
  }

  /* GET STRAVA TOKEN */

  const { data: token } = await supabase
    .from("strava_tokens")
    .select("*")
    .eq("user_id", user.id)
    .single()

  if (!token) {
    return NextResponse.json([])
  }

  let access_token = token.access_token

  /* TOKEN REFRESH */

  const now = Math.floor(Date.now() / 1000)

  if (token.expires_at < now) {

    const refresh = await fetch("https://www.strava.com/oauth/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: process.env.STRAVA_CLIENT_ID,
        client_secret: process.env.STRAVA_CLIENT_SECRET,
        refresh_token: token.refresh_token,
        grant_type: "refresh_token"
      })
    })

    const newToken = await refresh.json()

    access_token = newToken.access_token

    await supabase
      .from("strava_tokens")
      .update({
        access_token: newToken.access_token,
        refresh_token: newToken.refresh_token,
        expires_at: newToken.expires_at
      })
      .eq("user_id", user.id)
  }

  /* GET ACTIVITIES */

  const res = await fetch(
    "https://www.strava.com/api/v3/athlete/activities?per_page=50",
    {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    }
  )

  const activities = await res.json()

  if (!activities) {
    return NextResponse.json([])
  }

  /* FORMAT RIDES */

  const rides = activities.map((a: any) => ({
    user_id: user.id,
    strava_id: a.id,
    name: a.name,
    distance: Math.round(a.distance / 1000),
    start_date: a.start_date
  }))

  /* SAVE RIDES */

  for (const r of rides) {
    await supabase
      .from("rides")
      .upsert(r, { onConflict: "strava_id" })
  }

  /* CALCULATE TOTAL KM */

  const { data: allRides } = await supabase
    .from("rides")
    .select("distance")
    .eq("user_id", user.id)

  const totalKm = allRides?.reduce((sum, r) => sum + (r.distance || 0), 0) || 0

  /* CALCULATE POINTS */

  const points = totalKm

  await supabase
    .from("profiles")
    .update({
      km: totalKm,
      loyalty_points: points
    })
    .eq("id", user.id)

  return NextResponse.json({
    rides,
    totalKm,
    points
  })
}