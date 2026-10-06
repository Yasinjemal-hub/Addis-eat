// DishList.jsx  —  Server component (NO "use client")
// Receives the full list of dishes and renders DishCards.

import DishCard from "./DishCard";

export default function DishList({ dishes }) {
  if (!dishes || dishes.length === 0) {
    return (
      <p className="py-12 text-center text-zinc-500">
        No dishes found in this category.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {dishes.map((dish) => (
        <DishCard key={dish.id} dish={dish} />
      ))}
    </div>
  );
}
