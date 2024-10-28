import { useContext, useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { ProductWrapper } from "../components/ProductWrapper/ProductWrapper";
import { CartContext } from "../context/CartContext";

export const Products = () => {
  const [data, setData] = useState([]);

  const { cartData, addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("http://localhost:8081/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data)
      });
  }, []);

  return (
    <section>
      <h1>Products</h1>
      <ProductWrapper>
        {data &&
          data?.map((item) => (
            <ProductCard
              key={item.id}
              title={item.title}
              imageSrc={item.image}
              price={item.price}
              description={item.description}
            >
              <button onClick={() => addToCart(item)}>Add To Cart</button>
            </ProductCard>
          ))}
      </ProductWrapper>
    </section>
  );
};
