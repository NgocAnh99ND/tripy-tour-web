import React from "react";
import "./HotPromotion.css";

const DefaultProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.img} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">
        {product.price.replace("₫", "")}
        <sup>₫</sup>
      </p>
      <div className="old-price">
        <p className="product-old-price">{product.oldPrice}</p>
        <span className="discount">{product.discount}</span>
      </div>
      <div className="buy-button">
        <a href="#">Mua ngay</a>
      </div>
    </div>
  );
};

export default DefaultProductCard;
