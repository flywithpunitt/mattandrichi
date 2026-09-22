import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import SellView from "@/components/SellView";

export const metadata: Metadata = {
  title: "Sell · Matt & Richi",
  description:
    "Representation for owners who want a house told with judgement, then placed with care.",
};

export default function SellPage() {
  return (
    <PageShell activeId="sell">
      <SellView />
    </PageShell>
  );
}
