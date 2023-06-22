import React from "react";
import NavbarComplex from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import SearchTicket from "../../components/search_ticket/SearchTicket";

const Home = () => {
  return (
    <div className="h-[200vh]">
      <NavbarComplex />
      <Banner />
      <SearchTicket />
    </div>
  );
};

export default Home;
