import React from "react";

const ImageContainer = ({ imageUrl, altText }) => {
  return (
    <div className="container mx-auto">
      <img src={imageUrl} alt={altText} className="mx-auto" />
    </div>
  );
};

export default ImageContainer;
