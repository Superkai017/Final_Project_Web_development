/* =============================================
   SneakerVault — script.js
   All cart logic, products, dark mode, UI
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
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
  },
  {
    id: 2,
    name: "Air Jordan 4 Retro 'Military Blue'",
    brand: "Jordan",
    category: "jordan",
    price: 285,
    badge: null,
    img: "https://images.unsplash.com/photo-1556906781-9a412961a28c?w=500&q=80",
  },
  {
    id: 3,
    name: "Air Jordan 11 Retro 'Bred'",
    brand: "Jordan",
    category: "jordan",
    price: 375,
    badge: "Bestseller",
    img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&q=80",
  },
  {
    id: 4,
    name: "Air Jordan 3 Retro 'White Cement'",
    brand: "Jordan",
    category: "jordan",
    price: 260,
    badge: null,
    img: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500&q=80",
  },

  // NIKE
  {
    id: 5,
    name: "Nike Air Max 95 OG Neon",
    brand: "Nike",
    category: "nike",
    price: 259,
    badge: "New",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
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

  // SALEHE BEMBURY / LUXURY COLLAB
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
  showNotification(`"${PRODUCTS.find(p => p.id === productId).name}" added to cart!`);
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
    // Re-trigger pop animation
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
// =============================================
function renderProducts(filter = "all") {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  const visible = filter === "all"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === filter);

  grid.innerHTML = "";

  if (visible.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:4rem 2rem;color:var(--text-muted);font-size:0.9rem;text-transform:uppercase;letter-spacing:0.1em;">No products found</div>`;
    return;
  }

  visible.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.style.animationDelay = `${i * 0.05}s`;
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
    grid.appendChild(card);
  });

  // Delegate click
  grid.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-add");
    if (btn) {
      addToCart(Number(btn.dataset.id));
    }
  });
}

// =============================================
// FILTER BUTTONS (index.html)
// =============================================
document.addEventListener("DOMContentLoaded", () => {
  const strip = document.getElementById("brandFilterStrip");
  if (strip) {
    strip.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      strip.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProducts(btn.dataset.filter);
    });
  }

  // fallback for any standalone filter-btn outside strip
  const filterBtns = document.querySelectorAll(".filter-bar .filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderProducts(btn.dataset.filter);
    });
  });
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

  const total = getTotal();
  updateSummary(total);

  // Qty buttons
  container.querySelectorAll(".qty-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      updateQty(Number(btn.dataset.id), Number(btn.dataset.delta));
    });
  });

  // Remove buttons
  container.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      removeFromCart(Number(btn.dataset.id));
    });
  });

  // Clear cart
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

  const total = getTotal();
  const el = document.getElementById("checkoutTotal");
  if (el) el.textContent = `$${total.toFixed(2)}`;
}

// =============================================
// DARK MODE TOGGLE
// =============================================
(function initDarkMode() {
  const saved = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", saved);

  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("darkToggle");
    if (!btn) return;

    btn.textContent = saved === "dark" ? "☀️" : "🌙";

    btn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      btn.textContent = next === "dark" ? "☀️" : "🌙";
    });
  });
})();
