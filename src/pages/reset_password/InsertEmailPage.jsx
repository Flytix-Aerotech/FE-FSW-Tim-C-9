import React from "react";
import ImageSlice from "../../components/image_slice_auth/ImageSlice";
import InputEmail from "../../components/reset_password/InputEmail";

const InsertEmailPage = () => {
  return (
    <div className="flex w-full h-screen gap-5">
      <ImageSlice />
      <InputEmail />
    </div>
  );
};

export default InsertEmailPage;
