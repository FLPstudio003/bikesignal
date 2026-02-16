import Link from "next/link";
import PageShell from "@/components/page-shell";
import FadeIn from "@/components/FadeIn";

export default function ServisPage() {
  return (
    <PageShell>
      {/* ================= HERO ================= */}
      <section className="relative py-32 px-6 bg-black text-center overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#00a000]/10 blur-[140px] rounded-full" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#00a000]/5 blur-[140px] rounded-full" />

        <div className="relative max-w-4xl mx-auto space-y-6">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-extrabold">
              Profesionálny <span className="text-[#00a000]">servis</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Servis bicyklov, odpruženia aj sezónneho vybavenia.
              Vyber si balíček alebo konkrétnu službu.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ================= BALÍČKY ================= */}
      <section className="py-28 px-6 bg-black">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold">
              Servisné <span className="text-[#00a000]">balíčky</span>
            </h2>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              name: "Malý servis",
              price: "35€",
              desc: "Základná kontrola, doťah, nastavenie bŕzd a prehadzovačky.",
            },
            {
              name: "Stredný servis",
              price: "75€",
              desc: "Kompletná kontrola, čistenie pohonu, mazanie, nastavenie.",
              highlight: true,
            },
            {
              name: "Veľký servis",
              price: "120€",
              desc: "Detailná diagnostika, rozobratie, čistenie a výmena dielov.",
            },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div
                className={`relative rounded-3xl p-10 border transition-all duration-500 ${
                  item.highlight
                    ? "border-[#00a000] bg-gradient-to-b from-[#00a000]/10 to-black scale-105"
                    : "border-white/10 bg-black"
                } hover:border-[#00a000]`}
              >
                {item.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00a000] text-black text-xs font-bold px-4 py-1 rounded-full">
                    Najpopulárnejší
                  </div>
                )}

                <div className="text-2xl font-bold mb-6">{item.name}</div>

                <div className="text-5xl font-extrabold text-[#00ff66] drop-shadow-[0_0_25px_rgba(0,255,100,0.5)] mb-6">
                  {item.price}
                </div>

                <p className="text-white/60 mb-8">{item.desc}</p>

                <Link
                  href="/rezervacia"
                  className="block w-full text-center rounded-full bg-[#00a000] text-black py-3 font-semibold hover:bg-green-600 transition"
                >
                  Vybrať balíček
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ================= LETO ================= */}
      <section className="py-28 px-6 bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-16">
              Letná sezóna <span className="text-[#00a000]">– Bicykle</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Kompletný servis bicykla",
              "Základný servis",
              "Brzdy – výmena, odvzdušnenie",
              "Pohon – reťaz, kazeta, prevodníky",
              "Centrovanie kolies",
              "Bezdušové systémy",
              "Diagnostika rámu",
              "Servis tlmičov a vidlíc",
              "Montáž doplnkov",
            ].map((service, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="group rounded-2xl border border-white/10 p-6 hover:border-[#00a000] transition relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#00a000]/0 group-hover:bg-[#00a000]/5 transition" />
                  <div className="relative text-white/80 group-hover:text-white transition">
                    {service}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ZIMA ================= */}
      <section className="py-28 px-6 bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-16">
              Zimná sezóna <span className="text-[#00a000]">– Lyže, Snowboard, Korčule</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Brúsenie hrán",
              "Voskovanie sklznice",
              "Kompletný ski servis",
              "Nastavenie viazania",
              "Oprava sklznice",
              "Snowboard servis",
              "Servis korčúľ",
              "Výmena dielov",
              "Sezónna kontrola vybavenia",
            ].map((service, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="group rounded-2xl border border-white/10 p-6 hover:border-[#00a000] transition relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#00a000]/0 group-hover:bg-[#00a000]/5 transition" />
                  <div className="relative text-white/80 group-hover:text-white transition">
                    {service}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PICKUP CTA ================= */}
      <section className="py-32 px-6 bg-black text-center border-t border-white/10">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Nemáš čas prísť?
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-white/60 mb-8">
            Ponúkame dovoz a odvoz bicykla alebo sezónneho vybavenia.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <Link
            href="/pickup"
            className="inline-block rounded-full bg-[#00ff66] text-black px-10 py-4 font-semibold hover:scale-105 transition"
          >
            Objednať vyzdvihnutie
          </Link>
        </FadeIn>
      </section>

      {/* ================= REZERVÁCIA CTA ================= */}
      <section className="py-32 px-6 bg-black text-center border-t border-white/10">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Pripravený?
          </h2>
        </FadeIn>

        <FadeIn delay={0.3}>
          <Link
            href="/rezervacia"
            className="inline-block rounded-full bg-[#00a000] px-12 py-4 font-semibold hover:bg-green-600 transition"
          >
            Rezervovať servis
          </Link>
        </FadeIn>
      </section>
    </PageShell>
  );
}
