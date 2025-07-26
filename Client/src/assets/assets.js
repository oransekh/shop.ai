import hero from "./hero.jpeg";
import hero1 from "./hero1.jpeg";
import hero2 from "./hero2.jpeg";
import hero3 from "./hero3.jpeg";
import hero4 from "./hero4.jpeg";

import image1 from "./image1.jpeg";
import image2 from "./image2.jpeg";
import image3 from "./img3.jpeg";
import image4 from "./image4.jpeg";

import { nanoid } from "nanoid";

export const heroimages = [hero, hero1, hero2, hero3, hero4];

function generateSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const rawProducts = [
  {
    name: "Men's Classic T-Shirt",
    img: image1,
    category: "men",
    type: "t-shirt",
    price: 499,
    sale: true,
  },
  {
    name: "Women's Summer T-Shirt",
    img: image2,
    category: "women",
    type: "t-shirt",
    price: 599,
    sale: true,
  },
  {
    name: "Kids Cartoon T-Shirt",
    img: image3,
    category: "kids",
    type: "t-shirt",
    price: 299,
    sale: true,
  },
  {
    name: "Men's Jeans",
    img: image4,
    category: "men",
    type: "jeans",
    price: 1299,
    sale: false,
  },
  {
    name: "Women's Dress",
    img: image2,
    category: "women",
    type: "dress",
    price: 1499,
    sale: false,
  },
  {
    name: "Kids Shorts",
    img: image3,
    category: "kids",
    type: "shorts",
    price: 399,
    sale: false,
  },
];

export const products = rawProducts.map((p) => {
  const slug = `${generateSlug(p.name)}-${nanoid(10)}`;
  return { ...p, slug };
});
