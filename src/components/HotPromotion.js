// import { useState } from "react";
// import "./HotPromotion.css";
// import flashsale from "../image/flashsale.png";
// import onlineonly from "../image/onlineonly.png";
// import vodoi from "../image/vodoi.jpg";
// import { products } from "./ProductSale.js";
// import { productOnlineOnly } from "./productOnlineOnly.js";
// import FlashSaleProductCard from "./FlashSaleProductCard";
// import DefaultProductCard from "./DefaultProductCard";
// import { FaAngleDown } from "react-icons/fa";

// function HotPromotion() {
//   const [activeTab, setActiveTab] = useState("flashsale");
//   const [startIndex, setStartIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);
//   const itemsPerPage = 12;

//   const productsByTab = {
//     flashsale: products,
//     onlineonly: productOnlineOnly,
//     vodoi: productOnlineOnly,
//     dienthoai: productOnlineOnly,
//     apple: productOnlineOnly,
//     laptop: productOnlineOnly,
//     phukien: productOnlineOnly,
//     dongho: productOnlineOnly,
//   };

//   const handleTabClick = (event, tabName) => {
//     event.preventDefault();
//     setActiveTab(tabName);
//     setStartIndex(0); // Reset lại startIndex khi đổi tab
//     setShowMore(false); // Thu gọn lại khi chuyển tab
//   };

//   const totalProducts = productsByTab[activeTab].length;

//   // Chức năng chuyển đổi giữa các slide sản phẩm
//   function nextSlide() {
//     const total = productsByTab[activeTab].length;
//     if (startIndex + itemsPerPage < total) {
//       setStartIndex(startIndex + itemsPerPage);
//     }
//   }

//   function prevSlide() {
//     if (startIndex - itemsPerPage >= 0) {
//       setStartIndex(startIndex - itemsPerPage);
//     }
//   }

//   const toggleShowMore = () => {
//     setShowMore(!showMore);
//   };

//   const productList = showMore
//     ? productsByTab[activeTab]
//     : productsByTab[activeTab].slice(0, startIndex + itemsPerPage);

//   const getProductCard = () => {
//     if (activeTab === "flashsale") {
//       return FlashSaleProductCard;
//     }
//     return DefaultProductCard;
//   };

//   return (
//     <div className="hot-promotion">
//       <div className="products-tabs">
//         <ul className="products-tab">
//           <li className={activeTab === "flashsale" ? "selected" : ""}>
//             <a href="#" onClick={(e) => handleTabClick(e, "flashsale")}>
//               <img src={flashsale} alt="flashsale" />
//             </a>
//           </li>
//           <li className={activeTab === "onlineonly" ? "selected" : ""}>
//             <a href="#" onClick={(e) => handleTabClick(e, "onlineonly")}>
//               <img src={onlineonly} alt="onlineonly" />
//             </a>
//           </li>
//           <li className={activeTab === "vodoi" ? "selected" : ""}>
//             <a href="#" onClick={(e) => handleTabClick(e, "vodoi")}>
//               <img src={vodoi} alt="vodoi" />
//             </a>
//           </li>
//           <li className={activeTab === "dienthoai" ? "selected" : ""}>
//             <a href="#" onClick={(e) => handleTabClick(e, "dienthoai")}>
//               Điện Thoại
//             </a>
//           </li>
//           <li className={activeTab === "apple" ? "selected" : ""}>
//             <a href="#" onClick={(e) => handleTabClick(e, "apple")}>
//               Apple
//             </a>
//           </li>
//           <li className={activeTab === "laptop" ? "selected" : ""}>
//             <a href="#" onClick={(e) => handleTabClick(e, "laptop")}>
//               Laptop
//             </a>
//           </li>
//           <li className={activeTab === "phukien" ? "selected" : ""}>
//             <a href="#" onClick={(e) => handleTabClick(e, "phukien")}>
//               Phụ Kiện
//             </a>
//           </li>
//           <li className={activeTab === "dongho" ? "selected" : ""}>
//             <a href="#" onClick={(e) => handleTabClick(e, "dongho")}>
//               Đồng Hồ
//             </a>
//           </li>
//         </ul>
//         <div className="product-carousel">
//           {activeTab === "flashsale" && (
//             <>
//               <button
//                 className={`arrow left ${startIndex <= 0 ? "disabled" : ""}`}
//                 onClick={prevSlide}
//               >
//                 ❮
//               </button>
//             </>
//           )}

//           <div
//             className="product-list"
//             style={{
//               transform: `translateX(-${startIndex * (100 / itemsPerPage)}%)`,
//               transition: "transform 0.5s ease-in-out",
//             }}
//           >
//             {productList.map((product) => {
//               const ProductCard = getProductCard();
//               return (
//                 <div className="product-item-hotPromotion">
//                   <ProductCard key={product.id} product={product} />
//                 </div>
//               );
//             })}
//           </div>

//           {activeTab === "flashsale" && (
//             <>
//               <button
//                 className={`arrow right ${
//                   startIndex + itemsPerPage >= totalProducts ? "disabled" : ""
//                 }`}
//                 onClick={nextSlide}
//               >
//                 ❯
//               </button>
//             </>
//           )}
//         </div>
//         <div className="show-more-container">
//           <button className="show-more-btn" onClick={toggleShowMore}>
//             {showMore ? "Thu gọn sản phẩm" : "Xem thêm sản phẩm"}
//             <FaAngleDown className="show-more-arrow-down" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HotPromotion;

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
    setStartIndex(0);
    setShowMore(false);
  };

  const totalProducts = productsByTab[activeTab].length;

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
                        key={product.id}
                      >
                        <ProductCard product={product} />
                      </div>
                    );
                  })}
              </div>

              <button
                className={`arrow right ${
                  startIndex + itemsPerPage >= totalProducts ? "disabled" : ""
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
                    <div className="product-item-hotPromotion" key={product.id}>
                      <ProductCard product={product} />
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
