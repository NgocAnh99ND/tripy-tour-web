import React from "react";
import Header from "../components/Header";
import "./Home.css";
import HotPromotion from "../components/HotPromotion";
import Recommend from "../components/Recommend";
import PromotionBooth from "../components/PromotionBooth";
import ExclusiveProduct from "../components/ExclusiveProduct";
import Social from "../components/Social";
import banner from "../image/banner.png";
import SearchTags from "../components/Searchtag";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="container">
      <div className="banner-homepage">
        <a href="#">
          <img src={banner} alt="Khám phá các sản phẩm mới nhất." />
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
    </div>
  );
}

export default Home;
