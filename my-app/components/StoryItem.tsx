import Image from "next/image";
import type { Story } from "@/data/stories";

type StoryItemProps = {
  story: Story;
  active: boolean;
  onSelect: (id: string) => void;
};

export default function StoryItem({ story, active, onSelect }: StoryItemProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(story.id)}
      aria-pressed={active}
      aria-label={`${story.label} story`}
      className="group relative flex w-[3.9rem] shrink-0 flex-col items-center gap-1.5 bg-transparent outline-none touch-manipulation sm:w-[5.1rem] sm:gap-2 lg:w-[5.75rem]"
    >
      <span
        className={`relative grid size-[3.15rem] place-items-center rounded-full bg-transparent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:size-[4.1rem] lg:size-[4.5rem] motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:scale-[1.045] ${
          active ? "motion-safe:-translate-y-0.5" : ""
        }`}
      >
        <span
          aria-hidden
          className={`pointer-events-none absolute -inset-[3px] rounded-full transition-opacity duration-500 ${
            active ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="story-ring absolute inset-0 rounded-full" />
        </span>

        <span
          className={`absolute inset-0 rounded-full border transition-all duration-500 ${
            active
              ? "border-accent/90 shadow-[0_0_0_5px_rgba(252,235,21,0.08)]"
              : "border-cream/25 group-hover:border-cream/55 group-focus-visible:border-accent/80"
          }`}
        />

        <span className="absolute inset-[3px] overflow-hidden rounded-full bg-ink/40">
          {story.image ? (
            <Image
              src={story.image.src}
              alt={story.image.alt}
              fill
              sizes="72px"
              unoptimized
              className="object-cover"
            />
          ) : (
            <span className="absolute inset-0 grid place-items-center">
              <span className="relative font-serif text-[0.95rem] leading-none text-cream/78">
                {story.index}
              </span>
            </span>
          )}
        </span>
      </span>

      <span
        className={`whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.12em] transition-colors duration-500 sm:text-[11px] sm:tracking-[0.18em] ${
          active
            ? "text-cream"
            : "text-cream/48 group-hover:text-cream/80 group-focus-visible:text-cream"
        }`}
      >
        {story.label}
      </span>
    </button>
  );
}
