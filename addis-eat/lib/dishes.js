// lib/dishes.js  —  Server-only data source (no "use client")

const dishes = [
  {
    id: 1,
    name: "Doro Wat",
    description: "Spicy chicken stew slow-cooked in berbere sauce with hard-boiled eggs, served on injera.",
    price: 320,
    category: "Main",
    image: "🍗",
  },
  {
    id: 2,
    name: "Kitfo",
    description: "Ethiopian steak tartare — minced raw beef seasoned with mitmita and niter kibbeh.",
    price: 350,
    category: "Main",
    image: "🥩",
  },
  {
    id: 3,
    name: "Tibs",
    description: "Sautéed beef or lamb cubes with onions, tomatoes, jalapeños, and rosemary.",
    price: 280,
    category: "Main",
    image: "🍖",
  },
  {
    id: 4,
    name: "Shiro Wat",
    description: "Creamy chickpea flour stew flavored with garlic, ginger, and berbere spice.",
    price: 180,
    category: "Vegetarian",
    image: "🫘",
  },
  {
    id: 5,
    name: "Misir Wat",
    description: "Red lentil stew simmered in a rich berbere and onion sauce.",
    price: 160,
    category: "Vegetarian",
    image: "🍲",
  },
  {
    id: 6,
    name: "Gomen",
    description: "Collard greens sautéed with garlic, ginger, and a pinch of cardamom.",
    price: 140,
    category: "Vegetarian",
    image: "🥬",
  },
  {
    id: 7,
    name: "Beyaynetu",
    description: "A colorful platter of assorted vegetarian dishes served on a large injera.",
    price: 250,
    category: "Vegetarian",
    image: "🍽️",
  },
  {
    id: 8,
    name: "Sambusa",
    description: "Crispy pastry triangles filled with spiced lentils or seasoned ground meat.",
    price: 80,
    category: "Appetizer",
    image: "🔺",
  },
  {
    id: 9,
    name: "Kategna",
    description: "Toasted injera brushed with spiced butter (niter kibbeh) and berbere.",
    price: 90,
    category: "Appetizer",
    image: "🫓",
  },
  {
    id: 10,
    name: "Ethiopian Coffee",
    description: "Traditional buna ceremony — freshly roasted, ground, and brewed at your table.",
    price: 60,
    category: "Drink",
    image: "☕",
  },
  {
    id: 11,
    name: "Tej",
    description: "Ethiopian honey wine with a unique herbal depth from gesho leaves.",
    price: 120,
    category: "Drink",
    image: "🍯",
  },
  {
    id: 12,
    name: "Fresh Juice Combo",
    description: "Layered fresh avocado, mango, and papaya juice — a classic Addis favorite.",
    price: 100,
    category: "Drink",
    image: "🥤",
  },
];

/**
 * Simulate a server-side data fetch (async).
 * In production this would hit a database or API.
 */
export async function getDishes() {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 80));
  return dishes;
}

/**
 * Return the unique list of categories.
 */
export async function getCategories() {
  const all = await getDishes();
  return ["All", ...new Set(all.map((d) => d.category))];
}
