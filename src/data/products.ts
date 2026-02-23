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
    name: 'Kawaii Cat',
    price: 3.5,
    image: stickerCat,
    category: 'animals',
  },
  {
    id: 2,
    name: 'Retro Sun',
    price: 2.8,
    image: stickerSun,
    category: 'nature',
  },
  {
    id: 3,
    name: 'Mountain Peak',
    price: 3.0,
    image: stickerMountain,
    category: 'nature',
  },
  {
    id: 4,
    name: 'Happy Cactus',
    price: 2.5,
    image: stickerCactus,
    category: 'plants',
  },
  {
    id: 5,
    name: 'Morning Coffee',
    price: 2.8,
    image: stickerCoffee,
    category: 'lifestyle',
  },
  {
    id: 6,
    name: 'Rainbow Vibes',
    price: 3.2,
    image: stickerRainbow,
    category: 'abstract',
  },
];
