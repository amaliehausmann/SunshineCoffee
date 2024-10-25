import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./Layout/MainLayout";
import { Home } from "./Pages/Home";
import { Products } from "./pages/Products";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />}></Route>
              <Route path="/products" element={<Products />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
