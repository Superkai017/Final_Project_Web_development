/* =============================================
   script.js — Merged SneakerVault + LUMĒ
   Cart logic, products, dark mode, search, UI
   ============================================= */

// =============================================
// PRODUCT DATA
// =============================================
const PRODUCTS = [
  // JORDAN
  {
    id: 1,
    name: "Air Jordan 1 Retro High OG 'Chicago'",
    brand: "Jordan",
    category: "jordan",
    price: 320,
    badge: "Hot",
    img: "https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/w_363,c_limit/95e3c30f-aa7f-41a4-9959-8023fc707299/air-jordan-1-2022-lost-and-found-chicago-the-inspiration-behind-the-design.jpg",
  },
  {
    id: 2,
    name: "Air Jordan 4 Retro 'Military Blue'",
    brand: "Jordan",
    category: "jordan",
    price: 285,
    badge: null,
    img: "https://images.stockx.com/images/Air-Jordan-4-Retro-Military-Blue-2024-GS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1738193358",
  },
  {
    id: 3,
    name: "Air Jordan 11 Retro 'Bred'",
    brand: "Jordan",
    category: "jordan",
    price: 375,
    badge: "Bestseller",
    img: "https://images.stockx.com/images/Air-Jordan-11-Retro-Bred-2024-GS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1738193358",
  },
  {
    id: 4,
    name: "Air Jordan 3 Retro 'White Cement'",
    brand: "Jordan",
    category: "jordan",
    price: 260,
    badge: null,
    img: "https://images.stockx.com/images/Air-Jordan-3-Retro-White-Cement-2024-GS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1738193358",
  },

  // NIKE
  {
    id: 5,
    name: "Nike Air Max 95 OG Neon",
    brand: "Nike",
    category: "nike",
    price: 259,
    badge: "New",
    img: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d68f96e7-3ed5-4e9b-92f3-24b882dcf7ff/NIKE+AIR+MAX+95+BIG+BUBBLE.png",
  },
  {
    id: 6,
    name: "Nike Dunk Low 'Panda'",
    brand: "Nike",
    category: "nike",
    price: 189,
    badge: "Popular",
    img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&q=80",
  },
  {
    id: 7,
    name: "Nike Air Force 1 '07 White",
    brand: "Nike",
    category: "nike",
    price: 110,
    badge: null,
    img: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=500&q=80",
  },
  {
    id: 8,
    name: "Nike Blazer Mid '77 Vintage",
    brand: "Nike",
    category: "nike",
    price: 105,
    badge: null,
    img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80",
  },

  // ADIDAS
  {
    id: 9,
    name: "Adidas Yeezy Boost 350 V2 'Zebra'",
    brand: "Adidas",
    category: "adidas",
    price: 345,
    badge: "Hot",
    img: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&q=80",
  },
  {
    id: 10,
    name: "Adidas Stan Smith 'Cloud White'",
    brand: "Adidas",
    category: "adidas",
    price: 90,
    badge: null,
    img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80",
  },
  {
    id: 11,
    name: "Adidas Ultraboost 22",
    brand: "Adidas",
    category: "adidas",
    price: 180,
    badge: "New",
    img: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&q=80",
  },
  {
    id: 12,
    name: "Adidas Samba OG 'Black White'",
    brand: "Adidas",
    category: "adidas",
    price: 100,
    badge: "Trending",
    img: "https://images.unsplash.com/photo-1556906781-9a412961a28c?w=500&q=80",
  },

  // PUMA
  {
    id: 13,
    name: "Puma Suede Classic XXI",
    brand: "Puma",
    category: "puma",
    price: 75,
    badge: null,
    img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80",
  },
  {
    id: 14,
    name: "Puma RS-X 'Bold' Sneaker",
    brand: "Puma",
    category: "puma",
    price: 110,
    badge: "New",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
  },
  {
    id: 15,
    name: "Puma Clyde 'Hardwood'",
    brand: "Puma",
    category: "puma",
    price: 85,
    badge: null,
    img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&q=80",
  },

  // NEW BALANCE
  {
    id: 16,
    name: "New Balance 550 'White Green'",
    brand: "New Balance",
    category: "newbalance",
    price: 110,
    badge: "Trending",
    img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80",
  },
  {
    id: 17,
    name: "New Balance 990v5 'Grey'",
    brand: "New Balance",
    category: "newbalance",
    price: 185,
    badge: null,
    img: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500&q=80",
  },
  {
    id: 18,
    name: "New Balance 2002R 'Sea Salt'",
    brand: "New Balance",
    category: "newbalance",
    price: 130,
    badge: "New",
    img: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=500&q=80",
  },

  // CONVERSE
  {
    id: 19,
    name: "Converse Chuck 70 High 'Black'",
    brand: "Converse",
    category: "converse",
    price: 85,
    badge: null,
    img: "https://images.unsplash.com/photo-1494496195158-c3bc4675567f?w=500&q=80",
  },
  {
    id: 20,
    name: "Converse Run Star Hike Hi 'White'",
    brand: "Converse",
    category: "converse",
    price: 100,
    badge: "Popular",
    img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&q=80",
  },

  // VANS
  {
    id: 21,
    name: "Vans Old Skool 'Black White'",
    brand: "Vans",
    category: "vans",
    price: 70,
    badge: null,
    img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&q=80",
  },
  {
    id: 22,
    name: "Vans Sk8-Hi 'Marshmallow'",
    brand: "Vans",
    category: "vans",
    price: 80,
    badge: "New",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
  },

  // CROCS
  {
    id: 23,
    name: "Crocs Classic Clog 'Black'",
    brand: "Crocs",
    category: "crocs",
    price: 55,
    badge: null,
    img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80",
  },
  {
    id: 24,
    name: "Crocs Classic Platform Clog",
    brand: "Crocs",
    category: "crocs",
    price: 65,
    badge: "Trending",
    img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80",
  },
  {
    id: 25,
    name: "Crocs x Hidden Valley Ranch Clog",
    brand: "Crocs",
    category: "crocs",
    price: 90,
    badge: "Collab",
    img: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&q=80",
  },

  // BIRKENSTOCK
  {
    id: 26,
    name: "Birkenstock Arizona 'Sandal'",
    brand: "Birkenstock",
    category: "birkenstock",
    price: 100,
    badge: null,
    img: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&q=80",
  },
  {
    id: 27,
    name: "Birkenstock Boston Clog 'Mocha'",
    brand: "Birkenstock",
    category: "birkenstock",
    price: 130,
    badge: "Popular",
    img: "https://images.unsplash.com/photo-1494496195158-c3bc4675567f?w=500&q=80",
  },
  {
    id: 28,
    name: "Birkenstock Mayari 'Graceful Licorice'",
    brand: "Birkenstock",
    category: "birkenstock",
    price: 115,
    badge: null,
    img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&q=80",
  },

  // ASICS
  {
    id: 29,
    name: "ASICS Gel-Kayano 14 'Cream'",
    brand: "ASICS",
    category: "asics",
    price: 120,
    badge: "Trending",
    img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80",
  },
  {
    id: 30,
    name: "ASICS Gel-1130 'White Sage'",
    brand: "ASICS",
    category: "asics",
    price: 110,
    badge: "New",
    img: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500&q=80",
  },

  // REEBOK
  {
    id: 31,
    name: "Reebok Classic Leather 'White'",
    brand: "Reebok",
    category: "reebok",
    price: 80,
    badge: null,
    img: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=500&q=80",
  },
  {
    id: 32,
    name: "Reebok Club C 85 'White/Green'",
    brand: "Reebok",
    category: "reebok",
    price: 75,
    badge: null,
    img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80",
  },

  // TIMBERLAND
  {
    id: 33,
    name: "Timberland 6\" Premium Boot 'Wheat'",
    brand: "Timberland",
    category: "timberland",
    price: 198,
    badge: "Iconic",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
  },
  {
    id: 34,
    name: "Timberland 3-Eye Lug Boat Shoe",
    brand: "Timberland",
    category: "timberland",
    price: 160,
    badge: null,
    img: "https://images.unsplash.com/photo-1556906781-9a412961a28c?w=500&q=80",
  },

  // COLLABS
  {
    id: 35,
    name: "New Balance 5740 x Salehe Bembury",
    brand: "New Balance",
    category: "newbalance",
    price: 299,
    badge: "Collab",
    img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&q=80",
  },
  {
    id: 36,
    name: "Adidas Gazelle 'Bold Pink'",
    brand: "Adidas",
    category: "adidas",
    price: 95,
    badge: "New",
    img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80",
  },
];

