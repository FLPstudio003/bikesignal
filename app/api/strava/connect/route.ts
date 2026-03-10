import { NextResponse } from "next/server"

export async function GET() {

  const client_id = process.env.STRAVA_CLIENT_ID

  if (!client_id) {
    return new NextResponse("Missing STRAVA_CLIENT_ID", { status: 500 })
  }

  const redirect_uri =
    process.env.NODE_ENV === "production"
      ? "https://bikesignal.vercel.app/api/strava/callback"
      : "http://localhost:3000/api/strava/callback"

  const url =
    "https://www.strava.com/oauth/authorize" +
    `?client_id=${client_id}` +
    "&response_type=code" +
    `&redirect_uri=${redirect_uri}` +
    "&approval_prompt=auto" +
    "&scope=read,activity:read_all"

  return NextResponse.redirect(url)

}