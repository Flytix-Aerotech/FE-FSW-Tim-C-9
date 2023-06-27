import React from "react";
import ImageSlice from "../../components/image_slice_auth/ImageSlice";
import ResetPassword from "../../components/reset_password/ResetPassword";
import { useSelector } from "react-redux";
import Loading from "../../components/loading/Loading";

const ResetPage = () => {
  const { isLoading } = useSelector((state) => state.authReducer);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex w-full h-screen gap-5">
          <ImageSlice />
          <ResetPassword />
        </div>
      )}
    </>
  );
};

export default ResetPage;
