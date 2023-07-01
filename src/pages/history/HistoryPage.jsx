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

  const [detailHistory, setDetailHistory] = React.useState("");
  const detailedHistory = histories?.filter((item) => {
    return item?.booking_code === detailHistory;
  });

  const [dateFilter, setDateFilter] = React.useState([new Date(), new Date()]);
  const filteredHistory = histories?.filter((item) => {
    const newDate = new Date(item?.createdAt);
    const start = new Date(dateFilter[0]);
    const end = new Date(dateFilter[1]);
    return start.getTime() <= newDate.getTime() && newDate.getTime() <= end.getTime();
  });

  const [searchHistory, setSearchHistory] = React.useState("");
  const searchedHistory = histories?.filter((item) => {
    return item?.booking_code === searchHistory;
  });

  const [modalTrigger, setModalTrigger] = React.useState(false);
  const handleOpen = () => setModalTrigger(!modalTrigger);

  const width = window.innerWidth;

  return (
    <>
      <NavbarComplex />
      <HeaderHistory setSearchHistory={setSearchHistory} text="Riwayat Pemesanan" setDateFilter={setDateFilter} />
      <div className="mb-16">
        <div className="flex justify-center w-full max-w-screen-lg gap-6 px-4 py-2 m-auto lg:px-8 lg:pt-4">
          <History
            history={searchHistory === "" ? histories : searchedHistory || filteredHistory}
            setDetail={setDetailHistory}
            detail={detailHistory}
            handleOpen={width <= 1024 ? handleOpen : null}
          />
          <HistoryFlightDetail history={detailHistory === "" ? histories[0] : detailedHistory[0]} />
          {modalTrigger && (
            <ModalFlightDetail
              history={detailHistory === "" ? histories[0] : detailedHistory[0]}
              modalTrigger={modalTrigger}
              handleOpen={handleOpen}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default HistoryPage;
