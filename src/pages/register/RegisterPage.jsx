import React from "react";
import ImageSlice from "../../components/image_slice_auth/ImageSlice";
import Registers from "../../components/register/Register";

const Register = () => {
  return (
    <div className="flex w-full h-screen gap-5">
      <ImageSlice />
      <Registers />
    </div>
  );
};

export default Register;