// =============================================
// DARK MODE — apply theme BEFORE paint to avoid flash
// =============================================
(function applyThemeEarly() {
  const saved = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", saved);
})();

// =============================================
// CART HELPERS (LocalStorage)
// =============================================
function getCart() {
  return JSON.parse(localStorage.getItem("cart") || "[]");
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(productId) {
  const cart = getCart();
  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    const product = PRODUCTS.find((p) => p.id === productId);
    cart.push({ ...product, qty: 1 });
  }
  saveCart(cart);
  updateCartCount();
  showNotification(`"${PRODUCTS.find((p) => p.id === productId).name}" added to cart!`);
}

function removeFromCart(productId) {
  let cart = getCart().filter((item) => item.id !== productId);
  saveCart(cart);
  updateCartCount();
  renderCart();
}

function updateQty(productId, delta) {
  const cart = getCart();
  const item = cart.find((i) => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    saveCart(cart.filter((i) => i.id !== productId));
  } else {
    saveCart(cart);
  }
  updateCartCount();
  renderCart();
}

function getTotal() {
  return getCart().reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getTotalCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

// =============================================
// UPDATE CART COUNT BADGE
// =============================================
function updateCartCount() {
  const el = document.getElementById("cartCount");
  if (el) {
    el.textContent = getTotalCount();
    el.style.animation = "none";
    el.offsetWidth; // reflow
    el.style.animation = "";
  }
}

// =============================================
// NOTIFICATION POPUP
// =============================================
let notifTimeout = null;

function showNotification(msg) {
  const notif = document.getElementById("notification");
  const text = document.getElementById("notifText");
  if (!notif) return;
  text.textContent = msg;
  notif.classList.add("show");
  clearTimeout(notifTimeout);
  notifTimeout = setTimeout(() => notif.classList.remove("show"), 2500);
}

// =============================================
// RENDER PRODUCTS (index.html)
// Accepts optional filter and/or search query
// =============================================
let currentFilter = "all";
let currentSearch = "";

function renderProducts(filter, search) {
  if (filter !== undefined) currentFilter = filter;
  if (search !== undefined) currentSearch = search;

  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  let visible =
    currentFilter === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === currentFilter);

  if (currentSearch.trim()) {
    const q = currentSearch.trim().toLowerCase();
    visible = visible.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q)
    );
  }

  grid.innerHTML = "";

  if (visible.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:4rem 2rem;color:var(--text-muted);font-size:0.9rem;text-transform:uppercase;letter-spacing:0.1em;">No products found</div>`;
    return;
  }

  visible.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.style.animationDelay = `${i * 0.05}s`;
    card.style.cursor = "pointer";
    card.innerHTML = `
      <div class="product-img-wrap">
        <img class="product-img" src="${p.img}" alt="${p.name}" loading="lazy"/>
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ""}
      </div>
      <div class="product-info">
        <p class="product-category">${p.brand}</p>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-footer">
          <div class="product-price-wrap">
            <span class="product-price-label">Lowest Ask</span>
            <span class="product-price">$${p.price.toFixed(2)}</span>
          </div>
          <button class="btn-add" data-id="${p.id}">Add to Cart</button>
        </div>
        <div class="xpress-tag">Xpress Ship</div>
      </div>
    `;
    // Click card body → product detail page; click button → add to cart
    card.addEventListener("click", (e) => {
      if (e.target.closest(".btn-add")) {
        addToCart(Number(e.target.closest(".btn-add").dataset.id));
        return;
      }
      window.location.href = `product.html?id=${p.id}`;
    });
    grid.appendChild(card);
  });
}

