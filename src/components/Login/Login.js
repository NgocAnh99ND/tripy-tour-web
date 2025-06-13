import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import "./Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
    const { setIsUserLoggedIn, setUsername } = useContext(UserContext);
    const [newUsername, setNewUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/new_user");
            const newUsers = await response.json(); // Trả về danh sách user

            const foundUser = newUsers.find(
                (user) =>
                    user.username === newUsername &&
                    user.password === password
            );

            if (foundUser) {
                setIsUserLoggedIn(true);
                setUsername(foundUser.username); // <== Dòng này để cập nhật username
                navigate("/");
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
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Đăng nhập</h2>
                <input
                    placeholder="Tên đăng nhập"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                    required
                />
                <div className="password-wrapper">
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
                <button type="submit">Đăng nhập</button>

                {/* Nút tạo tài khoản dạng thẻ a */}
                <div className="register-link">
                    <Link to="/register">Tạo tài khoản</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;
