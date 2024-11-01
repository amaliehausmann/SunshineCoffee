import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import style from "./Cart.module.scss";
import { IoClose } from "react-icons/io5";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext";

export const Cart = ({ action, closecart }) => {
  const { cartData, clearCart, addToCart, subtractCartItem } =
    useContext(CartContext);

  const { languageData } = useContext(LanguageContext);

  const totalPrice = cartData?.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const totalQuantity = cartData?.reduce((acc, item) => acc + item.quantity, 0);

  const tax = totalPrice * 0.25;

  return (
    <section className={style.fadedBackground}>
      {languageData ? (
        <div className={style.cartStyling}>
          <IoClose onClick={action} />
          <h1>Kurv</h1>
          {cartData.length > 0 ? (
            <>
              <div>
                {cartData?.map((item) => (
                  <div key={item.id}>
                    <h5>{item.name}</h5>
                    <section>
                      <button onClick={() => subtractCartItem(item)}>-</button>
                      <p>{item.quantity}</p>
                      <button onClick={() => addToCart(item)}>+</button>
                    </section>
                    <h6>{item.price * item.quantity} DKK</h6>
                    <span className={style.lineStyling}></span>
                  </div>
                ))}
              </div>
              <section className={style.priceStyling}>
                <p>Moms (25%)</p>
                <p>{tax} DKK</p>
              </section>
              <section className={style.priceStyling}>
                <p>I alt</p>
                <p>{totalPrice + tax} DKK</p>
              </section>
              <Button
                action={() => clearCart()}
                buttontext="Tøm Kurven"
                styling="clearCartButton"
              />
              <section className={style.priceStyling}>
                <p className={style.itemQuantity}>
                  Produkter i kurv: {totalQuantity}{" "}
                </p>
                <Button styling="Gotocheckout">
                  <Link to="/checkout">Gå til Betaling</Link>
                </Button>
              </section>
            </>
          ) : (
            <p className={style.noItems}>Kurven er tom</p>
          )}
        </div>
      ) : (
        <div className={style.cartStyling}>
          <IoClose onClick={action} />
          <h1>Shopping Cart</h1>
          {cartData.length > 0 ? (
            <>
              <div>
                {cartData?.map((item) => (
                  <div key={item.id}>
                    <h5>{item.name}</h5>
                    <section>
                      <button onClick={() => subtractCartItem(item)}>-</button>
                      <p>{item.quantity}</p>
                      <button onClick={() => addToCart(item)}>+</button>
                    </section>
                    <h6>${Math.round(item.price * item.quantity * 0.1448)}</h6>
                    <span className={style.lineStyling}></span>
                  </div>
                ))}
              </div>
              <section className={style.priceStyling}>
                <p>Tax (25%)</p>
                <p>${Math.round(tax * 0.1448)}</p>
              </section>
              <section className={style.priceStyling}>
                <p>Total</p>
                <p>${Math.round((totalPrice + tax) * 0.1448)}</p>
              </section>
              <Button
                action={() => clearCart()}
                buttontext="Empty Cart"
                styling="clearCartButton"
              />
              <section className={style.priceStyling}>
                <p className={style.itemQuantity}>
                  Items in Cart: {totalQuantity}{" "}
                </p>
                <Button styling="Gotocheckout" action={closecart}>
                  <Link to="/checkout">Go to Checkout</Link>
                </Button>
              </section>
            </>
          ) : (
            <p className={style.noItems}>Cart is empty</p>
          )}
        </div>
      )}
    </section>
  );
};
