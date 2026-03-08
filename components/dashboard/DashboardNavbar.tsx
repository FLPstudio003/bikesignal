"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export default function DashboardNavbar() {
  const pathname = usePathname();

  const navLinks = useMemo(
    () => [
      { href: "/dashboard", label: "Prehľad" },
      { href: "/dashboard/garage", label: "Moja garáž" },
      { href: "/dashboard/rides", label: "Jazdy" },
      { href: "/dashboard/service", label: "Servis" },
      { href: "/dashboard/leaderboard", label: "Leaderboard" },
      { href: "/dashboard/profile", label: "Profil" },
    ],
    []
  );

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 h-20">

        {/* LOGO */}
        <Link href="/dashboard" className="flex items-center gap-3">
          <div className="relative h-10 w-10">
            <Image
              src="/landing_logo2.png"
              alt="Bike Signal"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="leading-tight">
            <div className="font-bold text-[#00ff66] tracking-wide">
              BIKE SIGNAL
            </div>

            <div className="text-xs text-white/50">
              <span className="text-yellow-400">ride</span> •{" "}
              <span className="text-orange-500">service</span> •{" "}
              <span className="text-red-600">garage</span>
            </div>
          </div>
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          {navLinks.map((link) => (
            <div key={link.href} className="relative">

              {isActive(link.href) && (
                <div className="absolute -inset-x-3 -inset-y-2 -skew-x-12 bg-[#00a000] rounded-md z-0 transition-all duration-300" />
              )}

              <Link
                href={link.href}
                className={`relative z-10 transition ${
                  isActive(link.href)
                    ? "text-black font-semibold"
                    : "hover:text-[#00ff66]"
                }`}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          <Link
            href="/home"
            className="hidden md:inline-flex rounded-full bg-[#00a000] px-6 py-2 text-sm font-semibold text-black hover:bg-green-500 transition"
          >
            Web
          </Link>

        </div>
      </div>

      {/* SPODNÁ FAREBNÁ HRANA */}
      <div className="h-[3px] w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600" />
    </header>
  );
}