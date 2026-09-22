import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import ProjectsView from "@/components/ProjectsView";

export const metadata: Metadata = {
  title: "Projects · Matt & Richi",
  description:
    "Work still in the making — named only when it is far enough along, released only when it is ready.",
};

export default function ProjectsPage() {
  return (
    <PageShell activeId="projects">
      <ProjectsView />
    </PageShell>
  );
}
