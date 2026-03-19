import { useState, useEffect } from "react";
import { api } from "../api/api";
import ProductCard from "../components/ProductCard";
import "../index.css";
import "../styles/Products.css";

export default function Products() {
  const [products, setProducts] = useState([]); // 👈 antes venía del import
  const [search, setSearch] = useState("");

  // 🔥 traer productos del backend
  useEffect(() => {
    api.get("/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // 🔎 filtro sigue funcionando igual
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="products">
      <h1>Computadoras</h1>

      <input
        type="text"
        placeholder="Buscar producto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />

      <div className="grid">
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}