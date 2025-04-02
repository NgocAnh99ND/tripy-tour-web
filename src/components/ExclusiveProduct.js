import React, { useState } from "react";
import "./ExclusiveProduct.css";
import "./HotPromotion.css";
import bannerExclusiveproduct from "../image/banner-exclusiveproduct.png";
import { exclusiveProductList } from "./exclusiveProductlist";
import DefaultProductCard from "./DefaultProductCard";

const itemsPerPage = 4;

const ExclusiveProduct = () => {
  const [startIndex, setStartIndex] = useState(0);

  function nextSlide() {
    const total = exclusiveProductList.length;
    if (startIndex + itemsPerPage < total) {
      setStartIndex(startIndex + itemsPerPage);
    }
  }

  function prevSlide() {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  }

  return (
    <div className="exclusiveProduct-container">
      <h3 className="exclusiveProduct-title">Sản Phẩm Đặc Quyền</h3>
      <div className="exclusiveProduct-content">
        <div className="exclusiveProduct-banner">
          <a href="#">
            <img src={bannerExclusiveproduct} alt="Sản Phẩm Đặc Quyền." />
          </a>
        </div>
        <div className="product-carousel">
          <button
            className={`arrow left ${startIndex <= 0 ? "disabled" : ""}`}
            onClick={prevSlide}
          >
            ❮
          </button>
          <div
            className="product-list"
            style={{
              transform: `translateX(-${startIndex * (100 / itemsPerPage)}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {exclusiveProductList.map((product, index) => (
              <div
                key={product.id}
                className="product-item"
                style={{ width: `${100 / itemsPerPage}%` }}
              >
                <DefaultProductCard product={product} />
              </div>
            ))}
          </div>
          <button
            className={`arrow right ${
              startIndex + itemsPerPage >= exclusiveProductList.length
                ? "disabled"
                : ""
            }`}
            onClick={nextSlide}
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveProduct;
