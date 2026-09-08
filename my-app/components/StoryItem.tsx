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
      className="group relative flex w-[4.35rem] shrink-0 flex-col items-center gap-1.5 bg-transparent outline-none touch-manipulation sm:w-[5.4rem] sm:gap-2 lg:w-[6.15rem]"
    >
      <span
        className={`relative grid size-[3.55rem] place-items-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:size-[4.45rem] lg:size-[4.9rem] motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:scale-[1.03] ${
          active ? "motion-safe:-translate-y-px" : ""
        }`}
      >
        <span
          className={`absolute inset-0 rounded-full transition-shadow duration-500 ${
            active
              ? "shadow-[0_0_0_1.5px_#FCEB15,0_0_18px_rgba(252,235,21,0.22)]"
              : "shadow-[0_0_0_1px_rgba(249,249,237,0.28)] group-hover:shadow-[0_0_0_1.5px_rgba(249,249,237,0.55)] group-focus-visible:shadow-[0_0_0_1.5px_#FCEB15]"
          }`}
        />

        <span className="absolute inset-[3px] overflow-hidden rounded-full bg-ink/30 ring-1 ring-inset ring-black/25 sm:inset-[4px]">
          {story.image ? (
            <Image
              src={story.image.src}
              alt={story.image.alt}
              fill
              sizes="88px"
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
