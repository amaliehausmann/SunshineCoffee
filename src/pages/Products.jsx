import { useContext, useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { ProductWrapper } from "../components/ProductWrapper/ProductWrapper";
import { CartContext } from "../context/CartContext";

export const Products = () => {
  const [data, setData] = useState([]);

  const { cartData } = useContext(CartContext);
  console.log(cartData);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=0")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <section>
      <ProductWrapper>
        {data && data.products?.map((item) => (
          <ProductCard
            key={item.id}
            title={item.title}
            imageSrc={item.images[0]}
            price={item.price}
            description={item.description}
          ></ProductCard>
        ))}
      </ProductWrapper>
    </section>
  );
};
