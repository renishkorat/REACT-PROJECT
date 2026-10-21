
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <button
        className="back-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back to top
      </button>

      <div className="footer-content">
        <div>
          <h3>Get to Know Us</h3>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div>
          <h3>Shop</h3>
          <Link to="/products">All Products</Link>
          <Link to="/products?category=Electronics">Electronics</Link>
          <Link to="/products?category=Fashion">Fashion</Link>
        </div>

        <div>
          <h3>Your Account</h3>
          <Link to="/cart">Shopping Cart</Link>
          <Link to="/wishlist">Wishlist</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <Link to="/" className="logo footer-logo">amazon<span>.in</span></Link>
        <p>© 2026 Amazon-style Demo Store. Educational project only.</p>
      </div>
    </footer>
  );
}
