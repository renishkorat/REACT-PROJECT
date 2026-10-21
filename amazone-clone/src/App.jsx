
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShopProvider } from "./context/ShopContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductsDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import "./index.css";

function NotFound() {
  return (
    <main className="empty-state page-container">
      <h1>404 — Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <a className="primary-btn" href="/">Go Home</a>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ShopProvider>
        <div className="app-shell">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </ShopProvider>
    </BrowserRouter>
  );
}
