import React, { useEffect, useState, useCallback } from "react";
import "./AdminProductList.css";
import DeleteProduct from "../DeleteProduct/DeleteProduct";
import EditProductButton from "../EditProductButton/EditProductButton";

function AdminProductList() {
    const [products, setProducts] = useState([]);

    const fetchProducts = useCallback(() => {
        fetch("http://localhost:8080/all_products")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.error("Lỗi khi fetch dữ liệu sản phẩm:", error);
            });
    }, []);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        <div className="product-list-page">
            <h2>Product List</h2>
            <table className="product-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Old Price</th>
                        <th>Color</th>
                        <th>RAM</th>
                        <th>SSD</th>
                        <th>Gift</th>
                        <th>Rating</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((p) => (
                        <tr key={p.productId}>
                            <td>{p.productId}</td>
                            <td>{p.productName}</td>
                            <td>
                                <img src={p.image} alt={p.productName} width="60" />
                            </td>
                            <td>{p.price?.toLocaleString()}₫</td>
                            <td>{p.oldPrice?.toLocaleString() || "-"}</td>
                            <td>{p.color || "-"}</td>
                            <td>{p.ram || "-"}</td>
                            <td>{p.ssd || "-"}</td>
                            <td>{p.gift || "-"}</td>
                            <td>{p.rating ?? "-"}</td>
                            <td>
                                <div className="action-buttons">
                                    <EditProductButton productId={p.productId} />
                                    <DeleteProduct
                                        productId={p.productId}
                                        onDeleteSuccess={fetchProducts}
                                    />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminProductList;
