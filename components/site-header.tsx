"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = useMemo(
    () => [
      { href: "/home", label: "Domov" },
      { href: "/servis", label: "Servis" }, // dropdown (leto/zima)
      { href: "/pickup", label: "Dovoz / odvoz" },
      { href: "/prenajom", label: "Prenájom" }, // NEW
      { href: "/certifikaty", label: "Certifikáty" },
      { href: "/o-nas", label: "O nás" },
      { href: "/kontakt", label: "Kontakt" },
    ],
    []
  );

  const isActive = (href: string) => pathname === href;

  const isServisActive =
    pathname === "/servis" ||
    pathname.startsWith("/servis/") ||
    pathname.startsWith("/servis?");

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md">
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
              <span className="text-yellow-400">shop</span> •{" "}
              <span className="text-orange-500">service</span> •{" "}
              <span className="text-red-600">support</span>
            </div>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80 relative">
          {navLinks.map((link) => {
            // SERVIS dropdown
            if (link.href === "/servis") {
              return (
                <div key={link.href} className="relative group">
                  {/* ACTIVE BACKGROUND */}
                  {isServisActive && (
                    <div className="absolute -inset-x-3 -inset-y-2 -skew-x-12 bg-[#00a000] rounded-md z-0 transition-all duration-300" />
                  )}

                  {/* SERVIS LINK */}
                  <Link
                    href="/servis"
                    className={`relative z-10 transition duration-200 ${
                      isServisActive
                        ? "text-black font-semibold"
                        : "hover:text-[#00ff5f]"
                    }`}
                  >
                    Servis
                  </Link>

                  {/* HOVER BRIDGE (aby to “neodlepilo” hover pri prechode myšou) */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full h-3 w-44" />

                  {/* DROPDOWN */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+10px)] hidden group-hover:block z-50">
                    <div className="w-52 rounded-2xl border border-white/10 bg-black/90 backdrop-blur-md shadow-2xl overflow-hidden">
                      <Link
                        href="/servis?season=leto#sezona"
                        className="block px-5 py-3 text-white/85 hover:bg-white/5 transition"
                      >
                        Letná sezóna
                      </Link>
                      <Link
                        href="/servis?season=zima#sezona"
                        className="block px-5 py-3 text-white/85 hover:bg-white/5 transition"
                      >
                        Zimná sezóna
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

            // NORMAL LINKS
            return (
              <div key={link.href} className="relative">
                {isActive(link.href) && (
                  <div className="absolute -inset-x-3 -inset-y-2 -skew-x-12 bg-[#00a000] rounded-md z-0 transition-all duration-300" />
                )}

                <Link
                  href={link.href}
                  className={`relative z-10 transition duration-200 ${
                    isActive(link.href)
                      ? "text-black font-semibold"
                      : "hover:text-[#00ff5f]"
                  }`}
                >
                  {link.label}
                </Link>
              </div>
            );
          })}
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
            aria-label="Menu"
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
          isOpen ? "max-h-[650px]" : "max-h-0"
        }`}
      >
        <div className="bg-black border-t border-white/10 px-6 py-6 space-y-5 text-white/80">
          {/* SERVIS (mobile) */}
          <div className="space-y-3">
            <Link
              href="/servis"
              onClick={() => setIsOpen(false)}
              className={`block text-lg transition ${
                isServisActive
                  ? "text-[#00ff5f] font-semibold"
                  : "hover:text-[#00ff5f]"
              }`}
            >
              Servis
            </Link>

            <div className="pl-3 space-y-2">
              <Link
                href="/servis?season=leto#sezona"
                onClick={() => setIsOpen(false)}
                className="block text-base text-white/70 hover:text-[#00ff5f] transition"
              >
                Letná sezóna
              </Link>
              <Link
                href="/servis?season=zima#sezona"
                onClick={() => setIsOpen(false)}
                className="block text-base text-white/70 hover:text-[#00ff5f] transition"
              >
                Zimná sezóna
              </Link>
            </div>
          </div>

          {/* OTHER LINKS */}
          {navLinks
            .filter((x) => x.href !== "/servis")
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block text-lg transition ${
                  isActive(link.href)
                    ? "text-[#00ff5f] font-semibold"
                    : "hover:text-[#00ff5f]"
                }`}
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

      {/* 🔥 SPODNÁ FAREBNÁ HRANA */}
      <div className="h-[3px] w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600" />
    </header>
  );
}