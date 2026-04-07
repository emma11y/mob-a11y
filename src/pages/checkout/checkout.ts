import './checkout.scss';
import { products } from '../../data/products';

interface CartItem {
  productId: number;
  quantity: number;
}

interface CartProduct {
  product: (typeof products)[0];
  quantity: number;
}

function loadCartFromStorage(): CartProduct[] {
  try {
    const stored = localStorage.getItem('cart');
    if (!stored) return [];
    const parsed: CartItem[] = JSON.parse(stored);
    return parsed
      .map((item) => ({
        product: products.find((p) => p.id === item.productId),
        quantity: item.quantity,
      }))
      .filter((item): item is CartProduct => item.product !== undefined);
  } catch {
    return [];
  }
}

function getTotalPrice(cart: CartProduct[]): number {
  return cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );
}

function formatPrice(price: number): string {
  return price.toFixed(2).replace('.', ',') + ' €';
}

function renderCartItems(cart: CartProduct[]): void {
  const cartItemsEl = document.getElementById('cart-items');
  if (!cartItemsEl) return;

  const html = cart
    .map(
      (item) => `
    <div class="cart-item">
      <img src="${item.product.image}" class="cart-item-image" />
      <div class="cart-item-details">
        <div class="cart-item-name">${item.product.name}</div>
        <div class="cart-item-qty">Quantité : ${item.quantity}</div>
      </div>
      <div class="cart-item-price">${formatPrice(item.product.price * item.quantity)}</div>
    </div>
  `,
    )
    .join('');

  cartItemsEl.innerHTML = html;
}

function updateSummary(cart: CartProduct[]): void {
  const subtotal = getTotalPrice(cart);

  const subtotalEl = document.getElementById('subtotal');
  const totalEl = document.getElementById('total');

  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  if (totalEl) totalEl.textContent = formatPrice(subtotal);
}

function validateForm(): boolean {
  const shippingForm = document.getElementById(
    'shipping-form',
  ) as HTMLFormElement;
  const paymentForm = document.getElementById(
    'payment-form',
  ) as HTMLFormElement;

  if (!shippingForm || !paymentForm) return false;

  let hasError = false;

  // Basic HTML5 validation
  if (!shippingForm.checkValidity() || !paymentForm.checkValidity()) {
    shippingForm
      .querySelectorAll('[required]')
      .forEach((elt) => checkRequiredError(elt));

    paymentForm
      .querySelectorAll('[required]')
      .forEach((elt) => checkRequiredError(elt));

    hasError = true;
  }

  const email = (document.getElementById('email') as HTMLInputElement).value;
  if (
    email &&
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
  ) {
    showError(
      'email',
      'Votre e-mail est invalide. Format attendu : nom.prenom@domaine.fr',
    );
    hasError = true;
  }

  // Additional validation for card number
  const cardNumber = (document.getElementById('cardNumber') as HTMLInputElement)
    .value;
  if (
    cardNumber &&
    !/^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/.test(cardNumber.replace(/\s/g, ''))
  ) {
    showError(
      'cardNumber',
      'Numéro de carte invalide (Format attendu : 0000 0000 0000 0000)',
    );
    hasError = true;
  }

  // Validate expiry format
  const expiry = (document.getElementById('expiry') as HTMLInputElement).value;
  if (expiry) {
    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
      showError('expiry', 'Format invalide (MM/YY)');
      hasError = true;
    } else {
      const month = Number.parseInt(expiry.substring(0, 2));
      const year = Number.parseInt('20' + expiry.substring(3, 5));

      if (month > 12) {
        showError('expiry', 'Format invalide (MM/YY)');
        hasError = true;
      } else {
        const expiryDate = new Date(year, month, 0);

        if (expiryDate <= new Date()) {
          showError('expiry', 'Votre carte est expirée');
          hasError = true;
        }
      }
    }
  }

  // Validate CVV
  const cvv = (document.getElementById('cvv') as HTMLInputElement).value;
  if (cvv && !/^\d{3}$/.test(cvv)) {
    showError('cvv', 'Format invalide (CVV)');
    hasError = true;
  }

  return !hasError;
}

function checkRequiredError(element: Element) {
  const fieldId = element.id;
  const field = document.getElementById(fieldId);
  if (!field) return;

  if (field.hasAttribute('required') && !(field as HTMLInputElement).value) {
    const label = element.parentElement?.querySelector('label');
    if (label) {
      const title = label.textContent.replace(' *', '');

      showError(fieldId, `Le champ ${title} est obligatoire`);
    }
  }
}

function showError(fieldId: string, message: string): void {
  const field = document.getElementById(fieldId);
  if (!field) return;

  const parent = field.parentElement;
  if (!parent) return;

  // Remove existing error
  const existingError = parent.querySelector('.form-error');
  if (existingError) existingError.remove();

  // Add error class and message
  parent.classList.add('has-error');
  const errorEl = document.createElement('p');
  errorEl.id = `error-${fieldId}`;
  errorEl.className = 'form-error';
  errorEl.textContent = message;
  parent.appendChild(errorEl);
}

