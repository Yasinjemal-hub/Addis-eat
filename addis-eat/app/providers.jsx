"use client";

import { CartProvider } from "../lib/CartContext";

/**
 * Client Providers component — isolates the "use client" boundary.
 * The layout itself stays a server component; only this wrapper is client-side.
 */
export default function Providers({ children }) {
  return <CartProvider>{children}</CartProvider>;
}