// =============================================
// INJECT SEARCH STYLES
// Fixes: floating bubble, misplaced ✕ button,
// dropdown positioning, dark-mode support
// =============================================
function injectSearchStyles() {
  if (document.getElementById("sv-search-styles")) return;
  const style = document.createElement("style");
  style.id = "sv-search-styles";
  style.textContent = `
    /* ── Outer wrapper: strip any bubble styling ── */
    .nav-search-wrap {
      position: relative !important;
      display: flex !important;
      align-items: center !important;
      background: transparent !important;
      box-shadow: none !important;
      border-radius: 0 !important;
      padding: 0 !important;
      margin: 0 !important;
    }

    /* ── .nav-search: the pill container (was the bubble) ── */
    .nav-search {
      position: relative !important;
      display: flex !important;
      align-items: center !important;
      width: 260px !important;
      height: 38px !important;
      background: var(--surface, #f4f4f4) !important;
      border: 1.5px solid var(--border, #e0e0e0) !important;
      border-radius: 20px !important;
      padding: 0 10px 0 12px !important;
      box-shadow: none !important;
      transition: width 0.25s ease, border-color 0.2s ease;
      overflow: visible !important;
    }
    .nav-search:focus-within {
      width: 320px !important;
      border-color: var(--accent, #85b800) !important;
      background: #fff !important;
    }
    [data-theme="dark"] .nav-search {
      background: var(--surface, #222) !important;
      border-color: var(--border, #333) !important;
    }
    [data-theme="dark"] .nav-search:focus-within {
      background: #1a1a1a !important;
    }

    /* ── Search icon ── */
    .search-icon {
      flex-shrink: 0 !important;
      font-size: 0.85rem !important;
      margin-right: 6px !important;
      opacity: 0.5 !important;
      pointer-events: none !important;
      line-height: 1 !important;
    }

    /* ── The <input> — fills remaining pill space ── */
    .search-input,
    #searchInput,
    #navSearch {
      flex: 1 !important;
      height: 100% !important;
      border: none !important;
      background: transparent !important;
      color: var(--text, #111) !important;
      font-size: 0.82rem !important;
      font-family: inherit !important;
      outline: none !important;
      box-shadow: none !important;
      padding: 0 !important;
      min-width: 0 !important;
    }
    [data-theme="dark"] .search-input,
    [data-theme="dark"] #searchInput,
    [data-theme="dark"] #navSearch {
      color: var(--text, #f0f0f0) !important;
    }
    .search-input::placeholder,
    #searchInput::placeholder,
    #navSearch::placeholder {
      color: var(--text-muted, #aaa) !important;
    }

    /* ── ✕ Clear button — inside pill, right edge ── */
    .search-clear,
    #searchClear {
      flex-shrink: 0 !important;
      display: none !important;         /* hidden until .visible */
      align-items: center !important;
      justify-content: center !important;
      width: 18px !important;
      height: 18px !important;
      border: none !important;
      border-radius: 50% !important;
      background: var(--text-muted, #bbb) !important;
      color: #fff !important;
      font-size: 9px !important;
      font-weight: 700 !important;
      line-height: 1 !important;
      cursor: pointer !important;
      padding: 0 !important;
      margin-left: 4px !important;
      flex-shrink: 0 !important;
      transition: background 0.15s;
    }
    .search-clear.visible,
    #searchClear.visible {
      display: flex !important;
    }
    .search-clear:hover,
    #searchClear:hover {
      background: var(--accent, #85b800) !important;
    }

    /* ── Dropdown panel ── */
    #searchDropdown {
      position: absolute !important;
      top: calc(100% + 8px) !important;
      left: 0 !important;
      min-width: 340px !important;
      background: #fff !important;
      border: 1px solid var(--border, #e0e0e0) !important;
      border-radius: 12px !important;
      box-shadow: 0 8px 32px rgba(0,0,0,0.13) !important;
      z-index: 99999 !important;
      overflow: hidden !important;
      opacity: 0;
      pointer-events: none;
      transform: translateY(-6px);
      transition: opacity 0.18s ease, transform 0.18s ease;
    }
    #searchDropdown.open {
      opacity: 1 !important;
      pointer-events: auto !important;
      transform: translateY(0) !important;
    }
    [data-theme="dark"] #searchDropdown {
      background: #1e1e1e !important;
      border-color: #333 !important;
      box-shadow: 0 8px 32px rgba(0,0,0,0.45) !important;
    }

    /* ── Dropdown header ── */
    .search-results-header {
      padding: 8px 14px 6px;
      font-size: 0.68rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--text-muted, #999);
      border-bottom: 1px solid var(--border, #eee);
    }

    /* ── Result row ── */
    .search-result-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 9px 14px;
      cursor: pointer;
      transition: background 0.12s;
    }
    .search-result-item:hover { background: #f5f5f5; }
    [data-theme="dark"] .search-result-item:hover { background: #2a2a2a; }

    .search-result-img {
      width: 44px; height: 44px;
      object-fit: cover;
      border-radius: 8px;
      flex-shrink: 0;
      background: #eee;
    }
    .search-result-info { flex: 1; min-width: 0; }
    .search-result-brand {
      font-size: 0.62rem; font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.06em;
      color: var(--text-muted, #999);
    }
    .search-result-name {
      font-size: 0.8rem; font-weight: 500;
      color: var(--text, #111);
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }
    [data-theme="dark"] .search-result-name { color: #f0f0f0; }
    .search-result-price {
      font-size: 0.8rem; font-weight: 700;
      color: var(--text, #111); flex-shrink: 0;
    }
    [data-theme="dark"] .search-result-price { color: #f0f0f0; }
    .search-result-add {
      flex-shrink: 0;
      padding: 5px 10px;
      border: none; border-radius: 20px;
      background: var(--accent, #85b800);
      color: #000;
      font-size: 0.72rem; font-weight: 700;
      cursor: pointer;
      transition: opacity 0.15s, transform 0.1s;
    }
    .search-result-add:hover { opacity: 0.85; transform: scale(1.04); }

    /* ── Highlighted match text ── */
    .search-result-name mark,
    .search-result-brand mark {
      background: rgba(133,184,0,0.2);
      color: inherit; border-radius: 2px; padding: 0 1px;
    }

    /* ── No results ── */
    .search-no-results {
      padding: 20px 14px;
      font-size: 0.82rem;
      color: var(--text-muted, #999);
      text-align: center;
    }

    /* ── Card highlight on scroll-to ── */
    .search-highlight {
      outline: 2.5px solid var(--accent, #85b800) !important;
      outline-offset: 3px;
      border-radius: 10px;
      animation: svSearchPulse 1.8s ease forwards;
    }
    @keyframes svSearchPulse {
      0%, 70% { outline-color: var(--accent, #85b800); }
      100%     { outline-color: transparent; }
    }
  `;
  document.head.appendChild(style);
}

