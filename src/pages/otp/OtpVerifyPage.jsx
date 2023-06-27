import React from "react";
import NavbarOtp from "../../components/navbar/NavbarOtp";
import Verify from "../../components/OTP/Verify";
import { useSelector } from "react-redux";
import Loading from "../../components/loading/Loading";

const OtpVerifyPage = () => {
  const { isLoading } = useSelector((state) => state.authReducer);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <NavbarOtp />
          <Verify />
        </>
      )}
    </>
  );
};

export default OtpVerifyPage;
