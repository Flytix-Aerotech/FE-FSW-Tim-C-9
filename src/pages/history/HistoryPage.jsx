import React from "react";
import NavbarComplex from "../../components/navbar/Navbar";
import HeaderHistory from "../../components/header/HeaderHistory";
import History from "../../components/history/History";
import { useDispatch, useSelector } from "react-redux";
import { getAllHistoryAction } from "../../config/Redux/action/historyAction";
import HistoryFlightDetail, { ModalFlightDetail } from "../../components/flight_detail/HistoryFlightDetail";

const HistoryPage = () => {
  const dispatch = useDispatch();
  const [histories, setHistories] = React.useState([]);
  const { history } = useSelector((state) => state.historyReducer);
  React.useEffect(() => {
    dispatch(getAllHistoryAction());
  }, [dispatch]);

  React.useEffect(() => {
    if (history) {
      setHistories(history);
    }
  }, [history]);

  const [filteredHistory, setFilteredHistory] = React.useState("");
  const [searchHistory, setSearchHistory] = React.useState("");

  const filterHistory = history.filter((item) => {
    return item?.booking_code === filteredHistory;
  });

  const searchedHistory = history.filter((item) => {
    return item?.booking_code === searchHistory;
  });

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const width = window.innerWidth;

  return (
    <>
      <NavbarComplex />
      <HeaderHistory setSearchHistory={setSearchHistory} text="Riwayat Pemesanan" />
      <div className="mb-16">
        <div className="flex justify-center w-full max-w-screen-lg gap-6 px-4 py-2 m-auto lg:px-8 lg:pt-4">
          <History
            history={searchHistory === "" ? histories : searchedHistory}
            setFiltered={setFilteredHistory}
            filtered={filteredHistory}
            handleOpen={width <= 1024 ? handleOpen : null}
          />

          {open && <ModalFlightDetail history={filteredHistory === "" ? histories[0] : filterHistory[0]} open={open} handleOpen={handleOpen} />}
          <HistoryFlightDetail history={filteredHistory === "" ? histories[0] : filterHistory[0]} />
        </div>
      </div>
    </>
  );
};

export default HistoryPage;
