export default function ServiceStatus(){

const parts=[

{name:"Chain",value:60},
{name:"Brakes",value:80},
{name:"Cassette",value:50},
{name:"Tires",value:70}

]

return(

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">

<h2 className="text-xl font-bold mb-6">
Service status
</h2>

<div className="space-y-4">

{parts.map((part,i)=>(

<div key={i}>

<div className="flex justify-between text-sm mb-1">
<span>{part.name}</span>
<span>{part.value}%</span>
</div>

<div className="w-full bg-neutral-800 rounded-full h-2">
<div
className="bg-green-400 h-2 rounded-full"
style={{width:part.value+"%"}}
/>
</div>

</div>

))}

</div>

</div>

)

}
