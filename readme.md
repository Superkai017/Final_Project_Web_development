# LUMĒ — Simple Shopping Cart Website

LUMĒ is a clean, responsive shopping cart website built with pure HTML, CSS, and JavaScript — no frameworks or build tools required. The project was designed as a hands-on web development exercise covering the core concepts of DOM manipulation, dynamic rendering, and client-side data persistence. Users can browse a curated product catalog, filter items by category, add products to their cart, adjust quantities, and proceed through a full checkout flow. All cart data is automatically saved to the browser's LocalStorage, meaning items are preserved even after the page is refreshed or closed. The interface features a dark mode toggle, smooth CSS animations, popup notifications, and a fully responsive layout that works seamlessly on mobile, tablet, and desktop screens. The checkout page includes a shipping and payment form with a success modal that confirms the order upon completion. The codebase is intentionally kept simple and well-organized across separate files for structure, styling, and logic, making it easy to read, extend, and learn from.

---

## Project Structure

```
project/
│── index.html       # Home page — product grid with hero & filters
│── cart.html        # Cart page — item list, quantities, totals
│── checkout.html    # Checkout page — shipping form & order confirmation
│── style.css        # All styles — layout, dark mode, animations
│── script.js        # All logic — cart, products, LocalStorage, UI
```

---

## Features

- Add to cart with live badge counter
- Quantity controls (increase / decrease per item)
- Remove items or clear the entire cart
- Cart saved with LocalStorage (persists on refresh)
- Live total price calculation
- Popup notifications on add-to-cart
- Category filter buttons (All, Audio, Home, Wear)
- Dark mode toggle (preference saved)
- Smooth fade-up animations and hover effects
- Fully responsive — mobile, tablet, and desktop
- Order success modal on checkout completion

---

## Contributors

| Name | Role |
|---|---|
| **ART OUDOM** | Project Lead & JavaScript Logic |
| **LY CHANTHANOU** | UI Design & CSS Styling |
| **SOY OUSA** | HTML Structure & Page Layout |
| **HENG PANHA** | Cart & LocalStorage Implementation |
| **VUTH** | Testing, Responsive Design & Dark Mode |

---

## How to Run

1. Download or clone the project folder.
2. Open `index.html` in any modern web browser.
3. No installation, server, or build tools required.