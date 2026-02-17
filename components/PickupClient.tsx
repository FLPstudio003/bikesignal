"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import {
  Truck,
  Clock3,
  CalendarDays,
  MapPin,
  Phone,
  Wrench,
  Building2,
  User2,
  ShieldCheck,
  Zap,
  Timer,
  Route,
  PackageCheck,
} from "lucide-react";

type Mode = "individual" | "fleet";

function SectionShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  // transparent sekcie – nech pozadie riadi PageShell
  return (
    <section className={`relative px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

function TabSwitch({
  mode,
  setMode,
}: {
  mode: Mode;
  setMode: (m: Mode) => void;
}) {
  // “servis” feel: obdĺžniky, ostrejšie, jemný skew
  const base =
    "relative px-5 py-3 font-semibold text-sm transition border border-white/10 bg-black/20 text-white/70 hover:text-white hover:bg-white/5";
  const active = "bg-[#00a000] text-black border-[#00a000]";

  return (
    <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-black/20 p-2 backdrop-blur-md">
      <button
        type="button"
        onClick={() => setMode("individual")}
        className={[
          base,
          mode === "individual" ? active : "",
          "rounded-xl",
          "skew-x-[-10deg]",
        ].join(" ")}
      >
        <span className="inline-flex items-center gap-2 skew-x-[10deg]">
          <User2 className="h-4 w-4" />
          Individuálne
        </span>
      </button>

      <button
        type="button"
        onClick={() => setMode("fleet")}
        className={[
          base,
          mode === "fleet" ? active : "",
          "rounded-xl",
          "skew-x-[-10deg]",
        ].join(" ")}
      >
        <span className="inline-flex items-center gap-2 skew-x-[10deg]">
          <Building2 className="h-4 w-4" />
          Firemné flotily
        </span>
      </button>
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
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/20 p-7 backdrop-blur-md transition hover:border-[#00a000]/60">
      <div className="pointer-events-none absolute -right-20 -top-14 h-40 w-56 rotate-12 bg-[#00a000]/10 blur-2xl transition group-hover:bg-[#00a000]/15" />
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

function StepRow({
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
    <div className="relative grid gap-6 md:grid-cols-[140px_1fr] items-start">
      <div className="relative">
        <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 backdrop-blur-md">
          <div className="text-[#008000]">{icon}</div>
          <div className="font-bold text-white">{index}</div>
        </div>
        <div className="hidden md:block absolute left-7 top-14 h-[calc(100%-10px)] w-px bg-gradient-to-b from-[#00a000]/60 via-white/10 to-transparent" />
      </div>

      <div className="rounded-3xl border border-white/10 bg-black/15 p-7 backdrop-blur-md">
        <div className="text-lg font-semibold">{title}</div>
        <div className="mt-2 text-sm text-white/65 leading-relaxed">{desc}</div>
      </div>
    </div>
  );
}

export default function PickupClient() {
  const [mode, setMode] = useState<Mode>("individual");

  const copy = useMemo(() => {
    if (mode === "fleet") {
      return {
        kicker: "Pre firmy / bike room / flotily",
        subtitle:
          "Servis + logistika pre viac bicyklov naraz. Jedna dohoda, jasný proces, pravidelné vyzdvihnutia.",
        bullets: [
          "Hromadné vyzdvihnutie (viac bicyklov)",
          "Pravidelné intervaly (napr. 2× mesačne)",
          "Prioritné termíny a report stavu",
          "Jedna fakturácia, jedna komunikácia",
        ],
        badge: "Flotily",
      };
    }
    return {
      kicker: "Pre jednotlivcov / rodiny / zaneprázdnených",
      subtitle:
        "Neprerušuj deň. Vyzdvihneme bicykel, odservisujeme a doručíme späť – presne vtedy, keď ti to sedí.",
      bullets: [
        "Vyzdvihnutie doma alebo v práci",
        "Časové okno podľa teba",
        "Bez stresu z logistiky",
        "Doručenie späť po servise",
      ],
      badge: "Individuálne",
    };
  }, [mode]);

  return (
    <div className="relative">
      {/* Jemné doplnkové pozadie – aby to ladilo s PageShell, nie aby ho prehlušilo */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-[35%] top-[5%] h-[520px] w-[900px] -rotate-12 rounded-[80px] bg-[#00a000]/8 blur-3xl" />
        <div className="absolute -right-[35%] top-[25%] h-[520px] w-[900px] rotate-12 rounded-[80px] bg-[#00a000]/6 blur-3xl" />
        <div className="absolute left-[10%] top-[60%] h-[520px] w-[900px] -rotate-6 rounded-[80px] bg-white/4 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      {/* ================= HERO (bez rámčeka) ================= */}
      <section className="relative px-6 pt-28 md:pt-32 pb-10">
        <div className="max-w-6xl mx-auto">
          {/* “speed lines” voľne v hero */}
          <div className="pointer-events-none absolute inset-x-0 top-28 md:top-32 h-[520px] overflow-hidden">
            <div className="absolute -left-40 top-10 h-44 w-[900px] -rotate-12 bg-gradient-to-r from-[#00a000]/0 via-[#00a000]/18 to-[#00a000]/0 blur-xl" />
            <div className="absolute -right-40 top-36 h-44 w-[900px] rotate-12 bg-gradient-to-r from-white/0 via-white/10 to-white/0 blur-xl" />
            <div className="absolute right-[15%] top-[20%] h-80 w-80 rounded-full bg-[#00a000]/10 blur-3xl" />
          </div>

          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <FadeIn>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-white/70 backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-[#00a000]" />
                  Smart logistics • Pickup & Delivery
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight">
                  Smart{" "}
                  <span className="text-[#00a000]">dovoz & odvoz</span>
                  <span className="block text-white/80">bez zbytočného chaosu.</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="mt-4 text-white/70 text-base md:text-xl leading-relaxed">
                  Vyzdvihneme bicykel, spravíme servis a doručíme späť.
                  <span className="text-white/90 font-semibold">
                    {" "}
                    Ty iba vyberieš časové okno.
                  </span>
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#pickup-form"
                    className="inline-flex items-center justify-center rounded-2xl bg-[#00a000] px-7 py-4 font-semibold text-black transition hover:bg-green-600"
                  >
                    Rezervovať vyzdvihnutie
                  </a>

                  <Link
                    href="/rezervacia"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-black/15 px-7 py-4 font-semibold text-white/85 transition hover:bg-white/5 backdrop-blur-md"
                  >
                    Len servis bez dopravy
                  </Link>
                </div>
              </FadeIn>

              <FadeIn delay={0.35}>
                <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    { icon: <Clock3 className="h-4 w-4" />, t: "Časové okno", v: "podľa teba" },
                    { icon: <Route className="h-4 w-4" />, t: "Trasa", v: "optimalizovaná" },
                    { icon: <ShieldCheck className="h-4 w-4" />, t: "Transport", v: "bezpečný" },
                    { icon: <PackageCheck className="h-4 w-4" />, t: "Odovzdanie", v: "potvrdené" },
                  ].map((x, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-white/10 bg-black/15 px-4 py-3 text-sm backdrop-blur-md"
                    >
                      <div className="flex items-center gap-2 text-white/70">
                        <span className="text-[#00a000]">{x.icon}</span>
                        <span className="truncate">{x.t}</span>
                      </div>
                      <div className="mt-1 font-semibold text-white">{x.v}</div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* pravý “live flow” panel ostáva */}
            <div className="lg:w-[420px]">
              <FadeIn delay={0.2}>
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/18 p-6 backdrop-blur-md">
                  <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#00a000]/12 blur-3xl" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-white/60 uppercase tracking-wider">
                        Live flow
                      </div>
                      <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70">
                        {copy.badge}
                      </div>
                    </div>

                    <div className="mt-4 space-y-3">
                      {[
                        { k: "Vyzdvihnutie", v: "z domu / práce", ic: <MapPin className="h-4 w-4" /> },
                        { k: "Servis", v: "podľa balíka", ic: <Wrench className="h-4 w-4" /> },
                        { k: "Doručenie", v: "späť k tebe", ic: <Truck className="h-4 w-4" /> },
                      ].map((x, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/25 px-4 py-3"
                        >
                          <div className="flex items-center gap-2 text-white/75">
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
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* switch */}
          <div className="mt-10 flex flex-col items-center gap-4 text-center">
            <FadeIn delay={0.15}>
              <TabSwitch mode={mode} setMode={setMode} />
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="max-w-2xl text-white/70">
                <div className="text-sm text-white/55">{copy.kicker}</div>
                <div className="mt-1">{copy.subtitle}</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ================= FEATURE BOXES ================= */}
      <SectionShell className="py-10">
        <div className="grid gap-6 md:grid-cols-2">
          <FadeIn>
            <FeatureCard
              icon={<CalendarDays className="h-6 w-6" />}
              title="Termín bez dohadovania"
              desc="Vyberieš deň a časové okno. My ho potvrdíme a hotovo – bez ping-pongu."
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <FeatureCard
              icon={<Timer className="h-6 w-6" />}
              title="Časové okná, nie náhoda"
              desc="Ráno / obed / večer. Vyzdvihnutie aj doručenie vie byť v rovnaký deň (podľa kapacity)."
            />
          </FadeIn>

          <FadeIn delay={0.15}>
            <FeatureCard
              icon={<ShieldCheck className="h-6 w-6" />}
              title="Bezpečný transport"
              desc="Bicykel je fixovaný, chránený a preberáme ho potvrdením – aby bolo všetko čisté."
            />
          </FadeIn>

          <FadeIn delay={0.2}>
            <FeatureCard
              icon={<Phone className="h-6 w-6" />}
              title="Rýchla komunikácia"
              desc="Keď treba, ozveme sa. Keď netreba, nerušíme. Ty máš pokoj."
            />
          </FadeIn>
        </div>

        <FadeIn delay={0.25}>
          <div className="mt-6 rounded-3xl border border-white/10 bg-black/15 p-6 backdrop-blur-md">
            <div className="text-sm text-white/60 mb-3">V skratke</div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {copy.bullets.map((b, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-black/15 px-4 py-3 text-white/80"
                >
                  <span className="text-[#00a000] font-bold">✓</span> {b}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </SectionShell>

      {/* ================= AKO TO PREBIEHA ================= */}
      <SectionShell className="py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Proces, ktorý{" "}
                <span className="text-[#00a000]">nevyrušuje</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.12}>
              <p className="mt-4 text-white/70 leading-relaxed max-w-xl">
                Žiadne “prines si bicykel”. Ty riešiš svoj deň – my riešime logistiku
                a servis. Presne, čisto, bez stresu.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-6 rounded-3xl border border-white/10 bg-black/15 p-6 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl border border-[#00a000]/25 bg-[#00a000]/10 p-3">
                    <Route className="h-6 w-6 text-[#00a000]" />
                  </div>
                  <div>
                    <div className="font-semibold">Urban routing</div>
                    <div className="text-sm text-white/65">
                      Trasy optimalizujeme podľa kapacity a lokality.
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="space-y-6">
            <FadeIn delay={0.05}>
              <StepRow
                index="01"
                icon={<MapPin className="h-5 w-5" />}
                title="Zadáš adresu a okno"
                desc="Vyberieš deň, časové okno a napíšeš krátku poznámku. My potvrdíme termín."
              />
            </FadeIn>

            <FadeIn delay={0.12}>
              <StepRow
                index="02"
                icon={<Wrench className="h-5 w-5" />}
                title="Servis bez kompromisov"
                desc="Bicykel prejde kontrolou a servisom podľa zvoleného balíka alebo požiadavky."
              />
            </FadeIn>

            <FadeIn delay={0.18}>
              <StepRow
                index="03"
                icon={<Truck className="h-5 w-5" />}
                title="Doručíme späť"
                desc="Hotový bicykel doručíme späť. Keď treba, doladíme odovzdanie telefonicky."
              />
            </FadeIn>
          </div>
        </div>
      </SectionShell>

      {/* ================= FORM ================= */}
      <SectionShell className="py-16">
        <div
          id="pickup-form"
          className="relative overflow-hidden rounded-[36px] border border-white/10 bg-black/15 p-8 md:p-10 backdrop-blur-md"
        >
          <div className="pointer-events-none absolute -left-40 top-8 h-40 w-[900px] -rotate-12 bg-gradient-to-r from-[#00a000]/0 via-[#00a000]/18 to-[#00a000]/0 blur-xl" />
          <div className="pointer-events-none absolute -right-40 bottom-8 h-40 w-[900px] rotate-12 bg-gradient-to-r from-white/0 via-white/10 to-white/0 blur-xl" />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <FadeIn>
                <h3 className="text-2xl md:text-3xl font-extrabold">
                  Rezervácia{" "}
                  <span className="text-[#00a000]">vyzdvihnutia</span>
                </h3>
              </FadeIn>

              <FadeIn delay={0.1}>
                <p className="mt-3 text-white/70 leading-relaxed">
                  Zatiaľ UI (ako na /rezervacia). Neskôr: uloženie do DB, potvrdenie termínu,
                  notifikácie a status vyzdvihnutia.
                </p>
              </FadeIn>

              <FadeIn delay={0.18}>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    { ic: <CalendarDays className="h-5 w-5" />, t: "Dátum", d: "vyber deň vyzdvihnutia" },
                    { ic: <Clock3 className="h-5 w-5" />, t: "Okno", d: "ráno / obed / večer" },
                    { ic: <MapPin className="h-5 w-5" />, t: "Adresa", d: "dom / práca" },
                    { ic: <Phone className="h-5 w-5" />, t: "Kontakt", d: "pre potvrdenie" },
                  ].map((x, i) => (
                    <div key={i} className="rounded-3xl border border-white/10 bg-black/20 p-5">
                      <div className="flex items-center gap-2 text-white/80">
                        <span className="text-[#00a000]">{x.ic}</span>
                        <span className="font-semibold">{x.t}</span>
                      </div>
                      <div className="mt-1 text-sm text-white/60">{x.d}</div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.12}>
              <form className="relative rounded-3xl border border-white/10 bg-black/20 p-6 md:p-7 space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80" htmlFor="service">
                      Typ servisu
                    </label>
                    <select
                      id="service"
                      className="w-full rounded-2xl border border-white/10 bg-black/40 px-3 py-3 text-white/85 outline-none focus:border-[#00a000]/60"
                    >
                      <option>Kompletný servis</option>
                      <option>Základný servis</option>
                      <option>Brzdy</option>
                      <option>Pohon</option>
                      <option>Odpruženie</option>
                      <option>Iné</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80" htmlFor="preferredDate">
                      Dátum vyzdvihnutia
                    </label>
                    <input
                      id="preferredDate"
                      type="date"
                      className="w-full rounded-2xl border border-white/10 bg-black/40 px-3 py-3 text-white/85 outline-none focus:border-[#00a000]/60"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80" htmlFor="window">
                      Časové okno
                    </label>
                    <select
                      id="window"
                      className="w-full rounded-2xl border border-white/10 bg-black/40 px-3 py-3 text-white/85 outline-none focus:border-[#00a000]/60"
                    >
                      <option>Ráno (8:00 – 11:00)</option>
                      <option>Obed (11:00 – 15:00)</option>
                      <option>Večer (15:00 – 19:00)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80" htmlFor="bikes">
                      Počet bicyklov
                    </label>
                    <select
                      id="bikes"
                      className="w-full rounded-2xl border border-white/10 bg-black/40 px-3 py-3 text-white/85 outline-none focus:border-[#00a000]/60"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4+</option>
                    </select>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                  <label className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 accent-green-500" />
                    <span>
                      <span className="font-medium text-white/85 inline-flex items-center gap-2">
                        <Truck className="h-4 w-4 text-[#00a000]" />
                        Dovoz & odvoz bicykla
                      </span>
                      <span className="block text-sm text-white/60">
                        Vyzdvihneme a po servise doručíme späť (cenu nastavíme neskôr).
                      </span>
                    </span>
                  </label>

                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80" htmlFor="address">
                        Adresa vyzdvihnutia
                      </label>
                      <input
                        id="address"
                        className="w-full rounded-2xl border border-white/10 bg-black/40 px-3 py-3 text-white/85 outline-none focus:border-[#00a000]/60"
                        placeholder="Ulica, mesto"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80" htmlFor="phone">
                        Telefón
                      </label>
                      <input
                        id="phone"
                        className="w-full rounded-2xl border border-white/10 bg-black/40 px-3 py-3 text-white/85 outline-none focus:border-[#00a000]/60"
                        placeholder="+421 ..."
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80" htmlFor="note">
                    Poznámka
                  </label>
                  <textarea
                    id="note"
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-3 py-3 min-h-[110px] text-white/85 outline-none focus:border-[#00a000]/60"
                    placeholder="napr. brzdy pískajú, preskakuje reťaz, potrebujem rýchlo..."
                  />
                </div>

                <button
                  type="button"
                  className="w-full rounded-2xl bg-[#00a000] px-6 py-4 font-semibold text-black transition hover:bg-green-600"
                >
                  Odoslať požiadavku (UI)
                </button>

                <p className="text-xs text-white/55">
                  Neskôr: uloženie do DB, potvrdenie firmou, email notifikácie, klientsky účet.
                </p>
              </form>
            </FadeIn>
          </div>
        </div>
      </SectionShell>

      {/* ================= FINAL CTA ================= */}
      <SectionShell className="py-16 pb-24">
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-black/15 p-10 text-center backdrop-blur-md">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#00a000]/12 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-white/8 blur-3xl" />

          <FadeIn>
            <h3 className="text-3xl md:text-4xl font-extrabold">
              Nechaj logistiku na{" "}
              <span className="text-[#00a000]">nás</span>
            </h3>
          </FadeIn>

          <FadeIn delay={0.12}>
            <p className="mt-3 text-white/70 max-w-2xl mx-auto">
              Vyzdvihneme. Odservisujeme. Doručíme. Ty len jazdíš.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="#pickup-form"
                className="inline-flex items-center justify-center rounded-2xl bg-[#00a000] px-9 py-4 font-semibold text-black transition hover:bg-green-600"
              >
                Rezervovať vyzdvihnutie
              </a>

              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-black/15 px-9 py-4 font-semibold text-white/85 transition hover:bg-white/5 backdrop-blur-md"
              >
                Potrebujem rýchlo poradiť
              </Link>
            </div>
          </FadeIn>
        </div>
      </SectionShell>
    </div>
  );
}
