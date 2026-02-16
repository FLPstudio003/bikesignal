import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/page-shell";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "O nás | Bike Signal",
  description:
    "Bike Signal je moderný servis bicyklov s kontrolou termínov, online systémom a dovozom bicykla.",
};

export default function ONasPage() {
  return (
    <PageShell>
      <main className="bg-black text-white overflow-hidden">

        {/* ================= HERO ================= */}
        <section className="relative py-32 px-6 text-center">

          <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-[#00a000]/20 rounded-full blur-[140px]" />
          <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-[#00a000]/10 rounded-full blur-[140px]" />

          <div className="relative max-w-4xl mx-auto space-y-6">
            <FadeIn>
              <h1 className="text-4xl md:text-6xl font-extrabold">
                Servis novej <span className="text-[#00a000]">generácie</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Bike Signal vznikol z frustrácie z chaosu, nejasných termínov
                a servisov bez systému. My sme to chceli robiť inak.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ================= PRÍBEH ================= */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

            <FadeIn>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Prečo vznikol <span className="text-[#00a000]">Bike Signal</span>?
                </h2>

                <p className="text-white/70 leading-relaxed text-lg">
                  Cyklistika je o pocite kontroly, presnosti a spoľahlivosti.
                  Servis by mal byť rovnaký. Žiadne „možno zajtra“, žiadne
                  „uvidíme“. Len jasný proces a systém.
                </p>

                <p className="text-white/60 leading-relaxed">
                  Preto sme vytvorili servis, ktorý má kontrolu nad termínmi,
                  eviduje históriu, komunikuje jasne a ponúka aj dovoz / odvoz
                  bicykla.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src="/about_image.png"
                  alt="Bike Signal servis"
                  width={800}
                  height={600}
                  className="object-cover w-full h-[400px]"
                />
              </div>
            </FadeIn>

          </div>
        </section>

        {/* ================= HODNOTY ================= */}
        <section className="py-24 px-6 border-t border-white/5">
          <div className="max-w-6xl mx-auto space-y-16">

            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                Naše hodnoty
              </h2>
            </FadeIn>

            <div className="grid gap-10 md:grid-cols-3">

              {[
                {
                  title: "Kontrola",
                  desc: "Termíny, procesy a komunikácia majú jasné pravidlá.",
                },
                {
                  title: "Presnosť",
                  desc: "Servis podľa štandardov výrobcov, nie od oka.",
                },
                {
                  title: "Modernosť",
                  desc: "Online rezervácie, systém, prepojenie so Stravou.",
                },
              ].map((item, index) => (
                <FadeIn key={index} delay={index * 0.15}>
                  <div className="relative rounded-3xl border border-white/10 bg-black/60 backdrop-blur-xl p-10 text-center transition duration-300 hover:border-[#00a000]/60 hover:shadow-[0_0_40px_rgba(0,160,0,0.3)]">

                    <div className="absolute inset-0 rounded-3xl bg-[#00a000]/5 opacity-0 hover:opacity-100 transition duration-300 blur-2xl" />

                    <div className="relative space-y-4">
                      <h3 className="text-xl font-semibold">
                        {item.title}
                      </h3>
                      <p className="text-white/60">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}

            </div>
          </div>
        </section>

        {/* ================= DÔVERA ================= */}
        <section className="py-24 px-6 border-t border-white/5 text-center">
          <div className="max-w-4xl mx-auto space-y-6">

            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold">
                Dôvera sa buduje systémom.
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-white/70 text-lg leading-relaxed">
                Bike Signal nie je len servis. Je to dlhodobý partner pre tvoj bicykel.
                Sledujeme servisnú históriu, intervaly a komunikujeme transparentne.
              </p>
            </FadeIn>

          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-24 px-6 text-center border-t border-white/5">
          <div className="max-w-3xl mx-auto space-y-8">

            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold">
                Pripravený vyskúšať servis novej generácie?
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/rezervacia"
                  className="rounded-full bg-[#00a000] px-8 py-4 font-semibold text-black hover:bg-green-600 transition"
                >
                  Rezervovať servis
                </Link>

                <Link
                  href="/kontakt"
                  className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white/90 hover:bg-white/5 transition"
                >
                  Kontaktovať nás
                </Link>
              </div>
            </FadeIn>

          </div>
        </section>

      </main>
    </PageShell>
  );
}
