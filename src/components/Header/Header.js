import "./Header.css";
import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaShoppingCart,
  FaMapMarkerAlt,
  FaSearch,
  FaChevronRight,
  FaMobileAlt,
  FaLaptop,
  FaHeadphones,
  FaTabletAlt,
  FaPrint,
  FaSimCard,
  FaCog,
  FaStopwatch,
  FaClock,
  FaRecycle,
  FaAngleDown,
} from "react-icons/fa";

function Header() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    // Sự kiện cuộn trang
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true); // Khi cuộn xuống 100px thì ẩn header__main
      } else {
        setScrolling(false); // Khi cuộn lên trên cùng thì hiển thị lại
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header v2024 fixed1 sticky1">
      <div className={`header__top ${scrolling ? "scrolled" : ""}`}>
        {/* Logo */}
        <div className="header__logo">
          <a href="/">
            <img src="/image/logo.jpg" alt="Thegioididong" />
          </a>
        </div>

        {/* Ô tìm kiếm */}
        <div className="header__search">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Bạn tìm gì..." />
        </div>

        {/* Các nút bên phải */}
        <div className="header__actions">
          <a href="/login" className="header__item">
            <FaUser className="icon" />
            Đăng nhập
          </a>
          <a href="/cart" className="header__item">
            <FaShoppingCart className="icon" />
            Giỏ hàng
          </a>
          <a href="/location" className="header__location">
            <FaMapMarkerAlt className="icon" />
            Hồ Chí Minh
            <FaChevronRight className="arrow-icon" />
          </a>
        </div>
      </div>
      <div className={`header__main ${scrolling ? "hidden" : ""}`}>
        <ul>
          <li>
            <a href="#">
              <FaMobileAlt className="icon" />
              Điện thoại
            </a>
          </li>
          <li>
            <a href="#">
              <FaLaptop className="icon" />
              Laptop
            </a>
          </li>
          {/* Dropdown for Phụ kiện */}
          <li className="dropdown">
            <a href="#">
              <FaHeadphones className="icon" />
              Phụ kiện <FaAngleDown className="arrow-down" />
            </a>
            <ul className="dropdown-content">
              <li>
                <a href="#">Sạc dự phòng</a>
              </li>
              <li>
                <a href="#">Sạc, cáp</a>
              </li>
              <li>
                <a href="#">Ốp lưng điện thoại</a>
              </li>
              <li>
                <a href="#">Túi đựng AirPods</a>
              </li>
              <li>
                <a href="#">AirTag</a>
              </li>
              <li>
                <a href="#">Vỏ bảo vệ</a>
              </li>
              <li>
                <a href="#">Bộ tablet</a>
              </li>
              <li>
                <a href="#">Dây đồng hồ</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <FaStopwatch className="icon" />
              Smartwatch
            </a>
          </li>
          <li>
            <a href="#">
              <FaClock className="icon" />
              Đồng hồ
            </a>
          </li>
          <li>
            <a href="#">
              <FaTabletAlt className="icon" />
              Tablet
            </a>
          </li>
          {/* Dropdown for Máy cũ, Thu cũ */}
          <li className="dropdown">
            <a href="#">
              <FaRecycle className="icon" />
              Máy cũ, Thu cũ <FaAngleDown className="arrow-down" />
            </a>
            <ul className="dropdown-content">
              <li>
                <a href="#">Máy cũ giá rẻ</a>
              </li>
              <li>
                <a href="#">Thu cũ đổi mới</a>
              </li>
            </ul>
          </li>
          {/* Dropdown for Màn hình, Máy in */}
          <li className="dropdown">
            <a href="#">
              <FaPrint className="icon" />
              Màn hình, Máy in <FaAngleDown className="arrow-down" />
            </a>
            <ul className="dropdown-content">
              <li>
                <a href="#">Máy tính để bàn</a>
              </li>
              <li>
                <a href="#">Màn hình máy tính</a>
              </li>
              <li>
                <a href="#">Máy chơi game</a>
              </li>
              <li>
                <a href="#">Phần mềm</a>
              </li>
              <li>
                <a href="#">Mực in</a>
              </li>
              <li>
                <a href="#">Máy in</a>
              </li>
            </ul>
          </li>
          {/* Dropdown for Sim, Thẻ cào */}
          <li className="dropdown">
            <a href="#">
              <FaSimCard className="icon" />
              Sim, Thẻ cào <FaAngleDown className="arrow-down" />
            </a>
            <ul className="dropdown-content">
              <li>
                <a href="#">Sim, thẻ cào</a>
              </li>
              <li>
                <a href="#">eSim du lịch</a>
              </li>
            </ul>
          </li>
          {/* Dropdown for Dịch vụ tiện ích */}
          <li className="dropdown">
            <a href="#">
              <FaCog className="icon" />
              Dịch vụ tiện ích <FaAngleDown className="arrow-down" />
            </a>
            <ul className="dropdown-content">
              <li>
                <a href="#">Mua gói truyền hình</a>
              </li>
              <li>
                <a href="#">Mua gói data 3G,4G</a>
              </li>
              <li>
                <a href="#">Nạp tiền trả trước</a>
              </li>
              <li>
                <a href="#">Nạp tiền trả sau</a>
              </li>
              <li>
                <a href="#">Thẻ cào điện thoại</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
