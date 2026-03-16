import '../../assets/styles/products/main.scss';
import '../../assets/styles/products/Index.scss';
import '../../assets/styles/products/components/ProductCard.scss';
import '../../assets/styles/products/components/SiteHeader.scss';
import '../../assets/styles/products/components/CartDrawer.scss';
import { products } from '../../data/products';

// Simple cart state
type CartItem = { product: (typeof products)[number]; quantity: number };

// Store cart in localStorage for persistence across pages
function loadCart(): CartItem[] {
  try {
    const stored = localStorage.getItem('cart');
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    return parsed
      .map((item: any) => ({
        product: products.find((p) => p.id === item.productId),
        quantity: item.quantity,
      }))
      .filter((item: CartItem) => item.product);
  } catch {
    return [];
  }
}

function saveCart(items: CartItem[]) {
  localStorage.setItem(
    'cart',
    JSON.stringify(
      items.map((item) => ({
        productId: item.product.id,
        quantity: item.quantity,
      })),
    ),
  );
}

const state = {
  items: loadCart(),
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

  saveCart(state.items);
  refreshCart();
}

function removeFromCart(productId: number) {
  state.items = state.items.filter((i) => i.product.id !== productId);
  saveCart(state.items);
  refreshCart();
}

function totalItems() {
  return state.items.reduce((sum, i) => sum + i.quantity, 0);
}

function totalPrice() {
  return state.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
}

function drawCart(open: boolean) {
  state.isCartOpen = open;

  const cartElement = document.querySelector('#cart');
  if (cartElement) {
    if (open) {
      cartElement.innerHTML = cartDrawerHTML();

      document
        .querySelectorAll<HTMLElement>('[data-close-drawer]')
        .forEach((elt) => elt.addEventListener('click', () => drawCart(false)));

      // Remove from cart
      document.querySelectorAll<HTMLElement>('[data-remove]').forEach((el) => {
        el.addEventListener('click', () => {
          const id = Number(el.getAttribute('data-remove'));
          removeFromCart(id);
        });
      });

      const checkoutElement = document.querySelector('.checkout');
      checkoutElement?.addEventListener(
        'click',
        () => (window.location.href = '/finaliser-votre-commande'),
      );
    } else {
      cartElement.innerHTML = '';
    }
  }
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
            <div class="price">${product.price.toFixed(2)} €</div>
          </div>
          <div class="add-to-cart" data-add-to-cart="${product.id}">Ajouter dans le panier</div>
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
          <div class="qty">Quantité : ${item.quantity}</div>
        </div>
        <div class="row-price">${(item.product.price * item.quantity).toFixed(2)} €</div>
        <div class="button remove" data-remove="${item.product.id}">
           <svg aria-hidden="true" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            <span class="sr-only">Supprimer le produit du panier</span>
        </div>
      </div>
    `,
    )
    .join('');

  const content =
    state.items.length === 0
      ? `<div class="empty"><span class="text">Votre panier est vide</span></div>`
      : `
        <div class="items">${itemsHTML}</div>
        <div class="panel-footer">
          <div class="total">
            <span class="total-label">Total</span>
            <span class="total-value">${totalPrice().toFixed(2)} €</span>
          </div>
          <div role="link" class="checkout">Payer</div>
        </div>
      `;

  return `
    <div class="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="panel-title">
      <div class="overlay" data-close-drawer></div>
      <div class="panel">
        <div class="panel-content">
          <div class="panel-header">
            <h1 id="panel-title">Votre panier</h1>
            <div class="button" id="cart-close" data-testid="cart-close" data-close-drawer>
              <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
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

function productsPageHTML() {
  const grid = products.map((p, i) => productCardHTML(p, i)).join('');

  return `

    <div class="index-container">
      <div class="container product-grid-section">
        <div class="product-grid">${grid}</div>
      </div>
    </div>
  `;
}

function router() {
  return productsPageHTML();
}

function attachEventHandlers(root: HTMLElement) {
  // Close cart

  // Add to cart
  root.querySelectorAll<HTMLElement>('[data-add-to-cart]').forEach((el) => {
    el.addEventListener('click', () => {
      const id = Number(el.getAttribute('data-add-to-cart'));
      addToCart(id);
    });
  });
}

function render() {
  const root = document.getElementById('products');
  if (!root) return;
  root.innerHTML = router();
  attachEventHandlers(root);
}

function refreshCart() {
  // Cart
  const cartBadge = document.querySelector('.cart-badge');
  if (cartBadge) {
    cartBadge.textContent = totalItems().toString() ?? '';
  }

  drawCart(state.isCartOpen);
}

// Initial render
export function init() {
  render();

  // Open cart
  const openCart = document.querySelector<HTMLElement>('[data-open-drawer]');

  if (openCart) {
    openCart.addEventListener('click', () => {
      drawCart(true);
    });
  }
}
