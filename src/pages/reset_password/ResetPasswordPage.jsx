import React from "react";
import ImageSlice from "../../components/image_slice_auth/ImageSlice";
import ResetPassword from "../../components/reset_password/ResetPassword";

const ResetPage = () => {
  return (
    <div className="flex w-full h-screen gap-5">
      <ImageSlice />
      <ResetPassword />
    </div>
  );
};

export default ResetPage;
