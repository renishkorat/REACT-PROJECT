
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [params, setParams] = useSearchParams();
  const [sort, setSort] = useState("featured");
  const [maxPrice, setMaxPrice] = useState(60000);

  const search = params.get("search") || "";
  const category = params.get("category") || "";

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filtered = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        !category || product.category === category;

      return matchesSearch && matchesCategory && product.price <= maxPrice;
    });

    if (sort === "low") result = [...result].sort((a, b) => a.price - b.price);
    if (sort === "high") result = [...result].sort((a, b) => b.price - a.price);
    if (sort === "rating") result = [...result].sort((a, b) => b.rating - a.rating);

    return result;
  }, [search, category, maxPrice, sort]);

  function selectCategory(value) {
    const next = new URLSearchParams(params);
    if (value === "All") next.delete("category");
    else next.set("category", value);
    setParams(next);
  }

  return (
    <main className="page-container">
      <div className="page-heading">
        <div>
          <span className="eyebrow">OUR COLLECTION</span>
          <h1>{category || "All Products"}</h1>
          <p>{filtered.length} products found</p>
        </div>

        <select
          className="sort-select"
          value={sort}
          onChange={(event) => setSort(event.target.value)}
          aria-label="Sort products"
        >
          <option value="featured">Featured</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      <div className="catalog-layout">
        <aside className="filter-panel">
          <h3>Categories</h3>
          {categories.map((item) => (
            <button
              key={item}
              className={
                (item === "All" && !category) || item === category
                  ? "filter-option selected"
                  : "filter-option"
              }
              onClick={() => selectCategory(item)}
            >
              {item}
            </button>
          ))}

          <div className="price-filter">
            <h3>Maximum price</h3>
            <strong>₹{maxPrice.toLocaleString("en-IN")}</strong>
            <input
              type="range"
              min="300"
              max="60000"
              step="100"
              value={maxPrice}
              onChange={(event) => setMaxPrice(Number(event.target.value))}
            />
          </div>

          <button
            className="reset-btn"
            onClick={() => {
              setParams({});
              setMaxPrice(60000);
              setSort("featured");
            }}
          >
            Reset filters
          </button>
        </aside>

        <section className="catalog-results">
          {filtered.length > 0 ? (
            <div className="product-grid">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div>🔎</div>
              <h2>No products found</h2>
              <p>Try a different search or reset your filters.</p>
              <button
                className="primary-btn"
                onClick={() => {
                  setParams({});
                  setMaxPrice(60000);
                }}
              >
                Show all products
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
