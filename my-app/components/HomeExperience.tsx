"use client";

import { useCallback, useEffect, useState } from "react";
import { stories, getStory } from "@/data/stories";
import Header from "./Header";
import Hero from "./Hero";
import HeroContent from "./HeroContent";
import HeroControls from "./HeroControls";

export default function HomeExperience() {
  const [activeId, setActiveId] = useState(stories[0].id);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const story = getStory(activeId);

  const selectStory = useCallback((id: string) => {
    setActiveId(id);
  }, []);

  const cycleStory = useCallback(
    (direction: 1 | -1) => {
      const index = stories.findIndex((item) => item.id === activeId);
      const next = (index + direction + stories.length) % stories.length;
      setActiveId(stories[next].id);
    },
    [activeId],
  );

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        cycleStory(1);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        cycleStory(-1);
      }
      if (event.key === "Escape" && isExpanded) {
        setIsExpanded(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [cycleStory, isExpanded]);

  return (
    <div className="min-h-dvh overflow-x-hidden bg-ink">
      <div
        className={`relative isolate min-h-dvh overflow-hidden transition-[padding] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isExpanded ? "p-0" : "p-2.5 sm:p-4 lg:p-5"
        }`}
      >
        <section
          className={`relative flex min-h-[calc(100dvh-1.25rem)] w-full min-w-0 flex-col overflow-hidden border border-cream/10 bg-ink shadow-[0_24px_80px_rgba(0,0,0,0.35)] transition-[border-radius,min-height] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:min-h-[calc(100dvh-2rem)] lg:min-h-[calc(100dvh-2.5rem)] ${
            isExpanded
              ? "min-h-dvh rounded-none"
              : "rounded-[1.25rem] sm:rounded-[2rem] lg:rounded-[2.6rem]"
          }`}
        >
          <Hero story={story} isPlaying={isPlaying} isMuted={isMuted} />

          <div className="relative z-10 flex min-h-[calc(100dvh-1.25rem)] w-full min-w-0 flex-1 flex-col sm:min-h-[calc(100dvh-2rem)] lg:min-h-[calc(100dvh-2.5rem)]">
            <Header
              stories={stories}
              activeId={activeId}
              onSelect={selectStory}
            />

            <div className="mt-auto flex items-end justify-between gap-4 pr-24 sm:pr-28">
              <HeroContent story={story} />
            </div>

            <HeroControls
              isPlaying={isPlaying}
              isMuted={isMuted}
              isExpanded={isExpanded}
              onTogglePlay={() => setIsPlaying((value) => !value)}
              onToggleMute={() => setIsMuted((value) => !value)}
              onToggleExpand={() => setIsExpanded((value) => !value)}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
