// app/menu/page.js  —  Async SERVER component (NO "use client", NO hooks)
// Awaits dishes on the server. No loading/error state needed.

import { getDishes, getCategories } from "../../lib/dishes";
import FilterShell from "./FilterShell";
import DishList from "./DishList";

export default async function MenuPage() {
  // Data is fetched on the server — no useFetch, no loading spinner
  const dishes = await getDishes();
  const categories = await getCategories();

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          Our Menu
        </h1>
        <p className="mt-3 text-lg text-zinc-500 dark:text-zinc-400">
          Authentic Ethiopian flavors — pick your favorites and add to cart.
        </p>
      </div>

      {/* FilterShell is a "use client" wrapper.
          DishList is passed as CHILDREN so it stays a server component. */}
      <FilterShell categories={categories} allDishes={dishes}>
        <DishList dishes={dishes} />
      </FilterShell>
    </main>
  );
}