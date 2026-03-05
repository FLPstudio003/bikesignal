"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Loader2 } from "lucide-react"

export default function LoginForm(){

const router = useRouter()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [show,setShow] = useState(false)
const [loading,setLoading] = useState(false)
const [error,setError] = useState("")

const login = async()=>{

setLoading(true)
setError("")

const {error} = await supabase.auth.signInWithPassword({
email,
password
})

if(error){

setError(error.message)
setLoading(false)
return

}

router.push("/dashboard")

}

return(

<div className="space-y-5">

{/* EMAIL */}

<input
type="email"
placeholder="Email"
className="w-full rounded-xl bg-black border border-white/10 px-4 py-3 text-white focus:border-green-400 outline-none"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

{/* PASSWORD */}

<div className="relative">

<input
type={show ? "text":"password"}
placeholder="Password"
className="w-full rounded-xl bg-black border border-white/10 px-4 py-3 text-white focus:border-green-400 outline-none"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button
onClick={()=>setShow(!show)}
className="absolute right-3 top-3 text-white/40"
>
{show ? <EyeOff size={18}/> : <Eye size={18}/>}
</button>

</div>

{/* ERROR */}

{error && (

<div className="text-red-400 text-sm">
{error}
</div>

)}

{/* BUTTON */}

<button
onClick={login}
disabled={loading}
className="w-full bg-green-500 hover:bg-green-400 text-black py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
>

{loading && <Loader2 className="animate-spin" size={18}/>}

Prihlásiť sa

</button>

</div>

)

}