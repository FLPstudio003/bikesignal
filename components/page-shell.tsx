import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export default function PageShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />
      <div className="pt-20">{children}</div>
      <SiteFooter />
    </main>
  );
}
