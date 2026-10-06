"use client";

import { useCart } from "../../lib/CartContext";

export default function CartPage() {
  const { items, removeItem, clearCart, totalItems, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center">
        <span className="text-6xl">🛒</span>
        <h1 className="mt-6 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          Your cart is empty
        </h1>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">
          Head to the{" "}
          <a href="/menu" className="text-amber-500 underline hover:text-amber-600">
            menu
          </a>{" "}
          and add some dishes!
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="mb-8 text-3xl font-extrabold text-zinc-900 dark:text-zinc-50">
        Your Cart ({totalItems} {totalItems === 1 ? "item" : "items"})
      </h1>

      <ul className="divide-y divide-zinc-200 dark:divide-zinc-700">
        {items.map((item) => (
          <li key={item.id} className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <span className="text-3xl">{item.image}</span>
              <div>
                <p className="font-semibold text-zinc-900 dark:text-zinc-50">
                  {item.name}
                </p>
                <p className="text-sm text-zinc-500">
                  {item.price} ETB × {item.qty}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-bold text-zinc-900 dark:text-zinc-50">
                {item.price * item.qty} ETB
              </span>
              <button
                onClick={() => removeItem(item.id)}
                className="rounded-lg bg-red-100 px-3 py-1.5 text-xs font-semibold text-red-700 transition hover:bg-red-200 cursor-pointer dark:bg-red-900/30 dark:text-red-400"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-center justify-between border-t border-zinc-200 pt-6 dark:border-zinc-700">
        <button
          onClick={clearCart}
          className="rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 cursor-pointer dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          Clear Cart
        </button>
        <div className="text-right">
          <p className="text-sm text-zinc-500">Total</p>
          <p className="text-2xl font-extrabold text-amber-600">{totalPrice} ETB</p>
        </div>
      </div>

      <a
        href="/checkout"
        className="mt-6 block w-full rounded-xl bg-amber-500 py-3.5 text-center text-lg font-bold text-white transition hover:bg-amber-600"
      >
        Proceed to Checkout →
      </a>
    </main>
  );
}