// =============================================
// ENSURE CORRECT DOM STRUCTURE FOR SEARCH
// Wraps input + clearBtn in .nav-search-inner if
// not already done, so ✕ is positioned inside pill
// =============================================
function ensureSearchDOM() {
  // Find input by ID first, then fall back to class name
  const input =
    document.getElementById("searchInput") ||
    document.getElementById("navSearch") ||
    document.querySelector(".search-input");

  if (!input) return;

  // Stamp an ID so the rest of initSearch can find it
  if (!input.id) input.id = "searchInput";

  // Find or stamp clear button
  let clearBtn =
    document.getElementById("searchClear") ||
    document.querySelector(".search-clear");
  if (clearBtn && !clearBtn.id) clearBtn.id = "searchClear";

  // The pill container (.nav-search) is the positioning parent for the dropdown
  const pill = input.closest(".nav-search") || input.parentElement;

  // Create dropdown if it doesn't exist, attach to pill's parent (.nav-search-wrap)
  let dropdown = document.getElementById("searchDropdown");
  if (!dropdown) {
    dropdown = document.createElement("div");
    dropdown.id = "searchDropdown";
    // Insert after the pill so it's a sibling, positioned relative to .nav-search-wrap
    const wrap = pill.closest(".nav-search-wrap") || pill.parentElement;
    wrap.appendChild(dropdown);
  }
}

