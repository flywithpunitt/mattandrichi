"use client";

import Link from "next/link";
import type { Story } from "@/data/stories";

type StoryItemProps = {
  story: Story;
  active: boolean;
  onSelect?: (id: string) => void;
};

export default function StoryItem({ story, active, onSelect }: StoryItemProps) {
  return (
    <Link
      href={story.href}
      onClick={() => onSelect?.(story.id)}
      aria-current={active ? "page" : undefined}
      aria-label={`${story.label} story`}
      className="group relative flex w-[4.6rem] shrink-0 flex-col items-center bg-transparent outline-none touch-manipulation sm:w-[5.6rem] lg:w-[6.4rem]"
    >
      <span
        className={`relative aspect-[1024/915] h-[3.7rem] w-auto transition-[transform,filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:h-[4.6rem] lg:h-[5.1rem] motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:scale-[1.03] ${
          active
            ? "motion-safe:-translate-y-px [filter:drop-shadow(0_0_10px_rgba(252,235,21,0.28))]"
            : "opacity-80 group-hover:opacity-100"
        }`}
      >
        <span
          className={`story-shape absolute inset-0 grid place-items-center px-1.5 text-center ${
            active ? "bg-accent" : "bg-accent/80 group-hover:bg-accent"
          }`}
        >
          <span
            className={`font-medium uppercase leading-[1.05] text-ink ${
              story.label.length > 6
                ? "text-[8px] tracking-[0.08em] sm:text-[9px] lg:text-[10px]"
                : "text-[9px] tracking-[0.14em] sm:text-[10px] lg:text-[11px]"
            }`}
          >
            {story.label === "Our Story" ? (
              <>
                Our
                <br />
                Story
              </>
            ) : (
              story.label
            )}
          </span>
        </span>
      </span>
    </Link>
  );
}
