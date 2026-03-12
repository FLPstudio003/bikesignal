import { NextResponse } from "next/server"

export async function GET(req: Request) {

  const url = new URL(req.url)
  const user_id = url.searchParams.get("user")

  if (!user_id) {
    return NextResponse.redirect("https://bikesignal.vercel.app/dashboard")
  }

  const stravaUrl =
    `https://www.strava.com/oauth/authorize` +
    `?client_id=${process.env.STRAVA_CLIENT_ID}` +
    `&response_type=code` +
    `&redirect_uri=${process.env.STRAVA_REDIRECT_URI}` +
    `&approval_prompt=auto` +
    `&scope=read,activity:read_all` +
    `&state=${user_id}`

  return NextResponse.redirect(stravaUrl)
}