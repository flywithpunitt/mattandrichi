import type { Story } from "@/data/stories";

type HeroContentProps = {
  story: Story;
};

export default function HeroContent({ story }: HeroContentProps) {
  const lines = story.title.split("\n");

  return (
    <div className="relative z-20 max-w-[40rem] px-5 pb-20 sm:px-8 sm:pb-8 lg:max-w-[46rem] lg:px-12 lg:pb-12">
      <div key={story.id} className="hero-copy">
        <p className="mb-4 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-olive sm:mb-5 sm:text-xs">
          <span className="text-accent">{story.index}</span>
          <span className="h-px w-6 bg-olive/50" />
          <span>{story.kicker}</span>
        </p>

        <h1 className="font-serif text-[2.35rem] leading-[1.05] tracking-[-0.02em] text-cream sm:text-5xl lg:text-[4.35rem]">
          {lines.map((line, index) => (
            <span
              key={line}
              className={`block ${index === 1 ? "italic text-cream/92" : ""}`}
            >
              {line}
            </span>
          ))}
        </h1>

        <p className="mt-4 max-w-[32rem] text-[0.95rem] leading-relaxed text-cream/68 sm:mt-5 sm:text-base">
          {story.description}
        </p>

        <a
          href={story.ctaHref}
          className="mt-6 inline-flex items-center gap-3 rounded-full bg-accent px-5 py-3 text-xs font-medium tracking-[0.16em] text-ink uppercase transition-transform duration-300 hover:-translate-y-px hover:bg-[#fff16a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream sm:mt-8 sm:px-6 sm:py-3.5 sm:text-[13px]"
        >
          {story.ctaLabel}
          <span
            aria-hidden
            className="grid size-6 place-items-center rounded-full bg-ink/10 text-sm"
          >
            →
          </span>
        </a>
      </div>
    </div>
  );
}
