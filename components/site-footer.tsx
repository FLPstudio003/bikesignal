import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white">

      {/* 🔥 HORNÁ FAREBNÁ HRANA */}
      <div className="h-[3px] w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600" />

      {/* ================= HLAVNÁ FOOTER ČASŤ ================= */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-14">

        {/* LOGO + TEXT */}
        <div className="space-y-5">

          {/* 🔥 LOGO miesto textu */}
          <div className="relative w-44 h-12">
            <Image
              src="/footer_logo-01.png"
              alt="Bike Signal logo"
              fill
              className="object-contain"
            />
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
          <h4 className="font-semibold text-orange-500">
            Bike Signal systém
          </h4>

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
              <a
                href="mailto:info@bikesignal.sk"
                className="hover:text-red-600 transition"
              >
                bikesignal@gmail.com
              </a>
            </div>

            <div>
              <div className="text-white/40">Telefón</div>
              <a
                href="tel:+421900000000"
                className="hover:text-red-600 transition"
              >
                +421 58/733 16 90
              </a>
            </div>

            <div>
              <div className="text-white/40">Prevádzka</div>
              <div>Šafárikova 375/6, 048 01 Rožňava</div>
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
