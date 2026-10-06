"use client";

import { useState, Children, cloneElement, isValidElement } from "react";
import CategoryBar from "./CategoryBar";

/**
 * FilterShell — "use client"
 * Wraps server-rendered DishList using **children** (not an import).
 * The children pattern keeps dish data on the server while
 * adding client-side filtering on top.
 */
export default function FilterShell({ categories, allDishes, children }) {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter dishes based on selected category
  const filtered =
    activeCategory === "All"
      ? allDishes
      : allDishes.filter((d) => d.category === activeCategory);

  // Clone children (DishList) and override the dishes prop
  const enhancedChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { dishes: filtered });
    }
    return child;
  });

  return (
    <div>
      <div className="mb-8">
        <CategoryBar categories={categories} onFilter={setActiveCategory} />
      </div>
      {enhancedChildren}
    </div>
  );
}
