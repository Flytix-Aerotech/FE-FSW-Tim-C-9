import React from "react";
import { Breadcrumbs, Alert } from "@material-tailwind/react";

const NavbarNotif = () => {
  const [totalSeconds, setTotalSeconds] = React.useState(15 * 60);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (totalSeconds <= 0) {
        clearInterval(interval);
      } else {
        setTotalSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [totalSeconds]);
  const minutesLeft = Math.floor(totalSeconds / 60);
  const secondsLeft = totalSeconds % 60;

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
