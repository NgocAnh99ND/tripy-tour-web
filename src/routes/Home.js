import React from "react";
import Header from "../components/Header/Header";
import "./Home.css";
import HotPromotion from "../components/HotPromotion/HotPromotion"
import Recommend from "../components/Recommend/Recommend";
import PromotionBooth from "../components/PromotionBooth/PromotionBooth";
import ExclusiveProduct from "../components/ExclusiveProduct/ExclusiveProduct";
import Social from "../components/Social/Social";
import SearchTags from "../components/Searchtag/Searchtag";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <div className="container">
      <div className="banner-homepage">
        <a href="#">
          <img src="/image/banner.png" alt="Khám phá các sản phẩm mới nhất." />
        </a>
      </div>
      <Header />
      <div className="header-section">
        <h3 className="header-section">Khuyến mãi Online</h3>
      </div>
      <HotPromotion />
      <Recommend />
      <ExclusiveProduct />
      <PromotionBooth />
      <Social />
      <SearchTags />
      <Footer />
      <div className="footer-bottom">
        <p>
          © 2018. Công ty cổ phần Thế Giới Di Động. GPDKKD: 0303217354 do sở KH
          & ĐT TP.HCM cấp ngày 02/01/2007. GPMXH: 238/GP-BTTTT do Bộ Thông Tin
          và Truyền Thông cấp ngày 04/06/2020. Địa chỉ: 128 Trần Quang Khải,
          P.Tân Định, Q.1, TP.Hồ Chí Minh. Địa chỉ liên hệ và gửi chứng từ: Lô
          T2-1.2, Đường D1, Đ. D1, P.Tân Phú, TP.Thủ Đức, TP.Hồ Chí Minh. Điện
          thoại: 028 38125960. Email: cskh@thegioididong.com. Chịu trách nhiệm
          nội dung: Huỳnh Văn Tốt. Email: hotrotmdt@thegioididong.com.
        </p>
      </div>
    </div>
  );
}

export default Home;
