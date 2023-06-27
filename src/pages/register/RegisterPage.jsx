import React from "react";
import ImageSlice from "../../components/image_slice_auth/ImageSlice";
import Registers from "../../components/register/Register";
import { useSelector } from "react-redux";
import Loading from "../../components/loading/Loading";

const Register = () => {
  const { isLoading } = useSelector((state) => state.authReducer);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex w-full h-screen gap-5">
          <ImageSlice />
          <Registers />
        </div>
      )}
    </>
  );
};

export default Register;
