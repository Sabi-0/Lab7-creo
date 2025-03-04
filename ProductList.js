import React from "react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Lolskin", price: 1200 },
  { id: 2, name: "trashphone", price: 800 },
  { id: 3, name: "Headphones", price: 300 },
  { id: 4, name: "Robux", price: 250 },
];

const ProductList = () => {
  return (
    <div className="container mt-4">
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
