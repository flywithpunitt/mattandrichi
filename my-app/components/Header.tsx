import Image from "next/image";
import type { Story } from "@/data/stories";
import StoryNavigation from "./StoryNavigation";

type HeaderProps = {
  stories: Story[];
  activeId: string;
  onSelect: (id: string) => void;
};

function BrandLogo() {
  return (
    <a
      href="/"
      className="relative flex shrink-0 items-center rounded-full border border-cream/12 bg-ink/35 px-2.5 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.22)] backdrop-blur-md outline-none focus-visible:ring-2 focus-visible:ring-accent/70 sm:px-3.5 sm:py-2.5"
      aria-label="Matt & Richi home"
    >
      <span className="relative block h-6 w-[7.4rem] sm:h-8 sm:w-[10.4rem] lg:h-9 lg:w-[11.6rem]">
        <Image
          src="/brand/matt-richi-wordmark.png"
          alt="Matt & Richi"
          fill
          sizes="186px"
          priority
          className="object-contain object-left"
        />
      </span>
    </a>
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

        <a
          href="#enquire"
          className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-xs font-medium tracking-[0.14em] text-ink uppercase transition-transform duration-300 hover:-translate-y-px hover:bg-[#fff16a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream/70"
        >
          Enquire
          <span aria-hidden className="text-[0.95rem] leading-none">
            →
          </span>
        </a>
      </div>
    </header>
  );
}
