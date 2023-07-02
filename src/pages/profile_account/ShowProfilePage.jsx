import React from "react";
import NavbarComplex from "../../components/navbar/Navbar";
import ProfileHeader from "../../components/header/ProfileHeader";
import SidebarProfile from "../../components/profile/SidebarProfile";
import ShowCardProfile from "../../components/profile/ShowCardProfile";
import { useSelector } from "react-redux";
import Loading from "../../components/loading/Loading";

const ShowProfile = () => {
  const { isLoading } = useSelector((state) => state.authReducer);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <NavbarComplex />
          <ProfileHeader />
          <div className="max-w-4xl m-auto w-full gap-4 flex px-10 justify-center lg:justify-between">
            <SidebarProfile />
            <ShowCardProfile />
          </div>
        </>
      )}
    </>
  );
};

export default ShowProfile;
