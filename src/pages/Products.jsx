import { useContext, useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { CartContext } from "../context/CartContext";
import { LanguageContext } from "../context/LanguageContext";
import { Button } from "../components/Button/Button";
import { Header } from "../components/Header/Header";
import { useNavigate } from "react-router-dom";

export const Products = () => {
  const [data, setData] = useState([]);

  const { addToCart } = useContext(CartContext);
  const { languageData } = useContext(LanguageContext);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch("http://localhost:8081/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  function navigateToSinglePage(id) {
    console.log(id);
    navigate(`/product/${id}`);
  }

  return (
    <section>
      <Header />
      {languageData ? (
        <Wrapper styling="productSection">
          <h1>Specielt udvalgt til dig</h1>
          <Wrapper styling="wrapperStyling">
            {data &&
              data?.map((item) => (
                <ProductCard
                  styling="cardStyling"
                  action={() => navigateToSinglePage(item.id)}
                  key={item.id}
                  title={item.name}
                  imageSrc={item.image}
                  price={item.price}
                  valuta1=""
                  valuta2=" DKK"
                  roastAmount={item.roast}
                >
                  <Button
                    styling="addToCart"
                    action={() => addToCart(item)}
                    buttontext="Tilføj til kurv"
                  ></Button>
                </ProductCard>
              ))}
          </Wrapper>
        </Wrapper>
      ) : (
        <Wrapper styling="productSection">
          <h1>Our picks for you</h1>
          <Wrapper styling="wrapperStyling">
            {data &&
              data?.map((item) => (
                <ProductCard
                  action={() => navigateToSinglePage(item.id)}
                  styling="cardStyling"
                  key={item.id}
                  title={item.name}
                  imageSrc={item.image}
                  price={Math.round(item.price * 0.1448)}
                  valuta1="$"
                  roastAmount={item.roast}
                >
                  <Button
                    styling="addToCart"
                    action={() => addToCart(item)}
                    buttontext="Add to cart"
                  ></Button>
                </ProductCard>
              ))}
          </Wrapper>
        </Wrapper>
      )}
    </section>
  );
};
