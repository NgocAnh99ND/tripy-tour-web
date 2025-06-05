import React, { useContext } from "react";
import { AdminContext } from "../AdminContext/AdminContext";
import { useNavigate } from "react-router-dom";
import {
    FaListAlt,
    FaPlusCircle,
    FaEdit,
    FaSignOutAlt,
} from "react-icons/fa";
import "./AdminPage.css";

function AdminPage() {
    const { isAdminLoggedIn, setIsAdminLoggedIn } = useContext(AdminContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsAdminLoggedIn(false);
        navigate("/admin/login");
    };

    if (!isAdminLoggedIn) {
        return <p>Please login to access the admin dashboard.</p>;
    }

    return (
        <div className="admin-page-container">
            <h2>Admin Dashboard</h2>
            <div className="admin-flex">
                <button onClick={() => navigate("/admin/products")}>
                    <FaListAlt className="icon" />
                    Product List
                </button>
                <button onClick={() => navigate("/admin/add-product")}>
                    <FaPlusCircle className="icon" />
                    Add Product
                </button>
                <button onClick={handleLogout}>
                    <FaSignOutAlt className="icon" />
                    Logout
                </button>
            </div>
        </div>
    );
}

export default AdminPage;
