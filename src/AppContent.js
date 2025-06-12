import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import CartView from "./components/CartView/CartView";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import { useUser } from "./components/UserContext/UserContext";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import AdminPage from "./components/AdminPage/AdminPage";
import { AdminProvider } from "./components/AdminContext/AdminContext";
import AdminProductList from "./components/AdminProductList/AdminProductList";
import AddProductForm from "./components/AddProduct/AddProductForm";
import EditProduct from "./components/EditProduct/EditProduct";
import PrivateRoute from "./PrivateRoute";


function AppContent() {
    const location = useLocation();
    const isAdmin = location.pathname.startsWith("/admin");
    const isLoginPage = location.pathname === "/login";

    const { username } = useUser(); // dùng an toàn vì được bọc UserProvider ở ngoài

    return (
        <>
            <AdminProvider>
                <Routes>
                    {/* Admin routes */}
                    <Route path="/admin/login" element={<AdminLogin />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/admin/products" element={<AdminProductList />} />
                    <Route path="/admin/add-product" element={<AddProductForm />} />
                    <Route path="/admin/edit/:productId" element={<EditProduct />} />
                </Routes>
            </AdminProvider>

            {!isAdmin && (
                <div className="App">
                    {/* Chỉ hiển thị Header nếu đã đăng nhập và không phải login */}
                    {username && !isLoginPage && <Header />}

                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route
                            path="/"
                            element={
                                <PrivateRoute>
                                    <Home />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/product/:id"
                            element={
                                <PrivateRoute>
                                    <ProductDetail />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/cart"
                            element={
                                <PrivateRoute>
                                    <CartView />
                                </PrivateRoute>
                            }
                        />
                    </Routes>
                </div>
            )}
        </>
    );
}

export default AppContent;