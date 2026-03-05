"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import {
  ShieldCheck,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
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
HERO PANEL
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
CERT MODAL
============================================================ */

function CertModal({
  image,
  title,
  onClose,
}: {
  image: string;
  title: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full"
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/70 hover:text-white"
        >
          <X size={28} />
        </button>

        <Image
          src={image}
          alt={title}
          width={2000}
          height={1500}
          className="object-contain w-full max-h-[90vh]"
        />
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
  onOpen,
}: {
  title: string;
  image: string;
  description: string;
  onOpen: () => void;
}) {
  return (
    <div
      onClick={onOpen}
      className="cursor-zoom-in group relative h-full overflow-hidden rounded-[32px] border border-white/10 bg-black/20 p-8 backdrop-blur-md transition hover:-translate-y-2 hover:border-[#00a000]/60"
    >
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#00a000]/10 blur-3xl opacity-0 group-hover:opacity-100 transition" />

      <div className="flex justify-center">
        <div className="relative w-full max-w-[320px] aspect-[4/3] rounded-2xl border border-white/10 bg-black/25 overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={2000}
            height={1500}
            className="object-contain p-4 w-full h-full"
          />
        </div>
      </div>

      <div className="mt-6 text-center space-y-3">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-white/65 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

/* ============================================================
MAIN PAGE
============================================================ */

export default function CertifikatyPage() {
  const certs = useMemo(
    () => [
      {
        title: "Bosch eBike Specialist",
        image: "/cert1.png",
        description:
          "Oficiálne školenia, servisné postupy a diagnostické nástroje podľa štandardov Shimano.",
      },
      {
        title: "ROCKSHOX",
        image: "/cart2.png",
        description:
          "Kompletný servis pohonu, brzdových systémov a elektroniky podľa výrobcu.",
      },
      {
        title: "Certifikát FAZUE",
        image: "/cert3.png",
        description:
          "certifikát motorovej jednotky FAZUA .",
      },
      {
        title: "ROCKSHOX",
        image: "/cert4.png",
        description: "Kompletný servis pohonu, brzdových systémov a elektroniky podľa výrobcu.",
      },
      {
        title: "e-bike systém Sport Drive",
        image: "/cert6.png",
        description: "odborné technické školenie zamerané na e-bike systém Sport Drive, jeho konštrukciu, funkčnosť, diagnostiku a servisné postupy.",
      },
      {
        title: "ROCKSHOX",
        image: "/cert5.png",
        description: "Kompletný servis pohonu, brzdových systémov a elektroniky podľa výrobcu.",
      },
      {
        title: "e-bike systém Sport Drive",
        image: "/cert7.png",
        description: "odborné technické školenie zamerané na e-bike systém Sport Drive, jeho konštrukciu, funkčnosť, diagnostiku a servisné postupy.",
      },
    ],
    []
  );

  const [modal, setModal] = useState<null | {
    image: string;
    title: string;
  }>(null);

  const trackRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;

    const amount = el.offsetWidth * 0.9;

    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full overflow-x-hidden">
      {modal && (
        <CertModal
          image={modal.image}
          title={modal.title}
          onClose={() => setModal(null)}
        />
      )}

      {/* HERO */}

      <section className="relative px-6 pt-32 pb-16">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <FadeIn>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.02]">
                Certifikovaný <span className="text-[#00a000]">servis</span>{" "}
                bez kompromisov.
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-2xl">
                Certifikácia znamená prístup k originálnym dielom,
                technickým manuálom, pravidelným školeniam a špeciálnym
                diagnostickým nástrojom.
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
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs text-white/50 uppercase tracking-wider">
              Certifikáty & školenia
            </div>

            <h2 className="mt-2 text-3xl font-extrabold">
              Oficiálne <span className="text-[#00a000]">štandardy</span>
            </h2>
          </div>

          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="h-11 w-11 flex items-center justify-center rounded-2xl border border-white/20"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={() => scroll("right")}
              className="h-11 w-11 flex items-center justify-center rounded-2xl border border-white/20"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6
          [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {certs.map((cert, i) => (
            <div
              key={i}
              className="snap-start w-[85vw] sm:w-[45%] lg:w-[31%] flex-shrink-0"
            >
              <FadeIn delay={i * 0.05}>
                <CertCard
                  {...cert}
                  onOpen={() =>
                    setModal({
                      image: cert.image,
                      title: cert.title,
                    })
                  }
                />
              </FadeIn>
            </div>
          ))}
        </div>
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