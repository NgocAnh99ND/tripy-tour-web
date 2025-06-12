import "./RegisterPopup.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPopup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const isMatched = password === confirmPassword;
    const showError = confirmPassword.length > 0 && !isMatched;

    const handleRegister = async () => {
        try {
            const response = await fetch("http://localhost:8080/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                alert("Tạo tài khoản thành công!");
                navigate("/login");
            } else {
                const error = await response.json();
                alert("Đăng ký thất bại: " + error.message);
            }
        } catch (error) {
            alert("Lỗi kết nối đến máy chủ.");
            console.error(error);
        }
    };

    return (
        <div className="register-popup-overlay">
            <div className="register-popup">
                <h2>Tạo tài khoản</h2>
                <input
                    type="text"
                    placeholder="Tên đăng nhập"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

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

                <div className="register-wrapper">
                    <input
                        // type="password"
                        placeholder="Xác nhận mật khẩu"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className={showError ? "error-border" : ""}
                        required
                    />
                </div>

                {showError && (
                    <div className="error-text">Mật khẩu không trùng khớp</div>
                )}

                <button
                    disabled={!isMatched || !username}
                    onClick={handleRegister}
                >
                    Tạo tài khoản
                </button>
            </div>
        </div>
    );
};

export default RegisterPopup;
