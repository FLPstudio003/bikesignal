import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/page-shell";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Certifikáty | Bike Signal",
  description:
    "Certifikovaný servis bicyklov. Odbornosť, partnerstvá a značky, ktorým dôverujeme.",
};

export default function CertifikatyPage() {
  return (
    <PageShell>
      <main className="bg-black text-white overflow-hidden">

        {/* ================= HERO ================= */}
        <section className="relative py-32 px-6 text-center">

          {/* glow */}
          <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-[#00a000]/20 rounded-full blur-[140px]" />
          <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-[#00a000]/10 rounded-full blur-[140px]" />

          <div className="relative max-w-4xl mx-auto space-y-6">
            <FadeIn>
              <h1 className="text-4xl md:text-6xl font-extrabold">
                Certifikovaný <span className="text-[#00a000]">servis</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Odbornosť nie je marketing. Je to proces, skúsenosť a dôvera.
                Bike Signal pracuje podľa oficiálnych štandardov výrobcov.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ================= CERTIFIKÁTY ================= */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">

            {[
              { title: "Shimano Service Center", image: "/cert1.png" },
              { title: "RockShox Suspension", image: "/cert2.png" },
              { title: "SRAM Certified", image: "/cert3.png" },
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 0.15}>
                <div className="relative rounded-3xl border border-white/10 bg-black/60 backdrop-blur-xl p-10 text-center transition duration-300 hover:border-[#00a000]/60 hover:shadow-[0_0_40px_rgba(0,160,0,0.3)]">

                  {/* glow hover */}
                  <div className="absolute inset-0 rounded-3xl bg-[#00a000]/5 opacity-0 hover:opacity-100 transition duration-300 blur-2xl" />

                  <div className="relative space-y-6">
                    <div className="flex justify-center">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={220}
                        height={160}
                        className="object-contain h-32 w-auto"
                      />
                    </div>

                    <h3 className="text-lg font-semibold">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </FadeIn>
            ))}

          </div>
        </section>

        {/* ================= PARTNERI ================= */}
        <section className="py-24 px-6 border-t border-white/5">
          <div className="max-w-6xl mx-auto space-y-12 text-center">

            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold">
                Partneri & <span className="text-[#00a000]">značky</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-70">

                {[
                  "/brand1.png",
                  "/brand2.png",
                  "/brand3.png",
                  "/brand4.png",
                ].map((logo, i) => (
                  <div key={i} className="flex justify-center">
                    <Image
                      src={logo}
                      alt="Partner logo"
                      width={160}
                      height={80}
                      className="object-contain h-12 w-auto grayscale hover:grayscale-0 transition duration-300"
                    />
                  </div>
                ))}

              </div>
            </FadeIn>
          </div>
        </section>

        {/* ================= PREČO JE TO DÔLEŽITÉ ================= */}
        <section className="py-24 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center space-y-6">

            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold">
                Prečo je to dôležité?
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-white/70 text-lg leading-relaxed">
                Certifikovaný servis znamená správne postupy, originálne diely,
                pravidelné školenia a technickú podporu od výrobcov.
                Tvoj bicykel si zaslúži presnosť, nie experiment.
              </p>
            </FadeIn>

          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-24 px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">

            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold">
                Zver svoj bicykel do rúk odborníkom.
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Link
                href="/rezervacia"
                className="inline-block rounded-full bg-[#00a000] px-10 py-4 font-semibold text-black hover:bg-green-600 transition"
              >
                Rezervovať servis
              </Link>
            </FadeIn>

          </div>
        </section>

      </main>
    </PageShell>
  );
}
