import React, { useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products] = useState([
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" }
  ])


  return (
    <div>
      <h1 className="text-4xl font-black ">Products Page</h1>
      <ul>
        <li>test</li>
      </ul>
    </div>
  );

}

export default Products;
