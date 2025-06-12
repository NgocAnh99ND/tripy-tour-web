import "./RegisterPopup.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const RegisterPopup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");

    return (
        <div className="register-popup-overlay">
            <div className="register-popup">
                <h2>Tạo tài khoản</h2>
                <input type="text" placeholder="Tên đăng nhập" />
                <div className="register-wrapper">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Mật khẩu"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <span
                        className="toggle-password"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>
                <input type="password" placeholder="Xác nhận mật khẩu" />
                <button>Tạo tài khoản</button>
            </div>
        </div>
    );
};

export default RegisterPopup;
