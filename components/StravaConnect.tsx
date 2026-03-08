"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

export default function StravaConnect() {

  const [connected, setConnected] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const checkConnection = async () => {

      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        setLoading(false)
        return
      }

      const { data } = await supabase
        .from("strava_tokens")
        .select("*")
        .eq("user_id", user.id)
        .single()

      if (data) {
        setConnected(true)
      }

      setLoading(false)
    }

    checkConnection()

  }, [])

  const connect = () => {
    window.location.href = "/api/strava/connect"
  }

  if (loading) {
    return null
  }

  return (

    <button
      onClick={!connected ? connect : undefined}
      className={
        connected
          ? "bg-green-500 text-black font-semibold px-6 py-3 rounded-full"
          : "bg-orange-500 hover:bg-orange-400 text-black font-semibold px-6 py-3 rounded-full transition"
      }
    >

      {connected ? "Strava prepojená ✓" : "Prepojiť so Strava"}

    </button>

  )
}