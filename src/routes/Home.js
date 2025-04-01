import React from "react";
import Header from "../components/Header";
import "./Home.css";
import HotPromotion from "../components/HotPromotion";

function Home() {
  return (
    <div className="container">
      <Header />
      <div className="header-section">
        <h3 className="header-section">Khuyến mãi Online</h3>
      </div>
      <HotPromotion />
    </div>
  );
}

export default Home;
