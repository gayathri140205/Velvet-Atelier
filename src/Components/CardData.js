import React from "react";
import "./CardStyles.css"; 

const FrontPageData = ({ img, cakeName }) => {
  const handleAddToCart = () => {
    // Logic
  };

  return (
    <div className="cake-card">
      <img src={img} alt={cakeName} className="cake-image" />
      <h3>{cakeName}</h3>
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default FrontPageData;