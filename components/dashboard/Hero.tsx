import LevelProgress from "./LevelProgress"

export default function Hero({profile,stats}:any){

return(

<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900 to-black p-10">

<h1 className="text-5xl font-bold">

{profile?.full_name}

</h1>

<p className="text-neutral-400 mt-1">

{profile?.email}

</p>

<LevelProgress totalKm={stats?.totalKm}/>

</div>

)
}