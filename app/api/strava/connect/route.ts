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

  const { data: { user } } = await supabase.auth.getUser()

  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://bikesignal.vercel.app"
      : "http://localhost:3000"

  if (!user) {
    return NextResponse.redirect(`${baseUrl}/login`)
  }

  const client_id = process.env.STRAVA_CLIENT_ID
  const redirect_uri =
    process.env.NODE_ENV === "production"
      ? "https://bikesignal.vercel.app/api/strava/callback"
      : "http://localhost:3000/api/strava/callback"

  if (!client_id) {
    return new NextResponse("Missing STRAVA_CLIENT_ID", { status: 500 })
  }

  const stravaUrl =
    `https://www.strava.com/oauth/authorize` +
    `?client_id=${client_id}` +
    `&response_type=code` +
    `&redirect_uri=${redirect_uri}` +
    `&approval_prompt=auto` +
    `&scope=read,activity:read_all` +
    `&state=${user.id}`

  return NextResponse.redirect(stravaUrl)
}