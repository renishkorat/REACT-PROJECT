
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useShop } from "../context/ShopContext";

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, isWishlisted } = useShop();

  return (
    <article className="product-card">
      <button
        className={`wishlist-btn ${isWishlisted(product.id) ? "active" : ""}`}
        onClick={() => toggleWishlist(product)}
        aria-label="Toggle wishlist"
      >
        <Heart size={20} fill={isWishlisted(product.id) ? "currentColor" : "none"} />
      </button>

      {product.badge && <span className="product-badge">{product.badge}</span>}

      <Link to={`/product/${product.id}`} className="product-image-wrap">
        <img src={product.image} alt={product.title} loading="lazy" />
      </Link>

      <div className="product-info">
        <Link to={`/product/${product.id}`} className="product-title">
          {product.title}
        </Link>

        <span className="category-label">{product.category}</span>

        <div className="rating">
          <Star size={15} fill="#f5a623" color="#f5a623" />
          <span>{product.rating}</span>
          <span className="review-count">({product.reviews})</span>
        </div>

        <div className="price-row">
          <strong>₹{product.price.toLocaleString("en-IN")}</strong>
          <del>₹{product.originalPrice.toLocaleString("en-IN")}</del>
        </div>

        <p className="delivery-text">FREE delivery available</p>

        <button className="primary-btn add-cart-btn" onClick={() => addToCart(product)}>
          <ShoppingCart size={17} /> Add to Cart
        </button>
      </div>
    </article>
  );
}
