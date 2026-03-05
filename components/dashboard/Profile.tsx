import TierBadge from "@/components/TierBadge"
import ProgressBar from "@/components/ProgressBar"

import {getTier,getNextTierKm} from "@/lib/tier"

export default function Profile({profile}:any){

const km = profile?.km || 0

const tier = getTier(km)

const nextTier = getNextTierKm(km)

const kmToNext = nextTier ? nextTier - km : 0

// simulácia servisného intervalu
const serviceInterval = 1000

const lastServiceKm = profile?.last_service_km || 0

const nextService = serviceInterval - (km - lastServiceKm)

return(

<section id="profile" className="max-w-6xl mx-auto py-20">

<h2 className="text-3xl font-bold text-white mb-8">
Profil ridera
</h2>

<div className="bg-zinc-900 p-10 rounded-3xl space-y-8">

{/* USER */}

<div>

<div className="text-white text-xl font-semibold">
{profile?.email}
</div>

<div className="mt-3">
<TierBadge tier={tier}/>
</div>

</div>

{/* STATS GRID */}

<div className="grid md:grid-cols-3 gap-6">

{/* KM */}

<div className="bg-black/40 p-6 rounded-2xl">

<div className="text-white/60 text-sm">
Najazdené km
</div>

<div className="text-3xl text-white font-bold">
{km}
</div>

</div>

{/* NEXT LEVEL */}

<div className="bg-black/40 p-6 rounded-2xl">

<div className="text-white/60 text-sm">
Do ďalšej úrovne
</div>

<div className="text-3xl text-white font-bold">
{kmToNext} km
</div>

</div>

{/* SERVICE */}

<div className="bg-black/40 p-6 rounded-2xl">

<div className="text-white/60 text-sm">
Najbližší servis
</div>

<div className="text-3xl text-white font-bold">
{nextService} km
</div>

</div>

</div>

{/* PROGRESS */}

<div>

<div className="text-white/60 mb-2">
Progress do ďalšieho tieru
</div>

<ProgressBar
value={km}
max={nextTier || km}
/>

</div>

{/* STRAVA */}

<div className="flex items-center justify-between bg-black/40 p-6 rounded-2xl">

<div>

<div className="text-white font-semibold">
Strava integrácia
</div>

<div className="text-white/60 text-sm">
Synchronizuj jazdy a kilometre automaticky
</div>

</div>

<button className="bg-[#fc4c02] hover:bg-orange-600 transition px-6 py-3 rounded-xl text-white font-semibold">

Prepojiť Strava

</button>

</div>

</div>

</section>

)

}