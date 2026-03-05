import PageShell from "@/components/page-shell";
import PrenajomPage from "@/components/PrenajomPage";

export const metadata = {
  title: "Prenájom | Bike Signal",
  description:
    "Prenájom nosičov bicyklov a strešného boxu. Rýchlo, bezpečne a jednoducho.",
};

export default function Prenajom() {
  return (
    <PageShell>
      <PrenajomPage />
    </PageShell>
  );
}