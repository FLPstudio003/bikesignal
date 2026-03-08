export default function RideChart(){

const data=[40,60,20,80,50,90,30]

return(

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">

<h2 className="text-xl font-bold mb-6">
Weekly Activity
</h2>

<div className="flex items-end justify-between h-40">

{data.map((value,i)=>(

<div key={i} className="flex flex-col items-center">

<div
className="w-8 bg-green-400 rounded-t"
style={{height:value+"px"}}
/>

<span className="text-xs text-neutral-500 mt-2">
{i+1}
</span>

</div>
))}

</div>

</div>

)

}
