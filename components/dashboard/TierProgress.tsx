export default function TierProgress(){

const progress=40

return(

<div className="karta">

<div className="flex justify-between mb-2">

<span>Bronze Tier</span>

<span>40%</span>

</div>

<div className="w-full bg-[#111] h-3 rounded">

<div
className="bg-[#00ff66] h-3 rounded"
style={{width:`${progress}%`}}
/>

</div>

</div>

)

}