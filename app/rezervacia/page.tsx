import PageShell from "@/components/page-shell";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Rezervácia servisu | Bike Signal",
  description:
    "Online rezervácia servisu bicykla. Vyber službu, pošli požiadavku a termín ti potvrdíme.",
};

export default function ReservationPage() {
  return (
    <PageShell>
      <main className="relative bg-black px-6 py-24 overflow-hidden">
        {/* jemné background glowy */}
        <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-[#00a000]/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-[#00a000]/5 blur-[140px] rounded-full" />

        <div className="relative max-w-4xl mx-auto">

          {/* ===== HLAVIČKA ===== */}
          <FadeIn>
            <div className="text-center mb-14">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Rezervácia <span className="text-[#00a000]">servisu</span>
              </h1>
              <p className="text-white/60 max-w-2xl mx-auto">
                Pošli požiadavku online. Termín ti potvrdíme manuálne – žiadny chaos,
                žiadne prebookovanie.
              </p>
            </div>
          </FadeIn>

          {/* ===== FORM CARD ===== */}
          <FadeIn delay={0.2}>
            <form className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-10 space-y-8 shadow-[0_0_60px_rgba(0,160,0,0.05)]">

              {/* Typ servisu + dátum */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">
                    Typ servisu
                  </label>
                  <select className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 focus:outline-none focus:border-[#00a000] transition">
                    <option>Kompletný servis</option>
                    <option>Základný servis</option>
                    <option>Brzdy</option>
                    <option>Pohon</option>
                    <option>Odpruženie</option>
                    <option>Iné</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">
                    Preferovaný dátum
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 focus:outline-none focus:border-[#00a000] transition"
                  />
                </div>
              </div>

              {/* Poznámka */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">
                  Poznámka
                </label>
                <textarea
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-4 min-h-[140px] focus:outline-none focus:border-[#00a000] transition"
                  placeholder="napr. prehadzovačka preskakuje, brzdy pískajú..."
                />
              </div>

              {/* ===== DOVOZ SEKČIA ===== */}
              <div className="rounded-2xl border border-[#00a000]/20 bg-black/40 p-6 space-y-6">

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 accent-[#00a000]"
                  />
                  <span>
                    <span className="font-semibold text-white">
                      Dovoz & odvoz bicykla
                    </span>
                    <span className="block text-sm text-white/60">
                      Prídeme po bike a doručíme späť. Ideálne keď nestíhaš.
                    </span>
                  </span>
                </label>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">
                      Adresa vyzdvihnutia
                    </label>
                    <input
                      className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 focus:outline-none focus:border-[#00a000] transition"
                      placeholder="Ulica, mesto"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">
                      Telefón
                    </label>
                    <input
                      className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 focus:outline-none focus:border-[#00a000] transition"
                      placeholder="+421 ..."
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="button"
                  className="w-full rounded-full bg-[#00a000] px-8 py-4 font-semibold text-black hover:bg-green-500 transition shadow-[0_0_30px_rgba(0,160,0,0.4)]"
                >
                  Odoslať požiadavku
                </button>
              </div>

              <p className="text-xs text-white/40 text-center">
                Po odoslaní ti termín manuálne potvrdíme emailom alebo telefonicky.
              </p>
            </form>
          </FadeIn>
        </div>
      </main>
    </PageShell>
  );
}
