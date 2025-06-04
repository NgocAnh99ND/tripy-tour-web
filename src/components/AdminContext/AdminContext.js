import { createContext, useState } from "react";

export const AdminContext = createContext(null);

export const AdminProvider = ({ children }) => {
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

    return (
        <AdminContext.Provider value={{ isAdminLoggedIn, setIsAdminLoggedIn }}>
            {children}
        </AdminContext.Provider>
    );
};
