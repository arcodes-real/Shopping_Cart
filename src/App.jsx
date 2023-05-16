import "./styles.css";
import React from "react";
import {useState} from "react";

export default function App() {

  const [productCount, setProductCount] = useState(0);

  const handleAddProduct = () => {
    setProductCount(productCount + 1);
  }

  const handleRemoveProduct = () => {
    if(productCount > 0){
      setProductCount(productCount - 1);
    }
   
  }
  return (
    <div className="App">
      <p>Products in Cart: {productCount}</p>
      <button onClick={handleAddProduct}>Add Product</button>
      <button onClick={handleRemoveProduct}>Remove Product</button> 
    </div>
  );
}
