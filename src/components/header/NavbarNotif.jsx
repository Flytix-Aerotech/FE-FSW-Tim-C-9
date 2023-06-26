import React from "react";
import { Breadcrumbs, Alert } from "@material-tailwind/react";

const NavbarNotif = () => {
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

  const minutesLeft = Math.floor(timer / 60);
  const secondsLeft = timer % 60 < 10 ? `0${timer % 60}` : timer % 60;

  return (
    <div className="inset-0 z-10 max-w-full px-4 py-2 border-b-2 rounded-none shadow-sm h-max lg:px-8 lg:pt-8">
      <div className="flex justify-center w-full max-w-screen-lg m-auto sm:justify-start ">
        <Breadcrumbs className="bg-transparent">
          <a href="/" className="text-lg">
            Isi Data Diri
          </a>
          <a href="/" className="text-lg">
            Bayar
          </a>
          <a href="/" className="text-lg opacity-60">
            Selesai
          </a>
        </Breadcrumbs>
      </div>
      <div className="w-full max-w-4xl m-auto text-center">
        <Alert color="red" className="justify-center">
          Selesaikan dalam 00:{minutesLeft}:{secondsLeft}
        </Alert>
      </div>
    </div>
  );
};

export default NavbarNotif;
