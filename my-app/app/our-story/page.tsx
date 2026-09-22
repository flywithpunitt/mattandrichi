import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import OurStoryView from "@/components/OurStoryView";

export const metadata: Metadata = {
  title: "Our Story · Matt & Richi",
  description:
    "Matt Dhull and Richi Pal — a practice built around discretion, named advice, and the long view.",
};

export default function OurStoryPage() {
  return (
    <PageShell activeId="our-story">
      <OurStoryView />
    </PageShell>
  );
}
