import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../../component/LoginPage/LoginPage";
import RegisterPage from "../../component/RegisterPage/RegisterPage";
import ResetPage from "../../component/ResetPassword/ResetPassword";
import OTP from "../../component/OTP/OTP";
import Tytyd from "../../component/Coba/tytyd";

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset-password" element={<ResetPage/>}/>
        <Route path="/OTP" element={<OTP/>}/>
        <Route path="/tytyd" element={<Tytyd/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default index;