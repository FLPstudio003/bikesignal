"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const nav = [
    { name: "Prehľad", href: "/dashboard" },
    { name: "Bicykle", href: "/dashboard/bikes" },
    { name: "Jazdy", href: "/dashboard/rides" },
    { name: "Loyalty", href: "/dashboard/loyalty" },
    { name: "Profil", href: "/dashboard/profile" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">

      <header className="border-b border-neutral-800 bg-black sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

          <h1 className="text-xl font-bold text-green-400">
            BIKE SIGNAL
          </h1>

          <nav className="flex gap-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition ${
                  pathname === item.href
                    ? "text-green-400"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        {children}
      </main>

    </div>
  )
}