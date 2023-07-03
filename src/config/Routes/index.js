import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AboutCompanyPage,
  BiodataPage,
  CheckoutPage,
  ErrorPage,
  HistoryPage,
  HomePage,
  InsertEmailPage,
  LoginPage,
  NotificationPage,
  OtpResetPasswordPage,
  OtpVerifyPage,
  PaymentPage,
  PaymentSuccessPage,
  ProtectedRoutePassenger,
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
        <Route element={<ProtectedRoutePassenger />}>
          <Route path="/home" element={<ResultPage />} />
        </Route>
        <Route path="/about" element={<AboutCompanyPage />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/email-otp" element={<InsertEmailPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/otp" element={<OtpResetPasswordPage />} />
        <Route path="/verify" element={<OtpVerifyPage />} />
        <Route element={<ProtectedRouteUser />}>
          <Route element={<ProtectedRoutePassenger />}>
            <Route path="/wishlist/:id" element={<BiodataPage />} />
            <Route path="/checkout/:id/:code" element={<CheckoutPage />} />
            <Route path="/payment/:code/:id" element={<PaymentPage />} />
          </Route>
          <Route path="/payment/success" element={<PaymentSuccessPage />} />
          <Route path="/user/profile" element={<ShowProfilePage />} />
          <Route path="/edit/profile" element={<UpdateProfilePage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Route>
        <Route path="/no-access-user" element={<ProtectedUserPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
