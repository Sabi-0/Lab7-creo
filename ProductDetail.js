import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Lolskin",
    price: 1200,
    description: "Directly to your riot account",
  },
  {
    id: 2,
    name: "trashphone",
    price: 800,
    description: "Latest model of IPHONE",
  },
  {
    id: 3,
    name: "Headphones",
    price: 300,
    description: "Noise-canceling headphones",
  },
  {
    id: 4,
    name: "1200 Robux",
    price: 250,
    description: "put your id for the delivery",
  },
];

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [inputId, setInputId] = useState("");
  const [error, setError] = useState("");

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleAddToCart = () => {
    if (product.id === 4 && !inputId.trim()) {
      setError("Please enter an ID to proceed.");
      return;
    }
    setError("");
    addToCart(product);
  };

  return (
    <div className="container mt-4">
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      {product.id === 1 && (
        <div>
          <label>Enter ID:</label>
          <input
            type="text"
            className="form-control mb-2"
            value={inputId}
            onChange={(e) => setInputId(e.target.value)}
          />
          {error && <p className="text-danger">{error}</p>}
        </div>
      )}
      {product.id === 4 && (
        <div>
          <label>Enter ID:</label>
          <input
            type="text"
            className="form-control mb-2"
            value={inputId}
            onChange={(e) => setInputId(e.target.value)}
          />
          {error && <p className="text-danger">{error}</p>}
        </div>
      )}
      <button className="btn btn-primary" onClick={handleAddToCart}>
        Add to Cart
      </button>
      <Link className="btn btn-secondary ms-2" to="/">
        Back to Products
      </Link>
    </div>
  );
};

export default ProductDetail;
