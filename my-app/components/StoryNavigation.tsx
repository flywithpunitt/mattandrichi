import type { Story } from "@/data/stories";
import StoryItem from "./StoryItem";

type StoryNavigationProps = {
  stories: Story[];
  activeId: string;
  onSelect: (id: string) => void;
};

export default function StoryNavigation({
  stories,
  activeId,
  onSelect,
}: StoryNavigationProps) {
  return (
    <nav
      aria-label="Story navigation"
      className="scroll-strip w-full min-w-0 max-w-full overflow-x-auto bg-transparent"
    >
      <div className="flex w-max items-center justify-start gap-1 sm:gap-3 lg:mx-auto lg:w-full lg:justify-center lg:gap-5">
        {stories.map((story) => (
          <StoryItem
            key={story.id}
            story={story}
            active={story.id === activeId}
            onSelect={onSelect}
          />
        ))}
      </div>
    </nav>
  );
}
