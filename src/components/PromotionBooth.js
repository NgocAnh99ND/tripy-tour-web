import "./PromotionBooth.css";
import banner1 from "../image/banner1.png";
import banner2 from "../image/banner2.png";
import banner3 from "../image/banner3.png";
import banner4 from "../image/banner4.jpg";

function PromotionBooth() {
  return (
    <div className="promotionBooth-container">
      <h3>Gian hàng ưu đãi</h3>
      <div className="box-banner-offers">
        <div className="banner-offers-item">
          <a href="https://www.dienmayxanh.com/chuong-trinh-mua-nong">
            <img src={banner1} alt=""></img>
          </a>
        </div>
        <div className="banner-offers-item">
          <a href="https://www.thegioididong.com/flashsale?itm_source=trang-chu&itm_medium=banner2">
            <img src={banner2} alt=""></img>
          </a>
        </div>
        <div className="banner-offers-item">
          <a href="https://www.thegioididong.com/tin-tuc/ngan-hang-so-cake-vay-nhanh-truc-tuyen-nhan-tien-lien-tay-1573355?itm_source=trang-chu&itm_medium=banner3">
            <img src={banner3} alt=""></img>
          </a>
        </div>
        <div className="banner-offers-item">
          <a href="https://www.dienmayxanh.com/chuong-trinh-mua-nonghttps://www.thegioididong.com/tien-ich/the-cao-game?itm_source=trang-chu&itm_medium=banner">
            <img src={banner4} alt=""></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PromotionBooth;
