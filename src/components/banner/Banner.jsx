import React from "react";
import { banner_plan } from "../../assets/images";
import { Typography } from "@material-tailwind/react";

const Banner = () => {
  return (
    <div className="mt-14">
      <div className="h-24 w-full bg-gradient-to-r from-60% from-purple-300 relative">
        <img src={banner_plan} alt="" className="w-4/5 h-44 object-cover px-5 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute z-1 left-[20%] flex flex-col gap-2">
          <Typography variant="h3" className="italic text-2xl sm:text-3xl">
            Diskon Hari Ini
          </Typography>
          <Typography variant="h3" color="purple" className="text-2xl sm:text-3xl">
            {Math.floor(Math.random() * 51)}%
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Banner;
