import { NextResponse } from "next/server"
import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

export async function GET(req: Request) {

  const url = new URL(req.url)
  const code = url.searchParams.get("code")

  if (!code) {
    return NextResponse.redirect("http://localhost:3000/dashboard")
  }

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
    return NextResponse.redirect("http://localhost:3000/login")
  }

  /* EXCHANGE CODE -> TOKEN */

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

  /* SAVE TOKEN */

  await supabase
    .from("strava_tokens")
    .upsert({
      user_id: user.id,
      access_token,
      refresh_token,
      expires_at
    })

  /* SET CONNECTED */

  await supabase
    .from("profiles")
    .update({ strava_connected: true })
    .eq("id", user.id)

  /* REDIRECT */

  return NextResponse.redirect("http://localhost:3000/dashboard")
}