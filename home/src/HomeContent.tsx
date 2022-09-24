import React from "react";
import { getProducts, currency } from "./products";
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

export default function HomeContent() {
  const [product, setProducts] = React.useState<Product[] | []>([]);
  React.useEffect(() => {
    console.log("hello");
    getProducts().then(setProducts);
  }, []);
  // add all the details and make it pretty
  return (
    <div>
      {product.length > 0 && (
        <>
          {product.map((product) => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <img
                src={product.image}
                alt={product.name}
                width="400"
                height="400"
              ></img>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
