import { createContext, useState } from "react";
import { useContext } from "react";

export const useUser = () => useContext(UserContext);

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [username, setUsername] = useState(null);

    return (
        <UserContext.Provider value={{ username, setUsername }}>
            {children}
        </UserContext.Provider>
    );
};
