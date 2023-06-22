import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../../pages/login/LoginPage";
import RegisterPage from "../../pages/register/RegisterPage";
import ResetPasswordPage from "../../pages/reset_password/ResetPasswordPage";
import OTP from "../../components/OTP/OTP";
import CheckoutBiodataPage from "../../pages/checkout/CheckoutBiodataPage";
import PaymentPage from "../../pages/payment/PaymentPage";
import HomePage from "../../pages/search_home/HomePage";
import ResultPage from "../../pages/result_home/ResultPage";
import ShowProfilePage from "../../pages/profile_account/ShowProfilePage";
import UpdateProfilePage from "../../pages/profile_account/UpdateProfilePage";
import ErrorPage from "../../pages/page_not_found/NotFoundPage";
import ProtectedRouteUser from "../../pages/protected_user/ProtectedRouteUser";
import ProtectedUser from "../../pages/protected_user/ProtectedUser";

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<ResultPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset-password/:username" element={<ResetPasswordPage />} />
        <Route path="/OTP" element={<OTP />} />
        <Route element={<ProtectedRouteUser />}>
          <Route path="/wishlist/:id" element={<CheckoutBiodataPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/user/profile" element={<ShowProfilePage />} />
          <Route path="/edit/profile" element={<UpdateProfilePage />} />
        </Route>
        <Route path="/no-access-user" element={<ProtectedUser />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
