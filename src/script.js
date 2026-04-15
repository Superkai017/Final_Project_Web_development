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
    name: "Arc Wireless Speaker",
    category: "audio",
    price: 129,
    badge: "Bestseller",
    img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
  },
  {
    id: 2,
    name: "Studio Headphones",
    category: "audio",
    price: 249,
    badge: null,
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
  },
  {
    id: 3,
    name: "Linen Throw Pillow",
    category: "home",
    price: 45,
    badge: "New",
    img: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&q=80",
  },
  {
    id: 4,
    name: "Ceramic Pour-Over Set",
    category: "home",
    price: 68,
    badge: null,
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80",
  },
  {
    id: 5,
    name: "Merino Wool Scarf",
    category: "wear",
    price: 89,
    badge: "New",
    img: "https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?w=500&q=80",
  },
  {
    id: 6,
    name: "Leather Card Wallet",
    category: "wear",
    price: 55,
    badge: null,
    img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80",
  },
  {
    id: 7,
    name: "Marble Desk Lamp",
    category: "home",
    price: 112,
    badge: "Popular",
    img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80",
  },
  {
    id: 8,
    name: "TWS Earbuds Pro",
    category: "audio",
    price: 179,
    badge: null,
    img: "https://images.unsplash.com/photo-1590658165737-15a047b7c35b?w=500&q=80",
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
