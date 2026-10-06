"use client";

import { useState } from "react";

/**
 * CategoryBar — "use client"
 * The ONLY client component in the menu segment (per exercise spec).
 * Renders category filter buttons and manages active state.
 */
export default function CategoryBar({ categories, onFilter }) {
  const [active, setActive] = useState("All");

  function handleClick(cat) {
    setActive(cat);
    onFilter(cat);
  }

  return (
    <nav className="flex flex-wrap gap-2" aria-label="Filter dishes by category">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`
            rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 cursor-pointer
            ${
              active === cat
                ? "bg-amber-500 text-white shadow-md shadow-amber-500/25"
                : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            }
          `}
        >
          {cat}
        </button>
      ))}
    </nav>
  );
}
