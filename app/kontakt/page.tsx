import FadeIn from "@/components/FadeIn";
import PageShell from "@/components/page-shell";

export const metadata = {
  title: "Kontakt | Bike Signal",
  description:
    "Kontaktuj Bike Signal – servis bicyklov, rezervácie a dovoz / odvoz.",
};

export default function KontaktPage() {
  return (
    <PageShell>
      <main className="pt-24 pb-24 px-6 bg-black">

        {/* ================= HLAVIČKA ================= */}
        <section className="max-w-6xl mx-auto text-center mb-20">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kontaktuj <span className="text-[#00a000]">Bike Signal</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-white/60 max-w-2xl mx-auto">
              Máš otázku, chceš rezervovať servis alebo potrebuješ vyzdvihnutie?
              Ozvi sa nám – odpovieme rýchlo.
            </p>
          </FadeIn>
        </section>

        {/* ================= KONTAKT + OTVÁRACIE ================= */}
        <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mb-20">

          {/* KONTAKT */}
          <FadeIn>
            <div className="rounded-3xl border border-white/10 bg-black p-10 space-y-6">
              <h2 className="text-xl font-semibold text-[#008000]">Kontakt</h2>

              <div className="space-y-3 text-white/80">
                <div>
                  <span className="text-yellow-400">Telefón:</span><br />
                  +421 58/733 16 90
                </div>

                <div>
                  <span className="text-orange-500">Email:</span><br />
                  bikesignal@gmail.com
                </div>

                <div>
                  <span className="text-red-600">Adresa:</span><br />
                  Šafárikova 375/6<br />
                  048 01 Rožňava
                </div>
              </div>
            </div>
          </FadeIn>

          {/* OTVÁRACIE HODINY */}
          <FadeIn delay={0.2}>
            <div className="rounded-3xl border border-white/10 bg-black p-10 space-y-6">
              <h2 className="text-xl font-semibold text-[#00a000]">
                Otváracie hodiny
              </h2>

              <div className="space-y-2 text-white/80">
                <div>Pon – Pia: 8:00 – 17:00</div>
                <div>So: 8:30 - 12:30</div>
                <div>Ne: <span className="text-red-600">ZATVORENÉ</span></div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ================= MAPA ================= */}
        <section className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="rounded-3xl overflow-hidden border-2 border-[#00a000]">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d658.8276957211816!2d20.531486272491442!3d48.66129882713459!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473faf81cf421341%3A0xb926fb48da5a77ec!2sBicykle%20Signal%20s.r.o.!5e0!3m2!1ssk!2sus!4v1771852306890!5m2!1ssk!2sus"
                width="100%"
                height="450"
                loading="lazy"
                className="w-full"
              ></iframe>

            </div>
          </FadeIn>
        </section>

      </main>
    </PageShell>
  );
}
