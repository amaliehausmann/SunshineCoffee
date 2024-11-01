import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./Layout/MainLayout";
import { Home } from "./Pages/Home";
import { Products } from "./pages/Products";
import { CartContextProvider } from "./context/CartContext";
import { LanguageContextProvider } from "./context/LanguageContext";
import { CookiePolicy } from "./pages/policies/CookiePolicy";
import { ReturnPolicy } from "./pages/policies/ReturnPolicy";
import { Shipping } from "./pages/policies/Shipping";
import { Terms } from "./pages/policies/Terms";
import { Checkout } from "./pages/Checkout";
import { Product } from "./pages/Product";

function App() {

  return (
    <>
      <CartContextProvider>
        <LanguageContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />}></Route>
                <Route path="/products" element={<Products />}></Route>
                <Route path="/cookiepolicy" element={<CookiePolicy />}></Route>
                <Route path="/returnpolicy" element={<ReturnPolicy />}></Route>
                <Route path="/shipping" element={<Shipping />}></Route>
                <Route path="/terms" element={<Terms />}></Route>
                <Route path="/checkout" element={<Checkout/>}></Route>
                <Route path="/product/:id" element={<Product/>}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </LanguageContextProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
