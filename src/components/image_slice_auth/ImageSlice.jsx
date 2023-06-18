import React from "react";
import { flytix_slice } from "../../assets/images";

const ImageSlice = () => {
  return (
    <div className="relative hidden bg-gradient-to-b from-60% from-[#FFF280] w-full md:grid place-items-center">
      <img src={flytix_slice} alt="" className="h-screen object-scale-down" />
    </div>
  );
};

export default ImageSlice;
