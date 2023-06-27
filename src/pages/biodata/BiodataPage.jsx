import React from "react";
import Biodata from "../../components/biodata/Biodata";
import FlightDetail from "../../components/flight_detail/FlightDetail";
import NavbarComplex from "../../components/navbar/Navbar";
import NavbarNotif from "../../components/header/HeaderCheckout";

const BiodataPage = () => {
  return (
    <>
      <NavbarComplex />
      <NavbarNotif />
      <div className="mb-16">
        <div className="flex flex-wrap-reverse justify-center w-full max-w-screen-lg gap-6 px-4 py-2 m-auto lg:px-8 lg:pt-4">
          <Biodata />
          <FlightDetail />
        </div>
      </div>
    </>
  );
};

export default BiodataPage;
