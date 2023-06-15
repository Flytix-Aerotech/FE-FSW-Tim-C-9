import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckoutBiodata from "../../pages/checkout/CheckoutBiodata";
import Payment from "../../pages/payment/Payment";

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/wishlist" element={<CheckoutBiodata />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
