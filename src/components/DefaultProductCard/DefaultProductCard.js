import React from "react";
import "../HotPromotion/HotPromotion.css";
import "./DefaultProductCard.css";
import { FaStar } from "react-icons/fa";

const DefaultProductCard = ({ product }) => {
  const hasRating = product.rating && product.rating > 0;

  return (
    <div className="product-card">
      <img src={product.img} alt={product.name} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-specs">
          {product.processor && <p>{product.processor}</p>}
          {product.hz && <p>{product.hz}</p>}
          {product.responetime && <p>{product.responetime}</p>}
          {product.CPU && <p>{product.CPU}</p>}
          {product.ram && <p>{product.ram}</p>}
          {product.ssd && <p>{product.ssd}</p>}
        </div>
        <p className="descript">Chỉ bán online</p>
        <p className="product-price">
          {product.price.replace("₫", "")}
          <sup>₫</sup>
        </p>
        <div className="old-price">
          <p className="product-old-price">{product.oldPrice}</p>
          <span className="discount">{product.discount}</span>
        </div>

        <p className="gift">{product.gift}</p>

        <div className="product-rating">
          {hasRating && (
            <span className="stars">
              <FaStar className="star-icon" />
              {product.rating}
            </span>
          )}
          <span className="sold">{product.sold}</span>
        </div>
      </div>
    </div>
  );
};

export default DefaultProductCard;
