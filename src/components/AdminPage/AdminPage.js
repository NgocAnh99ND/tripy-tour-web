import React, { useContext, useState } from "react";
import { AdminContext } from "../AdminContext/AdminContext";
import { useNavigate } from "react-router-dom";
import {
    FaListAlt,
    FaPlusCircle,
    FaEdit,
    FaSignOutAlt,
} from "react-icons/fa";
import "./AdminPage.css";
import AddProductForm from "../AddProduct/AddProductForm";

function AdminPage() {
    const { isAdminLoggedIn, setIsAdminLoggedIn } = useContext(AdminContext);
    const navigate = useNavigate();
    const [showAddForm, setShowAddForm] = useState(false);

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
            <div className="admin-grid">
                <button onClick={() => alert("Navigate to product list")}>
                    <FaListAlt className="icon" />
                    Product List
                </button>
                <button onClick={() => setShowAddForm(true) }>
                    <FaPlusCircle className="icon" />
                    Add Product
                </button>
                <button onClick={() => alert("Navigate to edit product form")}>
                    <FaEdit className="icon" />
                    Edit Product
                </button>
                <button onClick={handleLogout}>
                    <FaSignOutAlt className="icon" />
                    Logout
                </button>
            </div>
            {/* Hiển thị form khi showAddForm = true  */}
            {showAddForm && (
                <AddProductForm onClose={() => setShowAddForm(false)} />
            )}
        </div>
    );
}

export default AdminPage;
