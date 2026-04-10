import '../../components/cookies/cookies.ts';
import {
  createFocusTrap,
  FocusTrapController,
} from '../../utils.ts/focus-trap.ts';
import * as product from '../products/products.ts';

let trap: FocusTrapController | null = null;

export class ProductsPage extends HTMLElement {
  async connectedCallback() {
    const html = await fetch(
      new URL('../products/products.html', import.meta.url),
    ).then((res) => res.text());

    this.innerHTML = html;
  }
}

customElements.define('products-page', ProductsPage);

function closeModal() {
  const modal = document.querySelector('.popup');

  if (modal) {
    if (trap) {
      trap.deactivate();
    }
    modal.classList.add('hide');

    // Prendre le premier élément focusable pour le focuser
    const elementsFocusables =
      document.querySelectorAll<HTMLElement>('button, a');
    if (elementsFocusables.length) elementsFocusables[0].focus();
  }
}

function load() {
  const buttons = document.querySelectorAll('.popup-buttons button');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      closeModal();
    });
  });

  const modal = document.querySelector('.popup') as HTMLElement;
  trap = createFocusTrap(modal);
  trap.activate();
}

export function init() {
  setTimeout(() => {
    product.init();
    load();
  }, 100);
}
