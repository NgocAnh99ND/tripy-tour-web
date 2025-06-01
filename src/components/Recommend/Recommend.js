import { useState, useEffect } from "react";
import React from "react";
import DefaultProductCard from "../DefaultProductCard/DefaultProductCard";
import "./Recommend.css";
import "../HotPromotion/HotPromotion.css";
import { FaAngleDown } from "react-icons/fa";

const Recommend = () => {
  const [showMore, setShowMore] = useState(false);
  const [productOnlineOnlyFromAPI, setProductOnlineOnlyFromAPI] = useState([]);
  const itemsPerPage = 12;

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const productList = showMore
    ? productOnlineOnlyFromAPI
    : productOnlineOnlyFromAPI.slice(0, itemsPerPage);

  useEffect(() => {
    fetch("http://localhost:8080/products?limit=14&offset=23")
      .then((response) => response.json())
      .then((data) => {
        setProductOnlineOnlyFromAPI(data);
      })
      .catch((error) => {
        console.error("Lỗi khi fetch dữ liệu sản phẩm:", error);
      });
  }, []);

  return (
    <div className="recommend-section">
      <h3 className="recommend-title">Gợi ý cho bạn</h3>
      <div className="recommend-products">
        {productList.map((product) => (
          <DefaultProductCard key={product.productId}
            product={{
              id: product.productId,
              name: product.productName,
              img: product.image,
              price: product.price.toLocaleString("vi-VN") + "₫",
              oldPrice:
                product.oldPrice.toLocaleString("vi-VN") + "₫",
              stock: "3/10", // dữ liệu giả, có thể tùy chỉnh
              discount: `-${Math.round(
                ((product.oldPrice - product.price) /
                  product.oldPrice) *
                100
              )}%`,
              ram: product.ram,
              ssd: product.ssd,
              gift: product.gift,
              rating: product.rating
            }} />
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
