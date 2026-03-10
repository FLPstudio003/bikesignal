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
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          )
        }
      }
    }
  )

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_SITE_URL}/login`
    )
  }

  const client_id = process.env.STRAVA_CLIENT_ID
  const redirect_uri = process.env.STRAVA_REDIRECT_URI

  const url =
    "https://www.strava.com/oauth/authorize" +
    `?client_id=${client_id}` +
    "&response_type=code" +
    `&redirect_uri=${redirect_uri}` +
    "&approval_prompt=auto" +
    "&scope=read,activity:read_all"

  return NextResponse.redirect(url)
}