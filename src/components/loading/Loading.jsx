import React from "react";
import { CirclesWithBar } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-black/10">
      <CirclesWithBar height="100" width="100" color="#7f5feb" visible={true} ariaLabel="circles-with-bar-loading" />
    </div>
  );
};

export default Loading;
