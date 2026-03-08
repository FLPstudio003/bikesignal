import { createClient } from "@supabase/supabase-js"
import { NextResponse } from "next/server"

export async function GET(){

const supabase = createClient(
process.env.NEXT_PUBLIC_SUPABASE_URL!,
process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const { data:{ user } } = await supabase.auth.getUser()

if(!user){
return NextResponse.json(null)
}

const { data } = await supabase
.from("profiles")
.select("*")
.eq("id",user.id)
.single()

return NextResponse.json(data)

}