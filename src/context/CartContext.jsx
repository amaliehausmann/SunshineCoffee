import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);

  function addToCart(item) {
    let clone = [...cartData];
    let foundIndex = clone.findIndex((product) => product.id === item.id);

    //Hvis item allerede eksisterer i cart
    if (foundIndex !== -1) {
      clone[foundIndex].quantity += 1;
      setCartData(clone);
    }

    //Hvis item ikke eksisterer i cart
    else {
      setCartData([...cartData, { ...item, quantity: 1 }]);
    }
  }

  function removeFromCart(item) {
    let clone = [...cartData];
    let foundIndex = clone.findIndex((product) => product.id === item.id);
    clone.splice(foundIndex, 1);
    setCartData(clone);
  }

  function clearCart() {
    setCartData([]);
  }

  function subtractCartItem(item) {
    let clone = [...cartData];
    let foundIndex = clone.findIndex((product) => product.id === item.id);

    //Hvis item allerede eksisterer i cart
    if (foundIndex !== -1) {
      clone[foundIndex].quantity -= 1;
      setCartData(clone);

      //Hvis item er lig med 0 eller under 0
      if (clone[foundIndex].quantity <= 0) {
        removeFromCart(item);
      } else {
        setCartData(clone);
      }
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartData,
        addToCart,
        clearCart,
        removeFromCart,
        subtractCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
