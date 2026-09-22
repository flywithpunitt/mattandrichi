import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import ContactView from "@/components/ContactView";

export const metadata: Metadata = {
  title: "Contact · Matt & Richi",
  description: "Write or call Matt & Richi Real Estate in Williams Landing.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <ContactView />
    </PageShell>
  );
}
