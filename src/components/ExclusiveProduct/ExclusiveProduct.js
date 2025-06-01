import React, { useState, useEffect } from "react";
import "./ExclusiveProduct.css";
import "../HotPromotion/HotPromotion.css";
import DefaultProductCard from "../DefaultProductCard/DefaultProductCard"

const itemsPerPage = 4;

const ExclusiveProduct = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [productOnlineOnlyFromAPI, setProductOnlineOnlyFromAPI] = useState([]);

  function nextSlide() {
    const totalItems = productOnlineOnlyFromAPI.length;
    if (startIndex + itemsPerPage < totalItems) {
      setStartIndex(startIndex + itemsPerPage);
    }
  }

  function prevSlide() {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  }

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
    <div className="exclusiveProduct-container">
      <h3 className="exclusiveProduct-title">Sản Phẩm Đặc Quyền</h3>
      <div className="exclusiveProduct-content">
        <div className="exclusiveProduct-banner">
          <a href="#">
            <img src="/image/banner-exclusiveproduct.png" alt="Sản Phẩm Đặc Quyền." />
          </a>
        </div>
        <div className="product-carousel-exclusive">
          <button
            className={`arrow left-exclusive ${startIndex <= 0 ? "disabled" : ""
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
              {productOnlineOnlyFromAPI.map((product) => (
                <div key={product.id} className="product-item-exclusive">
                  <DefaultProductCard
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
                </div>
              ))}
            </div>
          </div>
          <button
            className={`arrow right-exclusive ${startIndex + itemsPerPage >= productOnlineOnlyFromAPI.length
              ? "disabled"
              : ""
              }`}
            onClick={nextSlide}
            disabled={startIndex + itemsPerPage >= productOnlineOnlyFromAPI.length}
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveProduct;
