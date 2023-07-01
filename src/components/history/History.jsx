import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { formatDate, formatDifferenceTime, formatRupiah, formatTime } from "../format_display";
const History = ({ history, setDetail, detail, handleOpen }) => {
  return (
    <div className="max-w-[400px] w-full flex flex-col gap-4 mt-5">
      {history?.map((item, index) => (
        <Card
          onClick={() => setDetail(item?.booking_code)}
          key={index}
          className={`${
            item?.booking_code === detail
              ? "border-2 border-purple-600 bg-gray-100 transition-colors duration-300 shadow-none"
              : "border border-black/70 bg-white transition-colors duration-300 shadow-none"
          }  hover:cursor-pointer hover:bg-gray-100 hover:border-2 hover:border-purple-600 hover:shadow-md `}
        >
          <CardBody onClick={handleOpen}>
            <Typography
              variant="h6"
              color="white"
              className={`mb-2 ${item?.payment_status === "Pending" ? "bg-gray-500" : ""} ${
                item?.payment_status === "Issued" ? "bg-green-400" : ""
              } ${item?.payment_status === "Cancelled" ? "bg-red-400" : ""} w-max px-2.5 rounded-xl`}
            >
              {item.payment_status}
            </Typography>
            <div className="flex gap-4 justify-between mt-6 border-b border-black/70 pb-8">
              <div className="flex flex-col items-center justify-center">
                <p className="font-bold text-xs sm:text-base mt-0 text-black">{item?.ticket?.flight?.departure_location}</p>
                <small className="font-semibold text-xs whitespace-nowrap">{formatDate(item?.ticket?.flight?.departure_date)}</small>
                <small className="font-semibold text-xs whitespace-nowrap">{formatTime(item?.ticket?.flight?.departure_time)}</small>
              </div>
              <div className="flex flex-col items-center justify-center">
                <small className="text-gray-500 text-xs sm:text-base">
                  {formatDifferenceTime(item?.ticket?.flight?.departure_time, item?.ticket?.flight?.arrival_time)}
                </small>
                <small className="bg-gray-500 w-20 sm:w-32 md:w-40 h-0.5 relative">
                  <i className="absolute w-1.5 h-1.5 border-gray-500 right-0 top-1/2 -translate-y-1/2 inline-block border-r-2 border-b-2 -rotate-45"></i>
                </small>
                <small className="text-gray-500 text-xs sm:text-base">Direct</small>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="font-bold text-xs sm:text-base mt-0 text-black">{item?.ticket?.flight?.arrival_location}</p>
                <small className="font-semibold text-xs whitespace-nowrap">{formatDate(item?.ticket?.flight?.arrival_date)}</small>
                <small className="font-semibold text-xs whitespace-nowrap">{formatTime(item?.ticket?.flight?.arrival_time)}</small>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <p className="flex-1 text-xs sm:text-sm text-left ">
                <strong className="text-black">Booking Code:</strong> {item?.booking_code}
              </p>
              <p className="flex-1 text-xs sm:text-sm text-center">
                <strong className="text-black">Class:</strong> {item?.ticket?.type_of_class}
              </p>
              <p className="flex-1 text-xs sm:text-sm text-right text-purple-600 font-bold">IDR {formatRupiah(item?.total_price)}</p>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default History;
