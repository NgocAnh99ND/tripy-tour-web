import React, { useState } from "react";
import "./AddProductForm.css";

function AddProductForm({ onClose }) {
    const [formData, setFormData] = useState({
        product_id: "",
        product_name: "",
        image: "",
        price: "",
        old_price: "",
        color: "",
        description: "",
        ram: "",
        ssd: "",
        gift: "",
        rating: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Product Data:", formData);
        // Gửi dữ liệu lên backend tại đây (nếu có)
        alert("Product added successfully!");
        onClose(); // đóng form
    };

    return (
        <div className="add-product-form">
            <h3>Add New Product</h3>
            <form onSubmit={handleSubmit}>
                {Object.keys(formData).map((field) => (
                    <div className="form-group" key={field}>
                        <label>{field.replaceAll("_", " ")}</label>
                        <input
                            type={field === "description" ? "textarea" : "text"}
                            name={field}
                            value={formData[field]}
                            onChange={handleChange}
                        />
                    </div>
                ))}

                <div className="form-actions">
                    <button type="submit">Submit</button>
                    <button type="button" onClick={onClose}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default AddProductForm;
