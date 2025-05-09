import { Routes, Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import CartView from "./components/CartView/CartView";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartView />} />
      </Routes>
    </div>
  );
}

export default App;
