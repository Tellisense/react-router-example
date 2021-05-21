import React from "react";
import Product from '../components/Product'
const ProductDetails = (props) => {
  console.log(`ProductDetails props: `, props)


  const handleSave = () => {
    // Navigate to /products
    props.history.replace("/products");
  };

  return (
    <div>
      <h1 className="text-4xl font-black ">Product Detail: <span className="text-xl border-solid border-2 rounded -mt-4 border-red-700 shadow py-1 px-6">{props.match.params.id}</span></h1>
      <Product />
      <button className="my-4  g-white m-10 hover:bg-gray-100 text-red-700 font-semibold py-1 px-4 border border-red-700 rounded shadow" onClick={handleSave}>Save</button>
    </div>
  )
}

export default ProductDetails;
