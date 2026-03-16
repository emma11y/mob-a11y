import stickerCat from '../assets/img/stickers/sticker-cat.png';
import stickerSun from '../assets/img/stickers/sticker-sun.png';
import stickerMountain from '../assets/img/stickers/sticker-mountain.png';
import stickerCactus from '../assets/img/stickers/sticker-cactus.png';
import stickerCoffee from '../assets/img/stickers/sticker-coffee.png';
import stickerRainbow from '../assets/img/stickers/sticker-rainbow.png';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  alt?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Chat mignon',
    price: 3.5,
    image: stickerCat,
    category: 'Animaux',
    alt: 'Un chaton de dessin animé, assis, de couleur gris et blanc, avec de grands yeux noirs brillants, des joues roses et une petite queue rayée.',
  },
  {
    id: 2,
    name: 'Soleil rétro',
    price: 2.8,
    image: stickerSun,
    category: 'Nature',
    alt: `Un soleil orange vif avec des rayons ondulés.`,
  },
  {
    id: 3,
    name: 'Sommet de montagne',
    price: 3.0,
    image: stickerMountain,
    category: 'Nature',
    alt: `Une montagne aux tons marron et beige, avec des sommets enneigés représentés par des formes blanches angulaires.`,
  },
  {
    id: 4,
    name: 'Cactus heureux',
    price: 2.5,
    image: stickerCactus,
    category: 'Plantes',
    alt: `Un cactus vert de style dessin animé avec trois bras, planté dans un pot vert clair.`,
  },
  {
    id: 5,
    name: 'Café du matin',
    price: 2.8,
    image: stickerCoffee,
    category: 'Mode de vie',
    alt: `Une tasse de café à emporter en carton blanc avec un manchon de protection marron. Deux volutes de vapeur s'échappent du liquide brun foncé, indiquant une boisson chaude.`,
  },
  {
    id: 6,
    name: 'Ambiance arc-en-ciel',
    price: 3.2,
    image: stickerRainbow,
    category: 'Art',
    alt: 'Un arc-en-ciel stylisé composé de cinq bandes de couleur plates et arrondies : rouge corail, orange, jaune, turquoise et bleu clair.',
  },
];
