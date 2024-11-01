import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";
import { Footer } from "../components/Footer/Footer";
import { Cart } from "../components/Cart/Cart";
import { useState } from "react";
import { CookieBanner } from "../components/CookieBanner/CookieBanner";
export const MainLayout = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  function openCart() {
    setCartIsOpen(true);
  }

  function closeCart() {
    setCartIsOpen(false);
  }
  return (
    <section>
      <NavBar action={openCart} />
      {cartIsOpen && <Cart action={closeCart} closecart={closeCart} />}
      <Outlet />
      <CookieBanner/>
      <Footer />
    </section>
  );
};
