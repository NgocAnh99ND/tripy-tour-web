import { useState } from "react";
import React from "react";
import DefaultProductCard from "../DefaultProductCard/DefaultProductCard";
import { productOnlineOnly } from "../Listdata/ProductOnlineOnly";
import "./Recommend.css";
import "../HotPromotion/HotPromotion.css";
import { FaAngleDown } from "react-icons/fa";

const Recommend = () => {
  const [showMore, setShowMore] = useState(false);
  const itemsPerPage = 12;

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const productList = showMore
    ? productOnlineOnly
    : productOnlineOnly.slice(0, itemsPerPage);

  return (
    <div className="recommend-section">
      <h3 className="recommend-title">Gợi ý cho bạn</h3>
      <div className="recommend-products">
        {productList.map((product) => (
          <DefaultProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="show-more-container">
        <button className="show-more-btn" onClick={toggleShowMore}>
          {showMore ? "Thu gọn sản phẩm" : "Xem thêm sản phẩm"}
          <FaAngleDown className="show-more-arrow-down" />
        </button>
      </div>
    </div>
  );
};

export default Recommend;
