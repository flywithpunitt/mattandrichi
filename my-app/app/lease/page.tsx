import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import LeaseView from "@/components/LeaseView";

export const metadata: Metadata = {
  title: "Lease · Matt & Richi",
  description:
    "Private lets for a season or a chapter — furnished houses, held quietly, timed on purpose.",
};

export default function LeasePage() {
  return (
    <PageShell activeId="lease">
      <LeaseView />
    </PageShell>
  );
}
