import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero_bgtest.png"   // <-- TU ZMEN NÁZOV
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50 -z-10" />

      {/* CONTENT */}
      <div className="relative text-center space-y-10 px-6">

        {/* LOGO */}
        <div className="mx-auto w-[240px] sm:w-[260px] md:w-[320px]">
          <Image
            src="/landing_logo2.png"
            alt="Bike Signal Logo"
            width={700}
            height={700}
            priority
            className="w-full h-auto"
          />
        </div>

        {/* NÁZOV */}
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-widest text-[#00a000]">
            BIKE SIGNAL
          </h1>

          <p className="mt-4 text-base sm:text-lg tracking-wider">
            <span className="text-yellow-400">shop</span>
            <span className="text-white/30 mx-3">•</span>
            <span className="text-orange-500">service</span>
            <span className="text-white/30 mx-3">•</span>
            <span className="text-red-500">support</span>
          </p>

          <p className="mt-6 text-white/80 max-w-xl mx-auto text-sm sm:text-base">
            Servis bicyklov bez stresu. Online rezervácia (čoskoro) +
            doplnková služba vyzdvihnutia a doručenia bicykla.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/home"
            className="inline-flex items-center justify-center rounded-full bg-[#00a000] px-8 sm:px-10 py-3 sm:py-4 text-white text-base sm:text-lg font-semibold transition hover:bg-green-600"
          >
            Vstúpiť
          </Link>

          <Link
            href="/rezervacia"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 sm:px-10 py-3 sm:py-4 text-white text-base sm:text-lg font-medium hover:bg-white/10 transition"
          >
            Rezervovať servis
          </Link>
        </div>

        <div className="text-xs text-white/50">
          bikesignal.sk
        </div>

      </div>
    </main>
  );
}
