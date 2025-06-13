import { createContext, useContext, useState } from "react";

// Tạo context
export const UserContext = createContext(null);

// Custom hook để dùng context dễ hơn
export const useUser = () => useContext(UserContext);

// Provider bọc quanh toàn bộ app
export const UserProvider = ({ children }) => {
    const [username, setUsername] = useState("");  // Thông tin username sau khi đăng nhập
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); // Cờ xác định đã đăng nhập chưa

    return (
        <UserContext.Provider
            value={{
                username,
                setUsername,
                isUserLoggedIn,
                setIsUserLoggedIn,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

