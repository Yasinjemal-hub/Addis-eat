// DishCard.jsx  —  Server component (NO "use client")
// Renders a single dish. The AddToCartButton is the only client leaf inside.

import AddToCartButton from "./AddToCartButton";

export default function DishCard({ dish }) {
  return (
    <div
      className="group flex flex-col rounded-2xl border border-zinc-200 bg-white
                 p-5 shadow-sm transition-all duration-300 hover:shadow-lg
                 hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900"
    >
      {/* Emoji image placeholder */}
      <div className="flex h-32 items-center justify-center rounded-xl bg-zinc-100 text-5xl dark:bg-zinc-800">
        {dish.image}
      </div>

      {/* Info */}
      <div className="mt-4 flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
            {dish.name}
          </h3>
          <span className="shrink-0 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
            {dish.category}
          </span>
        </div>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {dish.description}
        </p>

        {/* Client leaf — interactive button */}
        <AddToCartButton dish={dish} />
      </div>
    </div>
  );
}
