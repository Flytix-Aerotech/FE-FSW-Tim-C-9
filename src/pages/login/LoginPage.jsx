import React from "react";
import ImageSlice from "../../components/image_slice_auth/ImageSlice";
import Logins from "../../components/login/Login";
import { useSelector } from "react-redux";
import Loading from "../../components/loading/Loading";

const Login = () => {
  const { isLoading } = useSelector((state) => state.authReducer);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex w-full h-screen gap-5">
          <ImageSlice />
          <Logins />
        </div>
      )}
    </>
  );
};

export default Login;