function clearErrors(): void {
  document.querySelectorAll('.has-error').forEach((el) => {
    el.classList.remove('has-error');
    const errorMsg = el.querySelector('.form-error');
    if (errorMsg) errorMsg.remove();
  });
}

function formatCardNumber(value: string): string {
  return value
    .replace(/\s/g, '')
    .replace(/(\d{4})/g, '$1 ')
    .trim();
}

function formatExpiry(value: string): string {
  const digits = value.replace(/\D/g, '');
  if (digits.length >= 2) {
    return digits.slice(0, 2) + '/' + digits.slice(2, 4);
  }
  return digits;
}

function setupFormFormatting(): void {
  const cardNumberInput = document.getElementById(
    'cardNumber',
  ) as HTMLInputElement;
  if (cardNumberInput) {
    cardNumberInput.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      target.value = formatCardNumber(target.value);
    });
  }

  const expiryInput = document.getElementById('expiry') as HTMLInputElement;
  if (expiryInput) {
    expiryInput.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      target.value = formatExpiry(target.value);
    });
  }

  const cvvInput = document.getElementById('cvv') as HTMLInputElement;
  if (cvvInput) {
    cvvInput.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      target.value = target.value.replace(/\D/g, '').slice(0, 3);
    });
  }
}

function handlePaymentSubmit(e: Event): void {
  e.preventDefault();
  clearErrors();

  if (!validateForm()) {
    showAlert("Vous n'avez pas rempli les champs correctement.", 'error');

    const element = document.querySelector(
      '.has-error input',
    ) as HTMLInputElement;
    if (element) {
      element.focus();
    }

    return;
  }

  const cart = loadCartFromStorage();
  if (cart.length === 0) {
    showAlert('Votre panier est vide', 'error');
    return;
  }

  // Show success message
  showAlert(
    'Commande validée avec succès ! Merci pour votre achat. <br> Vous allez être automatiquement redirigé vers la page produits...',
    'success',
  );

  // Get form data
  const shippingForm = document.getElementById(
    'shipping-form',
  ) as HTMLFormElement;
  const paymentForm = document.getElementById(
    'payment-form',
  ) as HTMLFormElement;

  const shippingData = new FormData(shippingForm);
  const paymentData = new FormData(paymentForm);

  const order = {
    shipping: Object.fromEntries(shippingData),
    payment: Object.fromEntries(paymentData),
    items: cart,
    total: getTotalPrice(cart),
    date: new Date().toISOString(),
  };

  // Store order
  localStorage.setItem('lastOrder', JSON.stringify(order));

  // Clear cart
  localStorage.removeItem('cart');

  // Redirect to products
  setTimeout(() => {
    window.location.href = '/produits';
  }, 2000);
}

function showAlert(message: string, type: string) {
  const alert = document.querySelector('.alert');
  if (alert) {
    const text = document.createElement('p');
    text.innerHTML = message;
    alert.appendChild(text);
    alert.classList.add(type);

    setTimeout(() => {
      alert.classList.remove(type);
      alert.removeChild(text);
      alert.textContent = '';
    }, 5000);
  }
}

export function init(): void {
  const cart = loadCartFromStorage();
  const checkoutContainer = document.querySelector(
    '.checkout-container',
  ) as HTMLDivElement;
  const emptyCart = document.getElementById('empty-cart');
  const payButton = document.querySelector('.pay-button') as HTMLButtonElement;

  // Show empty cart message if cart is empty
  if (cart.length === 0) {
    if (checkoutContainer) checkoutContainer.style.display = 'none';
    if (emptyCart) emptyCart.style.display = 'flex';
    return;
  }

  // Render cart items and summary
  renderCartItems(cart);
  updateSummary(cart);

  // Setup form formatting
  setupFormFormatting();

  // Setup payment submission
  if (payButton) {
    payButton.addEventListener('click', handlePaymentSubmit);
  }

  // Pre-fill card name if user info is available
  const firstNameInput = document.getElementById(
    'firstName',
  ) as HTMLInputElement;
  const lastNameInput = document.getElementById('lastName') as HTMLInputElement;
  const cardNameInput = document.getElementById('cardName') as HTMLInputElement;

  if (firstNameInput && lastNameInput && cardNameInput) {
    const updateCardName = () => {
      const firstName = firstNameInput.value;
      const lastName = lastNameInput.value;
      if (firstName || lastName) {
        cardNameInput.value = `${firstName} ${lastName}`.trim();
      }
    };

    firstNameInput.addEventListener('input', updateCardName);
    lastNameInput.addEventListener('input', updateCardName);
  }
}
