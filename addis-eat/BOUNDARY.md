# Component Boundaries

Each component, which side it runs on, and why.

| File | Side | Why |
|---|---|---|
| `app/layout.tsx` | **Server** | Static shell — no interactivity, just wraps children in `<html>` and `<body>`. Stays on the server so it ships zero JS. |
| `app/providers.jsx` | **Client** | Contains `CartProvider` which uses React context and `useState`. Context providers must be client components. Isolated here so the layout itself stays server-side. |
| `app/menu/page.js` | **Server** | Async function that `await`s `getDishes()` on the server. No hooks, no browser APIs. Server rendering means zero client JS for data fetching — no loading spinners needed. |
| `app/menu/DishList.jsx` | **Server** | Pure presentational — receives a `dishes` array and maps it to `DishCard` components. No state, no event handlers, no reason to be on the client. |
| `app/menu/DishCard.jsx` | **Server** | Renders dish info (name, price, description). Static markup that can be streamed from the server. Only its `AddToCartButton` child needs to be interactive. |
| `app/menu/AddToCartButton.jsx` | **Client** | Calls `useCart()` (context hook) and manages an `added` animation state. This is the **smallest interactive leaf** — pushed as far down the tree as possible. |
| `app/menu/CategoryBar.jsx` | **Client** | Manages `activeCategory` state and fires `onClick` handlers. The only standalone client component in the `/menu` segment per the exercise spec. |
| `app/menu/FilterShell.jsx` | **Client** | Holds filter state and clones `DishList` children with filtered data. Uses the **children pattern** so `DishList` is passed from the server page as JSX children rather than imported directly — keeping `DishList` a server component. |
| `lib/dishes.js` | **Server** | Data source. Exports async functions (`getDishes`, `getCategories`) called only from server components. Never shipped to the browser. |
| `lib/CartContext.jsx` | **Client** | React context + `useState` + `useCallback`. Context APIs require a client component. Kept in `lib/` and consumed only by other client components. |

## Summary

- **Server boundary**: `layout.tsx` → `page.js` → `DishList` → `DishCard` — all static, data-driven markup.
- **Client boundary**: `providers.jsx` (cart context), `FilterShell` (filter state), `CategoryBar` (UI state), `AddToCartButton` (cart mutation).
- **"use client"** appears in exactly **5 files**: `providers.jsx`, `CartContext.jsx`, `FilterShell.jsx`, `CategoryBar.jsx`, `AddToCartButton.jsx`.
- Every `"use client"` is pushed to the **smallest leaf** possible, keeping the majority of the component tree on the server.
