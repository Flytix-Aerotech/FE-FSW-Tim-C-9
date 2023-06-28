import React from "react";
import { Card, CardBody, CardFooter, Typography } from "@material-tailwind/react";
import { crown } from "../../../assets/images";




const OrderDetail = () => {
  return (
    <Card className="max-w-[22rem] w-full overflow-hidden rounded-none shadow-none py-4 px-2">
      <span className="flex justify-between">
        <p className="font-bold text-black mb-2">Detail Pesanan</p>
        <div class="bg-green-500 text-white mb-2 green-issue ">Issued</div>
      </span>
      <div className="flex flex-col mt-2">
        <p className="font-bold text-black mb-1">Booking Code: </p>
        <span className="flex justify-between ">
          <p className="font-bold text-black">07.00</p> <small className="text-blue-600">Keberangkatan</small>
        </span>
        <small className="mt-1">3 Maret 2023</small>
        <small className="mt-1 text-black">Soekarno Hatta - Terminal 1A Domestik</small>
      </div>
      <CardBody className="px-2 py-2 mx-1 my-4 border-t-2 border-b-2 border-gray-400">
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
        <button className="bg-purple-500 text-white rounded-xl justify-center h-[50px]">
          Cari Tiket
        </button>
      </CardFooter>
    </Card>
  );
};

export default OrderDetail;