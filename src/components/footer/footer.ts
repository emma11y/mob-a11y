import './footer.scss';
import footerTemplate from './footer.html?raw';

export class CustomFooter extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = footerTemplate;
  }
}

customElements.define('custom-footer', CustomFooter);
