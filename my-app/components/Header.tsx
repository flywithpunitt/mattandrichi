"use client";

import Image from "next/image";
import Link from "next/link";
import type { Story } from "@/data/stories";
import StoryNavigation from "./StoryNavigation";

type HeaderProps = {
  stories: Story[];
  activeId: string;
  onSelect?: (id: string) => void;
};

function BrandLogo() {
  return (
    <Link
      href="/"
      className="relative flex shrink-0 items-center outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
      aria-label="Matt & Richi home"
    >
      <span className="relative block h-8 w-[10.5rem] sm:h-10 sm:w-[13rem] lg:h-12 lg:w-[15.75rem]">
        <Image
          src="/brand/matt-richi-wordmark.png"
          alt="Matt & Richi"
          fill
          sizes="260px"
          priority
          className="object-contain object-left"
        />
      </span>
    </Link>
  );
}

export default function Header({ stories, activeId, onSelect }: HeaderProps) {
  return (
    <header className="relative z-20 w-full min-w-0 px-3 pt-3 sm:px-5 sm:pt-5 lg:px-8 lg:pt-6">
      <div className="flex flex-col items-center gap-4 lg:hidden">
        <BrandLogo />
        <div className="w-full min-w-0">
          <StoryNavigation
            stories={stories}
            activeId={activeId}
            onSelect={onSelect}
          />
        </div>
      </div>

      <div className="hidden w-full min-w-0 items-center gap-4 lg:flex lg:gap-6">
        <BrandLogo />

        <div className="min-w-0 flex-1">
          <StoryNavigation
            stories={stories}
            activeId={activeId}
            onSelect={onSelect}
          />
        </div>

        <Link
          href="/contact"
          className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-xs font-medium tracking-[0.14em] text-ink uppercase transition-transform duration-300 hover:-translate-y-px hover:bg-[#fff16a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream/70"
        >
          Enquire
          <span aria-hidden className="text-[0.95rem] leading-none">
            →
          </span>
        </Link>
      </div>
    </header>
  );
}
