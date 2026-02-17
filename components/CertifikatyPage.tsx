"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import {
  BadgeCheck,
  ShieldCheck,
  Wrench,
  BookOpen,
  Settings,
  CheckCircle2,
  Layers,
  Target,
  ArrowRight,
  Star,
  Sparkles,
  Shield,
  ClipboardList,
  Award,
  Gauge,
  Factory,
} from "lucide-react";

/* ============================================================
   UTIL
============================================================ */

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

/* ============================================================
   SECTION WRAPPER
============================================================ */

function SectionShell({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cx("relative px-6", className)}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

/* ============================================================
   HERO RIGHT PANEL
============================================================ */

function HeroPanel() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/20 p-6 backdrop-blur-md">
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#00a000]/12 blur-3xl" />
      <div className="absolute -left-24 -bottom-24 h-56 w-56 rounded-full bg-white/8 blur-3xl" />

      <div className="relative space-y-4">
        <div className="text-xs text-white/60 uppercase tracking-wider">
          Official Standard
        </div>

        {[
          { label: "Manuály výrobcov", value: "aktuálne verzie" },
          { label: "Originálne diely", value: "OEM & approved" },
          { label: "Diagnostika", value: "factory tools" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center rounded-2xl border border-white/10 bg-black/25 px-4 py-3"
          >
            <span className="text-white/80">{item.label}</span>
            <span className="text-white/60 text-sm">{item.value}</span>
          </div>
        ))}

        <div className="rounded-2xl border border-[#00a000]/25 bg-[#00a000]/10 px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-white/85">
            <ShieldCheck className="h-4 w-4 text-[#00a000]" />
            Certifikovaný servis bez experimentov
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   CERT CARD
============================================================ */

function CertCard({
  title,
  image,
  description,
}: {
  title: string;
  image: string;
  description: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-black/20 p-8 backdrop-blur-md transition hover:-translate-y-2 hover:border-[#00a000]/60">

      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#00a000]/10 blur-3xl opacity-0 group-hover:opacity-100 transition" />

      <div className="relative space-y-6">
        <div className="flex justify-center">
          <Image
            src={image}
            alt={title}
            width={220}
            height={140}
            className="object-contain h-28 w-auto"
          />
        </div>

        <div className="text-center space-y-3">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-white/65 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function CertifikatyPage() {
  const certs = useMemo(
    () => [
      {
        title: "Shimano Service Center",
        image: "/cert1.png",
        description:
          "Oficiálne školenia, servisné postupy a diagnostické nástroje podľa štandardov Shimano.",
      },
      {
        title: "SRAM Certified",
        image: "/cert3.png",
        description:
          "Kompletný servis pohonu, brzdových systémov a elektroniky SRAM podľa výrobcu.",
      },
      {
        title: "RockShox Suspension",
        image: "/cert2.png",
        description:
          "Servis odpruženia vrátane tlmičov a vidlíc podľa oficiálnych manuálov.",
      },
    ],
    []
  );

  return (
    <div className="relative">

      {/* GLOBAL BACKDROP */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-[35%] top-[-5%] h-[520px] w-[980px] -rotate-12 rounded-[90px] bg-[#00a000]/10 blur-3xl" />
        <div className="absolute -right-[35%] top-[18%] h-[520px] w-[980px] rotate-12 rounded-[90px] bg-yellow-400/8 blur-3xl" />
        <div className="absolute left-[5%] top-[62%] h-[560px] w-[980px] -rotate-6 rounded-[90px] bg-white/5 blur-3xl" />
      </div>

      {/* HERO */}
      <section className="relative px-6 pt-32 pb-16">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

          <div>
            <FadeIn>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.02]">
                Certifikovaný{" "}
                <span className="text-[#00a000]">servis</span>{" "}
                bez kompromisov.
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-2xl">
                Certifikácia znamená prístup k originálnym dielom,
                technickým manuálom, pravidelným školeniam a
                špeciálnym diagnostickým nástrojom.
                Nerobíme experimenty. Robíme štandard.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/rezervacia"
                  className="rounded-2xl bg-[#00a000] px-8 py-4 font-semibold text-black hover:bg-green-600 transition"
                >
                  Rezervovať servis <ArrowRight className="inline ml-2 h-4 w-4" />
                </Link>

                <Link
                  href="/servis"
                  className="rounded-2xl border border-white/20 px-8 py-4 font-semibold text-white/80 hover:bg-white/5 transition"
                >
                  Pozrieť služby
                </Link>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <HeroPanel />
          </FadeIn>

        </div>
      </section>

      {/* CERTS */}
      <SectionShell className="py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {certs.map((cert, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <CertCard {...cert} />
            </FadeIn>
          ))}
        </div>
      </SectionShell>

      {/* WHY SECTION */}
      <SectionShell className="py-20">
        <FadeIn>
          <h2 className="text-4xl font-extrabold text-center">
            Prečo je to <span className="text-[#00a000]">dôležité?</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-8 text-white/70 text-lg max-w-3xl mx-auto text-center leading-relaxed">
            Certifikovaný servis znamená správne postupy,
            originálne diely, bezpečnosť a technickú podporu.
            Každý zásah má dôvod a presný proces.
          </p>
        </FadeIn>
      </SectionShell>

      {/* CTA */}
      <SectionShell className="py-20 pb-32 text-center">
        <FadeIn>
          <h3 className="text-3xl font-extrabold">
            Zver svoj bicykel do rúk odborníkom.
          </h3>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Link
            href="/rezervacia"
            className="inline-block mt-8 rounded-2xl bg-[#00a000] px-10 py-4 font-semibold text-black hover:bg-green-600 transition"
          >
            Rezervovať servis
          </Link>
        </FadeIn>
      </SectionShell>

    </div>
  );
}
