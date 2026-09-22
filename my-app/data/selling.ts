export type SellChapter = {
  index: string;
  title: string;
  body: string;
  image: {
    src: string;
    alt: string;
  };
};

export const sellChapters: SellChapter[] = [
  {
    index: "01",
    title: "Listen",
    body: "Before a photograph, a price, or a timeline — we sit with the house as it is lived. What to keep quiet. What to show. What the next owner needs to feel on the first walk-through.",
    image: {
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
      alt: "Quiet interior corridor with soft daylight",
    },
  },
  {
    index: "02",
    title: "Frame",
    body: "We tell the house as a sequence, not a listing. Rooms in the order they should be met. Light at the hour it is kindest. A story that makes the obvious decision feel inevitable.",
    image: {
      src: "https://images.unsplash.com/photo-1600573472592-401b50470d88?auto=format&fit=crop&w=1600&q=80",
      alt: "Architectural living room composed around a window",
    },
  },
  {
    index: "03",
    title: "Introduce",
    body: "The first circle is private. People we already know are looking — and a few we have been waiting to call. The open market is a last instrument, not the first.",
    image: {
      src: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1600&q=80",
      alt: "Evening terrace looking toward a still landscape",
    },
  },
  {
    index: "04",
    title: "Conclude",
    body: "Negotiation without theatre. Paperwork without noise. A leaving that feels as considered as the years spent arriving.",
    image: {
      src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdbc?auto=format&fit=crop&w=1600&q=80",
      alt: "A composed house facade at late afternoon",
    },
  },
];
