import { useState } from "react";
import "./HotPromotion.css";
import flashsale from "../image/flashsale.png";
import onlineonly from "../image/onlineonly.png";
import vodoi from "../image/vodoi.jpg";
import { products } from "./ProductSale.js";
import { productOnlineOnly } from "./productOnlineOnly.js";
import FlashSaleProductCard from "./FlashSaleProductCard";
import DefaultProductCard from "./DefaultProductCard";
import { FaAngleDown } from "react-icons/fa";
function HotPromotion() {
  const [activeTab, setActiveTab] = useState("flashsale");
  const [startIndex, setStartIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const itemsPerPage = 12;
  const totalProducts = products.length;

  const productsByTab = {
    flashsale: products,
    onlineonly: productOnlineOnly,
    vodoi: productOnlineOnly,
    dienthoai: productOnlineOnly,
    apple: productOnlineOnly,
    laptop: productOnlineOnly,
    phukien: productOnlineOnly,
    dongho: productOnlineOnly,
  };

  const handleTabClick = (event, tabName) => {
    event.preventDefault();
    setActiveTab(tabName);
    setStartIndex(0); // Reset lại startIndex khi đổi tab
  };

  function nextSlide() {
    const totalProducts = products.length;
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

  const isNextDisabled = startIndex + itemsPerPage >= totalProducts;
  const isPrevDisabled = startIndex <= 0;

  const productList = productsByTab[activeTab].slice(
    0,
    startIndex + (showMore ? productsByTab[activeTab].length : itemsPerPage)
  );

  // Sử dụng component tương ứng cho từng tab
  const getProductCard = () => {
    if (activeTab === "flashsale") {
      return FlashSaleProductCard;
    }
    return DefaultProductCard;
  };

  return (
    <div className="hot-promotion">
      <div className="products-tabs">
        <ul className="products-tab">
          <li className={activeTab === "flashsale" ? "selected" : ""}>
            <a href="#" onClick={(e) => handleTabClick(e, "flashsale")}>
              <img src={flashsale} alt="flashsale" />
            </a>
          </li>
          <li className={activeTab === "onlineonly" ? "selected" : ""}>
            <a href="#" onClick={(e) => handleTabClick(e, "onlineonly")}>
              <img src={onlineonly} alt="onlineonly" />
            </a>
          </li>
          <li className={activeTab === "vodoi" ? "selected" : ""}>
            <a href="#" onClick={(e) => handleTabClick(e, "vodoi")}>
              <img src={vodoi} alt="vodoi" />
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
          {activeTab === "flashsale" && (
            <>
              <button
                className={`arrow left ${isPrevDisabled ? "disabled" : ""}`}
                onClick={prevSlide}
              >
                ❮
              </button>
            </>
          )}

          <div className="product-list">
            {productsByTab[activeTab]
              .slice(startIndex, startIndex + itemsPerPage)
              .map((product) => {
                const ProductCard = getProductCard(); // Lấy component tương ứng cho từng tab
                return <ProductCard key={product.id} product={product} />;
              })}
          </div>

          {activeTab === "flashsale" && (
            <>
              <button
                className={`arrow right ${isNextDisabled ? "disabled" : ""}`}
                onClick={nextSlide}
              >
                ❯
              </button>
            </>
          )}
        </div>
        <div className="show-more-container">
          <button className="show-more-btn" onClick={toggleShowMore}>
            {showMore ? "Thu gọn sản phẩm" : "Xem thêm sản phẩm"}
            <FaAngleDown className="arrow-down" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HotPromotion;
