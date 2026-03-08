export default function LevelProgress({totalKm}:any){

const levels = [
{ name:"Bronze", km:0 },
{ name:"Silver", km:500 },
{ name:"Gold", km:2000 },
{ name:"Platinum", km:5000 },
{ name:"Legend", km:10000 }
]

let current = levels[0]
let next = levels[1]

for(let i=0;i<levels.length;i++){

if(totalKm >= levels[i].km){

current = levels[i]
next = levels[i+1] || levels[i]

}

}

const progress = Math.min(
((totalKm-current.km)/(next.km-current.km))*100,
100
)

return(

<div className="mt-6">

<div className="flex items-center gap-4">

<div className="px-4 py-2 rounded-full bg-green-500/20 text-green-400">

{current.name} Rider

</div>

<div className="text-sm text-neutral-400">

{totalKm} / {next.km} km

</div>

</div>

<div className="w-full h-2 bg-neutral-800 rounded mt-3">

<div
className="bg-green-400 h-2 rounded"
style={{width:`${progress}%`}}
/>

</div>

</div>

)
}