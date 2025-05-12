import React from 'react';
import './CartView.css';

const CartView = () => {
    return (
        <div className="cart-view">
            <div className="address">
                <p>📍 <strong>Vui lòng cung cấp thông tin nhận hàng</strong></p>
                <p>số 12 ngách 12 ngõ 165 Dương Quảng Hàm, Phường Quan Hoa, Quận...</p>
            </div>

            <div className="product">
                <img
                    src="https://cdn.tgdd.vn/Products/Images/42/303232/oppo-a38-vang-thumb-1-600x600.jpg"
                    alt="OPPO A38"
                />
                <div className="product-info">
                    <h4>Điện thoại OPPO A38 6GB/128GB</h4>
                    <p><strong style={{ color: 'red' }}>3.990.000đ</strong></p>
                    <p>Màu: Vàng đồng</p>
                    <p><button>Online giá rẻ quá</button></p>
                    <p>3 Khuyến mãi ▼</p>
                </div>
            </div>

            <div className="total">
                <p><strong>Tạm tính (1 sản phẩm):</strong></p>
                <p><strong>3.990.000đ</strong></p>
            </div>
            <div className="shipping-info">
                <h3>Thông tin nhận hàng:</h3>
                <div className="product-summary">
                    <img src="https://cdn.tgdd.vn/Products/Images/42/303232/oppo-a38-vang-thumb-1-600x600.jpg" alt="OPPO A38" />
                    <div className="details">
                        <p><strong>Điện thoại OPPO A38 6GB/128GB</strong></p>
                        <p>Màu: Vàng đồng &nbsp;&nbsp; SL: 1</p>
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
                    <span title="Được đồng kiểm">❔</span>
                </div>
            </div>

        </div>

    );
};

export default CartView;
