import { Typography } from "@material-tailwind/react";
import { logo_flytix } from "../../assets/images";

const NavbarOtp = () => {
  return (
    <nav className="fixed top-0 w-screen px-10 py-4 border-b-2">
      <Typography className="mr-4 cursor-pointer py-1.5 font-medium flex gap-2 items-center">
        <img src={logo_flytix} alt="" width={"40"} className="rounded-full" />{" "}
        <span className="text-2xl font-bold tracking-wider text-purple-600 uppercase">Flytix</span>
      </Typography>
    </nav>
  );
};

export default NavbarOtp;
