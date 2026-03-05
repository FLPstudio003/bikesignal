"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

export default function RegisterForm(){

const router = useRouter()

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [loading,setLoading] = useState(false)
const [error,setError] = useState("")

const register = async()=>{

setLoading(true)
setError("")

const {data,error} = await supabase.auth.signUp({
email,
password
})

if(error){

setError(error.message)
setLoading(false)
return

}

/* vytvor profil */

await supabase.from("profiles").insert({

id:data.user?.id,
email,
name,
loyalty_points:50,
km:0

})

router.push("/dashboard")

}

return(

<div className="space-y-5">

{/* NAME */}

<input
type="text"
placeholder="Tvoje meno"
className="w-full rounded-xl bg-black border border-white/10 px-4 py-3 text-white focus:border-green-400 outline-none"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

{/* EMAIL */}

<input
type="email"
placeholder="Email"
className="w-full rounded-xl bg-black border border-white/10 px-4 py-3 text-white focus:border-green-400 outline-none"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

{/* PASSWORD */}

<input
type="password"
placeholder="Password"
className="w-full rounded-xl bg-black border border-white/10 px-4 py-3 text-white focus:border-green-400 outline-none"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

{/* ERROR */}

{error &&(

<div className="text-red-400 text-sm">
{error}
</div>

)}

{/* BUTTON */}

<button
onClick={register}
disabled={loading}
className="w-full bg-green-500 hover:bg-green-400 text-black py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
>

{loading && <Loader2 className="animate-spin" size={18}/>}

Registrovať

</button>

{/* LOGIN LINK */}

<div className="text-center text-sm text-white/50">

Už máš účet?

<a
href="/login"
className="text-green-400 ml-1"
>
Prihlásiť sa
</a>

</div>

</div>

)

}