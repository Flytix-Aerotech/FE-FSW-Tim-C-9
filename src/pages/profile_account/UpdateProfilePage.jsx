import React from "react";
import NavbarComplex from "../../components/navbar/Navbar";
import ProfileHeader from "../../components/header/ProfileHeader";
import SidebarProfile from "../../components/profile/SidebarProfile";
import EditCardProfile from "../../components/profile/EditCardProfile";
import { useSelector } from "react-redux";
import Loading from "../../components/loading/Loading";

const UpdateProfilePage = () => {
  const { isLoading } = useSelector((state) => state.authReducer);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="h-[130vh]">
          <NavbarComplex />
          <ProfileHeader />
          <div className="max-w-4xl m-auto w-full px-10 flex justify-center lg:justify-between">
            <SidebarProfile />
            <EditCardProfile />
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateProfilePage;
