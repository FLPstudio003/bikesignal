"use client"

import DashboardNavbar from "@/components/dashboard/DashboardNavbar"

export default function Layout({
 children,
}: {
 children: React.ReactNode
}) {

 return (
  <div className="min-h-screen bg-black text-white">

   <DashboardNavbar />

   <div className="max-w-7xl mx-auto px-6 py-10">
    {children}
   </div>

  </div>
 )
}