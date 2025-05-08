import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { products } from "../Listdata/ProductSale";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './ProductDetail.css';
import bannerdetail from "../../image/banner-detail.png";
import oppoa38detail from "../../image/oppo-a38-detail.jpg";
import oppoa38detail2 from "../../image/oppo-a38-detail2.jpeg";
import oppoa38detail3 from "../../image/oppo-a38-detail3.jpeg";
import oppoa38detail4 from "../../image/oppo-a38-detail4.jpeg";
import rattingimg1 from "../../image/ratting-img1.jpg";
import rattingimg2 from "../../image/ratting-img2.jpg";
import rattingimg3 from "../../image/ratting-img3.jpg";
import rattingimg4 from "../../image/ratting-img4.jpg";
import rattingimg5 from "../../image/ratting-img5.jpg";
import specifications from "../../image/thong-so-ky-thuat.jpg";
import { FaAngleDown } from "react-icons/fa";

function ProductDetail() {
    const { id } = useParams();
    const product = products.find((p) => String(p.id) === id);
    const images = [oppoa38detail, oppoa38detail2, oppoa38detail3, oppoa38detail4];
    const [selectedColor, setSelectedColor] = useState("vangdong");
    const ratingImages = [rattingimg1, rattingimg2, rattingimg3, rattingimg4, rattingimg5];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeTab, setActiveTab] = useState(0);
    const [showFullSpec, setShowFullSpec] = useState(false);
    const [showBatterySpec, setShowBatterySpec] = useState(false);
    const [showCameraSpec, setShowCameraSpec] = useState(false);
    const [showConnectionSpec, setShowConnectionSpec] = useState(false);
    const [showDesignSpec, setShowDesignSpec] = useState(false);

    const handlePrev = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    };

    const handleNext = () => {
        if (currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1);
    };

    const handleThumbnailClick = (index) => {
        setCurrentIndex(index);
    };

    if (!product) return <p>Sản phẩm không tồn tại</p>;

    const colorOptions = [
        {
            key: "vangdong",
            label: "Vàng đồng",
            color: "#FEE6A0",
        },
        {
            key: "den",
            label: "Đen",
            color: "black",
        },
    ];

    return (
        <div className="product-detail">
            <Header />

            <div className="product-header">
                <div className="breadcrumb">
                    <a href="#">Điện thoại</a> &gt; <a href="#">Điện thoại OPPO</a>
                </div>

                <div className="product-title-row">
                    <h1 className="product-title">{product.name}</h1>
                    <span className="product-sold">Đã bán 127,7k</span>
                    <span className="product-rating">⭐ 4.9</span>
                    <a href="#" className="product-link">Thông số</a>
                    <a href="#" className="product-link">So sánh</a>

                    <div className="social-buttons">
                        <button className="like-btn">👍 Like 25</button>
                        <button className="share-btn">Share</button>
                    </div>
                </div>
            </div>

            <div className="product-detail-content">
                {/* LEFT: Gallery */}
                <div className="product-gallery">
                    <div className="product-intro">
                        <div className="main-image-wrapper">
                            <button className="arrow left" onClick={handlePrev}>❮</button>
                            <div className="main-image">
                                <img src={images[currentIndex]} alt={`Ảnh ${currentIndex + 1}`} />
                            </div>
                            <button className="arrow right" onClick={handleNext}>❯</button>
                        </div>
                        <div className="thumbnails">
                            {images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`thumb-${index}`}
                                    className={index === currentIndex ? "active" : ""}
                                    onClick={() => handleThumbnailClick(index)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="product-guarantee-box">
                        <h2 className="guarantee-title">Thế Giới Di Động cam kết</h2>
                        <ul className="policy__list">
                            <li>
                                <div className="pl-icon">
                                    <img
                                        src="https://cdnv2.tgdd.vn/pim/cdn/images/202410/Exchange150504.png"
                                        alt="chính sách bảo hành"
                                    />
                                </div>
                                <div className="pl-txt">
                                    <p>
                                        1 đổi 1 trong <b>30 ngày</b> đối với sản phẩm lỗi tại 2958 siêu thị toàn quốc{" "}
                                        <a
                                            href="/chinh-sach-bao-hanh-san-pham"
                                            target="_blank"
                                            rel="noreferrer"
                                            title="Chính sách đổi trả"
                                            className="guarantee-link"
                                        >
                                            Xem chi tiết
                                        </a>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="pl-icon">
                                    <img
                                        src="https://cdnv2.tgdd.vn/pim/cdn/images/202410/icon%20sp%20kem%20theo142836.png"
                                        alt="sản phẩm kèm theo"
                                    />
                                </div>
                                <div className="pl-txt">
                                    <p>
                                        Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Ốp lưng, Cáp Type C, Củ sạc rời đầu Type A
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="pl-icon">
                                    <img
                                        src="https://cdnv2.tgdd.vn/pim/cdn/images/202410/icon%20bao%20hanh170837.png"
                                        alt="chính sách bảo hành"
                                    />
                                </div>
                                <div className="pl-txt">
                                    <p>
                                        Bảo hành <b>chính hãng điện thoại 1 năm</b> tại các trung tâm bảo hành hãng{" "}
                                        <a
                                            href="/bao-hanh"
                                            target="_blank"
                                            rel="noreferrer"
                                            title="Chính sách bảo hành"
                                            className="guarantee-link"
                                        >
                                            Xem địa chỉ bảo hành
                                        </a>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="specifications-container">
                        <div className="specifications">
                            <div className="tab-spec">
                                <button
                                    className={`tab-specifications ${activeTab === 0 ? "active" : ""}`}
                                    onClick={() => setActiveTab(0)}
                                >
                                    Thông số kỹ thuật
                                </button>
                                <button
                                    className={`tab-content ${activeTab === 1 ? "active" : ""}`}
                                    onClick={() => setActiveTab(1)}
                                >
                                    Bài viết đánh giá
                                </button>
                            </div>

                            <div className="content">
                                {activeTab === 0 ? (
                                    <>
                                        <img className="product-image" src={specifications} alt="Chi tiết điện thoại" />
                                        {/* Accordion: Cấu hình & Bộ nhớ */}
                                        <div className="spec-toggle-box">
                                            <div className="spec-header" onClick={() => setShowFullSpec(!showFullSpec)}>
                                                <span className="spec-title">Cấu hình & Bộ nhớ</span>
                                                <span className="spec-icon">{showFullSpec ? "▲" : "▼"}</span>
                                            </div>

                                            <div className={`spec-content ${showFullSpec ? "expanded" : "collapsed"}`}>
                                                <div className="spec-table">
                                                    <div className="spec-row">
                                                        <a href="https://www.thegioididong.com/hoi-dap/he-dieu-hanh-la-gi-804907#hmenuid1">Hệ điều hành:</a>
                                                        <a href="https://www.thegioididong.com/tin-tuc/android-13-nhung-tinh-nang-noi-bat-nhat-ma-ban-can-biet-1456222">Android 13</a>
                                                    </div>
                                                    <div className="spec-row">
                                                        <span className="label">Chip xử lý (CPU):</span>
                                                        <a href="https://www.thegioididong.com/hoi-dap/tim-hieu-chip-xu-ly-helio-g-series-cua-mediatek-1284166#helio-g85">MediaTek Helio G85</a>
                                                    </div>
                                                    <div className="spec-row">
                                                        <a href="https://www.thegioididong.com/hoi-dap/toc-do-cpu-la-gi-co-y-nghia-gi-trong-cac-thiet-bi-dien-tu-1299483">Tốc độ CPU:</a>
                                                        <span className="value">2 nhân 2.0 GHz & 6 nhân 1.8 GHz</span>
                                                    </div>
                                                    <div className="spec-row">
                                                        <span className="label">Chip đồ họa (GPU):</span>
                                                        <span className="value">Mali-G52 MP2</span>
                                                    </div>
                                                    <div className="spec-row">
                                                        <a href="https://www.thegioididong.com/hoi-dap/ram-la-gi-co-y-nghia-gi-trong-cac-thiet-bi-dien-t-1216259">RAM:</a>
                                                        <span className="value">6 GB</span>
                                                    </div>
                                                    <div className="spec-row">
                                                        <span className="label">Dung lượng lưu trữ:</span>
                                                        <span className="value">128 GB</span>
                                                    </div>
                                                    <div className="spec-row">
                                                        <span className="label">Dung lượng còn lại (khả dụng) khoảng:</span>
                                                        <span className="value">106 GB</span>
                                                    </div>
                                                    <div className="spec-row">
                                                        <span className="label">Thẻ nhớ:</span>
                                                        <a href="https://www.thegioididong.com/the-nho-dien-thoai">MicroSD, hỗ trợ tối đa 1 TB</a>
                                                    </div>
                                                    <div className="spec-row">
                                                        <span className="label">Danh bạ:</span>
                                                        <span className="value">Không giới hạn</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Accordion: Camera & Màn hình */}
                                        <div className="spec-toggle-box">
                                            <div className="spec-header" onClick={() => setShowCameraSpec(!showCameraSpec)}>
                                                <span className="spec-title">Camera & Màn hình</span>
                                                <span className="spec-icon">{showCameraSpec ? "▲" : "▼"}</span>
                                            </div>

                                            <div className={`spec-content ${showCameraSpec ? "expanded" : "collapsed"}`}>
                                                <div className="spec-table">

                                                    {/* Camera sau */}
                                                    <div className="spec-row">
                                                        <a href="https://www.thegioididong.com/hoi-dap/do-phan-giai-camera-tren-smartphone-la-gi-1339722">Độ phân giải camera sau:</a>
                                                        <span className="value">Chính 50 MP & Phụ 2 MP</span>
                                                    </div>
                                                    <div className="spec-row">
                                                        <span className="label">Quay phim camera sau:</span>
                                                        <span className="value-rear-camera">
                                                            <a href="https://www.thegioididong.com/hoi-dap/cac-chuan-quay-phim-tren-dien-thoai-tablet-pho-bi-1174134#hd">HD 720p@30fps</a>
                                                            <a href="https://www.thegioididong.com/hoi-dap/cac-chuan-quay-phim-tren-dien-thoai-tablet-pho-bi-1174134#fullhd">FullHD 1080p@30fps</a>
                                                        </span>
                                                    </div>
                                                    <div className="spec-row">
                                                        <span className="label">Đèn Flash camera sau:</span>
                                                        <span className="value">Có</span>
                                                    </div>
                                                    <div className="spec-row">
                                                        <span className="label">Tính năng camera sau:</span>
                                                        <span className="value link-group">
                                                            {[
                                                                "Zoom kỹ thuật số", "Xóa phông", "Tự động lấy nét (AF)", "Trôi nhanh thời gian (Time Lapse)",
                                                                "Toàn cảnh (Panorama)", "Nhãn dán (AR Stickers)", "Làm đẹp", "Hiệu ứng Bokeh", "HDR",
                                                                "Google Lens", "Chụp hẹn giờ", "Chuyên nghiệp (Pro)", "Bộ lọc màu", "Ban đêm (Night Mode)"
                                                            ].map((item, i) => (
                                                                <a href="#" className="link" key={i}>{item}</a>
                                                            ))}
                                                        </span>
                                                    </div>

                                                    {/* Camera trước */}
                                                    <div className="spec-row">
                                                        <span className="label">Độ phân giải camera trước:</span>
                                                        <span className="value">5 MP</span>
                                                    </div>
                                                    <div className="spec-row">
                                                        <span className="label">Tính năng camera trước:</span>
                                                        <span className="value link-group">
                                                            {[
                                                                "Xóa phông", "Trôi nhanh thời gian (Time Lapse)", "Toàn cảnh (Panorama)", "Quay video HD",
                                                                "Quay video Full HD", "Nhãn dán (AR Stickers)", "Làm đẹp", "HDR", "Chụp hẹn giờ", "Bộ lọc màu"
                                                            ].map((item, i) => (
                                                                <a href="#" className="link" key={`front-${i}`}>{item}</a>
                                                            ))}
                                                        </span>
                                                    </div>

                                                    {/* Màn hình */}
                                                    <div className="spec-row">
                                                        <span className="label">Công nghệ màn hình:</span>
                                                        <a href="#" className="value link">IPS LCD</a>
                                                    </div>
                                                    <div className="spec-row">
                                                        <span className="label">Độ phân giải màn hình:</span>
                                                        <span className="value">HD+ (720 x 1612 Pixels)</span>
                                                    </div>
                                                    <div className="spec-row">
                                                        <span className="label">Màn hình rộng:</span>
                                                        <span className="value">6.56" – Tần số quét 90 Hz</span>
                                                    </div>
                                                    <div className="spec-row">
                                                        <span className="label">Độ sáng tối đa:</span>
                                                        <span className="value">720 nits</span>
                                                    </div>
                                                    <div className="spec-row">
                                                        <span className="label">Mặt kính cảm ứng:</span>
                                                        <a href="#" className="value link">Kính cường lực Panda</a>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        {/* Accordion: Pin & Sạc*/}
                                        <div className="spec-toggle-box">
                                            <div className="spec-header" onClick={() => setShowBatterySpec(!showBatterySpec)}>
                                                <span className="spec-title">Pin & Sạc</span>
                                                <span className="spec-icon">{showBatterySpec ? "▲" : "▼"}</span>
                                            </div>

                                            <div className={`spec-content ${showBatterySpec ? "expanded" : "collapsed"}`}>
                                                <div className="spec-table">
                                                    <div className="spec-row">
                                                        <span className="label">Dung lượng pin:</span>
                                                        <span className="value">5000 mAh</span>
                                                    </div>
                                                    <div className="spec-row">
                                                        <span className="label">Loại pin:</span>
                                                        <a href="https://www.thegioididong.com/hoi-dap/so-sanh-pin-li-ion-va-pin-li-po-651833#lipo" className="value link">Li-Po</a>
                                                    </div>
                                                    <div className="spec-row">
                                                        <span className="label">Hỗ trợ sạc tối đa:</span>
                                                        <span className="value">33 W</span>
                                                    </div>
                                                    <div className="spec-row">
                                                        <span className="label">Sạc kèm theo máy:</span>
                                                        <span className="value">33 W</span>
                                                    </div>
                                                    <div className="spec-row">
                                                        <span className="label">Công nghệ pin:</span>
                                                        <span className="value link-group">
                                                            <a href="https://www.thegioididong.com/hoi-dap/che-do-tiet-kiem-pin-va-sieu-tiet-kiem-pin-la-gi-926730" className="link">Tiết kiệm pin</a><br />
                                                            <a href="https://www.thegioididong.com/hoi-dap/tim-hieu-sac-sieu-nhanh-super-vooc-tren-dien-tho-1172435" className="link">Sạc siêu nhanh SuperVOOC</a><br />
                                                            <a href="https://www.thegioididong.com/hoi-dap/che-do-tiet-kiem-pin-va-sieu-tiet-kiem-pin-la-gi-926730" className="link">Siêu tiết kiệm pin</a>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Accordion: Kết nối*/}
                                        <div className="spec-toggle-box">
                                            <div className="spec-header" onClick={() => setShowConnectionSpec(!showConnectionSpec)}>
                                                <span className="spec-title">Kết nối</span>
                                                <span className="spec-icon">{showConnectionSpec ? "▲" : "▼"}</span>
                                            </div>

                                            <div className={`spec-content ${showConnectionSpec ? "expanded" : "collapsed"}`}>
                                                <div className="spec-table">
                                                    <div className="spec-row">
                                                        <span className="label">Mạng di động:</span>
                                                        <span className="value link">Hỗ trợ 4G</span>
                                                    </div>
                                                    <div className="spec-row">
                                                        <span className="label">SIM:</span>
                                                        <span className="value link">2 Nano SIM</span>
                                                    </div>
                                                    <div className="spec-row">
                                                        <span className="label">Wifi:</span>
                                                        <span className="value link-group">
                                                            <a href="#" className="link">Wi-Fi 802.11 a/b/g/n/ac</a><br />
                                                            <a href="#" className="link">Dual-band (2.4 GHz/5 GHz)</a>
                                                        </span>
                                                    </div>
                                                    <div className="spec-row">
                                                        <span className="label">GPS:</span>
                                                        <span className="value link-group">
                                                            {["QZSS", "GPS", "GLONASS", "GALILEO", "BEIDOU"].map((item, i) => (
                                                                <a href="#" className="link" key={i}>{item}</a>
                                                            ))}
                                                        </span>
                                                    </div>
                                                    <div className="spec-row">
                                                        <span className="label">Bluetooth:</span>
                                                        <span className="value">v5.3</span>
                                                    </div>
                                                    <div className="spec-row">
                                                        <span className="label">Cổng kết nối/sạc:</span>
                                                        <a href="#" className="value link">Type-C</a>
                                                    </div>
                                                    <div className="spec-row">
                                                        <span className="label">Jack tai nghe:</span>
                                                        <span className="value">3.5 mm</span>
                                                    </div>
                                                    <div className="spec-row">
                                                        <span className="label">Kết nối khác:</span>
                                                        <a href="#" className="value link">OTG</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Accordion: Thiết kế & Chất liệu*/}
                                        <div className="spec-toggle-box">
                                            <div className="spec-header" onClick={() => setShowDesignSpec(!showDesignSpec)}>
                                                <span className="spec-title">Thiết kế & Chất liệu</span>
                                                <span className="spec-icon">{showDesignSpec ? "▲" : "▼"}</span>
                                            </div>

                                            <div className={`spec-content ${showDesignSpec ? "expanded" : "collapsed"}`}>
                                                <div className="spec-table">
                                                    <div className="spec-row">
                                                        <span className="label">Thiết kế:</span>
                                                        <a href="#" className="value link">Nguyên khối</a>
                                                    </div>
                                                    <div className="spec-row">
                                                        <span className="label">Chất liệu:</span>
                                                        <span className="value">Khung nhựa & Mặt lưng thuỷ tinh hữu cơ</span>
                                                    </div>
                                                    <div className="spec-row">
                                                        <span className="label">Kích thước, khối lượng:</span>
                                                        <span className="value">Dài 163.74 mm - Ngang 75.03 mm - Dày 8.16 mm - Nặng 190 g</span>
                                                    </div>
                                                    <div className="spec-row">
                                                        <span className="label">Thời điểm ra mắt:</span>
                                                        <span className="value">09/2023</span>
                                                    </div>
                                                    <div className="spec-row">
                                                        <span className="label">Hãng:</span>
                                                        <span className="value">OPPO. <a href="#" className="link">Xem thông tin hãng</a></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <div className="review-text">
                                        <span>
                                            OPPO A38 6GB chiếc điện thoại thông minh đáp ứng nhu cầu của người dùng hiện đại,
                                            với nhiều ưu điểm nổi bật như pin lớn 5000 mAh, sạc nhanh 33 W, bộ vi xử lý mạnh mẽ,
                                            màn hình sắc nét và camera chuyên nghiệp.
                                        </span>
                                        <br />
                                        <span>Pin lớn, sạc nhanh, sẵn sàng cho mọi hành trình</span>
                                        <br />OPPO A38 được trang bị viên pin lớn 5000 mAh, cho phép bạn sử dụng thoải mái cả ngày dài mà không lo hết pin. Với viên pin này, bạn có thể sử dụng điện thoại liên tục trong nhiều giờ, dù là xem video, trò chuyện hay chơi game.
                                        <br /> Đặc biệt, với công nghệ sạc nhanh 33 W, bạn chỉ cần sạc khoảng 30 phút là có thể sạc đầy 50% pin, giúp bạn tiết kiệm thời gian chờ đợi (theo công bố từ hãng). Điều này giúp bạn không cần lo lắng về việc hết pin khi đang cần thiết, tăng tính trải nghiệm liền mạch.
                                        <br />
                                        <span>Hiệu năng mạnh mẽ, đáp ứng mọi nhu cầu</span>
                                        <br />Bộ vi xử lý MediaTek Helio G85 của OPPO A38 được thiết kế để mang lại hiệu suất cao trong mọi tác vụ, đặc biệt là chơi game. Bạn có thể trải nghiệm các tựa game yêu thích một cách mượt mà và ổn định, nhờ vào thuật toán tối ưu hiệu năng của OPPO.
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>

                    <div className="rating-box">
                        <h2 className="rating-title">Đánh giá Điện thoại OPPO A38 6GB/128GB</h2>

                        <div className="rating-summary">
                            <div className="rating-score">
                                <div className="score">⭐<span>4.9</span><small className="point-average-total">/5</small></div>
                                <div className="subtext">127,7k khách hài lòng</div>
                                <a href="#" className="total-reviews">26 đánh giá</a>
                            </div>

                            <div className="rating-bars">
                                {[5, 4, 3, 2, 1].map((star, index) => (
                                    <div className="bar-row" key={star}>
                                        <span>{star} ★</span>
                                        <div className="bar"><div className="fill" style={{ width: star === 5 ? "99.9%" : "0%" }}></div></div>
                                        <span>{star === 5 ? "99.9%" : "0%"}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="rating-images">
                                {ratingImages.map((img, index) => (
                                    <img key={index} src={img} alt={`Ảnh đánh giá ${index + 1}`} />
                                ))}
                            </div>
                        </div>

                        <div className="reviews">
                            <div className="review-item">
                                <div className="reviewer">
                                    <strong className="cmt-top-name">Anh Kiên</strong>
                                    <span className="verified">✔️ Đã mua tại TGDĐ</span>
                                </div>
                                <div className="stars">★★★★★ ❤️<span className="recommend">Sẽ giới thiệu cho bạn bè, người thân</span></div>
                                <p className="cmt-txt">Đã dùng được 5 tháng. Sp giá tầm trung. Màu đẹp. Pin sạc nhanh lại dùng được lâu</p>
                                <div className="review-footer">👍 Hữu ích (17) — Đã dùng khoảng 4 tháng</div>
                            </div>

                            <div className="review-item">
                                <div className="reviewer">
                                    <strong className="cmt-top-name">Trần Thanh Long</strong>
                                    <span className="verified">✔️ Đã mua tại TGDĐ</span>
                                </div>
                                <div className="stars">★★★★★ ❤️<span className="recommend">Sẽ giới thiệu cho bạn bè, người thân</span></div>
                                <p className="cmt-txt">Mượt nói chung ok với tầm giá</p>
                                <div className="review-footer">👍 Hữu ích (20) — Đã dùng khoảng 1 ngày</div>
                            </div>
                        </div>

                        <div className="review-buttons">
                            <button className="btn-outline">Xem 26 đánh giá</button>
                            <button className="btn-primary">Viết đánh giá</button>
                        </div>
                    </div>
                </div>

                {/* RIGHT: Info Box */}
                <div className="product-info-box">
                    <div className="info-banner">
                        <img src={bannerdetail} alt="detail-banner" className="banner-detail" />
                    </div>

                    <div className="color-selector">
                        {colorOptions.map((option) => (
                            <div
                                key={option.key}
                                className={`color-option ${selectedColor === option.key ? "selected" : ""}`}
                                onClick={() => setSelectedColor(option.key)}
                            >
                                <span className="color-dot" style={{ backgroundColor: option.color }}></span>
                                {option.label}
                            </div>
                        ))}
                    </div>

                    <div className="location-selector">
                        Giá tại
                        <span className="location-select">
                            <span className="location-name">Hà Nội</span>
                            <FaAngleDown className="arrow-down" />
                        </span>
                    </div>

                    <div className="ordering-information">
                        <div className="price-box">
                            <div>
                                <div className="price-title">🔥 Online Giá Rẻ Quá</div>
                                <div className="price-value">{product.price}</div>
                                <div className="price-old">
                                    <del>4.490.000₫</del> <span className="discount">(-11%)</span>
                                </div>
                            </div>
                            <div>
                                <div className="location">Kết thúc tại <strong>Hà Nội</strong></div>
                            </div>
                        </div>
                        <div className="bs_content">
                            <div class="promotion-box">
                                <div className="pr-top">
                                    <p class="promotion-title">Khuyến mãi</p>
                                    <i class="promotion-subtitle">Giá và khuyến mãi có thể kết thúc sớm hơn dự kiến</i>
                                </div>

                                <div class="promotion-details">
                                    <div class="promotion-item">
                                        <span class="promotion-item-number">1</span>
                                        <span class="promotion-description">Phiếu mua hàng máy lọc nước trị giá 300.000đ</span>
                                    </div>
                                    <div class="promotion-item">
                                        <span class="promotion-item-number">2</span>
                                        <span class="promotion-description">Phiếu mua hàng áp dụng mua tất cả sim có gói Mobi, Itel, Local, Vina và VNMB trị giá 50.000đ. (<a href="https://www.thegioididong.com/tin-tuc/4-chiec-sim-nay-xai-tha-ga-den-8-gb-ngay-1570316">Xem chi tiết tại đây</a>)</span>
                                    </div>
                                    <div class="promotion-item">
                                        <span class="promotion-item-number">3</span>
                                        <span class="promotion-description">Nhập mã VNPAYTGDD2 giảm từ 80.000đ đến 150.000đ (áp dụng tùy giá trị đơn hàng) khi thanh toán qua VNPAY-QR. (<a href="https://www.thegioididong.com/tin-tuc/nhap-ma-vnpaytgdd1-giam-toi-da-150k-1573706">Xem chi tiết tại đây</a>)</span>
                                    </div>
                                    <div class="promotion-extra">
                                        <span>Giao hàng nhanh chóng (tùy khu vực)</span><br />
                                        <span>Mỗi số điện thoại chỉ mua 3 sản phẩm trong 1 tháng</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
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

export default ProductDetail;
