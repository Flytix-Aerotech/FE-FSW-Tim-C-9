import React from "react";
import NavbarComplex from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import SearchTicket from "../../components/search_ticket/SearchTicket";
import DestinasiFavorit from "../../components/destinasi_favorit/DestinasiFavorit";
import ShowDestinasiFavorit from "../../components/destinasi_favorit/ShowDestinasiFavorit";

const Home = () => {
  return (
    <div className="mb-5">
      <NavbarComplex />
      <Banner />
      <SearchTicket />
      <DestinasiFavorit />
      <ShowDestinasiFavorit />
    </div>
  );
};

export default Home;
