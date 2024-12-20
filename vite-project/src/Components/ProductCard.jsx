import React from "react";
import "./ProductCard.css";

const ProductCard = ({ image, title, subtitle, price, isNew }) => {
  return (
 
    <div className="product-card">
       
      <div className="product-content">
        <div className="product-info">
          {isNew && <span className="badge">NEW</span>}
          <h3 className="product-title">{title}</h3>
          <p className="product-subtitle">{subtitle}</p><br /><br /><br />
          {price && <p className="product-price">Rs. {price}</p>}
        </div>
        <div className="product-image-container">
          <img src={image} alt={title} className="product-image" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
