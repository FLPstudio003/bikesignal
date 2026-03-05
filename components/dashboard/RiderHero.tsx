"use client"

import TierBadge from "@/components/TierBadge"
import { getTier } from "@/lib/tier"

export default function RiderHero({ profile }: any) {

const totalKm = profile?.km || 0

// MOCK DATA (neskôr Strava)
const weekKm = 120
const monthKm = 480
const weeklyGoal = 150
const rideStreak = 4

const tier = getTier(totalKm)

const progress = Math.min((weekKm / weeklyGoal) * 100, 100)

return (

<section className="max-w-6xl mx-auto px-5 sm:px-8 pt-28 pb-14">

<div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-black/40 backdrop-blur-xl p-6 sm:p-10">

{/* BACKGROUND GLOW */}

<div className="absolute -left-32 -top-32 h-[360px] w-[360px] bg-orange-500/10 blur-3xl"/>
<div className="absolute -right-32 -bottom-32 h-[360px] w-[360px] bg-[#00ff66]/10 blur-3xl"/>

<div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

{/* LEFT */}

<div>

<h1 className="text-3xl sm:text-4xl font-bold text-white">
Rider
</h1>

<p className="text-white/50 text-sm mt-1 break-all">
{profile?.email}
</p>

<div className="mt-4">
<TierBadge tier={tier}/>
</div>

{/* STREAK */}

<div className="mt-6">

<div className="text-white/50 text-xs uppercase tracking-wider">
Ride streak
</div>

<div className="text-2xl sm:text-3xl font-bold text-orange-400">
🔥 {rideStreak} days
</div>

</div>

</div>


{/* RIGHT SIDE */}

<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">

{/* WEEK PROGRESS */}

<div className="flex flex-col items-center">

<div className="relative h-24 w-24 sm:h-28 sm:w-28">

<svg className="rotate-[-90deg]" viewBox="0 0 120 120">

<circle
cx="60"
cy="60"
r="52"
stroke="#222"
strokeWidth="10"
fill="none"
/>

<circle
cx="60"
cy="60"
r="52"
stroke="#00ff66"
strokeWidth="10"
fill="none"
strokeDasharray="327"
strokeDashoffset={327 - (327 * progress) / 100}
strokeLinecap="round"
/>

</svg>

<div className="absolute inset-0 flex flex-col items-center justify-center">

<div className="text-lg sm:text-xl font-bold text-white">
{weekKm}
</div>

<div className="text-[10px] text-white/50">
km
</div>

</div>

</div>

<div className="text-white/50 text-xs mt-2">
Týždeň
</div>

</div>


{/* MONTH */}

<div className="text-center">

<div className="text-white/50 text-xs uppercase">
Mesiac
</div>

<div className="text-2xl sm:text-3xl font-bold text-[#00ff66]">
{monthKm}
</div>

<div className="text-white/40 text-xs">
km
</div>

</div>


{/* TOTAL */}

<div className="text-center">

<div className="text-white/50 text-xs uppercase">
Celkom
</div>

<div className="text-2xl sm:text-3xl font-bold text-[#00ff66]">
{totalKm}
</div>

<div className="text-white/40 text-xs">
km
</div>

</div>

</div>

</div>

</div>

</section>

)
}