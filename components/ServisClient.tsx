"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import {
  Wrench,
  Zap,
  ShieldCheck,
  Clock3,
  CalendarDays,
  Route,
  PackageCheck,
  ArrowRight,
  CheckCircle2,
  Plus,
  Minus,
  Bike,
  Snowflake,
  Settings,
  Gauge,
  Sparkles,
  Search,
  BadgeCheck,
  Timer,
  MapPin,
  Truck,
  Phone,
  ChevronRight,
  Star,
  Info,
  Layers,
  Droplets,
  Disc3,
  RefreshCw,
  ClipboardList,
  Target,
  Flame,
} from "lucide-react";

type Season = "leto" | "zima";

type ServiceItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  details: string[];
  note?: string;
};

type PackageItem = {
  name: string;
  price: string;
  highlight?: boolean;
  short: string;
  included: string[];
  time: string;
  idealFor: string;
};

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

/** Transparent sekcie – pozadie riadi PageShell */
function SectionShell({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cx("relative px-6", className)}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

function Pill({
  icon,
  label,
}: {
  icon?: React.ReactNode;
  label: string;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-4 py-2 text-xs text-white/70 backdrop-blur-md">
      {icon ? <span className="text-[#00a000]">{icon}</span> : null}
      <span>{label}</span>
    </div>
  );
}

function StatMini({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/15 px-4 py-3 backdrop-blur-md">
      <div className="flex items-center gap-2 text-white/70 text-sm">
        <span className="text-[#00a000]">{icon}</span>
        <span className="truncate">{title}</span>
      </div>
      <div className="mt-1 font-semibold text-white">{value}</div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/20 p-6 sm:p-7 backdrop-blur-md transition hover:border-[#00a000]/60">
      {/* motion diagonals */}
      <div className="pointer-events-none absolute -right-20 -top-14 h-40 w-56 rotate-12 bg-[#00a000]/10 blur-2xl transition group-hover:bg-[#00a000]/16" />
      <div className="pointer-events-none absolute -left-24 -bottom-20 h-48 w-72 -rotate-12 bg-white/5 blur-2xl" />

      <div className="relative flex items-start gap-4">
        <div className="rounded-2xl border border-[#00a000]/25 bg-[#00a000]/10 p-3">
          <div className="text-[#00a000]">{icon}</div>
        </div>

        <div className="min-w-0">
          <div className="text-base font-semibold">{title}</div>
          <div className="mt-2 text-sm text-white/65 leading-relaxed">{desc}</div>
        </div>
      </div>
    </div>
  );
}

function DiagonalSwitch({
  season,
  setSeason,
}: {
  season: Season;
  setSeason: (s: Season) => void;
}) {
  return (
    <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3 sm:gap-5">
      <button
        type="button"
        onClick={() => setSeason("leto")}
        className={cx(
          "w-full sm:w-auto px-6 sm:px-10 py-4 font-semibold transition transform -skew-x-12 border rounded-2xl",
          season === "leto"
            ? "bg-[#00a000] text-black border-[#00a000] scale-[1.02]"
            : "bg-black/20 text-white/80 border-white/10 hover:bg-white/5"
        )}
      >
        <span className="flex items-center justify-center gap-2 skew-x-12">
          <Bike className="h-4 w-4" />
          LETNÁ SEZÓNA
        </span>
      </button>

      <button
        type="button"
        onClick={() => setSeason("zima")}
        className={cx(
          "w-full sm:w-auto px-6 sm:px-10 py-4 font-semibold transition transform -skew-x-12 border rounded-2xl",
          season === "zima"
            ? "bg-red-500 text-black border-red-500 scale-[1.02]"
            : "bg-black/20 text-white/80 border-white/10 hover:bg-white/5"
        )}
      >
        <span className="flex items-center justify-center gap-2 skew-x-12">
          <Snowflake className="h-4 w-4" />
          ZIMNÁ SEZÓNA
        </span>
      </button>
    </div>
  );
}

function TagPills({ tags }: { tags: string[] }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {tags.map((t, i) => (
        <span
          key={`${t}-${i}`}
          className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function ServiceAccordionCard({
  item,
  index,
  open,
  setOpen,
  accent,
}: {
  item: ServiceItem;
  index: number;
  open: number | null;
  setOpen: (v: number | null) => void;
  accent: "green" | "red";
}) {
  const isOpen = open === index;
  const accentClass =
    accent === "green"
      ? "border-[#00a000]/35 bg-[#00a000]/8 text-[#00a000]"
      : "border-red-500/35 bg-red-500/10 text-red-400";

  return (
    <div className="rounded-[28px] border border-white/10 bg-black/20 backdrop-blur-md overflow-hidden transition hover:border-white/20">
      <button
        type="button"
        onClick={() => setOpen(isOpen ? null : index)}
        className="w-full px-5 sm:px-8 py-5 sm:py-6 flex items-center justify-between text-left gap-4"
      >
        <div className="flex items-start gap-4 min-w-0">
          <div className={cx("shrink-0 rounded-2xl border p-3", accentClass)}>
            {item.icon}
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <div className="text-lg sm:text-xl font-semibold truncate">
                {item.title}
              </div>
              <span className="hidden sm:inline text-white/35">•</span>
              <div className="hidden sm:block text-white/60 text-sm truncate">
                {item.description}
              </div>
            </div>

            <div className="sm:hidden text-white/60 text-sm mt-1">
              {item.description}
            </div>

            <TagPills tags={item.tags} />
          </div>
        </div>

        <div className="shrink-0 text-[#00a000]">
          {isOpen ? (
            <Minus className="h-7 w-7" />
          ) : (
            <Plus className="h-7 w-7" />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="px-5 sm:px-8 pb-7 pt-2 border-t border-white/10">
          <div className="grid gap-3">
            {item.details.map((d, i) => (
              <div key={i} className="flex gap-3 text-white/75 text-sm">
                <CheckCircle2 className="h-4 w-4 text-[#00a000] mt-0.5 shrink-0" />
                <span>{d}</span>
              </div>
            ))}
          </div>

          {item.note ? (
            <div className="mt-5 rounded-2xl border border-white/10 bg-black/25 p-4 text-sm text-white/70">
              <div className="flex gap-2">
                <Info className="h-4 w-4 text-[#00a000] mt-0.5" />
                <span>{item.note}</span>
              </div>
            </div>
          ) : null}

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/rezervacia"
              className="inline-flex items-center justify-center rounded-2xl bg-[#00a000] px-7 py-3 font-semibold text-black transition hover:bg-green-600"
            >
              Rezervovať termín <ArrowRight className="h-4 w-4 ml-2" />
            </Link>

            <Link
              href="/pickup"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-black/20 px-7 py-3 font-semibold text-white/85 transition hover:bg-white/5"
            >
              Dovoz / odvoz <Truck className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function PackageCard({ item }: { item: PackageItem }) {
  return (
    <div
      className={cx(
        "relative overflow-hidden rounded-[32px] border backdrop-blur-md transition hover:-translate-y-2",
        item.highlight
          ? "border-[#00a000] bg-[#00a000]/10"
          : "border-white/10 bg-black/20"
      )}
    >
      {/* diagonal vibe */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#00a000]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-white/8 blur-3xl" />

      <div className="relative p-7 sm:p-10">
        {item.highlight ? (
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00a000]/25 bg-[#00a000]/10 px-4 py-2 text-xs font-bold text-[#00ff66] uppercase tracking-wider">
            <Star className="h-4 w-4" />
            Najpopulárnejší
          </div>
        ) : (
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-white/65">
            <BadgeCheck className="h-4 w-4 text-[#00a000]" />
            Balík
          </div>
        )}

        <div className="text-xl sm:text-2xl font-bold">{item.name}</div>

        <div className="mt-5 text-5xl font-extrabold text-[#00ff66] drop-shadow-[0_0_25px_rgba(0,255,100,0.25)]">
          {item.price}
        </div>

        <p className="mt-4 text-white/65">{item.short}</p>

        <div className="mt-6 grid gap-2 text-sm text-white/75">
          <div className="flex items-center gap-2">
            <Timer className="h-4 w-4 text-[#00a000]" />
            <span className="text-white/60">Čas:</span>
            <span className="font-semibold text-white">{item.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-[#00a000]" />
            <span className="text-white/60">Ideálne pre:</span>
            <span className="font-semibold text-white">{item.idealFor}</span>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
          <div className="text-xs uppercase tracking-wider text-white/50">
            V balíku
          </div>
          <div className="mt-3 space-y-2">
            {item.included.map((x, i) => (
              <div key={i} className="flex gap-2 text-sm text-white/80">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#00a000] shrink-0" />
                <span>{x}</span>
              </div>
            ))}
          </div>
        </div>

        <Link
          href="/rezervacia"
          className={cx(
            "mt-7 inline-flex w-full items-center justify-center rounded-2xl px-7 py-3 font-semibold transition",
            item.highlight
              ? "bg-[#00a000] text-black hover:bg-green-600"
              : "border border-white/15 bg-black/20 text-white/85 hover:bg-white/5"
          )}
        >
          Vybrať balíček <ChevronRight className="h-4 w-4 ml-2" />
        </Link>
      </div>
    </div>
  );
}

function ProcessStep({
  index,
  title,
  desc,
  icon,
}: {
  index: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="relative grid gap-5 md:grid-cols-[140px_1fr] items-start">
      <div className="relative">
        <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 px-4 py-3 backdrop-blur-md">
          <div className="text-[#00a000]">{icon}</div>
          <div className="font-bold text-white">{index}</div>
        </div>
        <div className="hidden md:block absolute left-7 top-14 h-[calc(100%-10px)] w-px bg-gradient-to-b from-[#00a000]/60 via-white/10 to-transparent" />
      </div>

      <div className="rounded-3xl border border-white/10 bg-black/20 p-6 sm:p-7 backdrop-blur-md">
        <div className="text-lg font-semibold">{title}</div>
        <div className="mt-2 text-sm text-white/65 leading-relaxed">{desc}</div>
      </div>
    </div>
  );
}

function FAQItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/20 backdrop-blur-md overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left px-6 py-5"
      >
        <div className="font-semibold">{q}</div>
        <div className="text-[#00a000]">{open ? <Minus /> : <Plus />}</div>
      </button>

      {open ? (
        <div className="px-6 pb-6 text-sm text-white/70 leading-relaxed border-t border-white/10">
          {a}
        </div>
      ) : null}
    </div>
  );
}

export default function ServisPage() {
  const [season, setSeason] = useState<Season>("leto");
  const [open, setOpen] = useState<number | null>(0);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const packages: PackageItem[] = useMemo(
    () => [
      {
        name: "Malý servis",
        price: "35€",
        short:
          "Rýchla kontrola + nastavenie. Keď chceš mať bike „ready“ bez zbytočného rozoberania.",
        included: [
          "Kontrola bezpečnosti (kritické body)",
          "Nastavenie bŕzd a radenia",
          "Doťah + kontrola vôle",
          "Kontrola tlakov + rýchly audit",
        ],
        time: "45–60 min",
        idealFor: "mestský / hobby bike",
      },
      {
        name: "Stredný servis",
        price: "75€",
        short:
          "Najlepší pomer cena/výkon. Kompletné nastavenie + čistenie pohonu. Reálne cítiť rozdiel.",
        included: [
          "Všetko z Malého servisu",
          "Čistenie + mazanie pohonu",
          "Kontrola centrovania / výplet",
          "Kontrola ložísk (hlavko / stred / náboje)",
        ],
        time: "1.5–2.5 h",
        idealFor: "trail / pravidelné jazdenie",
        highlight: true,
      },
      {
        name: "Veľký servis",
        price: "120€",
        short:
          "Keď chceš reset. Detailná diagnostika, rozborka, servis hlavných uzlov – bez kompromisov.",
        included: [
          "Všetko zo Stredného servisu",
          "Detailná diagnostika komponentov",
          "Hĺbková údržba + výmena (podľa potreby)",
          "Protokol odporúčaní (čo riešiť ďalej)",
        ],
        time: "3–5 h",
        idealFor: "výkonnostné jazdenie / sezónny reset",
      },
    ],
    []
  );

  const summerServices: ServiceItem[] = useMemo(
    () => [
      {
        icon: <ShieldCheck className="h-6 w-6" />,
        title: "Brzdy",
        description: "Bezpečnosť nie je doplnok. Je to základ.",
        tags: ["hydraulika", "platničky", "kotúče", "odvzdušnenie"],
        details: [
          "Výmena brzdových platničiek (podľa opotrebenia)",
          "Odvzdušnenie hydraulických bŕzd (Shimano / SRAM / Magura)",
          "Nastavenie strmeňov a páčok (feel + kontakt)",
          "Kontrola kotúčov (rovinnosť, hrúbka, vibrácie)",
          "Diagnostika brzdového systému (úniky, piesty, hadice)",
        ],
        note:
          "Tip: Ak brzdy pískajú, často je to kombinácia nečistôt + nesprávneho zábehu. Vieme spraviť rýchly audit a navrhnúť riešenie.",
      },
      {
        icon: <Settings className="h-6 w-6" />,
        title: "Pohon",
        description: "Efektivita prenosu výkonu. Hladké radenie, nulové preskoky.",
        tags: ["reťaz", "kazeta", "prehadzovač", "mazanie"],
        details: [
          "Meranie opotrebenia reťaze (prevencia zničenia kazety)",
          "Výmena reťaze / kazety / prevodníkov (podľa stavu)",
          "Nastavenie prehadzovačky (limit skrutky, napnutie lanka, B-skrutka)",
          "Čistenie pohonu (základ / hĺbkovo podľa balíka)",
          "Mazanie a odporúčanie správneho typu maziva podľa štýlu jazdy",
        ],
      },
      {
        icon: <Gauge className="h-6 w-6" />,
        title: "Odpruženie",
        description: "Kontrola nad trailom. Komfort aj výkon.",
        tags: ["vidlica", "tlmič", "SAG", "tesnenia"],
        details: [
          "Základný servis vidlice (olej / tesnenia podľa modelu)",
          "Základný servis tlmiča (kontrola únikov, tlak, nastavenie)",
          "Nastavenie tlaku a SAG podľa jazdca",
          "Diagnostika úniku tlaku a nepravidelného chodu",
          "Dohoda na full servise (ak treba) + odhad termínu",
        ],
      },
      {
        icon: <Disc3 className="h-6 w-6" />,
        title: "Kolesá & bezduše",
        description: "Stabilita, grip, nulové prekvapenia.",
        tags: ["centrovanie", "bezduše", "tmel", "ventily"],
        details: [
          "Centrovanie kolies + kontrola výpletu",
          "Servis bezdušových systémov (tmel, páska, ventily)",
          "Kontrola a dotiahnutie niplov / napätia výpletu",
          "Kontrola nábojov (vôľa, ložiská, orech)",
          "Riešenie defektov (diagnostika príčiny)",
        ],
      },
      {
        icon: <Wrench className="h-6 w-6" />,
        title: "Kompletný audit bicykla",
        description: "Keď chceš vedieť presne čo a prečo.",
        tags: ["diagnostika", "bez chaosu", "plán", "protokol"],
        details: [
          "Kontrola kritických bodov (bezpečnosť + vôľe)",
          "Diagnostika opotrebenia (pohon, brzdy, ložiská)",
          "Rýchly plan: čo riešiť hneď vs. čo počká",
          "Nastavenie kontaktov: radenie, brzdy, posed (základ)",
          "Odporúčanie: diely / servisný postup / rozpočet (orientačne)",
        ],
        note:
          "Toto je brutálne, keď kupuješ jazdený bike alebo ideš do sezóny a nechceš lotériu.",
      },
    ],
    []
  );

  const winterServices: ServiceItem[] = useMemo(
    () => [
      {
        icon: <Snowflake className="h-6 w-6" />,
        title: "Brúsenie hrán",
        description: "Presnosť na milimeter. Istota v oblúku.",
        tags: ["uhly", "ručné doladenie", "strojové brúsenie"],
        details: [
          "Strojové brúsenie hrán",
          "Úprava uhlov hrán podľa štýlu jazdy",
          "Ručné doladenie (finálny feel)",
          "Kontrola poškodení a odporúčanie opravy",
        ],
      },
      {
        icon: <Sparkles className="h-6 w-6" />,
        title: "Voskovanie sklznice",
        description: "Maximálny sklz. Menej odporu, viac radosti.",
        tags: ["čistenie", "teplý vosk", "leštenie"],
        details: [
          "Čistenie sklznice",
          "Teplý vosk (podľa podmienok)",
          "Leštenie + finálne doladenie",
          "Odporúčanie pre ďalšie voskovanie",
        ],
      },
      {
        icon: <Droplets className="h-6 w-6" />,
        title: "Oprava sklznice",
        description: "Keď sú tam ryhy, opravíme to tak, aby to malo zmysel.",
        tags: ["fill", "zarovnanie", "kontrola"],
        details: [
          "Vyhodnotenie poškodenia (či sa oplatí oprava)",
          "Zaplnenie ryhy / poškodenia",
          "Zarovnanie a príprava sklznice",
          "Finálne voskovanie podľa potreby",
        ],
      },
      {
        icon: <ClipboardList className="h-6 w-6" />,
        title: "Kompletný ski servis",
        description: "Full reset pre sezónu. Jedna návšteva – hotovo.",
        tags: ["brúsenie", "voskovanie", "setup"],
        details: [
          "Brúsenie + voskovanie",
          "Oprava sklznice (ak treba)",
          "Kontrola viazania a odporúčanie nastavenia",
          "Finálna kontrola výsledku",
        ],
      },
    ],
    []
  );

  const services = season === "leto" ? summerServices : winterServices;
  const seasonAccent: "green" | "red" = season === "leto" ? "green" : "red";

  const heroRightBadge =
    season === "leto" ? "Letná sezóna" : "Zimná sezóna";

  return (
      <div className="relative">
        {/* GLOBAL URBAN BACKDROP (jemné, plávajúce, bez čiernych preskokov) */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-[35%] top-[-5%] h-[520px] w-[980px] -rotate-12 rounded-[90px] bg-[#00a000]/10 blur-3xl" />
          <div className="absolute -right-[35%] top-[18%] h-[520px] w-[980px] rotate-12 rounded-[90px] bg-[#00a000]/8 blur-3xl" />
          <div className="absolute left-[5%] top-[62%] h-[560px] w-[980px] -rotate-6 rounded-[90px] bg-white/5 blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)",
              backgroundSize: "22px 22px",
            }}
          />
        </div>

        {/* ================= HERO (BEZ VONKAJŠIEHO RÁMU) ================= */}
        <section className="relative px-6 pt-28 md:pt-32 pb-10">
          <div className="max-w-6xl mx-auto">
            {/* hero background layers */}
            <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] overflow-hidden">
              <div className="absolute left-[-10%] top-[-20%] h-[520px] w-[700px] rounded-full bg-[#00a000]/16 blur-3xl" />
              <div className="absolute right-[-15%] top-[-10%] h-[520px] w-[700px] rounded-full bg-yellow-400/10 blur-3xl" />
              <div className="absolute right-[-20%] top-[15%] h-[520px] w-[700px] rounded-full bg-red-500/10 blur-3xl" />
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <FadeIn>
                  <Pill icon={<Zap className="h-4 w-4" />} label="Performance workshop • Bike Signal" />
                </FadeIn>

                <FadeIn delay={0.08}>
                  <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.02]">
                    Servis, ktorý má{" "}
                    <span className="text-[#00a000]">systém</span>{" "}
                    <span className="block text-white/80">
                      a výsledok cítiť hneď.
                    </span>
                  </h1>
                </FadeIn>

                <FadeIn delay={0.16}>
                  <p className="mt-5 text-white/70 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
                    Nehráme sa na “nejako to pôjde”. Robíme{" "}
                    <span className="text-white/90 font-semibold">
                      diagnostiku, kontrolu a výkon
                    </span>
                    . Každý zásah má dôvod. Každý servis má plán.{" "}
                    <span className="text-white/90 font-semibold">
                      Bez chaosu. Bez prekvapení.
                    </span>
                  </p>
                </FadeIn>

                <FadeIn delay={0.24}>
                  <div className="mt-7 flex flex-col sm:flex-row gap-3">
                    <a
                      href="#sluzby"
                      className="inline-flex items-center justify-center rounded-2xl bg-[#00a000] px-7 py-4 font-semibold text-black transition hover:bg-green-600"
                    >
                      Vybrať službu <ArrowRight className="h-4 w-4 ml-2" />
                    </a>

                    <Link
                      href="/rezervacia"
                      className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-black/20 px-7 py-4 font-semibold text-white/85 transition hover:bg-white/5"
                    >
                      Rezervovať termín
                    </Link>

                    <Link
                      href="/pickup"
                      className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-black/20 px-7 py-4 font-semibold text-white/85 transition hover:bg-white/5"
                    >
                      Dovoz / odvoz
                    </Link>
                  </div>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4 max-w-2xl">
                    <StatMini icon={<CalendarDays className="h-4 w-4" />} title="Reálne termíny" value="bez dohadovania" />
                    <StatMini icon={<ShieldCheck className="h-4 w-4" />} title="Bezpečnosť" value="kontrola bodov" />
                    <StatMini icon={<Layers className="h-4 w-4" />} title="Proces" value="systematicky" />
                    <StatMini icon={<Flame className="h-4 w-4" />} title="Výsledok" value="cítiť hneď" />
                  </div>
                </FadeIn>
              </div>

              {/* right live panel (ako pickup vibe) */}
              <div className="lg:justify-self-end">
                <FadeIn delay={0.18}>
                  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/20 p-6 backdrop-blur-md">
                    <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#00a000]/12 blur-3xl" />
                    <div className="pointer-events-none absolute -left-24 -bottom-24 h-56 w-56 rounded-full bg-white/8 blur-3xl" />

                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-white/60 uppercase tracking-wider">
                          Live flow
                        </div>
                        <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70">
                          {heroRightBadge}
                        </div>
                      </div>

                      <div className="mt-4 space-y-3">
                        {[
                          {
                            k: "Diagnostika",
                            v: "rýchly audit",
                            ic: <Search className="h-4 w-4" />,
                          },
                          {
                            k: "Servis",
                            v: "podľa balíka",
                            ic: <Wrench className="h-4 w-4" />,
                          },
                          {
                            k: "Test",
                            v: "kontrola výsledku",
                            ic: <PackageCheck className="h-4 w-4" />,
                          },
                        ].map((x, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/25 px-4 py-3"
                          >
                            <div className="flex items-center gap-2 text-white/80">
                              <span className="text-[#00a000]">{x.ic}</span>
                              <span className="font-semibold">{x.k}</span>
                            </div>
                            <div className="text-white/70 text-sm">{x.v}</div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 rounded-2xl border border-[#00a000]/25 bg-[#00a000]/10 px-4 py-3">
                        <div className="flex items-center gap-2 text-sm text-white/85">
                          <Zap className="h-4 w-4 text-[#00a000]" />
                          Rezervácia trvá ~30 sekúnd
                        </div>
                      </div>

                      <div className="mt-5 grid grid-cols-2 gap-3">
                        <div className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm">
                          <div className="text-white/60">Priorita</div>
                          <div className="font-semibold text-white">Bez chaosu</div>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm">
                          <div className="text-white/60">Cieľ</div>
                          <div className="font-semibold text-white">Istota na bajku</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* quick nav row */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { href: "#balicky", label: "Balíčky" },
                { href: "#sezona", label: "Sezóna" },
                { href: "#sluzby", label: "Služby" },
                { href: "#proces", label: "Proces" },
                { href: "#faq", label: "FAQ" },
              ].map((x) => (
                <a
                  key={x.href}
                  href={x.href}
                  className="rounded-full border border-white/10 bg-black/15 px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition"
                >
                  {x.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FEATURES GRID ================= */}
        <SectionShell className="py-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <FadeIn>
              <FeatureCard
                icon={<ShieldCheck className="h-6 w-6" />}
                title="Bezpečnostný baseline"
                desc="Kontrolujeme kritické body. Najprv istota, potom výkon."
              />
            </FadeIn>
            <FadeIn delay={0.05}>
              <FeatureCard
                icon={<Settings className="h-6 w-6" />}
                title="Systematické nastavenie"
                desc="Nie „od oka“. Radenie, brzdy, vôľe – krok za krokom."
              />
            </FadeIn>
            <FadeIn delay={0.1}>
              <FeatureCard
                icon={<Gauge className="h-6 w-6" />}
                title="Výkon & pocit"
                desc="Servis má byť cítiť. Hladké radenie, stabilné brzdy, čistý chod."
              />
            </FadeIn>
            <FadeIn delay={0.15}>
              <FeatureCard
                icon={<Clock3 className="h-6 w-6" />}
                title="Čas bez stresu"
                desc="Reálne termíny, jasná komunikácia. Bez ping-pongu."
              />
            </FadeIn>
          </div>
        </SectionShell>

        {/* ================= BALÍČKY ================= */}
        <SectionShell id="balicky" className="py-14">
          <div className="text-center mb-10">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-extrabold">
                Servisné <span className="text-[#00a000]">balíčky</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="mt-3 text-white/70 max-w-3xl mx-auto">
                Vyber si úroveň podľa toho, ako jazdíš. Od rýchlej kontroly až po
                detailný reset. Balíky sú nastavené tak, aby dávali zmysel aj cenovo, aj výsledkom.
              </p>
            </FadeIn>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {packages.map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.08}>
                <PackageCard item={p} />
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.25}>
            <div className="mt-8 rounded-3xl border border-white/10 bg-black/15 p-6 backdrop-blur-md">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-2xl border border-[#00a000]/25 bg-[#00a000]/10 p-3">
                    <Route className="h-6 w-6 text-[#00a000]" />
                  </div>
                  <div>
                    <div className="font-semibold">Nevieš ktorý balík?</div>
                    <div className="text-sm text-white/65">
                      Daj nám krátku poznámku (ako jazdíš, čo ťa trápi) a odporučíme
                      najlepší pomer cena/výkon.
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-black/20 px-6 py-3 font-semibold text-white/85 transition hover:bg-white/5"
                  >
                    Napísať <Phone className="h-4 w-4 ml-2" />
                  </Link>
                  <Link
                    href="/rezervacia"
                    className="inline-flex items-center justify-center rounded-2xl bg-[#00a000] px-6 py-3 font-semibold text-black transition hover:bg-green-600"
                  >
                    Rezervovať <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </SectionShell>

        {/* ================= SEZÓNA SWITCH ================= */}
        <SectionShell id="sezona" className="py-14">
          <div className="text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-extrabold">
                Vyber si <span className="text-[#00a000]">sezónu</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="mt-3 text-white/70 max-w-3xl mx-auto">
                Leto = bicykle a výkon. Zima = ski/snow servis. Prepnutím sa ti zmení celý set služieb aj dôraz.
              </p>
            </FadeIn>

            <div className="mt-8">
              <FadeIn delay={0.18}>
                <DiagonalSwitch
                  season={season}
                  setSeason={(s) => {
                    setSeason(s);
                    setOpen(0);
                  }}
                />
              </FadeIn>
            </div>
          </div>
        </SectionShell>

        {/* ================= SLUŽBY ================= */}
        <SectionShell id="sluzby" className="py-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.45fr] lg:items-start">
            <div>
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                  Konkrétne{" "}
                  <span className="text-[#00a000]">služby</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.12}>
                <p className="mt-3 text-white/70 leading-relaxed max-w-2xl">
                  Klikni na službu a rozbalí sa presný rozsah. Toto je ten rozdiel medzi
                  “niečo spravíme” a “vieme presne čo robíme”.
                </p>
              </FadeIn>

              <div className="mt-8 space-y-4">
                {services.map((s, i) => (
                  <FadeIn key={s.title} delay={i * 0.06}>
                    <ServiceAccordionCard
                      item={s}
                      index={i}
                      open={open}
                      setOpen={setOpen}
                      accent={seasonAccent}
                    />
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* side trust panel */}
            <div className="lg:sticky lg:top-24">
              <FadeIn delay={0.12}>
                <div className="rounded-[32px] border border-white/10 bg-black/20 p-6 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl border border-[#00a000]/25 bg-[#00a000]/10 p-3">
                      <BadgeCheck className="h-6 w-6 text-[#00a000]" />
                    </div>
                    <div>
                      <div className="font-semibold">Bike Signal štandard</div>
                      <div className="text-sm text-white/65">
                        Čistý proces. Jasný výsledok. Bez skrytých krokov.
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3 text-sm text-white/75">
                    {[
                      { ic: <Search className="h-4 w-4" />, t: "Najprv audit – potom zásah" },
                      { ic: <ShieldCheck className="h-4 w-4" />, t: "Bezpečnostné body vždy" },
                      { ic: <RefreshCw className="h-4 w-4" />, t: "Nastavenie + test výsledku" },
                      { ic: <ClipboardList className="h-4 w-4" />, t: "Odporúčania čo ďalej" },
                    ].map((x, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="text-[#00a000]">{x.ic}</span>
                        <span>{x.t}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-black/25 p-4">
                    <div className="text-xs uppercase tracking-wider text-white/50">
                      Extra
                    </div>
                    <div className="mt-3 text-sm text-white/70 leading-relaxed">
                      Chceš pohodlie? Daj si{" "}
                      <Link href="/pickup" className="text-[#00ff66] hover:underline">
                        dovoz / odvoz
                      </Link>{" "}
                      a nerieš logistiku.
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <Link
                      href="/rezervacia"
                      className="inline-flex w-full items-center justify-center rounded-2xl bg-[#00a000] px-6 py-3 font-semibold text-black hover:bg-green-600 transition"
                    >
                      Rezervovať
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </SectionShell>

        {/* ================= PROCESS ================= */}
        <SectionShell id="proces" className="py-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                  Proces, ktorý{" "}
                  <span className="text-[#00a000]">dáva zmysel</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.12}>
                <p className="mt-4 text-white/70 leading-relaxed max-w-xl">
                  Namiesto chaosu máš jasný flow. Namiesto “snáď to bude ok”
                  máš kontrolu. Každý krok má účel.
                </p>
              </FadeIn>

              <FadeIn delay={0.18}>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-black/20 p-5 backdrop-blur-md">
                    <div className="flex items-center gap-2 text-white/80">
                      <Search className="h-5 w-5 text-[#00a000]" />
                      <span className="font-semibold">Diagnostika</span>
                    </div>
                    <div className="mt-2 text-sm text-white/65">
                      Rýchly audit, aby sme nerobili zbytočné úkony.
                    </div>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-black/20 p-5 backdrop-blur-md">
                    <div className="flex items-center gap-2 text-white/80">
                      <Wrench className="h-5 w-5 text-[#00a000]" />
                      <span className="font-semibold">Zásah</span>
                    </div>
                    <div className="mt-2 text-sm text-white/65">
                      Servis podľa balíka / služby, čisté kroky, čistý výsledok.
                    </div>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-black/20 p-5 backdrop-blur-md">
                    <div className="flex items-center gap-2 text-white/80">
                      <PackageCheck className="h-5 w-5 text-[#00a000]" />
                      <span className="font-semibold">Test</span>
                    </div>
                    <div className="mt-2 text-sm text-white/65">
                      Kontrola výsledku. Niečo spraviť nestačí — musí to fungovať.
                    </div>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-black/20 p-5 backdrop-blur-md">
                    <div className="flex items-center gap-2 text-white/80">
                      <ClipboardList className="h-5 w-5 text-[#00a000]" />
                      <span className="font-semibold">Odporúčanie</span>
                    </div>
                    <div className="mt-2 text-sm text-white/65">
                      Čo riešiť hneď vs. čo počká. Aby si nemíňal zbytočne.
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="space-y-6">
              <FadeIn delay={0.05}>
                <ProcessStep
                  index="01"
                  icon={<CalendarDays className="h-5 w-5" />}
                  title="Rezervuješ termín"
                  desc="Vyberieš balík alebo službu. Pridáš krátku poznámku. Potvrdíme termín."
                />
              </FadeIn>
              <FadeIn delay={0.12}>
                <ProcessStep
                  index="02"
                  icon={<Search className="h-5 w-5" />}
                  title="Diagnostika & audit"
                  desc="Najprv zistíme stav. Potom robíme servis. Žiadne náhodné úkony."
                />
              </FadeIn>
              <FadeIn delay={0.18}>
                <ProcessStep
                  index="03"
                  icon={<Wrench className="h-5 w-5" />}
                  title="Servis podľa plánu"
                  desc="Čisté kroky, správne nastavenie, dôraz na bezpečnosť a pocit."
                />
              </FadeIn>
              <FadeIn delay={0.24}>
                <ProcessStep
                  index="04"
                  icon={<PackageCheck className="h-5 w-5" />}
                  title="Test výsledku"
                  desc="Kontrola. Doladenie. Až potom odovzdanie."
                />
              </FadeIn>
            </div>
          </div>
        </SectionShell>

        {/* ================= PICKUP PROMO ================= */}
        <SectionShell className="py-14">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-black/18 p-8 md:p-10 backdrop-blur-md">
              <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#00a000]/12 blur-3xl" />
              <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-white/8 blur-3xl" />

              <div className="relative grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-center">
                <div>
                  <Pill icon={<Truck className="h-4 w-4" />} label="Smart logistics • Pickup & Delivery" />
                  <h3 className="mt-4 text-2xl md:text-3xl font-extrabold">
                    Nemáš čas riešiť logistiku?
                    <span className="block text-[#00a000]">Dáme aj dovoz / odvoz.</span>
                  </h3>
                  <p className="mt-3 text-white/70 leading-relaxed max-w-2xl">
                    Vyzdvihneme bike doma alebo v práci, spravíme servis a doručíme späť.
                    Ty iba vyberieš časové okno.
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/pickup"
                      className="inline-flex items-center justify-center rounded-2xl bg-[#00a000] px-7 py-4 font-semibold text-black hover:bg-green-600 transition"
                    >
                      Pozrieť pickup <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                    <Link
                      href="/rezervacia"
                      className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-black/20 px-7 py-4 font-semibold text-white/85 hover:bg-white/5 transition"
                    >
                      Rezervovať s dopravou
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <StatMini icon={<MapPin className="h-4 w-4" />} title="Vyzdvihnutie" value="dom / práca" />
                  <StatMini icon={<Route className="h-4 w-4" />} title="Trasa" value="optimalizovaná" />
                  <StatMini icon={<ShieldCheck className="h-4 w-4" />} title="Transport" value="bezpečný" />
                  <StatMini icon={<PackageCheck className="h-4 w-4" />} title="Odovzdanie" value="potvrdené" />
                </div>
              </div>
            </div>
          </FadeIn>
        </SectionShell>

        {/* ================= FAQ ================= */}
        <SectionShell id="faq" className="py-14 pb-24">
          <div className="text-center mb-10">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-extrabold">
                Časté <span className="text-[#00a000]">otázky</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="mt-3 text-white/70 max-w-3xl mx-auto">
                Ak si nie si istý, napíš nám. Ale tu máš najčastejšie veci, čo ľudia riešia pred servisom.
              </p>
            </FadeIn>
          </div>

          <div className="grid gap-4 max-w-4xl mx-auto">
            {[
              {
                q: "Koľko dopredu treba rezervovať termín?",
                a: "Záleží od sezóny. Väčšinou vieme ponúknuť termín v horizonte pár dní. Keď je špička, môže to byť dlhšie — preto je najlepšie spraviť rezerváciu online a my to potvrdíme.",
              },
              {
                q: "Čo ak neviem, ktorý balík potrebujem?",
                a: "Úplne v pohode. V rezervácii napíš, ako jazdíš a čo ťa trápi. My ti odporučíme najlepší balík. Často stačí Stredný servis, aby bol rozdiel cítiť hneď.",
              },
              {
                q: "Robíte aj expres servis?",
                a: "Keď je kapacita, vieme dohodnúť rýchle riešenie (najmä brzdy / pohon). Napíš nám do poznámky, že to súri — ozveme sa.",
              },
              {
                q: "Viete spraviť aj dovoz/odvoz?",
                a: "Áno. Máme pickup stránku, kde si vieš vybrať časové okno. Vyzdvihneme bike a po servise doručíme späť.",
              },
            ].map((x, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <FAQItem
                  q={x.q}
                  a={x.a}
                  open={faqOpen === i}
                  onToggle={() => setFaqOpen(faqOpen === i ? null : i)}
                />
              </FadeIn>
            ))}
          </div>

          {/* FINAL CTA */}
          <div className="mt-12 text-center">
            <FadeIn>
              <div className="inline-flex flex-col items-center gap-4">
                <h3 className="text-2xl md:text-3xl font-extrabold">
                  Pripravený na{" "}
                  <span className="text-[#00a000]">servis bez chaosu</span>?
                </h3>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/rezervacia"
                    className="inline-flex items-center justify-center rounded-2xl bg-[#00a000] px-10 py-4 font-semibold text-black hover:bg-green-600 transition"
                  >
                    Rezervovať servis <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-black/20 px-10 py-4 font-semibold text-white/85 hover:bg-white/5 transition"
                  >
                    Chcem poradiť
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </SectionShell>
      </div>
    );
}
