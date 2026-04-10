import './cookies.scss';

export class CustomCookies extends HTMLElement {
  async connectedCallback() {
    const html = await fetch(new URL('./cookies.html', import.meta.url)).then(
      (res) => res.text(),
    );

    this.innerHTML = html;
  }
}

customElements.define('custom-cookies', CustomCookies);