// =============================================
// ADVANCED SEARCH WITH DROPDOWN (index.html)
// Supports: live dropdown, highlight match, add-
// from-dropdown, Enter to filter grid, Esc/clear
// =============================================
function initSearch() {
  ensureSearchDOM();

  const input    = document.getElementById("searchInput") || document.getElementById("navSearch");
  const dropdown = document.getElementById("searchDropdown");
  const clearBtn = document.getElementById("searchClear");

  if (!input) return;

  // ── Helpers ──────────────────────────────────
  function highlight(text, query) {
    if (!query) return text;
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return text.replace(new RegExp(`(${escaped})`, "gi"), "<mark>$1</mark>");
  }

  function getResults(query) {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q)
    ).slice(0, 8);
  }

  function closeDropdown() {
    if (dropdown) dropdown.classList.remove("open");
  }

  function clearSearch() {
    input.value = "";
    if (clearBtn) clearBtn.classList.remove("visible");
    closeDropdown();
    renderProducts(undefined, "");
  }

  function resetBrandFilter() {
    const strip = document.getElementById("brandFilterStrip");
    if (strip) {
      strip.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      const allBtn = strip.querySelector('[data-filter="all"]');
      if (allBtn) allBtn.classList.add("active");
    }
  }

  // ── Dropdown render ───────────────────────────
  function renderDropdown(query) {
    if (!dropdown) return;
    dropdown.innerHTML = "";

    if (!query.trim()) { closeDropdown(); return; }

    const results = getResults(query);
    dropdown.classList.add("open");

    if (results.length === 0) {
      dropdown.innerHTML = `<div class="search-no-results">No results for "<strong>${query}</strong>"</div>`;
      return;
    }

    const header = document.createElement("div");
    header.className = "search-results-header";
    header.textContent = `${results.length} result${results.length !== 1 ? "s" : ""} found`;
    dropdown.appendChild(header);

    results.forEach((p) => {
      const item = document.createElement("div");
      item.className = "search-result-item";
      item.innerHTML = `
        <img class="search-result-img" src="${p.img}" alt="${p.name}" loading="lazy"/>
        <div class="search-result-info">
          <div class="search-result-brand">${highlight(p.brand, query)}</div>
          <div class="search-result-name">${highlight(p.name, query)}</div>
        </div>
        <div class="search-result-price">$${p.price.toFixed(2)}</div>
        <button class="search-result-add" data-id="${p.id}">+ Cart</button>
      `;

      // Row click → navigate to product or scroll on index
      item.addEventListener("click", (e) => {
        if (e.target.closest(".search-result-add")) return;
        clearSearch();
        resetBrandFilter();

        const isIndex = !!document.getElementById("productsGrid");
        if (!isIndex) {
          // On other pages (product.html etc.) → go to shop
          window.location.href = `index.html`;
          return;
        }

        renderProducts("all", "");
        setTimeout(() => {
          document.querySelectorAll(".product-card").forEach((card) => {
            const btn = card.querySelector(".btn-add");
            if (btn && Number(btn.dataset.id) === p.id) {
              card.scrollIntoView({ behavior: "smooth", block: "center" });
              card.classList.add("search-highlight");
              setTimeout(() => card.classList.remove("search-highlight"), 1800);
            }
          });
        }, 120);
      });

      // Add-to-cart button inside dropdown row
      const addBtn = item.querySelector(".search-result-add");
      addBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        addToCart(Number(addBtn.dataset.id));
        addBtn.textContent = "✓ Added";
        addBtn.style.background = "#27ae60";
        setTimeout(() => {
          addBtn.textContent = "+ Cart";
          addBtn.style.background = "";
        }, 1400);
      });

      dropdown.appendChild(item);
    });
  }

  // ── Event listeners ───────────────────────────
  input.addEventListener("input", (e) => {
    const val = e.target.value;
    if (clearBtn) clearBtn.classList.toggle("visible", val.length > 0);
    renderDropdown(val);
    renderProducts(undefined, val);   // live-filter the grid
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      clearSearch();
      resetBrandFilter();
      input.blur();
    }
    if (e.key === "Enter" && input.value.trim()) {
      closeDropdown();
      resetBrandFilter();
      renderProducts("all", input.value.trim());
    }
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      clearSearch();
      resetBrandFilter();
      input.focus();
    });
  }

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (
      !e.target.closest(".nav-search-wrap") &&
      !e.target.closest(".search-wrap") &&
      !e.target.closest(".nav-search-inner")
    ) closeDropdown();
  });

  // Re-open on focus if has value
  input.addEventListener("focus", () => {
    if (input.value.trim()) renderDropdown(input.value);
  });
}

