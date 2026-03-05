"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import {
  Bike,
  Box,
  Car,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Info,
  Lock,
  Minus,
  Plus,
  Route,
  ShieldCheck,
  Truck,
} from "lucide-react";

type RentalItem = {
  id: string;
  title: string;
  subtitle: string;
  categoryPill: string;

  // ✅ toto bude “ikona v malom rámčeku”
  icon: React.ReactNode;

  // ✅ fotku dáme doprava pod CTA
  imageSrc: string;
  imageAlt: string;

  specsLeft: Array<{ k: string; v: string }>;
  specsRight?: Array<{ k: string; v: string }>;

  pricing: Array<{ label: string; value: string }>;

  note: string;
};

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

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
  label,
  icon,
}: {
  label: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-4 py-2 text-xs text-white/70 backdrop-blur-md">
      {icon ? <span className="text-[#00a000]">{icon}</span> : null}
      <span>{label}</span>
    </div>
  );
}

function SpecRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between gap-4 py-2">
      <div className="text-white/55 text-sm">{k}</div>
      <div className="text-white/85 text-sm font-semibold text-right">{v}</div>
    </div>
  );
}

function PriceRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 py-2">
      <div className="flex items-center gap-2 text-white/75 text-sm">
        <CheckCircle2 className="h-4 w-4 text-[#00a000]" />
        <span>{label}</span>
      </div>
      <div className="text-white font-semibold text-sm">{value}</div>
    </div>
  );
}

