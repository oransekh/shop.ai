import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../assets/assets";
import { useEffect } from "react";

const Products = () => {
  // get params from URl
  const { slug } = useParams();

  // Find the product by id
  const product = products.find((p) => p.slug === slug);

  // scroll to top when click on product
  if (product) {
    useEffect(() => {
      scrollTo(0, 0);
    }, []);
  }

  return (
    <section className="mx-auto py-16">
      <div className="mx-auto min-w-xs max-w-7xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-4">
        {/*left column*/}
        <div className="w-full h-full">
          <img
            src={product.img}
            alt={product.name}
            className="object-contain"
          />
        </div>

        {/*right column*/}
        <div className="h-full w-full justify-center flex flex-col">
          <h1 className="text-3xl">{product.name}</h1>
          <p>{product.category}</p>
          <p>{product.price}</p>
        </div>
      </div>
    </section>
  );
};

export default Products;
