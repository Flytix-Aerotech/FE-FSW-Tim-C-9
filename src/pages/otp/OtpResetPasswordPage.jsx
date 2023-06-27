import React from "react";
import NavbarOtp from "../../components/navbar/NavbarOtp";
import OTP from "../../components/OTP/OTP";
import { useSelector } from "react-redux";
import Loading from "../../components/loading/Loading";

const OtpResetPasswordPage = () => {
  const { isLoading } = useSelector((state) => state.authReducer);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <NavbarOtp />
          <OTP />
        </>
      )}
    </>
  );
};

export default OtpResetPasswordPage;
