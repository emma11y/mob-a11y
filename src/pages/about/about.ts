import './about.scss';
import '../../components/feedback/feedback.ts';

import emmanuelleImg from '../../assets/img/emmanuelle.jpeg';
import manonImg from '../../assets/img/manon.jpg';
import angiImg from '../../assets/img/angi.jpg';
import shodoLogo from '../../assets/img/logo-shodo.svg?raw';
import yeesoLogo from '../../assets/img/yeeso.svg?raw';
import logoEmma11y from '../../assets/img/logo-emma11y.svg?raw';

export function init() {
  const images = [
    { id: 'img-emmanuelle', src: emmanuelleImg },
    { id: 'img-manon', src: manonImg },
    { id: 'img-angi', src: angiImg },
  ];

  images.forEach((imgData) => {
    const imgElement = document.getElementById(imgData.id) as HTMLImageElement;
    if (imgElement) {
      imgElement.src = imgData.src;
    }
  });

  const yeesoContainer = document.getElementById('logo-yeeso');
  if (yeesoContainer) {
    yeesoContainer.innerHTML = yeesoLogo;
  }

  const shodoContainer = document.getElementById('logo-shodo');
  if (shodoContainer) {
    shodoContainer.innerHTML = shodoLogo;
  }

  const logoContainer = document.getElementById('logo-emma11y');
  if (logoContainer) {
    logoContainer.innerHTML = logoEmma11y;
  }
}
