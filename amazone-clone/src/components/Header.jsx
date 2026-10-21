
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, Heart, MapPin } from "lucide-react";
import { useState } from "react";
import { useShop } from "../context/ShopContext";

export default function Header() {
  const [search, setSearch] = useState("");
  const { cartCount, wishlist } = useShop();
  const navigate = useNavigate();

  function handleSearch(event) {
    event.preventDefault();
    navigate(`/products?search=${encodeURIComponent(search)}`);
  }

  return (
    <>
      <header className="top-header">
        <Link to="/" className="logo">
          amazon<span>.in</span>
        </Link>

        <div className="location">
          <MapPin size={19} />
          <div>
            <small>Deliver to</small>
            <strong>India</strong>
          </div>
        </div>

        <form className="search-box" onSubmit={handleSearch}>
          <select
            aria-label="Category"
            onChange={(event) => {
              if (event.target.value) {
                navigate(`/products?category=${encodeURIComponent(event.target.value)}`);
              }
            }}
          >
            <option value="">All</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Home</option>
            <option>Beauty</option>
            <option>Sports</option>
            <option>Accessories</option>
          </select>

          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search Amazon products"
            aria-label="Search products"
          />

          <button type="submit" aria-label="Search">
            <Search size={21} />
          </button>
        </form>

        <div className="header-account">
          <small>Hello, shopper</small>
          <strong>Account & Lists</strong>
        </div>

        <Link to="/wishlist" className="header-link">
          <Heart size={22} />
          <span>Wishlist ({wishlist.length})</span>
        </Link>

        <Link to="/cart" className="cart-link">
          <span className="cart-count">{cartCount}</span>
          <ShoppingCart size={26} />
          <strong>Cart</strong>
        </Link>
      </header>

      <nav className="sub-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">All Products</NavLink>
        <NavLink to="/products?category=Electronics">Electronics</NavLink>
        <NavLink to="/products?category=Fashion">Fashion</NavLink>
        <NavLink to="/products?category=Home">Home & Kitchen</NavLink>
        <NavLink to="/products?category=Beauty">Beauty</NavLink>
        <NavLink to="/products?category=Sports">Sports</NavLink>
      </nav>
    </>
  );
}
