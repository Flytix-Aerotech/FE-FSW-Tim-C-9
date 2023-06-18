import React from "react";
import ImageSlice from "../../components/image_slice_auth/ImageSlice";
import Logins from "../../components/login/Login";

const Login = () => {
  return (
    <div className="flex w-full h-screen gap-5">
      <ImageSlice />
      <Logins />
    </div>
  );
};

export default Login;
