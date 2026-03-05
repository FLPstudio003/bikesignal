"use client"

import {useEffect,useState} from "react"
import {supabase} from "@/lib/supabase"

import DashboardHeader from "@/components/DashboardHeader"

import RiderHero from "@/components/dashboard/RiderHero"
import Overview from "@/components/dashboard/Overview"
import BikeGarage from "@/components/dashboard/BikeGarage"
import Profile from "@/components/dashboard/Profile"

export default function Dashboard(){

const [profile,setProfile] = useState<any>(null)
const [loading,setLoading] = useState(true)

useEffect(()=>{

const load = async ()=>{

const {data:{user}} = await supabase.auth.getUser()

if(!user){

window.location.href="/login"
return

}

const {data} = await supabase
.from("profiles")
.select("*")
.eq("email",user.email)
.single()

setProfile(data)
setLoading(false)

}

load()

},[])

if(loading){

return <div className="text-white p-10">Loading...</div>

}

return(

<div className="bg-black min-h-screen">

<DashboardHeader user={profile}/>

<RiderHero profile={profile}/>

<Overview profile={profile}/>

<BikeGarage/>

<Profile profile={profile}/>

</div>

)

}