// Inject search CSS as early as possible (before DOMContentLoaded)
// so there is no flash of the unstyled floating-bubble layout
injectSearchStyles();

// =============================================
// DOM READY — wire up all interactive elements
// =============================================
document.addEventListener("DOMContentLoaded", () => {
  injectSearchStyles(); // ensure styles are present

  // Render initial product grid
  renderProducts();
  updateCartCount();

  // Brand filter strip
  const strip = document.getElementById("brandFilterStrip");
  if (strip) {
    strip.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      strip.querySelectorAll(".filter-btn").forEach((b) =>
        b.classList.remove("active")
      );
      btn.classList.add("active");
      renderProducts(btn.dataset.filter);
    });
  }

  // Standalone filter buttons outside strip (legacy support)
  const filterBtns = document.querySelectorAll(".filter-bar .filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderProducts(btn.dataset.filter);
    });
  });

  // Dark mode toggle button
  const darkBtn = document.getElementById("darkToggle");
  if (darkBtn) {
    const current = document.documentElement.getAttribute("data-theme");
    darkBtn.textContent = current === "dark" ? "☀️" : "🌙";
    darkBtn.addEventListener("click", () => {
      const next =
        document.documentElement.getAttribute("data-theme") === "dark"
          ? "light"
          : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      darkBtn.textContent = next === "dark" ? "☀️" : "🌙";
    });
  }

  // Initialise search (works with or without dropdown element)
  initSearch();
});

