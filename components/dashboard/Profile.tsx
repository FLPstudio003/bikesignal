"use client"

import {useState} from "react"

export default function Profile(){

const [name,setName]=useState("Rider")
const [email,setEmail]=useState("graphicsflp@gmail.com")
const [phone,setPhone]=useState("")

return(

<div className="karta max-w-xl">

<h2 className="text-xl font-bold mb-6">
Profil jazdca
</h2>

<div className="space-y-4">

<div>

<label className="text-sm opacity-60">
Meno
</label>

<input
value={name}
onChange={(e)=>setName(e.target.value)}
className="w-full bg-[#111] border border-[#333] rounded p-2"
/>

</div>

<div>

<label className="text-sm opacity-60">
Email
</label>

<input
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full bg-[#111] border border-[#333] rounded p-2"
/>

</div>

<div>

<label className="text-sm opacity-60">
Telefón
</label>

<input
value={phone}
onChange={(e)=>setPhone(e.target.value)}
className="w-full bg-[#111] border border-[#333] rounded p-2"
/>

</div>

<button className="btn mt-4">
Uložiť profil
</button>

</div>

</div>

)

}