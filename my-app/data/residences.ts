export type Residence = {
  id: string;
  index: string;
  name: string;
  place: string;
  orientation: string;
  rooms: string;
  note: string;
  image: {
    src: string;
    alt: string;
  };
};

export const residences: Residence[] = [
  {
    id: "pavilion",
    index: "01",
    name: "The Pavilion House",
    place: "Alibaug",
    orientation: "West light, pool court",
    rooms: "Five bedrooms",
    note: "A long, quiet house that turns its back to the road and opens entirely to water and trees. The kind of plan you feel before you understand it.",
    image: {
      src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=80",
      alt: "Contemporary villa with a still pool at dusk",
    },
  },
  {
    id: "courtyard",
    index: "02",
    name: "Courtyard West",
    place: "Goa",
    orientation: "North rooms, deep shade",
    rooms: "Four bedrooms",
    note: "Built around a single court. Afternoons collect there. The rest of the house stays cool, unhurried, and a little private.",
    image: {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80",
      alt: "Sunlit modern house with a landscaped courtyard",
    },
  },
  {
    id: "long-room",
    index: "03",
    name: "The Long Room",
    place: "Lonavala",
    orientation: "East glass, forest edge",
    rooms: "Three bedrooms",
    note: "One room the length of the house, then everything else in service of it. Morning arrives as a single, slow wash of light.",
    image: {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80",
      alt: "Open living space with floor-to-ceiling glass",
    },
  },
  {
    id: "north-light",
    index: "04",
    name: "North Light",
    place: "Mumbai",
    orientation: "High floor, still air",
    rooms: "Three bedrooms",
    note: "A city apartment that behaves like a gallery. White walls, a long kitchen, and a view you do not have to perform for.",
    image: {
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80",
      alt: "Modern residence with a calm garden approach",
    },
  },
  {
    id: "threshold",
    index: "05",
    name: "The Threshold",
    place: "Pune",
    orientation: "South garden, stone floors",
    rooms: "Four bedrooms",
    note: "A house of arrivals. The first ten steps decide the rest: cool stone, a low ceiling, then the garden opening without announcement.",
    image: {
      src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2000&q=80",
      alt: "Warm contemporary interior with garden light",
    },
  },
];
