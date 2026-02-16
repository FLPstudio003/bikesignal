"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/home", label: "Domov" },
    { href: "/servis", label: "Servis" },
    { href: "/pickup", label: "Dovoz / odvoz" },
    { href: "/certifikaty", label: "Certifikáty" },
    { href: "/o-nas", label: "O nás" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-20">

        {/* LOGO */}
        <Link href="/home" className="flex items-center gap-3">
          <div className="relative h-10 w-10">
            <Image
              src="/landing_logo2.png"
              alt="Bike Signal logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="leading-tight">
            <div className="font-bold text-[#008000] tracking-wide">
              BIKE SIGNAL
            </div>
            <div className="text-xs text-white/50">
              <span className="text-yellow-400">shop</span> • <span className="text-orange-500">service</span> • <span className="text-red-600">support</span>
            </div>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#008000] transition duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* CTA */}
          <Link
            href="/rezervacia"
            className="hidden md:inline-flex rounded-full bg-[#00a000] px-6 py-2 text-sm font-semibold text-black hover:bg-green-500 transition"
          >
            Rezervovať
          </Link>

          {/* HAMBURGER */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full border border-white/20 hover:border-[#00ff5f] transition"
          >
            <span
              className={`block h-0.5 w-5 bg-white transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-white my-1 transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-black border-t border-white/10 px-6 py-6 space-y-5 text-white/80">

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-lg hover:text-[#00ff5f] transition"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/rezervacia"
            onClick={() => setIsOpen(false)}
            className="block mt-4 text-center rounded-full bg-[#00a000] py-3 font-semibold text-black hover:bg-green-500 transition"
          >
            Rezervovať servis
          </Link>
        </div>
      </div>
    </header>
  );
}
