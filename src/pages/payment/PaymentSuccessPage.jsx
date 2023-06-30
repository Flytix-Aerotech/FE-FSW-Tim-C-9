import React from "react";
import NavbarComplex from "../../components/navbar/Navbar";
import HeaderCheckout from "../../components/header/HeaderCheckout";
import { success_payment } from "../../assets/images";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const PaymentSuccessPage = () => {
  return (
    <>
      <NavbarComplex />
      <HeaderCheckout text="Terimakasih atas pembayaran transaksi" colorAlert="green" />
      <div className="mb-16 mt-10">
        <div className="flex flex-col items-center justify-center w-full max-w-screen-lg gap-6 px-4 py-2 m-auto lg:px-8 lg:pt-4">
          <img src={success_payment} alt="" className="max-w-[200px] w-full" />
          <div className="text-center">
            <h3 className="font-bold text-purple-600">Selamat!</h3>
            <h3 className="font-medium">Transaksi Pembayaran Tiket sukses!</h3>
          </div>
          <div className="text-center flex flex-col gap-2">
            <Link to="/history">
              <Button color="purple" className="w-full">
                Terbitkan Tiket
              </Button>
            </Link>
            <Link to="/">
              <Button color="purple" className="w-full opacity-40 hover:shadow-none">
                Cari Penerbangan Lain
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccessPage;
