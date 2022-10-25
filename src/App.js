import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Inbox from "./pages/Inbox";
import Products from "./pages/Products";
import Admin from "./pages/Admin";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/products" element={<Products />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      <Sidebar />
    </BrowserRouter>
  );
}

export default App;
