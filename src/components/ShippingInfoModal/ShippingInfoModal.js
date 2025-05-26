import React, { useState } from 'react';
import './ShippingInfoModal.css';

const ShippingInfoModal = ({ onClose, onConfirm, initialValues }) => {
    const [gender, setGender] = useState('Anh');
    const [name, setName] = useState(initialValues.name);
    const [phone, setPhone] = useState(initialValues.phone);
    const [address, setAddress] = useState(initialValues.address);
    const [deliveryMethod, setDeliveryMethod] = useState('home');



    return (
        <div className="modal-overlay">
            <div className="shipping-modal">
                <div className="modal-header">
                    <h3>Thông tin giao hàng</h3>
                    <span className="close-btn" onClick={onClose}>×</span>
                </div>

                <div className="section">
                    <p className="section-title">Thông tin người đặt</p>
                    <div className="gender-options">
                        <label><input type="radio" name="gender" value="Anh" checked={gender === 'Anh'} onChange={() => setGender('Anh')} /> Anh</label>
                        <label><input type="radio" name="gender" value="Chị" checked={gender === 'Chị'} onChange={() => setGender('Chị')} /> Chị</label>
                    </div>
                    <input className="input" type="text" placeholder="Họ và Tên" value={name} onChange={e => setName(e.target.value)} />
                    <input className="input" type="text" placeholder="Số điện thoại" value={phone} onChange={e => setPhone(e.target.value)} />
                    <p className="login-note">Hoặc <a href="#">Đăng nhập</a> để lấy nhanh thông tin giao hàng</p>
                </div>

                <div className="section">
                    <p className="section-title">Chọn hình thức giao hàng</p>
                    <div className="delivery-methods">
                        <button
                            className={deliveryMethod === 'home' ? 'active' : ''}
                            onClick={() => setDeliveryMethod('home')}
                        >
                            <span role="img" aria-label="home">📦</span> Giao tận nơi
                        </button>
                        <button
                            className={deliveryMethod === 'store' ? 'active' : ''}
                            onClick={() => setDeliveryMethod('store')}
                        >
                            <span role="img" aria-label="store">🏬</span> Nhận tại siêu thị
                        </button>
                    </div>
                    <p className="address-info">
                        Địa chỉ đang chọn:
                        <strong>
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="input"
                            />
                        </strong>
                    </p>

                    <p className="change-address">Thay đổi địa chỉ khác</p>
                </div>

                <button className="confirm-btn" onClick={() => onConfirm({
                    name: `${gender} ${name}`,
                    phone,
                    address
                })}>
                    Xác Nhận
                </button>

            </div>
        </div>
    );
};

export default ShippingInfoModal;