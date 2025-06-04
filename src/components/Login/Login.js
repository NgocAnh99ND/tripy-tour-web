// src/pages/Login.js
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import "./Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
    const { setUsername } = useContext(UserContext);
    const [inputUsername, setInputUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputUsername === "Ngoc Anh" && password) {
            setUsername(inputUsername);
            navigate("/"); // chuyển về trang chính sau đăng nhập
        } else {
            alert("Sai thông tin đăng nhập");
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Đăng nhập</h2>
                <input
                    type="text"
                    placeholder="Tên đăng nhập"
                    value={inputUsername}
                    onChange={(e) => setInputUsername(e.target.value)}
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
            </form>
        </div>
    );
}

export default Login;
