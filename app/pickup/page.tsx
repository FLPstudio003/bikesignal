import PageShell from "@/components/page-shell";
import PickupClient from "@/components/PickupClient";

export const metadata = {
  title: "Dovoz / odvoz | Bike Signal",
  description:
    "Smart vyzdvihnutie a doručenie bicykla. Vyber si časové okno, my vyriešime logistiku aj servis.",
};

export default function PickupPage() {
  return (
    <PageShell>
      <PickupClient />
    </PageShell>
  );
}
