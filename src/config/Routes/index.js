import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../../component/LoginPage/LoginPage";
import RegisterPage from "../../component/RegisterPage/RegisterPage";
import ResetPage from "../../component/ResetPassword/ResetPassword";

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="reset-password" element={<ResetPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default index;