function RentalCard({
  item,
  index,
  open,
  setOpen,
}: {
  item: RentalItem;
  index: number;
  open: number | null;
  setOpen: (v: number | null) => void;
}) {
  const isOpen = open === index;

  return (
    <div className="rounded-[36px] border border-white/10 bg-black/20 backdrop-blur-md overflow-hidden transition hover:border-white/20">
      {/* TOP BAR */}
      <button
        type="button"
        onClick={() => setOpen(isOpen ? null : index)}
        className="w-full px-6 sm:px-8 py-6 flex items-start justify-between gap-5 text-left"
      >
        <div className="flex items-start gap-4 min-w-0">
          {/* ✅ MALÝ RÁMČEK = IKONA (nie foto) */}
          <div className="shrink-0">
            <div className="h-14 w-14 rounded-2xl border border-[#00a000]/25 bg-[#00a000]/10 flex items-center justify-center">
              <div className="text-[#00ff66]">{item.icon}</div>
            </div>
          </div>

          <div className="min-w-0">
            <div className="text-xl sm:text-2xl font-extrabold truncate">
              {item.title}
            </div>
            <div className="mt-1 text-white/60 text-sm">{item.subtitle}</div>

            <div className="mt-3">
              <Pill
                label={item.categoryPill}
                icon={<ClipboardList className="h-4 w-4" />}
              />
            </div>
          </div>
        </div>

        <div className="shrink-0 pt-1 text-[#00a000]">
          {isOpen ? <Minus className="h-7 w-7" /> : <Plus className="h-7 w-7" />}
        </div>
      </button>

      {/* CONTENT */}
      {isOpen ? (
        <div className="border-t border-white/10">
          <div className="px-6 sm:px-8 py-7">
            {/* GRID: ľavá = parametre, pravá = ceny/CTA + FOTO pod CTA */}
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start">
              {/* LEFT: SPECS */}
              <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                <div className="text-xs uppercase tracking-wider text-white/45">
                  Parametre
                </div>

                <div className="mt-4 divide-y divide-white/10">
                  {item.specsLeft.map((s, i) => (
                    <SpecRow key={`${item.id}-L-${i}`} k={s.k} v={s.v} />
                  ))}
                </div>

                {item.specsRight?.length ? (
                  <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
                    <div className="flex items-center gap-2 text-white/75 text-sm">
                      <ShieldCheck className="h-4 w-4 text-[#00a000]" />
                      <span className="font-semibold">Ďalšie info</span>
                    </div>

                    <div className="mt-3 divide-y divide-white/10">
                      {item.specsRight.map((s, i) => (
                        <SpecRow key={`${item.id}-R-${i}`} k={s.k} v={s.v} />
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>

              {/* RIGHT: PRICING + CTA + IMAGE */}
              <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                <div className="text-xs uppercase tracking-wider text-white/45">
                  Cena prenájmu
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-black/25 p-4">
                  <div className="divide-y divide-white/10">
                    {item.pricing.map((p, i) => (
                      <PriceRow
                        key={`${item.id}-P-${i}`}
                        label={p.label}
                        value={p.value}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/rezervacia"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-black/20 px-6 py-3 font-semibold text-white/85 hover:bg-white/5 transition"
                  >
                    Rezervovať prenájom <ChevronRight className="h-4 w-4 ml-2" />
                  </Link>

                  <Link
                    href="/pickup"
                    className="inline-flex items-center justify-center rounded-2xl bg-[#00a000] px-6 py-3 font-semibold text-black hover:bg-green-600 transition"
                  >
                    Dovoz / odvoz <Truck className="h-4 w-4 ml-2" />
                  </Link>
                </div>

                {/* ✅ FOTO POD CTA (stále v tom istom gride) */}
                <div className="mt-6 rounded-3xl border border-white/10 bg-black/15 p-6">
  <div className="relative w-full aspect-[16/10] sm:aspect-[16/9]">

    <Image
      src={item.imageSrc}
      alt={item.imageAlt}
      fill
      sizes="(max-width:768px) 100vw, 50vw"
      className="object-contain"
      priority={false}
    />

  </div>
</div>

                {/* NOTE */}
                <div className="mt-6 rounded-2xl border border-white/10 bg-black/25 p-4 text-sm text-white/70 leading-relaxed">
                  <div className="flex gap-2">
                    <Info className="h-4 w-4 text-[#00a000] mt-0.5 shrink-0" />
                    <span>{item.note}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* bottom mini row */}
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-white/70 inline-flex items-center gap-2">
                <Lock className="h-4 w-4 text-[#00a000]" />
                Uzamykanie podľa modelu
              </div>
              <div className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-white/70 inline-flex items-center gap-2">
                <Route className="h-4 w-4 text-[#00a000]" />
                Rýchle odovzdanie v predajni
              </div>
              <div className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-white/70 inline-flex items-center gap-2">
                <Car className="h-4 w-4 text-[#00a000]" />
                Montáž / rady na mieste
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default function PrenajomPage() {
  const [open, setOpen] = useState<number | null>(0);

  const items: RentalItem[] = useMemo(
    () => [
      {
        id: "thule-proride",
        title: "Thule ProRide 598 (2 ks)",
        subtitle: "Strešný nosič bicyklov",
        categoryPill: "Nosiče bicyklov na strechu auta",
        icon: <Bike className="h-6 w-6" />,
        imageSrc: "/n1.png", // ✅ cestu si opravíš
        imageAlt: "Thule ProRide 598",

        specsLeft: [
          { k: "Počet bicyklov", v: "1 bicykel" },
          { k: "Elektrobicykle", v: "Nie" },
          { k: "Rozmery", v: "145 × 32 × 8.5 cm" },
          { k: "Hmotnosť", v: "4.2 kg" },
          { k: "Nosnosť", v: "20 kg" },
          { k: "Max. rázvor kolies", v: "123.5 cm" },
          { k: "Max. veľkosť kolies (priemer)", v: '16–29"' },
          { k: "Max. šírka pneumatiky", v: "76 mm" },
          { k: "Farba", v: "Strieborná / Čierna" },
          { k: "Uzamknutie nosiča", v: "Áno" },
          { k: "Uzamknutie bicykla", v: "Áno" },
        ],

        pricing: [
          { label: "7 € / deň", value: "" },
          { label: "6 € / deň (4 a viac dní)", value: "" },
          { label: "5 € / deň (8 a viac dní)", value: "" },
        ],

        note:
          "Thule ProRide 598 spĺňa testy TÜV a City-Crash. Super voľba, keď chceš jednoduché a bezpečné uchytenie na strechu.",
      },

      {
        id: "yakima-fold-clik-3",
        title: "Yakima FOLD CLiK 3 (1 ks)",
        subtitle: "Nosič bicyklov na ťažné zariadenie",
        categoryPill: "Nosiče bicyklov na ťažné zariadenie",
        icon: <Car className="h-6 w-6" />,
        imageSrc: "/n2.png", // ✅ cestu si opravíš
        imageAlt: "Yakima FOLD CLiK 3",

        specsLeft: [
          { k: "Počet bicyklov", v: "3 bicykle" },
          { k: "Elektrobicykle", v: "Áno" },
          { k: "Možnosť rozšírenia", v: "Nie" },
          { k: "Rozmery (rozložený)", v: "128 × 80 × 68 cm" },
          { k: "Rozmery (zložený)", v: "76 × 80 × 34 cm" },
          { k: "Hmotnosť", v: "19 kg" },
          { k: "Nosnosť", v: "60 kg" },
          { k: "Max. váha 1 bicykla", v: "20 kg" },
          { k: "Max. rázvor kolies", v: "128 cm" },
          { k: "Max. veľkosť kolies (priemer)", v: '29"' },
          { k: "Max. šírka pneumatiky", v: "100 mm" },
          { k: "Farba", v: "Čierna" },
        ],

        specsRight: [
          { k: "Vzdialenosť medzi bicyklami", v: "19 cm" },
          { k: "Uzamknutie nosiča", v: "Áno" },
          { k: "Uzamknutie bicykla", v: "Áno" },
          { k: "Vyklopiteľný s bicyklami", v: "Áno" },
          { k: "Skladateľný", v: "Áno" },
          { k: "Zásuvka", v: "13-pin / 7-pin" },
          { k: "Poznámka", v: "požičané." },
        ],

        pricing: [
          { label: "15 € / deň", value: "" },
          { label: "12 € / deň (4 a viac dní)", value: "" },
          { label: "10 € / deň (8 a viac dní)", value: "" },
        ],

        note:
          "Ideálne riešenie na rýchle nakladanie, skladanie a pohodlné cestovanie s viacerými bicyklami. Vhodné aj pre e-bike (podľa limitov).",
      },

      {
        id: "yakima-sky-tour-420",
        title: "Yakima SkyTour 420L",
        subtitle: "Strešný box",
        categoryPill: "Strešné boxy",
        icon: <Box className="h-6 w-6" />,
        imageSrc: "/n3.png", // ✅ cestu si opravíš
        imageAlt: "Yakima SkyTour 420L",

        specsLeft: [
          { k: "Rozmery", v: "205 × 84 × 36 cm" },
          { k: "Objem", v: "420 litrov" },
          { k: "Kapacita lyží / snowboardov", v: "7 párov / 5 ks" },
          { k: "Max. dĺžka lyží", v: "195 cm" },
          { k: "Nosnosť", v: "75 kg" },
          { k: "Hmotnosť", v: "25 kg" },
          { k: "Upevnenie", v: "Rýchloupínací systém" },
          { k: "Uzamykanie", v: "3-bodové" },
          { k: "Otváranie", v: "Obojstranné" },
        ],

        pricing: [{ label: "7 € / deň", value: "" }],

        note:
          "Veľký box na výlety aj zimnú sezónu. Obojstranné otváranie a rýchloupínanie = pohodlie na max.",
      },
    ],
    []
  );

  return (
    <div className="relative">
      {/* jemný globálny backdrop ako ostatné stránky */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-[35%] top-[-5%] h-[520px] w-[980px] -rotate-12 rounded-[90px] bg-[#00a000]/10 blur-3xl" />
        <div className="absolute -right-[35%] top-[18%] h-[520px] w-[980px] rotate-12 rounded-[90px] bg-yellow-400/8 blur-3xl" />
        <div className="absolute left-[5%] top-[62%] h-[560px] w-[980px] -rotate-6 rounded-[90px] bg-red-500/8 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      {/* HERO */}
      <section className="relative px-6 pt-28 md:pt-32 pb-10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Pill label="Prenájom • Bike Signal" icon={<Truck className="h-4 w-4" />} />
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.02]">
              Prenájom, ktorý{" "}
              <span className="text-[#00a000]">dáva zmysel</span>
              <span className="block text-white/80">nosiče aj box bez stresu.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p className="mt-5 text-white/70 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl">
              Vyber si vybavenie, pozri parametre a cenu. Keď chceš, spravíme aj{" "}
              <span className="text-white/90 font-semibold">dovoz / odvoz</span>.
            </p>
          </FadeIn>

          <FadeIn delay={0.22}>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href="#ponuka"
                className="inline-flex items-center justify-center rounded-2xl bg-[#00a000] px-7 py-4 font-semibold text-black transition hover:bg-green-600"
              >
                Pozrieť ponuku <ChevronRight className="h-4 w-4 ml-2" />
              </a>

              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-black/20 px-7 py-4 font-semibold text-white/85 transition hover:bg-white/5"
              >
                Spýtať sa / dostupnosť
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* LIST */}
      <SectionShell id="ponuka" className="py-10 pb-24">
        <div className="mb-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Ponuka <span className="text-[#00a000]">prenájmu</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="mt-3 text-white/70 max-w-3xl">
              Klikni na položku a rozbalí sa detailný rozsah parametrov + ceny. Fotky si vieš doladiť
              podľa reálnych produktov (cestu v kóde si prepíšeš).
            </p>
          </FadeIn>
        </div>

        <div className="space-y-6">
          {items.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.06}>
              <RentalCard item={item} index={i} open={open} setOpen={setOpen} />
            </FadeIn>
          ))}
        </div>

        {/* CTA bottom */}
        <div className="mt-12">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-black/18 p-8 md:p-10 backdrop-blur-md">
              <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#00a000]/12 blur-3xl" />
              <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-white/8 blur-3xl" />

              <div className="relative grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-center">
                <div>
                  <Pill label="Rýchla dohoda • dostupnosť" icon={<ShieldCheck className="h-4 w-4" />} />
                  <h3 className="mt-4 text-2xl md:text-3xl font-extrabold">
                    Chceš to mať <span className="text-[#00a000]">bez riešenia</span>?
                  </h3>
                  <p className="mt-3 text-white/70 leading-relaxed max-w-2xl">
                    Napíš nám dátum, čo chceš požičať a na ako dlho. Potvrdíme dostupnosť.
                    Ak treba, spravíme aj dovoz / odvoz.
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-black/20 px-7 py-4 font-semibold text-white/85 hover:bg-white/5 transition"
                    >
                      Kontaktovať <ChevronRight className="h-4 w-4 ml-2" />
                    </Link>
                    <Link
                      href="/pickup"
                      className="inline-flex items-center justify-center rounded-2xl bg-[#00a000] px-7 py-4 font-semibold text-black hover:bg-green-600 transition"
                    >
                      Dovoz / odvoz <Route className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-3xl border border-white/10 bg-black/20 p-5 backdrop-blur-md">
                    <div className="flex items-center gap-2 text-white/80">
                      <Bike className="h-5 w-5 text-[#00a000]" />
                      <span className="font-semibold">Nosiče</span>
                    </div>
                    <div className="mt-2 text-sm text-white/65">
                      Strecha aj ťažné.
                    </div>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-black/20 p-5 backdrop-blur-md">
                    <div className="flex items-center gap-2 text-white/80">
                      <Box className="h-5 w-5 text-[#00a000]" />
                      <span className="font-semibold">Box</span>
                    </div>
                    <div className="mt-2 text-sm text-white/65">
                      420L na výlety.
                    </div>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-black/20 p-5 backdrop-blur-md">
                    <div className="flex items-center gap-2 text-white/80">
                      <Lock className="h-5 w-5 text-[#00a000]" />
                      <span className="font-semibold">Bezpečie</span>
                    </div>
                    <div className="mt-2 text-sm text-white/65">
                      Uzamykanie podľa modelu.
                    </div>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-black/20 p-5 backdrop-blur-md">
                    <div className="flex items-center gap-2 text-white/80">
                      <Truck className="h-5 w-5 text-[#00a000]" />
                      <span className="font-semibold">Doprava</span>
                    </div>
                    <div className="mt-2 text-sm text-white/65">
                      Dovoz / odvoz.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </SectionShell>
    </div>
  );
}