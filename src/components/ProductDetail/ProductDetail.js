import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { products } from "../Listdata/ProductSale";
import Header from "../Header/Header";
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
import { FaAngleDown } from "react-icons/fa";

function ProductDetail() {
    const { id } = useParams();
    const product = products.find((p) => String(p.id) === id);
    const images = [oppoa38detail, oppoa38detail2, oppoa38detail3, oppoa38detail4];
    const [selectedColor, setSelectedColor] = useState("vangdong");

    const ratingImages = [rattingimg1, rattingimg2, rattingimg3, rattingimg4, rattingimg5];

    const [currentIndex, setCurrentIndex] = useState(0);

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
                        <button className="arrow left" onClick={handlePrev}>❮</button>
                        <div className="main-image">
                            <img src={images[currentIndex]} alt={`Ảnh ${currentIndex + 1}`} />
                        </div>
                        <button className="arrow right" onClick={handleNext}>❯</button>
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
                    <div className="rating-box">
                        <h3 className="rating-title">Đánh giá Điện thoại OPPO A38 6GB/128GB</h3>

                        <div className="rating-summary">
                            <div className="rating-score">
                                <div className="score">⭐ <span>4.9</span><small>/5</small></div>
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
                                    <strong>Anh Kiên</strong>
                                    <span className="verified">✔️ Đã mua tại TGDĐ</span>
                                </div>
                                <div className="stars">★★★★★ <span className="recommend">❤️ Sẽ giới thiệu cho bạn bè, người thân</span></div>
                                <p>Đã dùng được 5 tháng. Sp giá tầm trung. Màu đẹp. Pin sạc nhanh lại dùng được lâu</p>
                                <div className="review-footer">👍 Hữu ích (17) — Đã dùng khoảng 4 tháng</div>
                            </div>

                            <div className="review-item">
                                <div className="reviewer">
                                    <strong>Trần Thanh Long</strong>
                                    <span className="verified">✔️ Đã mua tại TGDĐ</span>
                                </div>
                                <div className="stars">★★★★★ <span className="recommend">❤️ Sẽ giới thiệu cho bạn bè, người thân</span></div>
                                <p>Mượt nói chung ok với tầm giá</p>
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

                    <div className="price-box">
                        <div className="price-title">🔥 Online Giá Rẻ Quá</div>
                        <div className="price-value">{product.price}</div>
                        <div className="price-old">
                            <del>4.490.000₫</del> <span className="discount">-11%</span>
                        </div>
                        <div className="price-note">Kết thúc vào 23:00 | 31/05</div>
                        <div className="location">Tại <strong>Hà Nội</strong></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
