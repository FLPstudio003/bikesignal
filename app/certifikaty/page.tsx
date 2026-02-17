import PageShell from "@/components/page-shell";
import CertifikatyPage from "@/components/CertifikatyPage";

export const metadata = {
  title: "Certifikáty | Bike Signal",
  description:
    "Certifikovaný servis bicyklov. Odbornosť, partnerstvá a značky, ktorým dôverujeme.",
};

export default function Page() {
  return (
    <PageShell>
      <CertifikatyPage />
    </PageShell>
  );
}
