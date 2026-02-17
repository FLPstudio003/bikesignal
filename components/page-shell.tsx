import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main
      className="relative min-h-screen text-white"
      style={{
        backgroundColor: "#000",
        backgroundImage: `
          radial-gradient(600px 600px at 10% 20%, rgba(0, 255, 95, 0.18), rgba(0,0,0,0) 60%),
          radial-gradient(700px 700px at 90% 35%, rgba(250, 204, 21, 0.10), rgba(0,0,0,0) 62%),
          radial-gradient(700px 700px at 85% 85%, rgba(239, 68, 68, 0.10), rgba(0,0,0,0) 62%),
          radial-gradient(900px 900px at 15% 85%, rgba(34, 197, 94, 0.10), rgba(0,0,0,0) 65%)
        `,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* jemný “noise” film – aby čierna nebola plochá */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='260' height='260' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
        }}
      />

      <SiteHeader />

      <div className="relative pt-20">{children}</div>

      <SiteFooter />
    </main>
  );
}
