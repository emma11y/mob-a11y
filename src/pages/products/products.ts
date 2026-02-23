import '../../assets/styles/products/main.scss';
import '../../assets/styles/products/Index.scss';
import '../../assets/styles/products/components/ProductCard.scss';
import '../../assets/styles/products/components/SiteHeader.scss';
import '../../assets/styles/products/components/CartDrawer.scss';
import { products } from '../../data/products';

// Simple cart state
type CartItem = { product: (typeof products)[number]; quantity: number };

const state = {
  items: [] as CartItem[],
  isCartOpen: false,
};

function addToCart(productId: number) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;
  const existing = state.items.find((i) => i.product.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.items.push({ product, quantity: 1 });
  }
  render();
}

function removeFromCart(productId: number) {
  state.items = state.items.filter((i) => i.product.id !== productId);
  render();
}

function totalItems() {
  return state.items.reduce((sum, i) => sum + i.quantity, 0);
}

function totalPrice() {
  return state.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
}

function setIsCartOpen(open: boolean) {
  state.isCartOpen = open;
  render();
}

function productCardHTML(product: (typeof products)[number], index: number) {
  return `
    <div class="product-card" style="animation-delay: ${index * 80}ms">
      <div class="card">
        <div class="image">
          <img src="${product.image}" loading="lazy" />
        </div>
        <div class="body">
          <div class="header">
            <div>
              <div class="title">${product.name}</div>
              <div class="category">${product.category}</div>
            </div>
            <div class="price">$${product.price.toFixed(2)}</div>
          </div>
          <div class="add-to-cart" data-add-to-cart="${product.id}">Add to cart</div>
        </div>
      </div>
    </div>
  `;
}

function cartDrawerHTML() {
  if (!state.isCartOpen) return '';
  const itemsHTML = state.items
    .map(
      (item) => `
      <div class="item">
        <img src="${item.product.image}" class="thumb" />
        <div class="info">
          <div class="name">${item.product.name}</div>
          <div class="qty">Qty: ${item.quantity}</div>
        </div>
        <div class="row-price">$${(item.product.price * item.quantity).toFixed(2)}</div>
        <div class="remove" data-remove="${item.product.id}">✕</div>
      </div>
    `
    )
    .join('');

  const content =
    state.items.length === 0
      ? `<div class="empty"><span class="text">Your cart is empty</span></div>`
      : `
        <div class="items">${itemsHTML}</div>
        <div class="panel-footer">
          <div class="total">
            <span class="total-label">Total</span>
            <span class="total-value">$${totalPrice().toFixed(2)}</span>
          </div>
          <div class="checkout">Checkout</div>
        </div>
      `;

  return `
    <div class="cart-drawer">
      <div class="overlay" data-close-drawer></div>
      <div class="panel">
        <div class="panel-content">
          <div class="panel-header">
            <span class="panel-title">Cart</span>
            <div class="close" data-close-drawer>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
          </div>
          ${content}
        </div>
      </div>
    </div>
  `;
}

function homePageHTML() {
  const grid = products.map((p, i) => productCardHTML(p, i)).join('');
  const cartBadge = totalItems();
  return `
    <div class="index-container">
      <div class="site-header">
        <div class="container header-container">
          <div class="site-logo">STCKR.</div>
          <div class="nav-menu">
            <span class="nav-item">Shop</span>
            <span class="nav-item">About</span>
            <!-- ThemeToggle intentionally omitted in vanilla sample -->
            <div class="cart-toggle" data-open-drawer>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              ${cartBadge > 0 ? `<span class="cart-badge">${cartBadge}</span>` : ''}
            </div>
          </div>
        </div>
      </div>

      <div class="container hero-section">
        <div class="hero-content">
          <div class="hero-title">Stickers that<br />stick with you.</div>
          <div class="hero-description">
            Handcrafted vinyl stickers for your laptop, water bottle, or anywhere you want a little personality.
          </div>
        </div>
      </div>

      <div class="container product-grid-section">
        <div class="product-grid">${grid}</div>
      </div>

      <div class="site-footer">
        <div class="container footer-content">
          <span class="footer-copy">© 2026 STCKR.</span>
          <span class="footer-info">All stickers are waterproof & UV resistant</span>
        </div>
      </div>

      ${cartDrawerHTML()}
    </div>
  `;
}

function notFoundPageHTML() {
  return `
    <div class="not-found-container">
      <div class="not-found-content">
        <h1 class="not-found-title">404</h1>
        <p class="not-found-message">Oops! Page not found</p>
        <a href="/" class="not-found-link" data-link>
          Return to Home
        </a>
      </div>
    </div>
  `;
}

function router() {
  const path = window.location.pathname;
  if (path === '/' || path === '/index.html') {
    return homePageHTML();
  } else {
    console.error(
      '404 Error: User attempted to access non-existent route:',
      path
    );
    return notFoundPageHTML();
  }
}

function attachEventHandlers(root: HTMLElement) {
  // Navigation Links
  root.querySelectorAll<HTMLElement>('[data-link]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const href = el.getAttribute('href');
      if (href) {
        window.history.pushState(null, '', href);
        render();
      }
    });
  });

  // Open cart
  root.querySelectorAll<HTMLElement>('[data-open-drawer]').forEach((el) => {
    el.addEventListener('click', () => setIsCartOpen(true));
  });
  // Close cart
  root.querySelectorAll<HTMLElement>('[data-close-drawer]').forEach((el) => {
    el.addEventListener('click', () => setIsCartOpen(false));
  });
  // Add to cart
  root.querySelectorAll<HTMLElement>('[data-add-to-cart]').forEach((el) => {
    el.addEventListener('click', () => {
      const id = Number(el.getAttribute('data-add-to-cart'));
      addToCart(id);
    });
  });
  // Remove from cart
  root.querySelectorAll<HTMLElement>('[data-remove]').forEach((el) => {
    el.addEventListener('click', () => {
      const id = Number(el.getAttribute('data-remove'));
      removeFromCart(id);
    });
  });
}

function render() {
  const root = document.getElementById('root');
  if (!root) return;
  root.innerHTML = router();
  attachEventHandlers(root);
}

// Initial render
export function init() {
  render();
}
