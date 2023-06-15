import React from "react";
import { Card, CardBody, CardFooter, Typography } from "@material-tailwind/react";
import { crown } from "../../assets/images";

const FlightDetail = () => {
  return (
    <Card className="max-w-[22rem] w-full overflow-hidden rounded-none shadow-none py-4 px-2">
      <Typography variant="h5" color="blue-gray">
        Detail Penerbangan
      </Typography>
      <div className="flex flex-col mt-2">
        <span className="flex justify-between ">
          <p className="font-bold text-black">07.00</p> <small className="text-blue-600">Keberangkatan</small>
        </span>
        <small className="mt-1">3 Maret 2023</small>
        <small className="mt-1 text-black">Soekarno Hatta - Terminal 1A Domestik</small>
      </div>
      <CardBody className="px-4 py-2 mx-1 my-4 border-t-2 border-b-2 border-gray-400">
        <div className="flex items-center justify-start gap-2">
          <img src={crown} alt="" className="w-6 h-6" />
          <div className="flex-col gap-2 flex-">
            <p className="font-bold text-black">Jet Air - Economy</p>
            <p className="font-bold text-black">JT - 203</p>
            <div className="flex flex-col mt-3">
              <p className="font-bold text-black">Informasi:</p>
              <small>Baggage 20 kg</small>
              <small>Cabin baggage 7 kg</small>
              <small>In Flight Entertainment</small>
            </div>
          </div>
        </div>
      </CardBody>
      <div className="flex flex-col mt-2">
        <span className="flex justify-between ">
          <p className="font-bold text-black">11.00</p> <small className="text-blue-600">Kedatangan</small>
        </span>
        <small className="mt-1">3 Maret 2023</small>
        <small className="mt-1 text-black">Melbourne International Airport</small>
      </div>
      <CardFooter className="flex flex-col gap-3 p-0">
        <div className="px-0 py-2 mx-4 mt-4 border-t-2 border-b-2 border-gray-400 ">
          <Typography className="font-bold" color="black">
            Rincian Harga
          </Typography>
          <div className="flex flex-col gap-2">
            <span className="flex justify-between">
              <small>2 Adults</small> <small>IDR 9.550.000</small>
            </span>
            <span className="flex justify-between">
              <small>1 Baby</small> <small>IDR 0</small>
            </span>
            <span className="flex justify-between">
              <small>Tax</small> <small>IDR 300.000</small>
            </span>
          </div>
        </div>
        <span className="flex justify-between mx-4">
          <p className="font-bold text-black">Total</p>
          <p className="font-bold text-blue-600">IDR 9.850.000</p>
        </span>
      </CardFooter>
    </Card>
  );
};

export default FlightDetail;
