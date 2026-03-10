import { NextResponse } from "next/server"
import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

export async function GET(req: Request) {

  const url = new URL(req.url)
  const code = url.searchParams.get("code")

  if (!code) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`)
  }

  const cookieStore = await cookies()

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
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SITE_URL}/login`)
  }

  /* EXCHANGE CODE -> STRAVA TOKEN */

  const tokenResponse = await fetch("https://www.strava.com/oauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      client_id: process.env.STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_CLIENT_SECRET,
      code,
      grant_type: "authorization_code"
    })
  })

  const token = await tokenResponse.json()

  const access_token = token.access_token
  const refresh_token = token.refresh_token
  const expires_at = token.expires_at
  const athlete_id = token.athlete?.id
  const username = token.athlete?.username
  const firstname = token.athlete?.firstname
  const lastname = token.athlete?.lastname

  /* SAVE TOKEN */

  await supabase
    .from("strava_tokens")
    .upsert({
      user_id: user.id,
      athlete_id,
      access_token,
      refresh_token,
      expires_at
    })

  /* UPDATE PROFILE */

  await supabase
    .from("profiles")
    .update({
      strava_connected: true,
      strava_id: athlete_id,
      strava_username: username,
      full_name: `${firstname} ${lastname}`
    })
    .eq("id", user.id)

  /* REDIRECT BACK */

  return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`)
}