import './footer.scss';

export class CustomFooter extends HTMLElement {
  async connectedCallback() {
    const html = await fetch(new URL('./footer.html', import.meta.url)).then(
      (res) => res.text()
    );

    this.innerHTML = html;
  }
}

customElements.define('custom-footer', CustomFooter);
