import React from "react";
import NavbarComplex from "../../components/navbar/Navbar";
import HeaderHome from "../../components/header/HeaderHome";
import ResultSearch from "../../components/result_search/ResultSearch";
import { useSelector } from "react-redux";
import Loading from "../../components/loading/Loading";

const ResultPage = () => {
  const { isLoading } = useSelector((state) => state.authReducer);
  const [filterDateTicket, setFilterDateTicket] = React.useState();
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <NavbarComplex />
          <HeaderHome setFilterDateTicket={setFilterDateTicket} />
          <ResultSearch filterDateTicket={filterDateTicket} />
        </>
      )}
    </>
  );
};

export default ResultPage;
