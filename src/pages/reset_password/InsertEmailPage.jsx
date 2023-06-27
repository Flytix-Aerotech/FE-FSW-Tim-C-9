import React from "react";
import ImageSlice from "../../components/image_slice_auth/ImageSlice";
import InputEmail from "../../components/reset_password/InputEmail";
import { useSelector } from "react-redux";
import Loading from "../../components/loading/Loading";

const InsertEmailPage = () => {
  const { isLoading } = useSelector((state) => state.authReducer);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex w-full h-screen gap-5">
          <ImageSlice />
          <InputEmail />
        </div>
      )}
    </>
  );
};

export default InsertEmailPage;
