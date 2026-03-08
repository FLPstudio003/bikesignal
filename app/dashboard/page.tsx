"use client"

import { useEffect, useState } from "react"
import { createClient } from "@supabase/supabase-js"
import {
  Bike,
  Activity,
  Flame,
  Trophy,
  Link2,
  CheckCircle
} from "lucide-react"

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  LabelList
} from "recharts"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function DashboardPage() {

  const [profile,setProfile] = useState<any>(null)
  const [rides,setRides] = useState<any[]>([])
  const [leaderboard,setLeaderboard] = useState<any[]>([])
  const [range,setRange] = useState("week")
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    init()
  },[])

  useEffect(()=>{
    loadLeaderboard()
  },[range])

  async function init(){

    await loadProfile()

    // ak je strava pripojena sprav sync
    await fetch("/api/strava/sync").catch(()=>{})

    await loadRides()
    await loadLeaderboard()

    setLoading(false)
  }

  async function loadProfile(){

    const { data:{user} } = await supabase.auth.getUser()
    if(!user) return

    const {data} = await supabase
      .from("profiles")
      .select("*")
      .eq("id",user.id)
      .single()

    setProfile(data)
  }

  async function loadRides(){

    try{

      const res = await fetch("/api/strava/rides")

      if(!res.ok){
        setRides([])
        return
      }

      const data = await res.json()

      setRides(data || [])

    }catch(e){

      console.log("rides error",e)
      setRides([])

    }

  }

  async function loadLeaderboard(){

    try{

      const res = await fetch(`/api/leaderboard?range=${range}`)

      if(!res.ok){
        setLeaderboard([])
        return
      }

      const data = await res.json()

      setLeaderboard(data || [])

    }catch(e){

      console.log("leaderboard error",e)
      setLeaderboard([])

    }

  }

  if(loading){

    return(
      <div className="pt-32 text-center text-neutral-400">
        Loading dashboard...
      </div>
    )

  }

  const name = profile?.full_name || "Rider"
  const avatar = name.charAt(0)

  const points = profile?.loyalty_points || 0
  const stravaConnected = profile?.strava_connected

  const totalKm = Math.round(
    rides.reduce((a,b)=>a+(b.distance||0),0)
  )

  /* LEVEL SYSTEM */

  const levels=[
    {level:"Bronze Rider",points:0},
    {level:"Silver Rider",points:200},
    {level:"Gold Rider",points:600},
    {level:"Legend Rider",points:1500}
  ]

  let current=levels[0]
  let next=levels[1]

  for(let i=0;i<levels.length;i++){

    if(points>=levels[i].points){

      current=levels[i]
      next=levels[i+1] || levels[i]

    }

  }

  const progress=
    ((points-current.points)/(next.points-current.points))*100

  /* WEEK GRAPH */

  const days=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]

  const weekly=days.map(day=>({
    day,
    km:0
  }))

  rides.forEach((r)=>{

    const d=new Date(r.start_date)

    const index=(d.getDay()+6)%7

    weekly[index].km+=Math.round(r.distance||0)

  })

  /* STREAK */

  function getStreak(){

    let streak=0

    const sorted=[...rides].sort(
      (a,b)=>
        new Date(b.start_date).getTime()-
        new Date(a.start_date).getTime()
    )

    let last:string|null=null

    for(const r of sorted){

      const d=new Date(r.start_date).toDateString()

      if(!last){

        streak++
        last=d
        continue

      }

      const prev = new Date(String(last))

      prev.setDate(prev.getDate()-1)

      if(prev.toDateString()===d){

        streak++
        last=d

      }else{

        break

      }

    }

    return streak

  }

  const streak=getStreak()

  return(

    <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 flex flex-col gap-10">

      {/* HEADER */}

      <div className="flex justify-between flex-wrap gap-6 items-center">

        <div className="flex gap-4 items-center">

          <div className="w-14 h-14 rounded-full bg-[#008000] flex items-center justify-center text-xl font-semibold">
            {avatar}
          </div>

          <div>

            <h1 className="text-xl font-semibold">{name}</h1>

            <p className="text-sm text-neutral-400">
              Level: {current.level}
            </p>

            <div className="w-56 h-2 bg-neutral-800 rounded mt-1">

              <div
                className="h-2 bg-[#008000] rounded transition-all"
                style={{width:`${progress}%`}}
              />

            </div>

            <p className="text-xs text-neutral-400 mt-1">
              {points} points • {next.points-points} to {next.level}
            </p>

          </div>

        </div>

        {/* STRAVA BUTTON */}

        {stravaConnected ?(

          <div className="flex items-center gap-2 text-green-500 font-medium">
            <CheckCircle size={18}/>
            Strava Connected
          </div>

        ):(
          <a
            href="/api/strava/connect"
            className="bg-orange-500 hover:bg-orange-600 px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm font-medium"
          >
            <Link2 size={16}/>
            Connect Strava
          </a>
        )}

      </div>

      {/* STATS */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        <StatCard
          title="Total Distance"
          value={`${totalKm} km`}
          icon={<Bike/>}
        />

        <StatCard
          title="Total Rides"
          value={rides.length}
          icon={<Activity/>}
        />

        <StatCard
          title="Ride Streak"
          value={`${streak} days`}
          icon={<Flame/>}
        />

        <StatCard
          title="Points"
          value={points}
          icon={<Trophy/>}
        />

      </div>

      {/* WEEK GRAPH */}

      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">

        <h3 className="mb-4 text-sm font-semibold text-neutral-300">
          Weekly Activity
        </h3>

        <div className="h-56">

          <ResponsiveContainer>

            <BarChart data={weekly}>

              <XAxis dataKey="day" stroke="#888"/>

              <Tooltip
                contentStyle={{
                  background:"#111",
                  border:"1px solid #333"
                }}
              />

              <Bar
                dataKey="km"
                fill="#008000"
                radius={[6,6,0,0]}
              >

                <LabelList
                  dataKey="km"
                  position="top"
                  fill="#22c55e"
                  fontSize={12}
                />

              </Bar>

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* LEADERBOARD */}

      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">

        <div className="flex justify-between items-center mb-6">

          <h3 className="text-sm font-semibold text-neutral-300">
            Leaderboard
          </h3>

          <div className="flex gap-2">

            <SwitchButton
              label="Week"
              value="week"
              range={range}
              setRange={setRange}
            />

            <SwitchButton
              label="Month"
              value="month"
              range={range}
              setRange={setRange}
            />

            <SwitchButton
              label="All"
              value="all"
              range={range}
              setRange={setRange}
            />

          </div>

        </div>

        <div className="flex flex-col gap-3">

          {leaderboard.map((r:any,i:number)=>(
            <LeaderboardRow
              key={i}
              rank={i+1}
              name={r.name}
              km={r.km}
            />
          ))}

        </div>

      </div>

    </div>

  )

}

/* COMPONENTS */

function StatCard({title,value,icon}:any){

  return(

    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 flex justify-between items-center">

      <div>

        <p className="text-xs text-neutral-400">
          {title}
        </p>

        <p className="text-lg font-semibold">
          {value}
        </p>

      </div>

      <div className="text-[#008000]">
        {icon}
      </div>

    </div>

  )

}

function LeaderboardRow({rank,name,km}:any){

  return(

    <div className="flex justify-between items-center py-2 border-b border-neutral-800 last:border-none">

      <div className="flex gap-3">

        <span className="text-yellow-400 font-semibold">
          #{rank}
        </span>

        <span>{name}</span>

      </div>

      <span className="text-[#008000]">
        {km} km
      </span>

    </div>

  )

}

function SwitchButton({label,value,range,setRange}:any){

  return(

    <button
      onClick={()=>setRange(value)}
      className={`px-3 py-1 rounded-md text-xs border ${
        range===value
          ?"bg-[#008000] text-white border-[#008000]"
          :"border-neutral-700 text-neutral-400"
      }`}
    >
      {label}
    </button>

  )

}