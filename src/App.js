import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";
import Home from "./components/Pages/Home";
import Shop from "./components/Pages/Shop";
import Login from "./components/Pages/Login";
import Signup from "./components/Pages/Signup";
import Cart from "./components/Pages/Cart";
import PasswordForget from "./components/Pages/PasswordForget";
import ResetPasswordWithPhone from "./components/Pages/ResetPasswordWithPhone";

function App() {
  return (
    <main className="font-Almarai">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/resetpassword" element={<PasswordForget />} />
          <Route
            path="/resetpassword/resetWithPhone"
            element={<ResetPasswordWithPhone />}
          />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </main>
  );
}

export default App;