// =============================================
// RENDER CART (cart.html)
// =============================================
function renderCart() {
  const container = document.getElementById("cartItems");
  if (!container) return;

  const cart = getCart();

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart">
        <span>🛒</span>
        Your cart is empty.<br/>
        <a href="index.html" style="color:var(--accent);font-weight:600;margin-top:1rem;display:inline-block;">Continue Shopping →</a>
      </div>
    `;
    updateSummary(0);
    return;
  }

  container.innerHTML = "";

  cart.forEach((item, i) => {
    const el = document.createElement("div");
    el.className = "cart-item";
    el.style.animationDelay = `${i * 0.08}s`;
    el.innerHTML = `
      <img class="cart-item-img" src="${item.img}" alt="${item.name}"/>
      <div class="cart-item-info">
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-price">$${item.price.toFixed(2)}</p>
        <div class="cart-item-controls">
          <button class="qty-btn" data-id="${item.id}" data-delta="-1">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" data-id="${item.id}" data-delta="1">+</button>
        </div>
      </div>
      <button class="remove-btn" data-id="${item.id}" title="Remove">✕</button>
    `;
    container.appendChild(el);
  });

  updateSummary(getTotal());

  container.querySelectorAll(".qty-btn").forEach((btn) => {
    btn.addEventListener("click", () =>
      updateQty(Number(btn.dataset.id), Number(btn.dataset.delta))
    );
  });

  container.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.addEventListener("click", () => removeFromCart(Number(btn.dataset.id)));
  });

  const clearBtn = document.getElementById("clearCartBtn");
  if (clearBtn) {
    clearBtn.onclick = () => {
      localStorage.removeItem("cart");
      updateCartCount();
      renderCart();
    };
  }
}

function updateSummary(total) {
  const sub = document.getElementById("subtotal");
  const tot = document.getElementById("totalPrice");
  if (sub) sub.textContent = `$${total.toFixed(2)}`;
  if (tot) tot.textContent = `$${total.toFixed(2)}`;
}

// =============================================
// RENDER CHECKOUT SUMMARY (checkout.html)
// =============================================
function renderCheckoutSummary() {
  const container = document.getElementById("checkoutItems");
  if (!container) return;

  const cart = getCart();

  if (cart.length === 0) {
    container.innerHTML = `<p style="color:var(--text-muted);font-size:0.9rem">No items in cart.</p>`;
    return;
  }

  cart.forEach((item) => {
    const row = document.createElement("div");
    row.className = "checkout-item-row";
    row.innerHTML = `
      <span>${item.name} × ${item.qty}</span>
      <span>$${(item.price * item.qty).toFixed(2)}</span>
    `;
    container.appendChild(row);
  });

  const el = document.getElementById("checkoutTotal");
  if (el) el.textContent = `$${getTotal().toFixed(2)}`;
}