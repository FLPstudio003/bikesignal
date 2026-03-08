export default function BikeCard({bike}){

return(

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 hover:border-green-500 transition">

<div className="flex justify-between items-center mb-3">

<h3 className="font-semibold text-lg">
{bike.name}
</h3>

<span className="text-green-400 font-semibold">
{bike.km} km
</span>

</div>

<p className="text-sm text-neutral-400 mb-4">
{bike.type}
</p>

<div className="space-y-2 text-xs">

<div className="flex justify-between">
<span>Chain</span>
<span>{bike.chain}%</span>
</div>

<div className="w-full bg-neutral-800 rounded-full h-2">
<div className="bg-green-400 h-2 rounded-full" style={{width: bike.chain+"%"}}/>
</div>

<div className="flex justify-between">
<span>Brakes</span>
<span>{bike.brakes}%</span>
</div>

<div className="w-full bg-neutral-800 rounded-full h-2">
<div className="bg-yellow-400 h-2 rounded-full" style={{width: bike.brakes+"%"}}/>
</div>

</div>

</div>

)

}
