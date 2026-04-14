import './footer.scss';
import footerTemplate from './footer.html?raw';

import shodoWhiteImg from '../../assets/img/logo-shodo.svg';
import shodoBlackImg from '../../assets/img/logo-shodo-black.svg';

export class CustomFooter extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = footerTemplate;

    const images = [
      { id: 'img-shodo-white', src: shodoWhiteImg },
      { id: 'img-shodo-black', src: shodoBlackImg },
    ];

    images.forEach((imgData) => {
      const imgElement = document.getElementById(
        imgData.id,
      ) as HTMLImageElement;
      if (imgElement) {
        imgElement.src = imgData.src;
      }
    });
  }
}

customElements.define('custom-footer', CustomFooter);
