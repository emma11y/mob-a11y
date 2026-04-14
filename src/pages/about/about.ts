import './about.scss';
import emmanuelleImg from '../../assets/img/emmanuelle.jpg';
import manonImg from '../../assets/img/manon.jpg';
import shodoWhiteImg from '../../assets/img/logo-shodo.svg';
import shodoBlackImg from '../../assets/img/logo-shodo-black.svg';
import yeesoImg from '../../assets/img/yeeso.svg';

export function init() {
  const images = [
    { id: 'img-emmanuelle', src: emmanuelleImg },
    { id: 'img-manon', src: manonImg },
    { id: 'img-shodo-white', src: shodoWhiteImg },
    { id: 'img-shodo-black', src: shodoBlackImg },
    { id: 'img-yeeso', src: yeesoImg },
  ];

  images.forEach((imgData) => {
    const imgElement = document.getElementById(imgData.id) as HTMLImageElement;
    if (imgElement) {
      imgElement.src = imgData.src;
    }
  });
}
