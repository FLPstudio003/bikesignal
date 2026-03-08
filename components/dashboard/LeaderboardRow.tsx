export default function LeaderboardRow({rank,name,km}:{rank:number,name:string,km:number}){

return(

<div className="row">

<div className="flex gap-4">

<span className="rank">
#{rank}
</span>

<span>
{name}
</span>

</div>

<div className="text-[#00ff66] font-semibold">
{km} km
</div>

</div>

)

}