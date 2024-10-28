import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const Cart = () => {
  const { cartData, clearCart, addToCart, removeFromCart, subtractCartItem } =
    useContext(CartContext);
  return (
    <div>
      <div>
        {cartData?.map((item) => (
          <div>
            <h5>{item.title}</h5>
            <p>${item.price}</p>
            <p>
              <button onClick={()=> subtractCartItem(item)}>-</button>
              {item.quantity} <button onClick={() => addToCart(item)}>+</button>
            </p>
            <p>Total:${item.price * item.quantity}</p>
            <button onClick={() => removeFromCart(item)}>Delete from cart</button>
          </div>
        ))}
      </div>
      <button onClick={() => clearCart()}>Empty Cart</button>
    </div>
  );
};
