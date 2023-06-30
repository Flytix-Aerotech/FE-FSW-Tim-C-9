import React from "react";
import { Breadcrumbs, Alert } from "@material-tailwind/react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Link, useLocation, useParams } from "react-router-dom";

const HeaderCheckout = ({ text, colorAlert }) => {
  const params = useParams();
  const location = useLocation();
  const paths = [
    { name: "Isi Data Diri", url: `/wishlist/${params.id}` },
    { name: "Bayar", url: `/checkout/${params.id}/${params.code}` },
    { name: "Selesai", url: `/payment/${params.code}/${params.id}` },
  ];

  return (
    <div className="inset-0 z-10 max-w-full px-4 py-2 border-b-2 rounded-none shadow-sm h-max lg:px-8 lg:pt-8">
      <div className="flex justify-center w-full max-w-screen-lg m-auto sm:justify-start ">
        <Breadcrumbs className="bg-transparent" separator={<ChevronRightIcon className="h-5 w-5" />}>
          {paths.map((path, index) => {
            return (
              <Link key={index} className={`text-gray-600 ${location.pathname.toString() === path.url ? "text-black" : ""}`}>
                {path.name}
              </Link>
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
