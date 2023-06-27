import React from "react";
import NavbarComplex from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import SearchTicket from "../../components/search_ticket/SearchTicket";
import DestinasiFavorit from "../../components/destinasi_favorit/DestinasiFavorit";
import ShowDestinasiFavorit from "../../components/destinasi_favorit/ShowDestinasiFavorit";
import Loading from "../../components/loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getAllTicketAction } from "../../config/Redux/action/ticketAction";

const Home = () => {
  const dispatch = useDispatch();
  const [tickets, setTickets] = React.useState([]);
  const [filteredDestination, setFilteredDestination] = React.useState("All");

  const filterDestination = tickets.filter((item) => {
    return item?.flight?.arrival_location === filteredDestination;
  });

  const { ticket } = useSelector((state) => state.ticketReducer);
  const { isLoading } = useSelector((state) => state.authReducer);

  React.useEffect(() => {
    dispatch(getAllTicketAction());
  }, [dispatch]);

  React.useEffect(() => {
    if (ticket) {
      setTickets(ticket);
    }
  }, [ticket]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="mb-5">
          <NavbarComplex />
          <Banner />
          <SearchTicket />
          <DestinasiFavorit tickets={tickets} filter={filteredDestination} setFilter={setFilteredDestination} />
          <ShowDestinasiFavorit items={filteredDestination === "All" ? tickets : filterDestination} />
        </div>
      )}
    </>
  );
};

export default Home;
