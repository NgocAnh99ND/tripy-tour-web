import { Routes, Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import CartView from "./components/CartView/CartView";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import { UserProvider } from "./components/UserContext/UserContext";

function App() {
  return (
    <UserProvider>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
