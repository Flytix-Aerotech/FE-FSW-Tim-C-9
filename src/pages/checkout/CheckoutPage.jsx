import React from "react";
import HeaderCheckout from "../../components/header/HeaderCheckout";
import NavbarComplex from "../../components/navbar/Navbar";
import Biodata from "../../components/biodata/Biodata";
import FlightDetail from "../../components/flight_detail/FlightDetail";

const CheckoutPage = () => {
  return (
    <>
      <NavbarComplex />
      <HeaderCheckout />
      <div className="mb-16">
        <div className="flex flex-wrap-reverse justify-center w-full max-w-screen-lg gap-6 px-4 py-2 m-auto lg:px-8 lg:pt-4">
          <Biodata />
          <FlightDetail />
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
