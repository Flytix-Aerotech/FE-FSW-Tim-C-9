import React from "react";
import { Breadcrumbs, Alert } from "@material-tailwind/react";
import { useLocation, useParams } from "react-router-dom";

const HeaderCheckout = ({ text, colorAlert }) => {
  const params = useParams();
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const paths = [
    { id: 1, name: "Isi Data Diri", url: `/wishlist/${params.id}` },
    { id: 2, name: "Bayar", url: `/checkout/${params.id}/${params.code}` },
    { id: 3, name: "Selesai", url: `/payment/${params.code}/${params.id}` },
  ];
  return (
    <div className="inset-0 z-10 max-w-full px-4 py-2 border-b-2 rounded-none shadow-sm h-max lg:px-8 lg:pt-8">
      <div className="flex justify-center w-full max-w-screen-lg m-auto sm:justify-start ">
        <Breadcrumbs
          className="bg-transparent"
          separator={
            <i className="w-1.5 h-1.5 mt-2 border-gray-500 right-0 top-1/2 -translate-y-1/2 inline-block border-r-2 border-b-2 -rotate-45"></i>
          }
        >
          {paths.map((path, index) => {
            const isLast = index === pathnames.length - 1;
            return (
              <span key={index} className={`font-bold ${isLast ? "text-gray-500" : "text-black"}`}>
                {path.name}
              </span>
            );
          })}
        </Breadcrumbs>
      </div>
      <div className="w-full max-w-4xl m-auto text-center">
        <Alert color={colorAlert} className="justify-center">
          {text}
        </Alert>
      </div>
    </div>
  );
};

export default HeaderCheckout;
