
import { Link } from "react-router-dom";
import { ShoppingBag, Trash2, Minus, Plus } from "lucide-react";
import { useShop } from "../context/ShopContext";

export default function Cart() {
  const { cart, cartTotal, removeFromCart, updateQuantity } = useShop();

  return (
    <main className="page-container">
      <div className="page-heading">
        <div>
          <span className="eyebrow">YOUR SELECTION</span>
          <h1>Shopping Cart</h1>
          <p>{cart.length} different items in your cart</p>
        </div>
        <Link to="/products" className="secondary-btn">Continue Shopping</Link>
      </div>

      {cart.length === 0 ? (
        <div className="empty-state">
          <ShoppingBag size={55} />
          <h2>Your cart is empty</h2>
          <p>Discover products and add your favourites to the cart.</p>
          <Link to="/products" className="primary-btn">Start Shopping</Link>
        </div>
      ) : (
        <div className="cart-layout">
          <section className="cart-items">
            {cart.map((item) => (
              <article key={item.id} className="cart-item">
                <Link to={`/product/${item.id}`} className="cart-image">
                  <img src={item.image} alt={item.title} />
                </Link>

                <div className="cart-item-info">
                  <Link to={`/product/${item.id}`} className="product-title">
                    {item.title}
                  </Link>
                  <span className="category-label">{item.category}</span>
                  <strong className="cart-item-price">
                    ₹{item.price.toLocaleString("en-IN")}
                  </strong>

                  <div className="quantity-control">
                    <button
                      aria-label="Decrease quantity"
                      disabled={item.quantity <= 1}
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus size={15} />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      aria-label="Increase quantity"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus size={15} />
                    </button>
                  </div>

                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                    <Trash2 size={15} /> Remove
                  </button>
                </div>

                <strong className="line-total">
                  ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                </strong>
              </article>
            ))}
          </section>

          <aside className="order-summary">
            <span className="eyebrow">ORDER SUMMARY</span>
            <h2>Subtotal</h2>
            <div className="summary-row">
              <span>Items ({cart.reduce((n, item) => n + item.quantity, 0)})</span>
              <strong>₹{cartTotal.toLocaleString("en-IN")}</strong>
            </div>
            <div className="summary-row">
              <span>Delivery</span><strong className="free-text">FREE</strong>
            </div>
            <div className="summary-total">
              <span>Estimated total</span>
              <strong>₹{cartTotal.toLocaleString("en-IN")}</strong>
            </div>
            <button
              className="primary-btn checkout-btn"
              onClick={() => alert("Demo checkout only. No real order or payment is processed.")}
            >
              Proceed to Checkout
            </button>
            <p className="summary-note">Demo checkout. No payment will be collected.</p>
          </aside>
        </div>
      )}
    </main>
  );
}
