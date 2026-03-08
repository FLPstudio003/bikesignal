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

  const { data: token } = await supabase
    .from("strava_tokens")
    .select("*")
    .eq("user_id", user.id)
    .single()

  if (!token) {
    return NextResponse.json([])
  }

  const res = await fetch(
    "https://www.strava.com/api/v3/athlete/activities?per_page=50",
    {
      headers: {
        Authorization: `Bearer ${token.access_token}`
      }
    }
  )

  const activities = await res.json()

  const rides = activities.map((a:any)=>({
    user_id: user.id,
    strava_id: a.id,
    name: a.name,
    distance: Math.round(a.distance / 1000),
    start_date: a.start_date
  }))

  for (const r of rides) {
    await supabase
      .from("rides")
      .upsert(r, { onConflict: "strava_id" })
  }

  return NextResponse.json(rides)
}