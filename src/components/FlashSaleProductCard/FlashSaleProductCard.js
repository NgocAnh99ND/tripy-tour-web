import React from "react";
import "../HotPromotion/HotPromotion.css";
import { useNavigate } from "react-router-dom";

const FlashSaleProductCard = ({ product }) => {
  const stockMatch = product.stock.match(/(\d+)\/(\d+)/);
  const stockLeft = stockMatch ? parseInt(stockMatch[1], 10) : 0;
  const totalStock = stockMatch ? parseInt(stockMatch[2], 10) : 1;
  const percentage = (stockLeft / totalStock) * 100;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <img src={product.img} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">
        {product.price.replace("₫", "")}
        <sup>₫</sup>
      </p>
      <div className="old-price">
        <p className="product-old-price">
          {product.oldPrice.replace("₫", "")}
          <sup>₫</sup>
        </p>
        <span className="discount">{product.discount}</span>
      </div>
      <div className="fs-contain">
        <img
          src="//cdnv2.tgdd.vn/webmwg/2024/ContentMwg/images/homev2/flash-sale.png"
          alt="icon flashsale"
        />
        <div className="fs-bar">
          <div className="fs-fill" style={{ width: `${percentage}%` }}></div>
          <b>
            Còn {stockLeft}/{totalStock} suất
          </b>
        </div>
      </div>
      <div className="buy-button">
        <a href="#">Mua ngay</a>
      </div>
    </div>
  );
};

export default FlashSaleProductCard;
