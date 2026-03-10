import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export async function GET(req: Request) {

  const url = new URL(req.url)

  const code = url.searchParams.get("code")
  const user_id = url.searchParams.get("state")

  if (!code || !user_id) {
    return NextResponse.redirect("https://bikesignal.vercel.app/login")
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  /* exchange code */

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

  /* save token */

  await supabase
    .from("strava_tokens")
    .upsert({
      user_id,
      access_token,
      refresh_token,
      expires_at
    })

  /* mark connected */

  await supabase
    .from("profiles")
    .update({ strava_connected: true })
    .eq("id", user_id)

  return NextResponse.redirect("https://bikesignal.vercel.app/dashboard")
}