/* =============================================
   SneakerVault — script.js
   All cart logic, products, dark mode, UI
   ============================================= */

// =============================================
// PRODUCT DATA
// =============================================
const PRODUCTS = [
  {
    id: 1,
    name: "Jordan 1 Retro High Virgil Abloh Archive Alaska",
    category: "",
    price: 364,
    badge: "Bestseller",
    img: "https://www.sneakersnstuff.com/cdn/shop/files/AA3834-100_01.jpg?v=1774956737",
  },
  {
    id: 2,
    name: "Nike Kobe 11 Elite Low Protro Fade to Black",
    category: "",
    price: 193,
    badge: null,
    img: "https://www.dtlr.com/cdn/shop/files/nike_IM4280_20001_M154.jpg?v=1775156191",
  },
  {
    id: 3,
    name: "Nike SB Dunk Low Pro Som Tum",
    category: "",
    price: 123,
    badge: "New",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2B9UaadtECAFiVITobax-GlEA25TEIX9wAA&s",
  },
  {
    id: 4,
    name: "ASICS Gel-1130 Black Pure Silver",
    category: "",
    price: 49,
    badge: null,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvXLccBG3zwoLc84tO6tCFb_qX9mKAulOxRg&s",
  },
  {
    id: 5,
    name: "Jordan 4 Retro OG Flight Club",
    category: "",
    price: 126,
    badge: "New",
    img: "https://www.dtlr.com/cdn/shop/files/jordan_IM4002_20100_M074.jpg?v=1768233082",
  },
  {
    id: 6,
    name: "Timberland 6 Premium Waterproof Boot Wheat",
    category: "",
    price: 87,
    badge: null,
    img: "data:image/jpeg;base64,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",
  },
  {
    id: 7,
    name: "Jordan 1 Retro High OG Flight Club",
    category: "",
    price: 107,
    badge: "Popular",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7sqOs1cs0mlSh6Vuuo2A2FWryqOR8bV0CqQ&s",
  },
  {
    id: 8,
    name: "Jordan 14 Retro Black University Blue",
    category: "",
    price: 137,
    badge: null,
    img: "data:image/jpeg;base64,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",
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

  visible.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.style.animationDelay = `${i * 0.07}s`;
    card.innerHTML = `
      <div class="product-img-wrap">
        <img class="product-img" src="${p.img}" alt="${p.name}" loading="lazy"/>
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ""}
      </div>
      <div class="product-info">
        <p class="product-category">${p.category}</p>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-footer">
          <span class="product-price">$${p.price.toFixed(2)}</span>
          <button class="btn-add" data-id="${p.id}">Add to Cart</button>
        </div>
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
  const filterBtns = document.querySelectorAll(".filter-btn");
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
