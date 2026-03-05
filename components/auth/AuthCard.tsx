"use client"

export default function AuthCard({
title,
subtitle,
children
}:any){

return(

<div className="min-h-screen flex items-center justify-center bg-black px-6">

<div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-orange-500/10 blur-3xl"/>

<div className="relative w-full max-w-md">

<div className="rounded-3xl border border-white/10 bg-gradient-to-br from-black to-neutral-900 backdrop-blur-xl p-10 shadow-2xl">

<h1 className="text-3xl font-bold text-white mb-2">
{title}
</h1>

<p className="text-white/50 mb-8">
{subtitle}
</p>

{children}

</div>

</div>

</div>

)

}