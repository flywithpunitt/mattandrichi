import type { ReactNode } from "react";

type HeroControlsProps = {
  isPlaying: boolean;
  isMuted: boolean;
  isExpanded: boolean;
  onTogglePlay: () => void;
  onToggleMute: () => void;
  onToggleExpand: () => void;
};

function ControlButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="grid size-9 place-items-center rounded-full border border-cream/15 bg-ink/35 text-cream/85 shadow-[0_8px_24px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-cream/35 hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:size-11"
    >
      {children}
    </button>
  );
}

export default function HeroControls({
  isPlaying,
  isMuted,
  isExpanded,
  onTogglePlay,
  onToggleMute,
  onToggleExpand,
}: HeroControlsProps) {
  return (
    <div className="absolute right-4 bottom-4 z-20 flex items-center gap-1.5 sm:right-6 sm:bottom-6 sm:gap-2 lg:right-8 lg:bottom-8">
      <ControlButton
        label={isPlaying ? "Pause atmosphere" : "Play atmosphere"}
        onClick={onTogglePlay}
      >
        {isPlaying ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden>
            <rect x="2.5" y="2" width="3" height="10" rx="0.6" />
            <rect x="8.5" y="2" width="3" height="10" rx="0.6" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden>
            <path d="M4 2.4v9.2L12 7 4 2.4Z" />
          </svg>
        )}
      </ControlButton>

      <ControlButton
        label={isMuted ? "Unmute" : "Mute"}
        onClick={onToggleMute}
      >
        {isMuted ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M4 10v4h3.2L12 18.5V5.5L7.2 10H4Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path d="M16.2 9.2 20 13m0-3.8-3.8 3.8" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M4 10v4h3.2L12 18.5V5.5L7.2 10H4Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path
              d="M16 9.5a4.2 4.2 0 0 1 0 5M18.4 7.4a7.2 7.2 0 0 1 0 9.2"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        )}
      </ControlButton>

      <ControlButton
        label={isExpanded ? "Exit expanded view" : "Expand"}
        onClick={onToggleExpand}
      >
        {isExpanded ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path d="M5 1.5H1.5V5M9 1.5h3.5V5M5 12.5H1.5V9M9 12.5h3.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path d="M8.5 1.5H12.5V5.5M5.5 12.5H1.5V8.5M12.5 1.5 8.2 5.8M1.5 12.5 5.8 8.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        )}
      </ControlButton>
    </div>
  );
}
