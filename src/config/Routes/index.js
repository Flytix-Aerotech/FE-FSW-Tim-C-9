import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OTP from "../../components/OTP/OTP";
import {
  AboutCompanyPage,
  CheckoutBiodataPage,
  ErrorPage,
  HomePage,
  InsertEmailPage,
  LoginPage,
  PaymentPage,
  ProtectedRouteUser,
  ProtectedUserPage,
  RegisterPage,
  ResetPasswordPage,
  ResultPage,
  ShowProfilePage,
  UpdateProfilePage,
} from "../../pages";

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<ResultPage />} />
        <Route path="/about" element={<AboutCompanyPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/email-otp" element={<InsertEmailPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/otp" element={<OTP />} />
        <Route element={<ProtectedRouteUser />}>
          <Route path="/wishlist/:id" element={<CheckoutBiodataPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/user/profile" element={<ShowProfilePage />} />
          <Route path="/edit/profile" element={<UpdateProfilePage />} />
        </Route>
        <Route path="/no-access-user" element={<ProtectedUserPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
