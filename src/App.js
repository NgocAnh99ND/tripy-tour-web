import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import CartView from "./components/CartView/CartView";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import { UserProvider } from "./components/UserContext/UserContext";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import AdminPage from "./components/AdminPage/AdminPage";
import { AdminProvider } from "./components/AdminContext/AdminContext";

function App() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <UserProvider>
      <AdminProvider>
        <Routes>
          {/*Admin routes không có Header */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </AdminProvider>

      {/*Khu vực người dùng có Header */}
      {!isAdmin && (
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<CartView />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      )}
    </UserProvider>
  );
}

export default App;
