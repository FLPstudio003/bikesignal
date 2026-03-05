"use client"

import { motion } from "framer-motion"
import { Bike, Trophy, Activity, Zap, Wrench, TrendingUp } from "lucide-react"
import TierBadge from "@/components/TierBadge"
import { getTier, getMultiplier } from "@/lib/tier"

export default function Overview({ profile }: any) {

  const km = profile?.km || 0
  const points = profile?.loyalty_points || 50

  const tier = getTier(km)
  const multiplier = getMultiplier(tier)

  const weeklyKm = 120
  const monthlyKm = 480
  const nextService = 230

  return (

    <section id="overview" className="max-w-6xl mx-auto px-6 py-16">

      {/* TITLE */}

      <div className="mb-10">

        <h2 className="text-4xl font-bold text-white">
          Prehľad
        </h2>

        <p className="text-white/40 mt-2">
          Tvoj aktuálny progres v BikeSignal systéme
        </p>

      </div>


      {/* GRID */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">


        {/* LEFT BIG CARD */}

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="col-span-2 rounded-3xl border border-white/10 bg-gradient-to-br from-black to-neutral-900 p-8 relative overflow-hidden"
        >

          <div className="absolute -top-20 -left-20 w-80 h-80 bg-green-500/10 blur-3xl"/>

          <div className="flex items-center justify-between">

            <div>

              <div className="text-white/50 text-sm">
                Najazdené kilometre
              </div>

              <div className="text-5xl font-bold text-white mt-2">
                {km}
              </div>

              <div className="text-white/40 text-sm mt-1">
                celkovo
              </div>

            </div>

            <div className="bg-green-500/10 p-4 rounded-2xl">
              <Activity size={28} className="text-green-400"/>
            </div>

          </div>

          {/* MINI STATS */}

          <div className="grid grid-cols-2 gap-6 mt-10">

            <div className="rounded-xl bg-black/50 border border-white/5 p-5">

              <div className="text-white/40 text-xs uppercase">
                Týždeň
              </div>

              <div className="text-2xl font-bold text-[#008000] mt-1">
                {weeklyKm} km
              </div>

            </div>

            <div className="rounded-xl bg-black/50 border border-white/5 p-5">

              <div className="text-white/40 text-xs uppercase">
                Mesiac
              </div>

              <div className="text-2xl font-bold text-[#008000] mt-1">
                {monthlyKm} km
              </div>

            </div>

          </div>

        </motion.div>



        {/* TIER CARD */}

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-black to-neutral-900 p-8 relative overflow-hidden"
        >

          <div className="absolute -top-20 -right-20 w-72 h-72 bg-orange-500/10 blur-3xl"/>

          <div className="flex items-center justify-between">

            <div>

              <div className="text-white/40 text-sm">
                Rider Tier
              </div>

              <div className="mt-3">
                <TierBadge tier={tier}/>
              </div>

            </div>

            <div className="bg-orange-500/10 p-4 rounded-xl">
              <Trophy className="text-orange-400"/>
            </div>

          </div>

          {/* BONUS */}

          <div className="mt-10">

            <div className="text-white/40 text-sm">
              Bonus bodov
            </div>

            <div className="text-3xl font-bold text-white mt-2">
              {multiplier}x
            </div>

          </div>

        </motion.div>



        {/* LOYALTY */}

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-black to-neutral-900 p-8 relative overflow-hidden"
        >

          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-yellow-500/10 blur-3xl"/>

          <div className="flex items-center justify-between">

            <div>

              <div className="text-white/40 text-sm">
                Loyalty body
              </div>

              <div className="text-4xl font-bold text-yellow-400 mt-2">
                {points}
              </div>

            </div>

            <div className="bg-yellow-500/10 p-4 rounded-xl">
              <Zap className="text-yellow-400"/>
            </div>

          </div>

        </motion.div>



        {/* SERVICE PREDICTION */}

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-black to-neutral-900 p-8 relative overflow-hidden"
        >

          <div className="absolute -top-20 -right-20 w-72 h-72 bg-red-500/10 blur-3xl"/>

          <div className="flex items-center justify-between">

            <div>

              <div className="text-white/40 text-sm">
                Najbližší servis
              </div>

              <div className="text-3xl font-bold text-orange-500 mt-2">
                {nextService} km
              </div>

            </div>

            <div className="bg-red-500/10 p-4 rounded-xl">
              <Wrench className="text-red-400"/>
            </div>

          </div>

        </motion.div>



        {/* CHALLENGE */}

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-black to-neutral-900 p-8 relative overflow-hidden"
        >

          <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#008000]/10 blur-3xl"/>

          <div className="flex items-center justify-between">

            <div>

              <div className="text-white/40 text-sm">
                Weekly challenge
              </div>

              <div className="text-3xl font-bold text-red-600 mt-2">
                150 km
              </div>

            </div>

            <div className="bg-blue-500/10 p-4 rounded-xl">
              <TrendingUp className="text-blue-400"/>
            </div>

          </div>

        </motion.div>

      </div>

    </section>

  )

}