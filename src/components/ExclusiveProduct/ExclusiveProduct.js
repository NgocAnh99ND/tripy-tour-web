import React, { useState } from "react";
import "./ExclusiveProduct.css";
import "../HotPromotion/HotPromotion.css";
import bannerExclusiveproduct from "../../image/banner-exclusiveproduct.png";
import { exclusiveProductList } from "../Listdata/exclusiveProductlist";
import DefaultProductCard from "../DefaultProductCard/DefaultProductCard"

const itemsPerPage = 4;

const ExclusiveProduct = () => {
  const [startIndex, setStartIndex] = useState(0);

  function nextSlide() {
    const totalItems = exclusiveProductList.length;
    if (startIndex + itemsPerPage < totalItems) {
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
        <div className="product-carousel-exclusive">
          <button
            className={`arrow left-exclusive ${
              startIndex <= 0 ? "disabled" : ""
            }`}
            onClick={prevSlide}
            disabled={startIndex <= 0}
          >
            ❮
          </button>
          <div className="product-list-wrapper-exclusive">
            <div
              className="product-list-exclusive"
              style={{
                transform: `translateX(-${(startIndex / itemsPerPage) * 100}%)`,
                transition: "transform 0.5s ease-in-out",
              }}
            >
              {exclusiveProductList.map((product) => (
                <div key={product.id} className="product-item-exclusive">
                  <DefaultProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
          <button
            className={`arrow right-exclusive ${
              startIndex + itemsPerPage >= exclusiveProductList.length
                ? "disabled"
                : ""
            }`}
            onClick={nextSlide}
            disabled={startIndex + itemsPerPage >= exclusiveProductList.length}
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveProduct;
