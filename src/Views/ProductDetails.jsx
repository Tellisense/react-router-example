import React from "react";

const ProductDetails = (props) => {
  console.log(`ProductDetails props: `, props)


  const handleSave = () => {
    // Navigate to /products
    props.history.replace("/products");
  };

  return (
    <div>
      <h1 className="text-4xl font-black ">Product Detail - </h1>
      <button onClick={handleSave}>Save</button>
    </div>
  )
}

export default ProductDetails;
