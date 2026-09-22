export type PipelineProject = {
  id: string;
  year: string;
  status: string;
  name: string;
  place: string;
  stage: string;
  note: string;
  image: {
    src: string;
    alt: string;
  };
};

export const pipeline: PipelineProject[] = [
  {
    id: "ridge",
    year: "2026",
    status: "Ground broken",
    name: "House on the Ridge",
    place: "Khandala",
    stage: "Structure",
    note: "A single-storey house cut into the hill. Concrete, teak, and a courtyard that will hold the first evening in late next year.",
    image: {
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80",
      alt: "Concrete architectural facade with deep windows",
    },
  },
  {
    id: "court",
    year: "2027",
    status: "Drawings",
    name: "The Court Building",
    place: "Pune",
    stage: "Permissions",
    note: "Eight residences around a shared court. Not a tower. A low building that behaves like a house, repeated.",
    image: {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
      alt: "Modern architectural massing against the sky",
    },
  },
  {
    id: "sea-line",
    year: "2028",
    status: "Land held",
    name: "Sea Line",
    place: "Alibaug",
    stage: "Quiet",
    note: "A coastal plot we are not rushing. The drawings exist. The release does not — not until the light is right.",
    image: {
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80",
      alt: "A composed house elevation in late light",
    },
  },
];
