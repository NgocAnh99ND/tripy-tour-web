import React, { useState } from "react";
import "./DeleteProduct.css";

function DeleteProduct({ productId, onDeleteSuccess }) {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = () => {
        if (isDeleting) return; // Ngăn gọi lại nếu đang xoá
        const confirmDelete = window.confirm("Bạn có chắc chắn muốn xoá sản phẩm này?");
        if (!confirmDelete) return;

        setIsDeleting(true);

        fetch(`http://localhost:8080/delete_product?id=${productId}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (response.ok) {
                    alert("Đã xoá sản phẩm thành công!");
                    onDeleteSuccess?.(); // Gọi callback nếu có
                } else {
                    alert("Xoá thất bại!");
                }
            })
            .catch((error) => {
                console.error("Lỗi khi xoá sản phẩm:", error);
                alert("Lỗi kết nối server!");
            })
            .finally(() => {
                setIsDeleting(false); // Cho phép xoá lại sau
            });
    };

    return (
        <button
            onClick={handleDelete}
            className="delete-product"
            disabled={isDeleting}
        >
            {isDeleting ? "Đang xoá..." : "Delete"}
        </button>
    );
}

export default DeleteProduct;
