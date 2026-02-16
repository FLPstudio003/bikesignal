import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">

      {/* ================= HORNÁ CTA ČASŤ ================= */}
      <div className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold">
            Servis bez chaosu. <span className="text-[#00a000]">Kontrola nad kilometrami.</span>
          </h3>

          <p className="text-white/60 max-w-2xl mx-auto">
            Rezervuj online alebo si nechaj bicykel vyzdvihnúť.
            Bike Signal robí servis moderne.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link
              href="/rezervacia"
              className="rounded-full bg-[#00a000] text-black px-8 py-4 font-semibold hover:bg-green-600 transition"
            >
              Rezervovať servis
            </Link>

            <Link
              href="/registracia"
              className="rounded-full border border-white/20 px-8 py-4 font-semibold hover:bg-white/5 transition"
            >
              Vytvoriť účet zdarma
            </Link>
          </div>
        </div>
      </div>

      {/* ================= HLAVNÁ FOOTER ČASŤ ================= */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-14">

        {/* LOGO + TEXT */}
        <div className="space-y-5">
          <div className="text-xl text-[#008000] font-bold tracking-wide">
            BIKE SIGNAL
          </div>

          <p className="text-white/60 text-sm leading-relaxed">
            Moderný servis bicyklov s kontrolou termínov,
            online servisnou knihou a dovozom / odvozom.
          </p>

          <div className="text-white/40 text-xs">
            © {new Date().getFullYear()} Bike Signal s.r.o.
          </div>
        </div>

        {/* SLUŽBY */}
        <div className="space-y-5">
          <h4 className="font-semibold text-yellow-400">Služby</h4>

          <div className="flex flex-col gap-3 text-white/60 text-sm">
            <Link href="/servis" className="hover:text-yellow-400 transition">
              Kompletný servis
            </Link>
            <Link href="/servis" className="hover:text-yellow-400 transition">
              Tlmiče & vidlice
            </Link>
            <Link href="/pickup" className="hover:text-yellow-400 transition">
              Dovoz / Odvoz
            </Link>
            <Link href="/certifikaty" className="hover:text-yellow-400 transition">
              Certifikáty
            </Link>
          </div>
        </div>

        {/* SYSTÉM */}
        <div className="space-y-5">
          <h4 className="font-semibold text-orange-500">Bike Signal systém</h4>

          <div className="flex flex-col gap-3 text-white/60 text-sm">
            <Link href="/registracia" className="hover:text-orange-500 transition">
              Registrácia
            </Link>
            <Link href="/o-nas" className="hover:text-orange-500 transition">
              Prečo sa registrovať
            </Link>
            <Link href="/faq" className="hover:text-orange-500 transition">
              Časté otázky
            </Link>
          </div>
        </div>

        {/* KONTAKT */}
        <div className="space-y-5">
          <h4 className="font-semibold text-red-600">Kontakt</h4>

          <div className="flex flex-col gap-3 text-white/60 text-sm">
            <div>
              <div className="text-white/40">Email</div>
              <a href="mailto:info@bikesignal.sk" className="hover:text-red-600 transition">
                info@bikesignal.sk
              </a>
            </div>

            <div>
              <div className="text-white/40">Telefón</div>
              <a href="tel:+421900000000" className="hover:text-red-600 transition">
                +421 912 345 678
              </a>
            </div>

            <div>
              <div className="text-white/40">Prevádzka</div>
              <div>Šafárikova 6, 048 01 Rožňava</div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SPODNÝ BAR ================= */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-white/40 text-sm gap-4">
          
          <div className="flex gap-6">
            <Link href="/gdpr" className="hover:text-white transition">
              Ochrana údajov
            </Link>
            <Link href="/obchodne-podmienky" className="hover:text-white transition">
              Obchodné podmienky
            </Link>
            <Link href="/cookies" className="hover:text-white transition">
              Cookies
            </Link>
          </div>

          <div>
            Created by FLPstudio.sk
          </div>

        </div>
      </div>

    </footer>
  );
}
