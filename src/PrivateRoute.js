import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "./components/UserContext/UserContext";

const PrivateRoute = ({ children }) => {
    const { username } = useUser();

    return username ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
