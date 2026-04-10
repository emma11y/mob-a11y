import './header.scss';
import headerTemplate from './header.html?raw';

export class CustomHeader extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = headerTemplate;

    this.initTheme();
  }

  initTheme() {
    const themeStored = localStorage.getItem('theme');

    if (themeStored) {
      this.setTheme(themeStored);
    } else {
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        this.setTheme('dark');
      } else {
        this.setTheme('light');
      }
    }

    const btnLight = document.getElementById('btnLight');
    if (btnLight) {
      btnLight.onclick = () => this.setTheme('light');
    }

    const btnDark = document.getElementById('btnDark');
    if (btnDark) {
      btnDark.onclick = () => this.setTheme('dark');
    }
  }

  setTheme(theme: string) {
    const buttons = document.querySelectorAll('.theme-switcher-buttons button');

    buttons.forEach((button) => {
      const dataTheme = button.getAttribute('data-theme');

      if (dataTheme === theme) {
        button.setAttribute('aria-pressed', 'true');
        (button as HTMLElement).style.display = 'none'; // cache le bouton du thème actif
      } else {
        button.setAttribute('aria-pressed', 'false');
        (button as HTMLElement).style.display = 'inline-block'; // affiche l'autre
      }
    });

    document.documentElement.setAttribute('data-selected-theme', theme);
    localStorage.setItem('theme', theme);
  }
}

customElements.define('custom-header', CustomHeader);
