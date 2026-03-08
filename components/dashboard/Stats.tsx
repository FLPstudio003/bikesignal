export default function Stats({stats}:any){

return(

<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

<Card label="Týždenné km" value={stats?.weeklyKm}/>
<Card label="Mesačné km" value={stats?.monthlyKm}/>
<Card label="Celkové km" value={stats?.totalKm}/>
<Card label="Počet jázd" value={stats?.totalRides}/>

</div>

)

}

function Card({label,value}:any){

return(

<div className="border border-white/10 rounded-xl p-6 bg-black/40">

<p className="text-neutral-400 text-sm">

{label}

</p>

<p className="text-3xl font-bold text-green-400 mt-2">

{value || 0}

</p>

</div>

)

}