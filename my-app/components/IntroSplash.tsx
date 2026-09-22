"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const INTRO_SRC = `/${encodeURIComponent("M&R Logo Animation.mp4")}`;

type Phase = "intro" | "leaving" | "ready";

export default function IntroSplash({ children }: { children: ReactNode }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<Phase>("intro");

  function finish() {
    setPhase((current) => {
      if (current !== "intro") return current;
      window.setTimeout(() => setPhase("ready"), 900);
      return "leaving";
    });
  }

  useEffect(() => {
    if (phase !== "intro") return;

    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.play().catch(() => {});

    const cut = window.setTimeout(finish, 2000);

    return () => window.clearTimeout(cut);
  }, [phase]);

  return (
    <>
      {children}

      {phase !== "ready" ? (
        <div
          className={`intro-veil fixed inset-0 z-[80] grid place-items-center overflow-hidden bg-[#797454] ${
            phase === "leaving" ? "intro-veil-out" : ""
          }`}
          onClick={finish}
        >
          <video
            ref={videoRef}
            className="intro-reel relative h-auto max-h-[86vh] w-auto max-w-[92vw] object-contain"
            src={INTRO_SRC}
            autoPlay
            muted
            playsInline
            preload="auto"
          />

          {phase === "intro" ? (
            <button
              type="button"
              onClick={finish}
              className="intro-skip absolute bottom-7 left-1/2 z-20 -translate-x-1/2 text-[10px] tracking-[0.28em] text-[#F9F9ED]/45 uppercase transition-colors hover:text-[#F9F9ED]"
            >
              Enter
            </button>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
