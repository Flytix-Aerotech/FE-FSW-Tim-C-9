import React from "react";
import Biodata from "../../components/biodata/Biodata";
import FlightDetail from "../../components/flight_detail/FlightDetail";
import NavbarComplex from "../../components/navbar/Navbar";
import NavbarNotif from "../../components/header/HeaderCheckout";
import { useSelector } from "react-redux";
import PartialLoading from "../../components/loading/PartialLoading";
import Loading from "../../components/loading/Loading";

const BiodataPage = () => {
  const { isLoading } = useSelector((state) => state.authReducer);
  const postLoading = useSelector((state) => state.bookReducer.isLoading);
  const timeoutId = React.useRef(null);
  const initialTimer = localStorage.getItem("timer") ?? 900;
  const [timer, setTimer] = React.useState(initialTimer);

  const countTimer = React.useCallback(() => {
    if (timer <= 0) {
      localStorage.removeItem("timer");
    } else {
      setTimer(timer - 1);
      localStorage.setItem("timer", timer);
    }
  }, [timer]);

  React.useEffect(() => {
    timeoutId.current = window.setTimeout(countTimer, 1000);
    // cleanup function
    return () => window.clearTimeout(timeoutId.current);
  }, [timer, countTimer]);

  const minutesLeft = Math.floor(timer / 60) < 10 ? `0${Math.floor(timer / 60)}` : Math.floor(timer / 60);
  const secondsLeft = timer % 60 < 10 ? `0${timer % 60}` : timer % 60;
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <NavbarComplex />
          <NavbarNotif text={`Selesaikan dalam 00:${minutesLeft}:${secondsLeft}`} colorAlert="red" />
          {postLoading ? (
            <div className="grid place-items-center mt-12">
              <PartialLoading height={"200"} width={"200"} />
            </div>
          ) : (
            <div className="mb-16">
              <div className="flex flex-wrap-reverse justify-center w-full max-w-screen-lg gap-6 px-4 py-2 m-auto lg:px-8 lg:pt-4">
                <Biodata />
                <FlightDetail buttonTrigger={false} text="Detail Penerbangan" />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default BiodataPage;
