import './footer.scss';
import footerTemplate from './footer.html?raw';

import shodoLogo from '../../assets/img/logo-shodo.svg?raw';
import emma11yLogo from '../../assets/img/logo-emma11y.svg?raw';

export class CustomFooter extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = footerTemplate;

    const logoShodo = this.querySelector('.shodo-svg');
    if (logoShodo) {
      logoShodo.innerHTML = shodoLogo;
    }

    const logoEmma11yContainer = this.querySelector('.emma11y-svg');
    if (logoEmma11yContainer) {
      logoEmma11yContainer.innerHTML = emma11yLogo;
    }
  }
}

customElements.define('custom-footer', CustomFooter);
