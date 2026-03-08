import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export async function GET(){

const supabase=createClient(
process.env.NEXT_PUBLIC_SUPABASE_URL!,
process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const {data}=await supabase
.from("rides")
.select(`
distance,
profiles(full_name)
`)

if(!data) return NextResponse.json([])

const riders:any={}

data.forEach((r:any)=>{

const name=r.profiles?.full_name||"Rider"

if(!riders[name]) riders[name]=0

riders[name]+=r.distance

})

const result=Object.entries(riders)
.map(([name,km]:any)=>({
name,
km:Math.round(km)
}))
.sort((a,b)=>b.km-a.km)

return NextResponse.json(result)

}