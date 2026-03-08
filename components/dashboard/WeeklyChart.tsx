export default function WeeklyChart({rides}:any){

if(!rides) return null

const days = [0,0,0,0,0,0,0]

rides.forEach((ride:any)=>{

const d = new Date(ride.start_date).getDay()

days[d] += ride.distance / 1000

})

return(

<div className="border border-white/10 rounded-xl p-6 bg-black/40">

<h2 className="font-semibold mb-6">
Weekly activity
</h2>

<div className="flex items-end gap-6 h-40">

{days.map((km,i)=>(
<div key={i} className="flex-1 flex flex-col justify-end">

<div
className="bg-green-400 rounded"
style={{height:`${km*4}px`}}
/>

</div>
))}

</div>

</div>

)
}