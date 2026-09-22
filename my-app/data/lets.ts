export type Let = {
  id: string;
  index: string;
  name: string;
  place: string;
  term: string;
  arrives: string;
  note: string;
  image: {
    src: string;
    alt: string;
  };
};

export const lets: Let[] = [
  {
    id: "guest-wing",
    index: "I",
    name: "The Guest Wing",
    place: "Bandra",
    term: "Three months",
    arrives: "Available now",
    note: "A quiet wing off a larger house. You have your own door, a long kitchen, and the garden after four.",
    image: {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      alt: "Bright living room with tall glass and pale stone",
    },
  },
  {
    id: "monsoon-house",
    index: "II",
    name: "Monsoon House",
    place: "Alibaug",
    term: "One season",
    arrives: "June — September",
    note: "Built for rain. Deep verandahs, a reading room that does not leak, and the sound of water as a neighbour.",
    image: {
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
      alt: "Shaded interior corridor with monsoon light",
    },
  },
  {
    id: "studio-floor",
    index: "III",
    name: "The Studio Floor",
    place: "Colaba",
    term: "Six months",
    arrives: "From November",
    note: "One floor, one person or two. High windows, a serious desk, and the harbour if you lean out far enough.",
    image: {
      src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80",
      alt: "City apartment studio with a long window",
    },
  },
  {
    id: "winter-rooms",
    index: "IV",
    name: "Winter Rooms",
    place: "Lonavala",
    term: "November — February",
    arrives: "By arrangement",
    note: "The fire is real. The mornings are cold on purpose. A house for writing, sleeping late, and leaving the city alone.",
    image: {
      src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
      alt: "Warm interior with garden light and stone floors",
    },
  },
];
