import React from 'react';
import './CartView.css';
import { useState } from 'react';
import Header from "../Header/Header";
import oppoa38detail4 from "../../image/oppo-a38-detail4.jpeg";

const CartView = () => {

    const [quantity, setQuantity] = useState(1);
    const [agreePolicy, setAgreePolicy] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [showDiscountPopup, setShowDiscountPopup] = useState(false);

    const handleIncrease = () => setQuantity(prev => prev + 1);
    const handleDecrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    const handleDelete = () => {
        // Xử lý xóa sản phẩm khỏi giỏ hàng ở đây
        alert('Đã xóa sản phẩm!');
    };

    const handleOrder = () => {
        if (!agreePolicy) {
            setShowModal(true);
        } else {
            alert("Đặt hàng thành công!");
        }
    };

    return (
        <div className="cart-view">
            <Header />
            <div className="back-button">
                <a href="http://localhost:3000/product/1">
                    &lt;
                </a>
            </div>
            <div className='cart-body'>
                <div className="cart-fragment">
                    <div className="address">
                        <p className='address-title'>Vui lòng cung cấp thông tin nhận hàng</p><br />
                        <p>📍 số 12 ngách 12 ngõ 165 Dương Quảng Hàm, Phường Quan Hoa, Quận...</p>
                    </div>
                    <div className="product">
                        <img
                            src={oppoa38detail4}
                            alt="OPPO A38"
                        />
                        <div className="product-info">
                            <h4>Điện thoại OPPO A38 6GB/128GB</h4>
                            <p style={{ color: 'red' }}>3.990.000đ</p>
                            <p>Màu: Vàng đồng</p>
                            <p><button>Online giá rẻ quá</button></p>
                            <p>3 Khuyến mãi ▼</p>
                        </div>
                    </div>
                    <div className="cart-actions">
                        <span className="delete-btn" onClick={handleDelete}>Xoá</span>
                        <div className="quantity-control">
                            <button onClick={handleDecrease}>−</button>
                            <span>{quantity}</span>
                            <button onClick={handleIncrease}>+</button>
                        </div>
                    </div>
                    <div className="total">
                        <p>Tạm tính (1 sản phẩm):</p>
                        <p>3.990.000đ</p>
                    </div>
                </div>
                <div className="latch-order">
                    <h3>Thông tin nhận hàng:</h3>
                    <div className="product-summary">
                        <img src={oppoa38detail4} alt="OPPO A38" />
                        <div className="details">
                            <p>Điện thoại OPPO A38 6GB/128GB</p>
                            <span>Màu: Vàng đồng &nbsp;&nbsp; SL: 1</span>
                        </div>
                    </div>
                    <div className="line">
                        <span><strong>Giao trước 16h, thứ năm (15/05)</strong></span>
                        <span style={{ color: '#007bff', cursor: 'pointer' }}>Đổi thời gian</span>
                    </div>
                    <div className="line">
                        <span>Phí giao hàng</span>
                        <span className="free">Miễn phí</span>
                    </div>
                    <div className="line">
                        <span>Cần cọc trước</span>
                        <span className="caution">399.000đ <small>(Không hoàn tiền nếu không nhận hàng)</small></span>
                    </div>
                    <div className="line">
                        <span>Giao bởi nhân viên <span className="thegioididong">thegioididong</span></span>
                        <span title="Được đồng kiểm"></span>
                    </div>
                </div>
                <div className="special-request">
                    <h4>Yêu cầu đặc biệt</h4>

                    <label>
                        <input type="checkbox" />
                        Chuyển danh bạ, dữ liệu qua máy mới
                    </label>

                    <label>
                        <input type="checkbox" />
                        Xuất hóa đơn công ty
                    </label>

                    <label>
                        <input type="checkbox" />
                        Yêu cầu khác
                    </label>
                </div>
                <div className="payment-infomation">
                    <div className="discount-code" onClick={() => setShowDiscountPopup(true)}>
                        <div>
                            <span role="img" aria-label="discount">🧾</span>
                            Sử dụng mã giảm giá
                        </div>
                        <span className="arrow-icon">{'>'}</span>
                    </div>
                    {showDiscountPopup && (
                        <div className="modal-overlay">
                            <div className="modal1">
                                <div className="modal-header1">
                                    <p>Sử dụng mã giảm giá</p>
                                    <span className="close-btn" onClick={() => setShowDiscountPopup(false)}>×</span>
                                </div>

                                <div className="discount-input-row">
                                    <input
                                        type="text"
                                        placeholder="Nhập mã giảm giá/ Phiếu mua hàng"
                                        className="discount-input"
                                    />
                                    <button className="apply-btn" disabled>Áp dụng</button>
                                </div>

                                <p style={{fontSize: "15px"}} >
                                    Hoặc <a href="#" style={{ color: '#007bff', textDecoration: "none"}}>Đăng nhập</a> để sử dụng nhanh mã giảm giá đang có
                                </p>

                                <div className="empty-state">
                                    <img src="/path-to-image.svg" alt="Empty Discount" />
                                    <p><strong>Mã giảm giá trống</strong></p>
                                    <p style={{ color: '#888', fontSize: "13px" }}>Vui lòng nhập mã giảm có thể sử dụng vào thanh bên trên</p>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="vip-points-toggle">
                        <div>
                            <span role="img" aria-label="vip" style={{ marginRight: '5px' }}>🎁</span>
                            Dùng điểm Quà Tặng VIP
                        </div>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="total-section">
                        <div className='container-total-amount'>
                            <span>Tổng tiền</span>
                            <div className="total-amount">{(quantity * 3990000).toLocaleString('vi-VN')}đ</div>
                        </div>
                        <div className="vip-points">
                            <span>Điểm tích lũy Quà Tặng VIP</span><br />
                            <span>{(quantity * 3990).toLocaleString('vi-VN')} điểm</span>
                        </div>
                    </div>
                </div>
                <div className="payment-methods">
                    <h4>Hình thức thanh toán</h4>

                    <div className="payment-option">
                        <label>
                            <input type="radio" name="payment" />
                            <span className="icon">💳</span>
                            Thanh toán tại siêu thị gần nhất
                        </label>
                    </div>

                    <div className="payment-option">
                        <label>
                            <input type="radio" name="payment" />
                            <span className="icon">🏦</span>
                            Chuyển khoản ngân hàng
                        </label>
                    </div>

                    <div className="agree-policy">
                        <label>
                            <input
                                type="checkbox"
                                checked={agreePolicy}
                                onChange={(e) => setAgreePolicy(e.target.checked)}
                            />
                            Tôi đồng ý với&nbsp;
                            <a href="https://www.thegioididong.com/chinh-sach-xu-ly-du-lieu-ca-nhan" style={{ color: '#007bff' }} target="_blank" rel="noreferrer">
                                Chính sách xử lý dữ liệu cá nhân
                            </a>
                            &nbsp;của Thế Giới Di Động
                        </label>
                    </div>

                    <button className="order-btn" onClick={handleOrder}>Đặt hàng</button>
                    {showModal && (
                        <div className="modal-order">
                            <div className="modal2">
                                <div className="modal-header2">
                                    <p>Bạn chưa đồng ý với Chính sách xử lý dữ liệu cá nhân của Thế Giới Di Động</p>
                                </div>
                                <p>
                                    <a
                                        href="https://www.thegioididong.com/chinh-sach-xu-ly-du-lieu-ca-nhan"
                                        style={{ color: '#007bff', textDecoration: "none" }}
                                        target="_blank" rel="noreferrer"
                                    >
                                        Chính sách xử lý dữ liệu cá nhân
                                    </a>
                                    &nbsp;nhằm phục vụ tốt hơn cho trải nghiệm mua sắm của bạn. Hãy kiểm tra và nhấn đồng ý để tiếp tục đặt hàng
                                </p>
                                <button className="confirm-btn" onClick={() => {
                                    setAgreePolicy(true);
                                    setShowModal(false);
                                }}>
                                    Đồng ý và tiếp tục đặt hàng
                                </button>
                                <span className="close-btn" onClick={() => setShowModal(false)}>×</span>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>

    );
};

export default CartView;
