import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import BuyView from "@/components/BuyView";

export const metadata: Metadata = {
  title: "Buy · Matt & Richi",
  description:
    "A privately held collection of residences — chosen for light, proportion, and the way a day unfolds.",
};

export default function BuyPage() {
  return (
    <PageShell activeId="buy">
      <BuyView />
    </PageShell>
  );
}
