import { useEffect, useState } from "react";
import "./HotPromotion.css";
import FlashSaleProductCard from "../FlashSaleProductCard/FlashSaleProductCard.js";
import DefaultProductCard from "../DefaultProductCard/DefaultProductCard.js";
import { FaAngleDown } from "react-icons/fa";

function HotPromotion() {
  const [activeTab, setActiveTab] = useState("flashsale");
  const [startIndex, setStartIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [productListFromAPI, setProductListFromAPI] = useState([]);
  const [productOnlineOnlyFromAPI, setProductOnlineOnlyFromAPI] = useState([]);
  const itemsPerPage = 12;

  useEffect(() => {
    fetch("http://localhost:8080/products1to23")
      .then((response) => response.json())
      .then((data) => {
        setProductListFromAPI(data);
      })
      .catch((error) => {
        console.error("Lỗi khi fetch dữ liệu sản phẩm:", error);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/products24to37")
      .then((response) => response.json())
      .then((data) => {
        setProductOnlineOnlyFromAPI(data);
      })
      .catch((error) => {
        console.error("Lỗi khi fetch dữ liệu sản phẩm:", error);
      });
  }, []);

  const productsByTab = {
    flashsale: productListFromAPI,
    onlineonly: productOnlineOnlyFromAPI,
    vodoi: productOnlineOnlyFromAPI,
    dienthoai: productOnlineOnlyFromAPI,
    apple: productOnlineOnlyFromAPI,
    laptop: productOnlineOnlyFromAPI,
    phukien: productOnlineOnlyFromAPI,
    dongho: productOnlineOnlyFromAPI,
  };

  const handleTabClick = (event, tabName) => {
    event.preventDefault();
    setActiveTab(tabName);
    setStartIndex(0);
    setShowMore(false);
  };

  const totalProducts = productsByTab[activeTab]?.length || 0;

  function nextSlide() {
    if (startIndex + itemsPerPage < totalProducts) {
      setStartIndex(startIndex + itemsPerPage);
    }
  }

  function prevSlide() {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  }

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const getProductCard = () =>
    activeTab === "flashsale" ? FlashSaleProductCard : DefaultProductCard;

  const productList =
    activeTab === "flashsale"
      ? productsByTab[activeTab]
      : showMore
        ? productsByTab[activeTab]
        : productsByTab[activeTab].slice(0, itemsPerPage);

  return (
    <div className="hot-promotion">
      <div className="products-tabs">
        <ul className="products-tab">
          <li className={activeTab === "flashsale" ? "selected" : ""}>
            <a href="#" onClick={(e) => handleTabClick(e, "flashsale")}>
              <img src="/image/flashsale.png" alt="flashsale" />
            </a>
          </li>
          <li className={activeTab === "onlineonly" ? "selected" : ""}>
            <a href="#" onClick={(e) => handleTabClick(e, "onlineonly")}>
              <img src="/image/onlineonly.png" alt="onlineonly" />
            </a>
          </li>
          <li className={activeTab === "vodoi" ? "selected" : ""}>
            <a href="#" onClick={(e) => handleTabClick(e, "vodoi")}>
              <img src="/image/vodoi.jpg" alt="vodoi" />
            </a>
          </li>
          <li className={activeTab === "dienthoai" ? "selected" : ""}>
            <a href="#" onClick={(e) => handleTabClick(e, "dienthoai")}>
              Điện Thoại
            </a>
          </li>
          <li className={activeTab === "apple" ? "selected" : ""}>
            <a href="#" onClick={(e) => handleTabClick(e, "apple")}>
              Apple
            </a>
          </li>
          <li className={activeTab === "laptop" ? "selected" : ""}>
            <a href="#" onClick={(e) => handleTabClick(e, "laptop")}>
              Laptop
            </a>
          </li>
          <li className={activeTab === "phukien" ? "selected" : ""}>
            <a href="#" onClick={(e) => handleTabClick(e, "phukien")}>
              Phụ Kiện
            </a>
          </li>
          <li className={activeTab === "dongho" ? "selected" : ""}>
            <a href="#" onClick={(e) => handleTabClick(e, "dongho")}>
              Đồng Hồ
            </a>
          </li>
        </ul>

        <div className="product-carousel">
          {activeTab === "flashsale" ? (
            <>
              <button
                className={`arrow left ${startIndex <= 0 ? "disabled" : ""}`}
                onClick={prevSlide}
              >
                ❮
              </button>

              <div className="product-list">
                {productList
                  .slice(startIndex, startIndex + itemsPerPage)
                  .map((product) => {
                    const ProductCard = getProductCard();
                    return (
                      <div
                        className="product-item-hotPromotion"
                        key={product.productId}
                      >
                        <ProductCard
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
                          }}
                        />
                      </div>
                    );
                  })}
              </div>

              <button
                className={`arrow right ${startIndex + itemsPerPage >= totalProducts ? "disabled" : ""
                  }`}
                onClick={nextSlide}
              >
                ❯
              </button>
            </>
          ) : (
            <>
              <div className="product-list">
                {productList.map((product) => {
                  const ProductCard = getProductCard();
                  return (
                    <div
                      className="product-item-hotPromotion"
                      key={product.productId}
                    >
                      <ProductCard
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
                        }}
                      />
                    </div>
                  );
                })}
              </div>

              <div className="show-more-container">
                <button className="show-more-btn" onClick={toggleShowMore}>
                  {showMore ? "Thu gọn sản phẩm" : "Xem thêm sản phẩm"}
                  <FaAngleDown className="show-more-arrow-down" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default HotPromotion;
