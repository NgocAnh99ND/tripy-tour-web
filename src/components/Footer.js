import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "./Footer.css";
import tuyendung from "../image/tuyendung.jpeg";
import thodienmayxanh from "../image/thodienmayxanh.png";
import logotopzone from "../image/topzone.png";
import erablue from "../image/erablue.png";
import dienmayxanh from "../image/dienmayxanh.png";
import bachhoaxanh from "../image/bachhoaxanh.png";
import avakid from "../image/ava.jpeg";
import nhathuoc from "../image/nhathuoc.png";
import Facebook from "../image/FB.png";
import Youtube from "../image/YTB.png";
import Zalo from "../image/ZL.png";
import Protected from "../image/protect.50.jpg";

function Footer() {
  const [showMore, setShowMore] = useState(false);
  const additionalInfo = [
    "Chính sách đổi trả",
    "Giao hàng & Thanh toán",
    "Hướng dẫn mua online",
    "Bán hàng doanh nghiệp",
    "Phiếu mua hàng",
    "In hóa đơn điện tử",
    "Quy chế hoạt động",
    "Chính sách xử lý dữ liệu cá nhân",
    "Nội quy cửa hàng",
    "Chất lượng phục vụ",
    "Cảnh báo giả mạo",
    "Chính sách khui hộp sản phẩm Apple",
    "Hợp tác bán hàng",
    "Mạng xã hội thegioididong.com",
    "Xem bản mobile",
  ];

  return (
    <div className="footer-container">
      <div className="support">
        <h4>Tổng đài hỗ trợ</h4>
        <ul>
          <li>
            Gọi mua: <a href="tel:1900232460">1900 232 460</a> (8:00 - 21:30)
          </li>
          <li>
            Khiếu nại: <a href="tel:18001062">1800 1062</a> (8:00 - 21:30)
          </li>
          <li>
            Bảo hành: <a href="tel:1900232464">1900 232 464</a> (8:00 - 21:00)
          </li>
        </ul>
      </div>

      <div className="company">
        <h4>Về công ty</h4>
        <ul>
          <li>
            <a href="#">Giới thiệu công ty (MWG.vn)</a>
          </li>
          <li>
            <a href="#">Tuyển dụng</a>
          </li>
          <li>
            <a href="#">Gửi góp ý, khiếu nại</a>
          </li>
          <li>
            <a href="#">Tìm siêu thị (2.959 shop)</a>
          </li>
        </ul>
      </div>

      <div className="info">
        <h4>Thông tin khác</h4>
        <ul>
          <li>
            <a href="#">Tích điểm Quà tặng VIP</a>
          </li>
          <li>
            <a href="#">Lịch sử mua hàng</a>
          </li>
          <li>
            <a href="#">Đăng ký bán hàng CTV chiết khấu cao</a>
          </li>
          <li>
            <a href="#">Tìm hiểu về trả chậm</a>
          </li>
          <li>
            <a href="#">Chính sách bảo hành</a>
          </li>

          {showMore &&
            additionalInfo.map((info, index) => (
              <li key={index}>
                <a href="#">{info}</a>
              </li>
            ))}

          <li>
            <button
              onClick={() => setShowMore(!showMore)}
              className="toggle-btn"
            >
              {showMore ? "Thu vào" : "Xem thêm"}

              {showMore ? (
                <FaAngleUp className="less-icon" />
              ) : (
                <FaAngleDown className="more-icon" />
              )}
            </button>
          </li>
        </ul>
      </div>

      <div className="websites">
        <h4>Website của tập đoàn</h4>
        <div className="website-links">
          <a href="https://www.topzone.vn/">
            <img src={logotopzone} alt="Topzone" />
          </a>
          <a href="https://www.dienmayxanh.com/">
            <img src={dienmayxanh} alt="Điện máy Xanh" />
          </a>
          <a href="https://www.bachhoaxanh.com/">
            <img src={bachhoaxanh} alt="Bách hóa Xanh" />
          </a>
          <a href="https://www.nhathuocankhang.com/">
            <img src={nhathuoc} alt="Nhà thuốc An Khang" />
          </a>
          <a href="https://www.avakids.com/">
            <img src={avakid} alt="AVA Kid" />
          </a>
          <a href="https://vieclam.thegioididong.com/">
            <img src={tuyendung} alt="Việc làm" />
          </a>
          <a href="https://www.erablue.id/">
            <img src={erablue} alt="Erablue Electronics" />
          </a>
          <a href="https://www.thodienmayxanh.com">
            <img src={thodienmayxanh} alt="Thợ Sửa Chữa Xanh" />
          </a>
        </div>
      </div>

      <div className="social">
        <div className="social-media">
          <a href="https://www.facebook.com/thegioididongcom">
            <img src={Facebook} alt="Facebook" />
            3886.8k Fan
          </a>
          <a href="https://www.youtube.com/user/TGDDVideoReviews">
            <img src={Youtube} alt="Youtube" />
            873k Đăng ký
          </a>
          <a href="https://zalo.me/936590283559458736">
            <img src={Zalo} alt="Zalo" />
            Zalo TGDD
          </a>
        </div>
        <div className="protected-group">
          <img src={Protected} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
