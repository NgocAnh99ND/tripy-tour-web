import React from "react";
import "./Social.css";
import social1 from "../image/social1.jpg";
import social2 from "../image/social2.png";
import social3 from "../image/social3.jpg";
import social4 from "../image/social4.jpg";
import { FaChevronRight } from "react-icons/fa";

function Social() {
  return (
    <div className="social-container">
      <h3>Mạng xã hội thegioididong.com</h3>
      <div className="social-box">
        <div className="social-item">
          <a href="https://www.thegioididong.com/tin-tuc/apple-phat-hanh-ban-cap-nhat-ios-18-4-siri-chinh-thuc-co-tieng-viet-1576414">
            <img src={social1} alt="social 1" />
          </a>
          <p>
            Apple chính thức phát hành bản cập nhật iOS 18.4: Siri đã hỗ trợ
            tiếng Việt, emoji mới và loạt tính năng vừa được bổ sung
          </p>
        </div>
        <div className="social-item">
          <a href="https://www.thegioididong.com/hoi-dap/bang-gia-iphone-15-mini-plus-pro-pro-max-cac-1526554">
            <img src={social2} alt="social 2" />
          </a>
          <p>Bảng giá iPhone 15/Plus/Pro/Pro Max các phiên bản mới nhất</p>
        </div>
        <div className="social-item">
          <a href="https://www.thegioididong.com/tin-tuc/cach-su-dung-siri-tieng-viet-1576421">
            <img src={social3} alt="social 3" />
          </a>
          <p>
            Hướng dẫn cách sử dụng Siri tiếng Việt trên iPhone cực tiện lợi mà
            bạn nên thử
          </p>
        </div>
        <div className="social-item">
          <a href="https://www.thegioididong.com/hoi-dap/tham-khao-ngay-bang-gia-dien-thoai-samsung-moi-1501373">
            <img src={social4} alt="social 4" />
          </a>
          <p>
            Bảng giá điện thoại Samsung mới nhất 2025 tại TGDĐ cập nhật liên tục
          </p>
        </div>
      </div>
      <a href="https://www.thegioididong.com/tin-tuc" className="btn-more">
        Xem thêm
        <FaChevronRight className="arrow-icon" />
      </a>
    </div>
  );
}

export default Social;
