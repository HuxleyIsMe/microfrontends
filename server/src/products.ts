export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'lacto fermented carrots',
    price: 4.5,
    description: 'salty fermented carrots for life',
    image: 'http://localhost:8080/carrots.jpeg',
    longDescription:
      'keep those carrots for ever, the saltedness actually makes for nice chips',
  },
  {
    id: 2,
    name: 'classic dill pickles',
    price: 4,
    description: 'family fave pickle time',
    image: 'http://localhost:8080/dill.jpeg',
    longDescription:
      'Clasic dill pickles, you cant go wrong. The gift for the person who has everything',
  },
  {
    id: 3,
    name: 'eggs',
    price: 2,
    description: '...eww',
    image: 'http://localhost:8080/eggs.jpeg',
    longDescription:
      'like gen z we never asked for this, why were eggs pickled like eww',
  },
  {
    id: 4,
    name: 'kimchi',
    price: 6,
    description: 'glorious kimchi',
    image: 'http://localhost:8080/kimchi.jpeg',
    longDescription: 'Best thing ever all about that kimchi',
  },
  {
    id: 5,
    name: 'pickled red onions',
    price: 3,
    description: 'pretty tasty swirls of joy',
    image: 'http://localhost:8080/onions.jpeg',
    longDescription: 'Pretty tasty sweet autumnal jarred joy',
  },
  {
    id: 6,
    name: 'peaches',
    price: 4,
    description: 'tis the teaches of peaches pickled',
    image: 'http://localhost:8080/peaches.jpeg',
    longDescription:
      'nom nom, whats els is in the teaches of peaches? sweet n sour peaches',
  },
  {
    id: 7,
    name: 'pickle back',
    price: 6,
    description: 'we had to do something with the brine',
    image: 'http://localhost:8080/pickle-back.jpeg',
    longDescription:
      'what else are we do with all this left over pickle brine? drink it ofc',
  },
];
