import hero from "./hero.jpeg";
import hero1 from "./hero1.jpeg";
import hero2 from "./hero2.jpeg";
import hero3 from "./hero3.jpeg";
import hero4 from "./hero4.jpeg";

import image1 from "./image1.jpeg";
import image2 from "./image2.jpeg";
import image3 from "./img3.jpeg";
import image4 from "./image4.jpeg";

export const heroimages = [hero, hero1, hero2, hero3, hero4];

import Woman from "./woman.jpeg";
import woman1 from "./woman1.jpeg";
import woman2 from "./woman2.jpeg";
import woman3 from "./woman3.jpeg";
import woman4 from "./woman4.jpeg";

export const womanImages = [Woman, woman1, woman2, woman3, woman4];

export const rawProducts = [
  {
    id: "prod-001",
    name: "Men's Classic T-Shirt",
    img: image1,
    category: "men",
    type: "t-shirt",
    price: 499,
    sale: true,
    description:
      "Comfortable and breathable cotton t-shirt perfect for casual wear.",
    rating: 4.5,
    inStock: true,
    colors: ["white", "black", "navy blue"],
  },
  {
    id: "prod-002",
    name: "Women's Summer T-Shirt",
    img: image2,
    category: "women",
    type: "t-shirt",
    price: 599,
    sale: true,
    description: "Lightweight and stylish t-shirt ideal for summer days.",
    rating: 4.3,
    inStock: true,
    colors: ["pink", "light blue", "beige"],
  },
  {
    id: "prod-003",
    name: "Kids Cartoon T-Shirt",
    img: image3,
    category: "kids",
    type: "t-shirt",
    price: 299,
    sale: true,
    description: "Fun cartoon-printed t-shirt made with soft fabric for kids.",
    rating: 4.7,
    inStock: true,
    colors: ["red", "yellow", "green"],
  },
  {
    id: "prod-004",
    name: "Men's Jeans",
    img: image4,
    category: "men",
    type: "jeans",
    price: 1299,
    sale: false,
    description: "Durable and stylish denim jeans with a modern slim fit.",
    rating: 4.2,
    inStock: false,
    colors: ["blue", "black"],
  },
  {
    id: "prod-005",
    name: "Women's Dress",
    img: image2,
    category: "women",
    type: "dress",
    price: 1499,
    sale: false,
    description:
      "Elegant and flowy dress perfect for casual outings or parties.",
    rating: 4.6,
    inStock: true,
    colors: ["maroon", "navy", "peach"],
  },
  {
    id: "prod-006",
    name: "Kids Shorts",
    img: image3,
    category: "kids",
    type: "shorts",
    price: 399,
    sale: false,
    description: "Comfortable cotton shorts ideal for playful summer days.",
    rating: 4.4,
    inStock: true,
    colors: ["blue", "grey", "orange"],
  },
];
