export default function ProgressBar({value,max}:{value:number,max:number}){

const percent = (value/max)*100

return(

<div className="w-full bg-zinc-800 rounded-full h-4 overflow-hidden">

<div
className="h-4 rounded-full bg-gradient-to-r from-[#00a000] to-[#00ff66] shadow-[0_0_20px_rgba(0,255,100,0.5)] transition-all"
style={{width:`${percent}%`}}
/>

</div>

)

}