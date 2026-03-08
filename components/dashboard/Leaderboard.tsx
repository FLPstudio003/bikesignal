"use client"

import { useEffect,useState } from "react"

export default function Leaderboard(){

const [riders,setRiders] = useState([])

useEffect(()=>{

const load = async()=>{

const res = await fetch("/api/leaderboard")
const data = await res.json()

setRiders(data)

}

load()

},[])

return(

<div className="border border-white/10 rounded-xl p-8 bg-black/40">

<h2 className="text-xl font-bold mb-6">

Leaderboard

</h2>

<div className="space-y-3">

{riders.map((r:any,i)=>(

<div
key={i}
className="flex justify-between border border-neutral-800 rounded-lg px-4 py-3"
>

<span>{i+1}. {r.name}</span>

<span className="text-green-400">

{r.km} km

</span>

</div>

))}

</div>

</div>

)
}