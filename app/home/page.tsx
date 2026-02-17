import Link from "next/link";
import PageShell from "@/components/page-shell";
import FadeIn from "@/components/FadeIn";
import StatsCounters from "@/components/StatsCounters";
import LoyaltyProgramSection from "@/components/LoyaltyProgramSection";

export const metadata = {
  title: "Servis bicyklov | Bike Signal",
  description:
    "Profesionálny servis bicyklov s kontrolou termínov a možnosťou dovozu a odvozu bicykla.",
};

export default function HomePage() {
  return (
    <PageShell>
      {/* ================= HERO (NEMENÍM OBSAH) ================= */}
      <section
        className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center text-center px-6 pt-24 md:pt-0"
        style={{
          backgroundImage: "url('/hero_bg5.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
              Servis, ktorý má kontrolu
              <span
                className="block text-[#00a000]"
                style={{
                  WebkitTextStroke: "2px black",
                  textShadow: "0 0 4px black",
                }}
              >
                nad každým kilometrom.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto">
              Rezervuj online, termín potvrdíme my. Profesionálny servis a možnosť
              vyzdvihnutia.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link
                href="/rezervacia"
                className="rounded-full bg-[#00a000] px-8 py-4 font-semibold hover:bg-green-600 transition"
              >
                Rezervovať servis
              </Link>

              <Link
                href="/pickup"
                className="rounded-full border border-white px-8 py-4 font-medium hover:bg-white/10 transition"
              >
                Chcem vyzdvihnutie
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ================= PREČO MY ================= */}
<section className="pt-0 pb-24 px-6 bg-transparent text-center relative overflow-hidden">
  <div className="max-w-6xl mx-auto">
    <FadeIn>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Prečo <span className="text-[#008000]">Bike Signal</span> ?
      </h2>
    </FadeIn>

    <div className="grid gap-10 md:grid-cols-3 auto-rows-fr">

      {/* 1️⃣ ŽLTÝ */}
      <FadeIn delay={0}>
        <div className="relative h-full rounded-3xl border border-yellow-400/50 bg-black p-10 flex flex-col items-center justify-center gap-5 transition duration-300 hover:border-yellow-400 hover:shadow-[0_0_40px_rgba(250,204,21,0.35)]">

          <div className="absolute inset-0 rounded-3xl bg-yellow-400/10 blur-2xl"></div>

          <div className="relative text-4xl text-yellow-400">
            ★
          </div>

          <h3 className="relative text-lg font-semibold">
            Certifikovaný servis
          </h3>

          <p className="relative text-white/60 text-sm max-w-xs">
            Odborné know-how, overené postupy a čistá práca.
          </p>
        </div>
      </FadeIn>


      {/* 2️⃣ ORANŽOVÝ */}
      <FadeIn delay={0.15}>
        <div className="relative h-full rounded-3xl border border-orange-500/50 bg-black p-10 flex flex-col items-center justify-center gap-5 transition duration-300 hover:border-orange-500 hover:shadow-[0_0_40px_rgba(249,115,22,0.35)]">

          <div className="absolute inset-0 rounded-3xl bg-orange-500/10 blur-2xl"></div>

          <div className="relative text-4xl text-orange-500">
            ✓
          </div>

          <h3 className="relative text-lg font-semibold">
            Kontrola termínov
          </h3>

          <p className="relative text-white/60 text-sm max-w-xs">
            Termín potvrdzuje servis – žiadny chaos, žiadne sľuby do vetra.
          </p>
        </div>
      </FadeIn>


      {/* 3️⃣ ČERVENÝ */}
      <FadeIn delay={0.3}>
        <div className="relative h-full rounded-3xl border border-red-600/50 bg-black p-10 flex flex-col items-center justify-center gap-5 transition duration-300 hover:border-red-600 hover:shadow-[0_0_40px_rgba(220,38,38,0.35)]">

          <div className="absolute inset-0 rounded-3xl bg-red-600/10 blur-2xl"></div>

          <div className="relative text-4xl text-red-600">
            🚚
          </div>

          <h3 className="relative text-lg font-semibold">
            Komfort bez starostí
          </h3>

          <p className="relative text-white/60 text-sm max-w-xs">
            Vyzdvihnutie / doručenie bicykla – keď nestíhaš, vybavíme to.
          </p>
        </div>
      </FadeIn>

    </div>
  </div>
</section>


      {/* ================= BIKE SIGNAL SYSTÉM (STRAVA + BENEFITY + CTA) ================= */}
      <section className="py-24 px-6 bg-transparent">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <FadeIn>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Bike Signal <span className="text-[#00a000]">systém</span> <br />
                servis, ktorý myslí dopredu
              </h2>

              <p className="text-white/70 text-lg leading-relaxed max-w-xl">
                Prepojíme účet so Stravou a postaráme sa o servisný režim za teba.
                Žiadne “ups, už to klepe”. Dostaneš kontrolu, servisnú históriu a
                výhody, ktoré bežný servis nemá.
              </p>

              <div className="grid gap-3 text-white/80">
                {[
                  "Online servisná kniha – história servisov a komponentov",
                  "Automatická notifikácia na servis podľa najazdených km (Strava)",
                  "Vernostný program – zľavy a benefity za aktivitu",
                  "Smart rezervácie – termíny bez chaosu a čakania",
                  "Preferenčné ceny / priority pre registrovaných",
                ].map((t, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#00a000]" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/registracia"
                  className="inline-flex items-center justify-center rounded-full bg-[#00a000] text-black px-8 py-4 font-semibold hover:bg-green-600 transition"
                >
                  Vytvoriť účet zdarma
                </Link>

                <Link
                  href="/o-nas"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 font-semibold text-white/90 hover:bg-white/5 transition"
                >
                  Prečo sa registrovať?
                </Link>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 overflow-hidden">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#00a000]/20 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#00a000]/10 blur-3xl" />

              <div className="relative space-y-6">
                <div className="text-white/60 text-sm uppercase tracking-wider">
                  Prepojenie so Stravou
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { k: "Servisné alerty", v: "automaticky" },
                    { k: "Servisná kniha", v: "online" },
                    { k: "Zľavy", v: "vernostne" },
                    { k: "Termíny", v: "smart" },
                  ].map((x, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-white/10 bg-black/40 p-5"
                    >
                      <div className="text-white/60 text-sm">{x.k}</div>
                      <div className="text-xl font-bold text-white mt-1">
                        <span className="text-[#00a000]">{x.v}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-[#00a000]/30 bg-black/40 p-5">
                  <div className="text-white/70">
                    *Tu môže ísť tvoja custom grafika (napr. “meter km”, chain, signal waves).*
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      
      <StatsCounters />
      
      {/* ================= DOVOZ / ODVOZ (NOVÁ SEKČIA - KONKURENČNÝ BENEFIT) ================= */}
      <section className="py-24 px-6 bg-transparent">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <FadeIn>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Dovoz / odvoz <span className="text-[#00a000]">bicykla</span> <br />
                keď ty nestíhaš, my to vyriešime
              </h2>

              <p className="text-white/70 text-lg leading-relaxed max-w-xl">
                Konkurencia ti povie “prines si bicykel”. Bike Signal povie:
                <span className="text-white font-semibold"> “daj adresu”</span>.
                Vyzdvihneme, odservisujeme, doručíme späť. Hotovo.
              </p>

              <div className="grid gap-3 text-white/80">
                {[
                  "Vyzdvihnutie doma / v práci",
                  "Bezpečný transport",
                  "Doručenie po servise",
                  "Ideálne pre vyťažených jazdcov",
                ].map((t, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#00a000]" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/pickup"
                  className="inline-flex items-center justify-center rounded-full bg-[#00a000] text-black px-8 py-4 font-semibold hover:bg-green-600 transition"
                >
                  Objednať vyzdvihnutie
                </Link>

                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 font-semibold text-white/90 hover:bg-white/5 transition"
                >
                  Chcem to vyriešiť rýchlo
                </Link>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 overflow-hidden">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#00a000]/20 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#00a000]/10 blur-3xl" />

              <div className="relative space-y-4">
                <div className="text-white/60 text-sm uppercase tracking-wider">
                  Ako to prebieha
                </div>

                <div className="grid gap-4">
                  {[
                    { k: "1. Vyzdvihneme", v: "kdekoľvek v okolí" },
                    { k: "2. Servis", v: "rýchlo a presne" },
                    { k: "3. Doručíme", v: "späť k tebe" },
                  ].map((x, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-white/10 bg-black/40 p-5 flex items-center justify-between"
                    >
                      <div className="text-white font-semibold">{x.k}</div>
                      <div className="text-white/70">{x.v}</div>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-[#00a000]/30 bg-black/40 p-5">
                  <div className="text-white/70">
                    *Sem môžeš časom dať aj foto auta/dodávky alebo tvoju custom grafiku.*
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      
      <LoyaltyProgramSection /> 

      {/* ================= SLUŽBY (OBRÁZKY servis1.png + servis2.png) ================= */}
      <section className="py-24 px-6 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <FadeIn>
              <div>
                <h2 className="text-3xl font-bold">
                  Naše <span className="text-[#008000]">služby</span>
                </h2>
                <p className="text-white/60 mt-2">
                  Profesionálne servisné balíky a špecializované práce.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <Link
                href="/servis"
                className="self-start md:self-auto inline-flex items-center gap-2 bg-orange-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition"
              >
                Celá ponuka <span aria-hidden>→</span>
              </Link>
            </FadeIn>
          </div>

          <div className="space-y-24">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <FadeIn>
                <img
                  src="/servis1.png"
                  alt="Kompletný servis bicykla"
                  className="w-full h-[360px] md:h-[520px] object-cover rounded-2xl"
                />
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="space-y-5">
                  <div className="text-white/50 text-sm uppercase tracking-wider">
                    Bicykle
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold">
                    Kompletný <span className="text-[#00a000]">servis</span>
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    Detailná kontrola, nastavenie, diagnostika a precízne doladenie.
                    Servis, ktorý ti dá istotu – nie len “nejako to ide”.
                  </p>
                  <Link
                    href="/servis"
                    className="inline-flex items-center gap-2 text-[#00a000] font-semibold hover:gap-3 transition-all"
                  >
                    Zisti viac →
                  </Link>
                </div>
              </FadeIn>
            </div>

            <div className="grid md:grid-cols-2 gap-14 items-center">
              <FadeIn delay={0.2} className="order-2 md:order-1">
                <div className="space-y-5">
                  <div className="text-white/50 text-sm uppercase tracking-wider">
                    Odpruženie
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold">
                    Tlmiče & <span className="text-[#00a000]">vidlice</span>
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    Servis odpruženia podľa intervalov. Keď to funguje správne,
                    bicykel drží stopu a ty ideš rýchlejšie.
                  </p>
                  <Link
                    href="/servis"
                    className="inline-flex items-center gap-2 text-[#00a000] font-semibold hover:gap-3 transition-all"
                  >
                    Zisti viac →
                  </Link>
                </div>
              </FadeIn>

              <FadeIn className="order-1 md:order-2">
                <img
                  src="/servis2.png"
                  alt="Servis tlmičov a vidlíc"
                  className="w-full h-[360px] md:h-[520px] object-cover rounded-2xl"
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ================= AKO TO FUNGUJE ================= */}
      <section className="py-24 px-6 bg-transparent text-center">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Ako funguje <span className="text-[#008000]">rezervácia</span> ?
            </h2>
          </FadeIn>

          <div className="grid gap-10 md:grid-cols-3 auto-rows-fr">
            {[
              {
                number: "I.",
                title: "Vyplníš formulár",
                desc: "Vyberieš službu a odošleš požiadavku online.",
              },
              {
                number: "II.",
                title: "Potvrdíme termín",
                desc: "Ozveme sa s konkrétnym dátumom servisu.",
              },
              {
                number: "III.",
                title: "Servis hotový",
                desc: "Bicykel prevezmeš alebo ho doručíme.",
              },
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 0.15}>
                <div className="h-full rounded-3xl border border-white/10 bg-black p-10 flex flex-col items-center justify-center gap-5 hover:border-[#00a000]/60 transition">
                  <div className="text-2xl font-bold text-[#00a000]">
                    {item.number}
                  </div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-white/60 text-sm max-w-xs">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 bg-transparent text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold">
              Pripravený na sezónu?
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-white/60">Pošli požiadavku a termín ti potvrdíme.</p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <Link
              href="/rezervacia"
              className="inline-block rounded-full bg-[#00a000] px-10 py-4 font-semibold hover:bg-green-600 transition"
            >
              Rezervovať teraz
            </Link>
          </FadeIn>
        </div>
      </section>
    </PageShell>
  );
}
