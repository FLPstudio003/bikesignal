import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export async function GET(req: Request){

const { searchParams } = new URL(req.url)
const userId = searchParams.get("user")

if(!userId) return NextResponse.json({error:"No user"})

const supabase = createClient(
process.env.NEXT_PUBLIC_SUPABASE_URL!,
process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const { data:token } = await supabase
.from("strava_tokens")
.select("*")
.eq("user_id",userId)
.single()

if(!token) return NextResponse.json({error:"No token"})

const res = await fetch(
"https://www.strava.com/api/v3/athlete/activities?per_page=50",
{
headers:{
Authorization:`Bearer ${token.access_token}`
}
}
)

const activities = await res.json()

const rides = activities.filter((a:any)=>a.type==="Ride")

const totalKm = rides.reduce(
(sum:any,r:any)=> sum + r.distance,
0
) / 1000

return NextResponse.json({
rides:rides.length,
km:Math.round(totalKm)
})

}