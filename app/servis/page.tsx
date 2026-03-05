import { Suspense } from "react";
import PageShell from "@/components/page-shell";
import ServisClient from "@/components/ServisClient";

export default function ServisPage() {
  return (
    <PageShell>
      <Suspense fallback={null}>
        <ServisClient />
      </Suspense>
    </PageShell>
  );
}