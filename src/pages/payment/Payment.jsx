import React from "react";
import FlightDetail from "../../components/flight_detail/FlightDetail";
import PaymentMethod from "../../components/payment_method/PaymentMethod";
import NavbarComplex from "../../components/navbar/Navbar";

const Payment = () => {
  return (
    <>
      <NavbarComplex />
      <div className="mb-16">
        <div className="flex flex-wrap-reverse justify-center w-full max-w-screen-lg gap-6 px-4 py-2 m-auto lg:px-8 lg:pt-4">
          <PaymentMethod />
          <FlightDetail />
        </div>
      </div>
    </>
  );
};

export default Payment;
