export default function WeeklyGoal({stats}:any){

const goal = 200

const progress = Math.min(
((stats?.weeklyKm || 0)/goal)*100,
100
)

return(

<div className="border border-white/10 rounded-xl p-6 bg-black/40">

<h2 className="font-semibold">

Weekly goal

</h2>

<p className="text-3xl font-bold text-green-400 mt-3">

{stats?.weeklyKm || 0} km

</p>

<div className="w-full bg-neutral-800 h-2 rounded mt-4">

<div
className="bg-green-400 h-2 rounded"
style={{width:`${progress}%`}}
/>

</div>

</div>

)
}