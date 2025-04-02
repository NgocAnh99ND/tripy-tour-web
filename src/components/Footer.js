import React from "react";
import "./Footer.css";

function Footer() {
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
          <li>
            <a href="#">Xem thêm</a>
          </li>
        </ul>
      </div>

      <div className="websites">
        <h4>Website của tập đoàn</h4>
        <div className="website-links">
          <a href="#">topzone</a>
          <a href="#">Điện máy Xanh</a>
          <a href="#">Bách hóa Xanh</a>
          <a href="#">Nhà thuốc An Khang</a>
          <a href="#">Việc làm</a>
          <a href="#">Erablue Electronics</a>
          <a href="#">Thợ Sửa Chữa Xanh</a>
        </div>
      </div>

      <div className="social-media">
        <a href="#">Facebook</a>
        <a href="#">Zalo TGDD</a>
        <a href="#">YouTube</a>
      </div>

      <div className="footer-bottom">
        <p>
          © 2018. Công ty cổ phần Thế Giới Di Động. GPKD: 0303217354. Địa chỉ:
          128 Trần Quang Khải, P.Tân Định, Q.1, TP.HCM.
        </p>
        <p>Email: hotrotmdt@thegioididong.com</p>
      </div>
    </div>
  );
}

export default Footer;
