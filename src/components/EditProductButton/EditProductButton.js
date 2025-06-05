import React from "react";
import { useNavigate } from "react-router-dom";
import "./EditProductButton.css";

function EditProductButton({ productId }) {
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(`/admin/edit/${productId}`);
    };

    return (
        <button className="edit-product" onClick={handleEdit}>
            Edit
        </button>
    );
}

export default EditProductButton;
