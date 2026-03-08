"use client"

import {useEffect,useState} from "react"

export default function WeeklyCountdown(){

const [time,setTime]=useState("")

useEffect(()=>{

const interval=setInterval(()=>{

const now=new Date()
const nextMonday=new Date()

nextMonday.setDate(now.getDate()+(8-now.getDay()))
nextMonday.setHours(0,0,0,0)

const diff=nextMonday.getTime()-now.getTime()

const d=Math.floor(diff/86400000)
const h=Math.floor((diff%86400000)/3600000)
const m=Math.floor((diff%3600000)/60000)
const s=Math.floor((diff%60000)/1000)

setTime(`${d}D ${h}H ${m}M ${s}S`)

},1000)

return()=>clearInterval(interval)

},[])

return(

<div className="karta text-center">

<div className="opacity-60">
Reset leaderboardu
</div>

<div className="stat">
{time}
</div>

</div>

)

}