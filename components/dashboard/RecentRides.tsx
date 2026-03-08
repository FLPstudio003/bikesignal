export default function RecentRides(){

const rides=[

{bike:"Canyon Aeroad",km:42,date:"Today"},
{bike:"Canyon Aeroad",km:28,date:"Yesterday"},
{bike:"Stumpjumper",km:63,date:"3 days ago"}

]

return(

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">

<h2 className="text-xl font-bold mb-6">
Recent rides
</h2>

<div className="space-y-4">

{rides.map((ride,i)=>(

<div key={i} className="flex justify-between bg-black/40 p-4 rounded-lg">

<div>

<p className="font-semibold">
{ride.bike}
</p>

<p className="text-xs text-neutral-400">
{ride.date}
</p>

</div>

<span className="text-green-400 font-semibold">
{ride.km} km
</span>

</div>

))}

</div>

</div>

)

}
