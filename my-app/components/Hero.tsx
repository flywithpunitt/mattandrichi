"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { Story } from "@/data/stories";

type HeroProps = {
  story: Story;
  isPlaying: boolean;
  isMuted: boolean;
};

export default function Hero({ story, isPlaying, isMuted }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = isMuted;

    if (isPlaying) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isPlaying, isMuted, story.id]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        key={story.id}
        className={`absolute inset-0 origin-center ${
          isPlaying && !story.video ? "hero-drift" : ""
        }`}
      >
        {story.video ? (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src={story.video}
            poster={story.image?.src}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="metadata"
          />
        ) : story.image ? (
          <Image
            src={story.image.src}
            alt={story.image.alt}
            fill
            priority
            sizes="100vw"
            unoptimized
            className="object-cover"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 80% 60% at ${story.atmosphere.glowX} ${story.atmosphere.glowY}, ${story.atmosphere.glow}77, transparent 64%),
                linear-gradient(160deg, #1e2a16 0%, #0E1909 46%, #080e06 100%)
              `,
            }}
          />
        )}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(14,25,9,0.38)_0%,rgba(14,25,9,0.12)_32%,rgba(14,25,9,0.2)_58%,rgba(14,25,9,0.78)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_42%,rgba(14,25,9,0.38)_100%)]" />
    </div>
  );
}
