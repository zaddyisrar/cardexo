export type CardItem = {
  id: string;
  name: string;
  price: number;
  worth: number;
  category: string;
  description: string;
};

export const cards: CardItem[] = [
  {
    id: "apex-black",
    name: "Apex Black",
    price: 299,
    worth: 250000,
    category: "Premium Card",
    description: "A premium access card with exclusive benefits.",
  },
  {
    id: "infinite-reserve",
    name: "Infinite Reserve",
    price: 349,
    worth: 320000,
    category: "Premium Card",
    description: "A reserve-tier premium card with higher value.",
  },
  {
    id: "obsidian-elite",
    name: "Obsidian Elite",
    price: 399,
    worth: 400000,
    category: "Elite Card",
    description: "An elite-level card with premium access.",
  },
  {
    id: "titanium-x",
    name: "Titanium X",
    price: 499,
    worth: 500000,
    category: "Exclusive Card",
    description: "A top-tier card with maximum value.",
  },
];