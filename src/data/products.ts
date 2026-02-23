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
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Chat mignon',
    price: 3.5,
    image: stickerCat,
    category: 'Animaux',
  },
  {
    id: 2,
    name: 'Soleil rétro',
    price: 2.8,
    image: stickerSun,
    category: 'Nature',
  },
  {
    id: 3,
    name: 'Sommet de montagne',
    price: 3.0,
    image: stickerMountain,
    category: 'Nature',
  },
  {
    id: 4,
    name: 'Cactus heureux',
    price: 2.5,
    image: stickerCactus,
    category: 'Plantes',
  },
  {
    id: 5,
    name: 'Café du matin',
    price: 2.8,
    image: stickerCoffee,
    category: 'Mode de vie',
  },
  {
    id: 6,
    name: 'Ambiance arc-en-ciel',
    price: 3.2,
    image: stickerRainbow,
    category: 'Art',
  },
];
