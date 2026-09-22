import type { ReactNode } from "react";
import { stories } from "@/data/stories";
import Header from "./Header";
import SiteFooter from "./SiteFooter";

type PageShellProps = {
  activeId?: string;
  children: ReactNode;
};

export default function PageShell({ activeId = "", children }: PageShellProps) {
  return (
    <div className="min-h-dvh bg-ink">
      <div className="p-2.5 sm:p-4 lg:p-5">
        <div className="overflow-hidden rounded-[1.25rem] border border-cream/10 bg-ink sm:rounded-[2rem] lg:rounded-[2.6rem]">
          <Header stories={stories} activeId={activeId} />
          {children}
          <SiteFooter />
        </div>
      </div>
    </div>
  );
}
