export type StoryImage = {
  src: string;
  alt: string;
} | null;

export type StoryAtmosphere = {
  glow: string;
  glowX: string;
  glowY: string;
  secondary: string;
  secondaryX: string;
  secondaryY: string;
};

export type Story = {
  id: string;
  index: string;
  label: string;
  kicker: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  image: StoryImage;
  video: string | null;
  atmosphere: StoryAtmosphere;
};

export const stories: Story[] = [
  {
    id: "buy",
    index: "01",
    label: "Buy",
    kicker: "Residences",
    title: "Find somewhere\nworth coming home to.",
    description:
      "Homes chosen for light, proportion, and the way a day actually unfolds — never for a listing photograph alone.",
    ctaLabel: "Begin the search",
    ctaHref: "#buy",
    image: {
      src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=80",
      alt: "Contemporary villa with a still pool at dusk",
    },
    video:
      "https://videos.pexels.com/video-files/3773486/3773486-hd_1920_1080_30fps.mp4",
    atmosphere: {
      glow: "#7A7454",
      glowX: "18%",
      glowY: "72%",
      secondary: "#FCEB15",
      secondaryX: "82%",
      secondaryY: "18%",
    },
  },
  {
    id: "sell",
    index: "02",
    label: "Sell",
    kicker: "Representation",
    title: "Leave beautifully.\nArrive even better.",
    description:
      "A discreet process for owners who want the story of a home told with judgement, patience, and care.",
    ctaLabel: "Start a conversation",
    ctaHref: "#sell",
    image: {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80",
      alt: "Sunlit modern house with a landscaped courtyard",
    },
    video:
      "https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_30fps.mp4",
    atmosphere: {
      glow: "#9A8F5C",
      glowX: "70%",
      glowY: "58%",
      secondary: "#FCEB15",
      secondaryX: "24%",
      secondaryY: "22%",
    },
  },
  {
    id: "lease",
    index: "03",
    label: "Lease",
    kicker: "Private lets",
    title: "Stay a season.\nOr stay a chapter.",
    description:
      "Residences for people who want architecture, quiet rooms, and a neighbourhood — not merely an address.",
    ctaLabel: "See available homes",
    ctaHref: "#lease",
    image: {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80",
      alt: "Open-plan living room with floor-to-ceiling glass",
    },
    video:
      "https://videos.pexels.com/video-files/2169880/2169880-hd_1920_1080_30fps.mp4",
    atmosphere: {
      glow: "#3D4A28",
      glowX: "50%",
      glowY: "46%",
      secondary: "#FCEB15",
      secondaryX: "16%",
      secondaryY: "78%",
    },
  },
  {
    id: "projects",
    index: "04",
    label: "Projects",
    kicker: "In the making",
    title: "Places still\nbeing written.",
    description:
      "New work, from first sketch to first evening in — followed closely, released only when it is ready.",
    ctaLabel: "Explore the pipeline",
    ctaHref: "#projects",
    image: {
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2000&q=80",
      alt: "Architectural concrete facade with deep-set windows",
    },
    video:
      "https://videos.pexels.com/video-files/3195394/3195394-hd_1920_1080_25fps.mp4",
    atmosphere: {
      glow: "#C4B56A",
      glowX: "78%",
      glowY: "30%",
      secondary: "#FCEB15",
      secondaryX: "30%",
      secondaryY: "70%",
    },
  },
  {
    id: "our-story",
    index: "05",
    label: "Our Story",
    kicker: "The practice",
    title: "Two names.\nOne standard.",
    description:
      "Matt & Richi — a practice built around discretion, long-view advice, and the belief that a home should feel inevitable.",
    ctaLabel: "Meet the practice",
    ctaHref: "#our-story",
    image: {
      src: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=2000&q=80",
      alt: "Two people in conversation across a quiet studio table",
    },
    video:
      "https://cdn.coverr.co/videos/coverr-a-man-walking-in-a-modern-house-4255/1080p.mp4",
    atmosphere: {
      glow: "#5C5638",
      glowX: "42%",
      glowY: "62%",
      secondary: "#FCEB15",
      secondaryX: "68%",
      secondaryY: "24%",
    },
  },
];

export function getStory(id: string) {
  return stories.find((story) => story.id === id) ?? stories[0];
}
