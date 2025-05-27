import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "./Footer.css";

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
            <img src="/image/topzone.png" alt="Topzone" />
          </a>
          <a href="https://www.dienmayxanh.com/">
            <img src="/image/dienmayxanh.png" alt="Điện máy Xanh" />
          </a>
          <a href="https://www.bachhoaxanh.com/">
            <img src="/image/bachhoaxanh.png" alt="Bách hóa Xanh" />
          </a>
          <a href="https://www.nhathuocankhang.com/">
            <img src="/image/nhathuoc.png" alt="Nhà thuốc An Khang" />
          </a>
          <a href="https://www.avakids.com/">
            <img src="/image/ava.jpeg" alt="AVA Kid" />
          </a>
          <a href="https://vieclam.thegioididong.com/">
            <img src="/image/tuyendung.jpeg" alt="Việc làm" />
          </a>
          <a href="https://www.erablue.id/">
            <img src="/image/erablue.png" alt="Erablue Electronics" />
          </a>
          <a href="https://www.thodienmayxanh.com">
            <img src="/image/thodienmayxanh.png" alt="Thợ Sửa Chữa Xanh" />
          </a>
        </div>
      </div>

      <div className="social">
        <div className="social-media">
          <a href="https://www.facebook.com/thegioididongcom">
            <img src="/image/FB.png" alt="Facebook" />
            3886.8k Fan
          </a>
          <a href="https://www.youtube.com/user/TGDDVideoReviews">
            <img src="/image/YTB.png" alt="Youtube" />
            873k Đăng ký
          </a>
          <a href="https://zalo.me/936590283559458736">
            <img src="/image/ZL.png" alt="Zalo" />
            Zalo TGDD
          </a>
        </div>
        <div className="protected-group">
          <img src="/image/protect.50.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
