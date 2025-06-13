import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditProduct.css";

function EditProduct() {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        productId: "",
        productName: "",
        image: "",
        price: "",
        oldPrice: "",
        color: "",
        description: "",
        ram: "",
        ssd: "",
        gift: "",
        rating: "",
    });

    // Lấy thông tin sản phẩm cũ để fill vào form
    useEffect(() => {
        fetch(`http://localhost:8080/product_detail?id=${productId}`)
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data) && data.length > 0) {
                    setFormData(data[0]);
                } else {
                    alert("Không có dữ liệu sản phẩm.");
                }
            })

            .catch((err) => {
                console.error("Lỗi khi fetch sản phẩm:", err);
                alert("Không lấy được thông tin sản phẩm.");
            });
    }, [productId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/update_product", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                alert(result);
                navigate("/admin/products");
            } else {
                alert("Cập nhật thất bại.");
            }
        } catch (error) {
            console.error("Lỗi khi cập nhật:", error);
            alert("Lỗi kết nối tới server.");
        }
    };

    return (
        <div className="edit-product-form">
            <h3>Edit Product</h3>
            <form onSubmit={handleSubmit}>
                {Object.keys(formData).map((field) => (
                    <div className="form-group" key={field}>
                        <label>{field.replaceAll("_", " ")}</label>

                        {field === "image" ? (
                            <>
                                {formData.image && (
                                    <img
                                        src={`http://localhost:3000${formData.image}`}
                                        alt="Product"
                                        className="image_detail"
                                    />
                                )}
                            </>
                        ) : (
                            <input
                                type={field === "description" ? "textarea" : "text"}
                                name={field}
                                value={formData[field] ?? ""}
                                onChange={handleChange}
                            />
                        )}
                    </div>
                ))}

                <div className="form-actions">
                    <button type="submit">Save</button>
                    <button type="button" onClick={() => navigate("/admin/products")}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>

    );
}

export default EditProduct;
