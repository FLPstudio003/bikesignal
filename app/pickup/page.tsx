import Link from "next/link";
import PageShell from "@/components/page-shell";
import FadeIn from "@/components/FadeIn";

export default function PickupPage() {
  return (
    <PageShell>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-black via-[#050805] to-black py-32 px-6 text-center">

        {/* Glow layers */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#00ff66]/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-0 right-[-200px] w-[600px] h-[600px] bg-[#00ff66]/5 blur-[160px] rounded-full" />

        {/* Background big text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <div className="text-[140px] md:text-[220px] font-extrabold text-white/5 tracking-widest">
            PICKUP
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white">
              Dovoz / odvoz <span className="text-[#00ff66]">bicykla</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-white/70 text-lg md:text-xl">
              Nemáš čas? Nechceš riešiť logistiku?  
              My prídeme, vyzdvihneme, servisujeme a doručíme späť.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <Link
              href="/rezervacia"
              className="inline-block rounded-full bg-[#00ff66] text-black px-10 py-4 font-semibold shadow-[0_0_40px_rgba(0,255,100,0.3)] hover:shadow-[0_0_70px_rgba(0,255,100,0.6)] transition-all duration-300"
            >
              Rezervovať s dopravou
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ================= AKO TO FUNGUJE ================= */}
      <section className="relative py-28 px-6 bg-[#050805] overflow-hidden">

        {/* Side gradient panel */}
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#00ff66]/5 to-transparent pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Ako to <span className="text-[#00ff66]">funguje</span> ?
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                title: "Vyzdvihneme",
                desc: "V rezervácii zadáš adresu a potvrdíme termín vyzdvihnutia."
              },
              {
                title: "Servis",
                desc: "Bike prejde profesionálnym servisom podľa zvoleného balíka."
              },
              {
                title: "Doručíme späť",
                desc: "Hotový bicykel privezieme späť v dohodnutom čase."
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.2}>
                <div className="relative rounded-3xl bg-gradient-to-b from-[#0a0f0a] to-black p-10 border border-white/10 shadow-[0_0_40px_rgba(0,255,100,0.05)] hover:shadow-[0_0_60px_rgba(0,255,100,0.2)] transition-all duration-300">

                  <div className="text-5xl font-extrabold text-[#00ff66]/20 absolute top-6 right-6">
                    0{i + 1}
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">
                    {item.title}
                  </h3>

                  <p className="text-white/60">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRE KOHO ================= */}
      <section className="relative py-28 px-6 bg-black overflow-hidden">

        <div className="absolute -left-32 top-1/3 w-[500px] h-[500px] bg-[#00ff66]/10 blur-[140px] rounded-full" />

        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <FadeIn>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Pre koho je to <span className="text-[#00ff66]">ideálne</span>
              </h2>

              <ul className="space-y-4 text-white/70 text-lg">
                <li>✔️ Vyťažení ľudia bez času</li>
                <li>✔️ Rodiny s viacerými bicyklami</li>
                <li>✔️ Firemné flotily / bike room</li>
                <li>✔️ Keď chceš komfort bez starostí</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="rounded-3xl border border-[#00ff66]/20 bg-gradient-to-b from-[#0a0f0a] to-black p-10 shadow-[0_0_60px_rgba(0,255,100,0.15)]">
              <div className="text-sm uppercase tracking-widest text-white/40 mb-4">
                Smart systém
              </div>

              <p className="text-white/70 leading-relaxed">
                V budúcnosti: sledovanie stavu vyzdvihnutia, notifikácie,
                história transportov a prepojenie so servisnou knihou.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ================= CENNÍK ================= */}
      <section className="relative py-28 px-6 bg-[#050805] text-center overflow-hidden">

        <div className="absolute inset-0 flex items-center justify-center text-[200px] font-extrabold text-white/3 pointer-events-none">
          DELIVERY
        </div>

        <div className="relative max-w-4xl mx-auto space-y-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold">
              Cena <span className="text-[#00ff66]">dopravy</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="text-6xl md:text-8xl font-extrabold text-[#00ff66] drop-shadow-[0_0_30px_rgba(0,255,100,0.6)]">
              od 15€
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-white/60">
              Presná cena závisí od vzdialenosti a počtu bicyklov.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 px-6 bg-black text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Nechaj logistiku na <span className="text-[#00ff66]">nás</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.3}>
          <Link
            href="/rezervacia"
            className="inline-block rounded-full bg-[#00ff66] text-black px-12 py-5 font-semibold text-lg shadow-[0_0_50px_rgba(0,255,100,0.4)] hover:shadow-[0_0_80px_rgba(0,255,100,0.7)] transition-all duration-300"
          >
            Objednať vyzdvihnutie
          </Link>
        </FadeIn>
      </section>
    </PageShell>
  );
}
