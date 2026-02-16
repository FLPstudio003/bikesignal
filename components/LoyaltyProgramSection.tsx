"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function LoyaltyProgramSection() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">

      {/* Jemný zelený glow pod sekciou */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[0px] h-[0px] bg-green-600/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-4">

          {/* 1 */}
          <FadeIn>
            <div className="group relative rounded-3xl border border-white/10 bg-black/60 backdrop-blur-sm p-8 transition hover:border-[#00a000]/60 hover:shadow-[0_0_40px_rgba(0,255,95,0.25)]">

              <div className="text-4xl mb-6 text-[#008000]">01</div>

              <h3 className="font-semibold text-lg mb-3">
                <span className="text-[#008000]">Zaregistruješ sa</span>
              </h3>

              <p className="text-white/60 text-sm leading-relaxed">
                Vytvoríš si účet zdarma a prepojíš ho so svojím bicyklom.
              </p>
            </div>
          </FadeIn>

          {/* 2 */}
          <FadeIn delay={0.1}>
            <div className="group relative rounded-3xl border border-white/10 bg-black/60 backdrop-blur-sm p-8 transition hover:border-[#00a000]/60 hover:shadow-[0_0_40px_rgba(0,255,95,0.25)]">

              <div className="text-4xl mb-6 text-yellow-400">02</div>

              <h3 className="font-semibold text-lg mb-3">
                <span className="text-yellow-400">Jazdíš a zbieraš km</span>
              </h3>

              <p className="text-white/60 text-sm leading-relaxed">
                Kilometre sa počítajú (napr. cez Stravu) a systém sleduje servisné intervaly.
              </p>
            </div>
          </FadeIn>

          {/* 3 */}
          <FadeIn delay={0.2}>
            <div className="group relative rounded-3xl border border-white/10 bg-black/60 backdrop-blur-sm p-8 transition hover:border-[#00a000]/60 hover:shadow-[0_0_40px_rgba(0,255,95,0.25)]">

              <div className="text-4xl mb-6 text-orange-500">03</div>

              <h3 className="font-semibold text-lg mb-3">
                <span className="text-orange-500">Získavaš výhody</span>
              </h3>

              <p className="text-white/60 text-sm leading-relaxed">
                Vernostné zľavy, prioritné termíny a bonusy za aktivitu.
              </p>
            </div>
          </FadeIn>

          {/* 4 */}
          <FadeIn delay={0.3}>
            <div className="group relative rounded-3xl border border-white/10 bg-black/60 backdrop-blur-sm p-8 transition hover:border-[#00a000]/60 hover:shadow-[0_0_40px_rgba(0,255,95,0.25)]">

              <div className="text-4xl mb-6 text-red-600">04</div>

              <h3 className="font-semibold text-lg mb-3">
                <span className="text-red-600">Servis bez stresu</span>
              </h3>

              <p className="text-white/60 text-sm leading-relaxed">
                Dostaneš notifikáciu skôr než vznikne problém.
              </p>
            </div>
          </FadeIn>

        </div>

        {/* CTA */}
        <FadeIn delay={0.4}>
          <div className="mt-16 text-center">
            <Link
              href="/registracia"
              className="inline-flex items-center justify-center rounded-full bg-[#00a000] text-black px-10 py-4 font-semibold hover:bg-green-600 transition"
            >
              Vytvoriť účet zdarma
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
