import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../../pages/login/LoginPage";
import RegisterPage from "../../pages/register/RegisterPage";
import ResetPasswordPage from "../../pages/reset_password/ResetPasswordPage";
import OTP from "../../components/OTP/OTP";
import CheckoutBiodata from "../../pages/checkout/CheckoutBiodataPage";
import Payment from "../../pages/payment/PaymentPage";
import Home from "../../pages/search_home/Home";

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset-password/:username" element={<ResetPasswordPage />} />
        <Route path="/OTP" element={<OTP />} />
        <Route path="/wishlist" element={<CheckoutBiodata />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
