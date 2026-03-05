export default function TierBadge({tier}:{tier:string}){

const colors:any = {

Bronze:"bg-orange-600",
Silver:"bg-gray-400",
Gold:"bg-yellow-400",
Platinum:"bg-blue-400",
Diamond:"bg-purple-500"

}

return(

<div className={`

inline-flex
items-center
gap-2
px-6
py-3
rounded-full
font-bold
text-black
shadow-lg
shadow-orange-500/30
${colors[tier]}

`}>

🏅 {tier} Rider

</div>

)

}