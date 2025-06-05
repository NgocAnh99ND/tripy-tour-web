import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../AdminContext/AdminContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function AdminLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { setIsAdminLoggedIn } = useContext(AdminContext);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/user");
            const users = await response.json(); // Trả về danh sách user

            const foundUser = users.find(
                (user) =>
                    user.userName === username && user.passWord === password
            );

            if (foundUser) {
                setIsAdminLoggedIn(true);
                navigate("/admin");
            } else {
                alert("Sai tài khoản hoặc mật khẩu");
            }
        } catch (error) {
            console.error("Lỗi khi gọi API đăng nhập:", error);
            alert("Không thể kết nối đến server!");
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Admin Login</h2>
                <input
                    placeholder="Tên đăng nhập"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <div className="password-wrapper">
                    <input
                        placeholder="Mật khẩu"
                        type={showPassword ? "text" : "password"}
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
                <button type="submit">Đăng nhập</button>
            </form>
        </div>
    );
}

export default AdminLogin;
