
import { Link, useParams } from "react-router-dom";
import { Heart, ShoppingCart, Star, CheckCircle } from "lucide-react";
import products from "../data/products";
import { useShop } from "../context/ShopContext";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const { addToCart, toggleWishlist, isWishlisted } = useShop();

  if (!product) {
    return (
      <main className="empty-state page-container">
        <h1>Product not found</h1>
        <Link to="/products" className="primary-btn">Browse products</Link>
      </main>
    );
  }

  return (
    <main className="page-container">
      <div className="breadcrumbs">
        <Link to="/">Home</Link> / <Link to="/products">Products</Link> / {product.title}
      </div>

      <section className="details-layout">
        <div className="details-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="details-content">
          <span className="eyebrow">{product.category}</span>
          <h1>{product.title}</h1>

          <div className="rating details-rating">
            <Star size={17} fill="#f5a623" color="#f5a623" />
            <span>{product.rating} out of 5</span>
            <span className="review-count">{product.reviews} reviews</span>
          </div>

          <div className="details-price">
            <span className="discount-label">
              {Math.round((1 - product.price / product.originalPrice) * 100)}% off
            </span>
            <h2>₹{product.price.toLocaleString("en-IN")}</h2>
            <del>₹{product.originalPrice.toLocaleString("en-IN")}</del>
          </div>

          <p className="details-description">{product.description}</p>

          <div className="stock-status">
            <CheckCircle size={18} /> In stock — demo product
          </div>

          <div className="delivery-box">
            <strong>Delivery options</strong>
            <p>Delivery estimate is not connected to a real shipping service.</p>
          </div>

          <button className="primary-btn details-cart" onClick={() => addToCart(product)}>
            <ShoppingCart size={19} /> Add to Cart
          </button>

          <button
            className="secondary-btn details-wishlist"
            onClick={() => toggleWishlist(product)}
          >
            <Heart size={19} fill={isWishlisted(product.id) ? "currentColor" : "none"} />
            {isWishlisted(product.id) ? "Remove from Wishlist" : "Add to Wishlist"}
          </button>
        </div>
      </section>
    </main>
  );
}
