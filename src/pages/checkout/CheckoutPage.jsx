import React from "react";
import HeaderCheckout from "../../components/header/HeaderCheckout";
import NavbarComplex from "../../components/navbar/Navbar";
import FlightDetail from "../../components/flight_detail/FlightDetail";
import Checkout from "../../components/checkout/Checkout";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const params = useParams();
  const history = useNavigate();

  const { isLoading } = useSelector((state) => state.authReducer);

  const handleClick = () => {
    history(`/payment/${params.code}/${params.id}`);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <NavbarComplex />
          <HeaderCheckout text="Data Anda berhasil tersimpan!" colorAlert="green" />
          <div className="mb-16">
            <div className="flex flex-wrap-reverse justify-center w-full max-w-screen-lg gap-6 px-4 py-2 m-auto lg:px-8 lg:pt-4">
              <Checkout />
              <FlightDetail buttonTrigger={true} handleClick={handleClick} text="Detail Penerbangan" />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CheckoutPage;
