import React from "react";
import NavbarComplex from "../../components/navbar/Navbar";
import ProfileHeader from "../../components/header/ProfileHeader";
import SidebarProfile from "../../components/profile/SidebarProfile";
import ShowCardProfile from "../../components/profile/ShowCardProfile";

const ShowProfile = () => {
  return (
    <div className="h-[130vh]">
      <NavbarComplex />
      <ProfileHeader />
      <div className="max-w-4xl m-auto w-full flex px-10 justify-center lg:justify-between">
        <SidebarProfile />
        <ShowCardProfile />
      </div>
    </div>
  );
};

export default ShowProfile;
