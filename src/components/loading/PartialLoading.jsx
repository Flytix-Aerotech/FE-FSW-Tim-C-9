import React from "react";
import { CirclesWithBar } from "react-loader-spinner";

const PartialLoading = ({ height, width }) => {
  return (
    <CirclesWithBar
      height={height}
      width={width}
      color="#9c27b0"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      outerCircleColor=""
      innerCircleColor=""
      ariaLabel="circles-with-bar-loading"
    />
  );
};

export default PartialLoading;
