import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PrivacyView from "@/components/PrivacyView";

export const metadata: Metadata = {
  title: "Privacy · Matt & Richi",
  description: "How Matt & Richi Real Estate holds the information you share.",
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <PrivacyView />
    </PageShell>
  );
}
