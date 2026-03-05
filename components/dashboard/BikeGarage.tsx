"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { Bike, Plus, Wrench, Activity, Trash2 } from "lucide-react"

export default function BikeGarage() {

const [bikes,setBikes] = useState<any[]>([])
const [open,setOpen] = useState(false)
const [loading,setLoading] = useState(false)

const [brand,setBrand] = useState("")
const [model,setModel] = useState("")
const [type,setType] = useState("")
const [year,setYear] = useState("")

useEffect(()=>{

loadBikes()

},[])

const loadBikes = async ()=>{

setLoading(true)

const {data:{user}} = await supabase.auth.getUser()

const {data} = await supabase
.from("bikes")
.select("*")
.eq("user_id",user?.id)

setBikes(data || [])

setLoading(false)

}

const addBike = async ()=>{

const {data:{user}} = await supabase.auth.getUser()

await supabase.from("bikes").insert({

user_id:user?.id,
brand,
model,
type,
year,
total_km:0

})

setOpen(false)

setBrand("")
setModel("")
setType("")
setYear("")

loadBikes()

}

const deleteBike = async (id:string)=>{

await supabase.from("bikes").delete().eq("id",id)

loadBikes()

}

return(

<section id="garage" className="max-w-6xl mx-auto px-6 py-20">

{/* TITLE */}

<div className="mb-10">

<h2 className="text-4xl font-bold text-white">
Moja garáž
</h2>

<p className="text-white/40 mt-2">
Spravuj svoje bicykle a sleduj servis
</p>

</div>


{/* GRID */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">


{/* ADD BIKE CARD */}

<div
onClick={()=>setOpen(true)}
className="cursor-pointer group rounded-3xl border border-dashed border-white/20 bg-gradient-to-br from-black to-neutral-900 p-10 flex flex-col items-center justify-center text-center relative overflow-hidden hover:border-green-400 transition"
>

<div className="absolute -top-20 -left-20 w-72 h-72 bg-green-500/10 blur-3xl group-hover:scale-150 transition"/>

<div className="bg-green-500/10 p-5 rounded-2xl mb-5">
<Plus size={32} className="text-green-400"/>
</div>

<div className="text-white font-semibold text-lg">
Pridať bicykel
</div>

<div className="text-white/50 text-sm mt-1">
Nový bike do garáže
</div>

</div>


{/* EXISTING BIKES */}

{bikes.map((bike)=>(

<div
key={bike.id}
className="group rounded-3xl border border-white/10 bg-gradient-to-br from-black to-neutral-900 p-7 relative overflow-hidden hover:scale-[1.02] transition"
>

<div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-500/10 blur-3xl"/>


{/* BIKE HEADER */}

<div className="flex items-center justify-between">

<div>

<div className="text-white font-semibold text-lg">
{bike.brand} {bike.model}
</div>

<div className="text-white/50 text-sm">
{bike.type}
</div>

</div>

<div className="bg-blue-500/10 p-3 rounded-xl">
<Bike className="text-blue-400"/>
</div>

</div>


{/* KM */}

<div className="mt-6">

<div className="text-white/40 text-sm">
Najazdené km
</div>

<div className="text-3xl font-bold text-white mt-1">
{bike.total_km}
</div>

</div>


{/* SERVICE */}

<div className="mt-6 flex items-center justify-between">

<div>

<div className="text-white/40 text-xs uppercase">
Servis
</div>

<div className="text-red-400 font-semibold">
o 250 km
</div>

</div>

<div className="bg-red-500/10 p-2 rounded-lg">
<Wrench size={18} className="text-red-400"/>
</div>

</div>


{/* DELETE */}

<button
onClick={()=>deleteBike(bike.id)}
className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition"
>

<Trash2 size={18} className="text-white/50 hover:text-red-400"/>

</button>

</div>

))}

</div>


{/* LOADING */}

{loading && (

<div className="text-center text-white/40 mt-10">
Načítavam bicykle...
</div>

)}


{/* MODAL */}

{open && (

<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md">

<div className="w-full max-w-lg rounded-3xl border border-white/10 bg-[#0f0f0f] p-10 shadow-2xl">

<h3 className="text-2xl font-bold text-white mb-8">
Pridať bicykel
</h3>

<div className="grid gap-4">

<input
placeholder="Značka (Specialized)"
className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-400"
value={brand}
onChange={(e)=>setBrand(e.target.value)}
/>

<input
placeholder="Model"
className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-400"
value={model}
onChange={(e)=>setModel(e.target.value)}
/>

<input
placeholder="Typ (Trail / Road / Gravel)"
className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-400"
value={type}
onChange={(e)=>setType(e.target.value)}
/>

<input
placeholder="Rok výroby"
className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-400"
value={year}
onChange={(e)=>setYear(e.target.value)}
/>

</div>


<div className="flex gap-4 mt-8">

<button
onClick={()=>setOpen(false)}
className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white py-3 rounded-xl transition"
>
Zrušiť
</button>

<button
onClick={addBike}
className="flex-1 bg-green-500 hover:bg-green-400 text-black py-3 rounded-xl font-semibold transition"
>
Uložiť bicykel
</button>

</div>

</div>

</div>

)}

</section>

)

}