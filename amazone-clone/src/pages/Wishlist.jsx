
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useShop } from "../context/ShopContext";
import ProductCard from "../components/ProductCard";

export default function Wishlist() {
  const { wishlist } = useShop();

  return (
    <main className="page-container">
      <div className="page-heading">
        <div>
          <span className="eyebrow">YOUR FAVOURITES</span>
          <h1>My Wishlist</h1>
          <p>{wishlist.length} saved products</p>
        </div>
      </div>

      {wishlist.length ? (
        <div className="product-grid">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Heart size={55} />
          <h2>Your wishlist is empty</h2>
          <p>Tap the heart on a product to save it here.</p>
          <Link to="/products" className="primary-btn">Explore Products</Link>
        </div>
      )}
    </main>
  );
}
