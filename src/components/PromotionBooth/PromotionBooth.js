import "./PromotionBooth.css";

function PromotionBooth() {
  return (
    <div className="promotionBooth-container">
      <h3>Gian hàng ưu đãi</h3>
      <div className="box-banner-offers">
        <div className="banner-offers-item">
          <a href="https://www.dienmayxanh.com/chuong-trinh-mua-nong">
            <img src="/image/banner1.png" alt=""></img>
          </a>
        </div>
        <div className="banner-offers-item">
          <a href="https://www.thegioididong.com/flashsale?itm_source=trang-chu&itm_medium=banner2">
            <img src="/image/banner2.png" alt=""></img>
          </a>
        </div>
        <div className="banner-offers-item">
          <a href="https://www.thegioididong.com/tin-tuc/ngan-hang-so-cake-vay-nhanh-truc-tuyen-nhan-tien-lien-tay-1573355?itm_source=trang-chu&itm_medium=banner3">
            <img src="/image/banner3.png" alt=""></img>
          </a>
        </div>
        <div className="banner-offers-item">
          <a href="https://www.dienmayxanh.com/chuong-trinh-mua-nonghttps://www.thegioididong.com/tien-ich/the-cao-game?itm_source=trang-chu&itm_medium=banner">
            <img src="/image/banner4.jpg" alt=""></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PromotionBooth;
