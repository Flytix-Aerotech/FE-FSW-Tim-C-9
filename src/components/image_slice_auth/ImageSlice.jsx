import React from "react";
import { background_img } from "../../assets/images";

const ImageSlice = () => {
  return (
    <div className="relative hidden w-full h-screen md:grid place-items-start">
      <img src={background_img} alt="" className="object-cover h-screen" />
    </div>
  );
};

export default ImageSlice;
