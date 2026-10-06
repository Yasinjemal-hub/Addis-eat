"use client";

import { useState } from "react";

/**
 * AddToCartButton — "use client" leaf.
 * The smallest interactive component: just the button that calls useCart().
 * We import useCart lazily so that the dish data itself stays on the server.
 */
import { useCart } from "../../lib/CartContext";

export default function AddToCartButton({ dish }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleClick() {
    addItem(dish);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  }

  return (
    <button
      onClick={handleClick}
      className={`
        mt-3 w-full rounded-lg px-4 py-2.5 text-sm font-semibold
        transition-all duration-300 cursor-pointer
        ${
          added
            ? "bg-green-500 text-white scale-95"
            : "bg-amber-500 hover:bg-amber-600 text-white hover:scale-105"
        }
      `}
    >
      {added ? "✓ Added!" : `Add to Cart — ${dish.price} ETB`}
    </button>
  );
}
