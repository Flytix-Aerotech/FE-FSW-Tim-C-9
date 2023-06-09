import React from "react";
import { Button, Card, CardBody, CardFooter, Dialog, Typography } from "@material-tailwind/react";
import { cross, crown } from "../../assets/images";
import { formatDate, formatRupiah, formatTime } from "../format_display";
import { Link } from "react-router-dom";

const HistoryFlightDetail = ({ history }) => {
  return (
    <div className="hidden lg:block">
      <Card className="min-w-[20rem] w-full overflow-hidden rounded-none shadow-none p-2">
        <Typography variant="h5" color="blue-gray" className="flex justify-between mb-1 items-center">
          <p>Detail Pesanan</p>
          <p
            className={`text-sm py-1 px-2.5 rounded-2xl text-white ${history?.payment_status === "Pending" ? "bg-gray-500" : ""} ${
              history?.payment_status === "Issued" ? "bg-green-400" : ""
            } ${history?.payment_status === "Cancelled" ? "bg-red-400" : ""}`}
          >
            {history?.payment_status}
          </p>
        </Typography>
        <Typography variant="h6" color="black">
          Booking Code: <strong className="text-purple-600">{history?.booking_code}</strong>
        </Typography>
        <div className="flex flex-col mt-2">
          <span className="flex justify-between">
            <p className="font-bold text-black">{formatTime(history?.ticket?.flight?.departure_time)}</p>{" "}
            <small className="text-purple-500">Keberangkatan</small>
          </span>
          <small className="text-xs">{formatDate(history?.ticket?.flight?.departure_date)}</small>
          <small className="text-xs text-black">
            {history?.ticket?.airport?.departure_name} - {history?.ticket?.airport?.departure_terminal}
          </small>
        </div>
        <CardBody className="px-4 py-2 mx-1 my-2 border-t-2 border-b-2 border-gray-400">
          <div className="flex items-center justify-start gap-2">
            <img src={crown} alt="" className="w-6 h-6" />
            <div className="flex-col gap-2">
              <p className="font-bold text-black text-sm">
                {history?.ticket?.flight?.airline} - {history?.ticket?.type_of_class}
              </p>
              <p className="font-bold text-black text-sm">{history?.ticket?.flight?.flight_number}</p>
              <div className="flex flex-col mt-1">
                <p className="font-bold text-black text-sm">Informasi:</p>
                {history?.passengers?.map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <p className="text-purple-600 text-[12.5px]">
                      Penumpang {index + 1}: {item?.full_name}
                    </p>
                    <p className="text-[12.5px]">ID: {item?.nik_number}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardBody>
        <div className="flex flex-col">
          <span className="flex justify-between ">
            <p className="font-bold text-black">{formatTime(history?.ticket?.flight?.arrival_time)}</p>{" "}
            <small className="text-purple-500">Kedatangan</small>
          </span>
          <small className="text-xs">{formatDate(history?.ticket?.flight?.arrival_date)}</small>
          <small className="text-xs text-black">
            {history?.ticket?.airport?.arrival_name} - {history?.ticket?.airport?.arrival_terminal}
          </small>
        </div>
        <CardFooter className="flex flex-col gap-1 p-0">
          <div className="px-0 py-2 mx-4 mt-4 border-t-2 border-b-2 border-gray-400 ">
            <Typography variant="h6" color="black">
              Rincian Harga
            </Typography>
            <div className="flex flex-col gap-1">
              <span className="flex justify-between">
                <small>{history?.total_booking} Adult</small>{" "}
                <small>IDR {formatRupiah(parseInt(history?.ticket?.price * parseInt(history?.total_booking)))}</small>
              </span>
              <span className="flex justify-between">
                <small>0 Baby</small> <small>IDR 0</small>
              </span>
              <span className="flex justify-between">
                <small>Tax</small> <small>IDR {formatRupiah(parseInt(history?.ticket?.price * 0.1 * history?.total_booking))}</small>
              </span>
            </div>
          </div>
          <span className="flex justify-between mx-4">
            <p className="font-bold text-black">Total</p>
            <p className="font-bold text-purple-500">IDR {formatRupiah(parseInt(history?.total_price))}</p>
          </span>
        </CardFooter>
        {history?.payment_status === "Issued" ? (
          <Button color="purple" className="mt-2">
            Cetak tiket
          </Button>
        ) : (
          <Link
            to={`/payment/${history?.booking_code}/${history?.ticket?.id}`}
            onClick={localStorage.setItem("adult", history?.total_booking)}
            className="w-full"
          >
            <Button color="red" className="mt-2 w-full">
              Lanjut Bayar
            </Button>
          </Link>
        )}
      </Card>
    </div>
  );
};

export default HistoryFlightDetail;

export const ModalFlightDetail = ({ history, modalTrigger, handleOpen }) => {
  return (
    <React.Fragment>
      <Dialog
        open={modalTrigger}
        handler={handleOpen}
        className="w-full min-w-[85%] max-w-[80%] sm:!w-2/4 sm:!min-w-[60%] sm:!max-w-[60%] md:!w-2/4 md:!min-w-[45%] md:!max-w-[45%] lg:!w-1/4 lg:!min-w-[35%] lg:!max-w-[35%]"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <Card className="border-none outline-none w-full overflow-hidden shadow-none p-5">
          <Typography variant="h5" color="blue-gray" className="flex justify-between mb-2 items-center">
            <p>Detail Pesanan</p>
            <div className="flex items-center justify-center gap-2">
              <p
                className={`text-sm py-1 px-2.5 rounded-2xl text-white ${history?.payment_status === "Pending" ? "bg-gray-500" : ""} ${
                  history?.payment_status === "Issued" ? "bg-green-400" : ""
                } ${history?.payment_status === "Cancelled" ? "bg-red-400" : ""}`}
              >
                {history?.payment_status}
              </p>
              <span onClick={handleOpen} className="cursor-pointer">
                <img src={cross} alt="" width={"30"} className="rounded-xl w-7 hover:scale-110 duration-300" />
              </span>
            </div>
          </Typography>
          <Typography variant="h6" color="black">
            Booking Code: <strong className="text-purple-600">{history?.booking_code}</strong>
          </Typography>
          <div className="flex flex-col mt-2">
            <span className="flex justify-between ">
              <p className="hidden">{history?.ticket?.flight?.departure_date}</p>
              <p className="font-bold text-black">{formatTime(history?.ticket?.flight?.departure_time)}</p>{" "}
              <small className="text-purple-500">Keberangkatan</small>
            </span>
            <small className="mt-1">{formatDate(history?.ticket?.flight?.departure_date)}</small>
            <small className="mt-1 text-black">
              {history?.ticket?.airport?.departure_name} - {history?.ticket?.airport?.departure_terminal}
            </small>
          </div>
          <CardBody className="px-4 py-2 mx-1 my-4 border-t-2 border-b-2 border-gray-400">
            <div className="flex items-center justify-start gap-2">
              <img src={crown} alt="" className="w-6 h-6" />
              <div className="flex-col gap-2 flex-">
                <p className="font-bold text-black">
                  {history?.ticket?.flight?.airline} - {history?.ticket?.type_of_class}
                </p>
                <p className="font-bold text-black">{history?.ticket?.flight?.flight_number}</p>
                <div className="flex flex-col mt-3">
                  <p className="font-bold text-black">Informasi:</p>
                  {history?.passengers?.map((item, index) => (
                    <div key={index} className="flex flex-col">
                      <p className="text-purple-600 text-sm">
                        Penumpang {index + 1}: {item?.full_name}
                      </p>
                      <p className="text-sm">ID: {item?.nik_number}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardBody>
          <div className="flex flex-col mt-2">
            <span className="flex justify-between ">
              <p className="font-bold text-black">{formatTime(history?.ticket?.flight?.arrival_time)}</p>{" "}
              <small className="text-purple-500">Kedatangan</small>
            </span>
            <small className="mt-1">{formatDate(history?.ticket?.flight?.arrival_date)}</small>
            <small className="mt-1 text-black">
              {history?.ticket?.airport?.arrival_name} - {history?.ticket?.airport?.arrival_terminal}
            </small>
          </div>
          {history?.payment_status === "Issued" ? (
            <Button color="purple" className="mt-2">
              Cetak tiket
            </Button>
          ) : (
            <Link
              to={`/payment/${history?.booking_code}/${history?.ticket?.id}`}
              onClick={localStorage.setItem("adult", history?.total_booking)}
              className="w-full"
            >
              <Button color="red" className="mt-2 w-full">
                Lanjut Bayar
              </Button>
            </Link>
          )}
        </Card>
      </Dialog>
    </React.Fragment>
  );
};
