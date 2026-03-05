"use client"

export default function DashboardHeader({user}:any){

return(

<header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md">

<div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-20">

<div>

<h1 className="text-2xl sm:text-3xl font-bold tracking-widest text-[#00a000]">
BIKE SIGNAL
</h1>

<p className="text-xs tracking-wider mt-1">

<span className="text-yellow-400">shop</span>
<span className="text-white/30 mx-2">•</span>
<span className="text-orange-500">service</span>
<span className="text-white/30 mx-2">•</span>
<span className="text-red-500">support</span>

</p>

</div>


<nav className="hidden md:flex gap-8 text-white/80 text-sm">

<a href="#overview">Prehľad</a>
<a href="#garage">Bicykle</a>
<a href="#rides">Jazdy</a>
<a href="#loyalty">Loyalty</a>
<a href="#profile">Profil</a>

</nav>


<div className="text-right">

<div className="text-[#00ff66] font-semibold">
Rider
</div>

<div className="text-white text-sm">
{user?.email}
</div>

</div>

</div>

<div className="h-[3px] w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600"/>

</header>

)

}