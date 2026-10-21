
import { Link } from "react-router-dom";
import { ArrowRight, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const categories = [
  { name: "Electronics", emoji: "🎧", color: "#e0efff" },
  { name: "Fashion", emoji: "👟", color: "#ffe9e5" },
  { name: "Home", emoji: "🏠", color: "#e4f5e8" },
  { name: "Beauty", emoji: "✨", color: "#f9e5f5" },
  { name: "Sports", emoji: "🏋️", color: "#fff0d8" },
  { name: "Accessories", emoji: "🎒", color: "#e9e6ff" },
];

export default function Home() {
  const featured = products.slice(0, 8);
  const deals = [...products].sort(
    (a, b) => b.originalPrice - b.price - (a.originalPrice - a.price)
  ).slice(0, 4);

  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-kicker">YOUR EVERYDAY MARKETPLACE</span>
          <h1>Everything you need, all in one place.</h1>
          <p>Explore great finds across electronics, fashion, home and more.</p>
          <Link to="/products" className="hero-btn">
            Shop all products <ArrowRight size={18} />
          </Link>
        </div>
        <div className="hero-art">
          <div className="hero-circle">🛍️</div>
          <span className="floating-item item-one">🎧</span>
          <span className="floating-item item-two">👟</span>
          <span className="floating-item item-three">⌚</span>
        </div>
      </section>

      <section className="benefits">
        <div><Truck /><span><strong>Easy Shopping</strong><small>Browse 35 products</small></span></div>
        <div><ShieldCheck /><span><strong>Simple Checkout</strong><small>Demo cart experience</small></span></div>
        <div><RotateCcw /><span><strong>Saved Cart</strong><small>Stored in your browser</small></span></div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <span className="eyebrow">EXPLORE</span>
            <h2>Shop by category</h2>
          </div>
          <Link to="/products">View all <ArrowRight size={16} /></Link>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/products?category=${encodeURIComponent(category.name)}`}
              className="category-card"
              style={{ backgroundColor: category.color }}
            >
              <span className="category-emoji">{category.emoji}</span>
              <strong>{category.name}</strong>
              <span>Explore now →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <span className="eyebrow">HANDPICKED FOR YOU</span>
            <h2>Featured products</h2>
          </div>
          <Link to="/products">See all products <ArrowRight size={16} /></Link>
        </div>
        <div className="product-grid">
          {featured.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="deal-banner">
        <div>
          <span className="eyebrow">SMART SHOPPING</span>
          <h2>Find something you'll love.</h2>
          <p>Explore offers across all our product categories.</p>
          <Link to="/products" className="primary-btn">Explore deals</Link>
        </div>
        <div className="deal-emoji">🎁</div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <span className="eyebrow">GREAT FINDS</span>
            <h2>Deals worth exploring</h2>
          </div>
        </div>
        <div className="product-grid">
          {deals.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
    </main>
  );
}
