import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Link, useSearchParams } from "react-router-dom";

const date = [
  { date: "2023-06-24", day: "Sabtu" },
  { date: "2023-06-25", day: "Minggu" },
  { date: "2023-06-26", day: "Senin" },
  { date: "2023-06-27", day: "Selasa" },
  { date: "2023-06-28", day: "Rabu" },
  { date: "2023-06-29", day: "Kamis" },
  { date: "2023-06-30", day: "Jumat" },
  { date: "2023-07-01", day: "Sabtu" },
  { date: "2023-07-02", day: "Minggu" },
  { date: "2023-07-03", day: "Senin" },
  { date: "2023-07-04", day: "Selasa" },
  { date: "2023-07-05", day: "Rabu" },
  { date: "2023-07-06", day: "Kamis" },
  { date: "2023-07-07", day: "Jumat" },
  { date: "2023-07-08", day: "Sabtu" },
  { date: "2023-07-09", day: "Minggu" },
  { date: "2023-07-10", day: "Senin" },
];

const DateButton = ({ searchParams, setFilterDateTicket }) => {
  const path = searchParams.get("dd");

  return (
    <Swiper
      slidesPerView={7}
      spaceBetween={10}
      pagination={{ clickable: true }}
      breakpoints={{
        240: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        380: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        400: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        600: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        668: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 6,
          spaceBetween: 40,
        },
      }}
      className="w-full mySwiper"
    >
      {date.map((item, i) => (
        <SwiperSlide key={i}>
          <Button
            variant="outlined"
            color="purple"
            onClick={() => setFilterDateTicket(item.date)}
            className={`${
              item.date === path ? "bg-purple-600 text-white hover:!opacity-100" : "hover:text-white hover:bg-purple-600"
            } py-2 flex flex-col gap-1 shadow-none `}
          >
            <p className="m-auto">{item.day}</p>
            <small className="m-auto whitespace-nowrap">{item.date}</small>
          </Button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const HeaderHome = ({ setFilterDateTicket }) => {
  const passengers = localStorage.getItem("totalPassenger");
  const [searchParams] = useSearchParams();
  const type_of_class = searchParams.get("toc");
  const Departure = searchParams.get("dl");
  const Arrival = searchParams.get("al");

  return (
    <div className="w-full max-w-4xl m-auto mt-8">
      <Typography className="text-center sm:text-left mx-8 sm:mx-0" variant="h4">
        Pilih Penerbangan
      </Typography>
      <div className="flex flex-col items-center gap-3 mx-2 sm:mx-8 mt-4 md:flex-row">
        <div className="flex items-center gap-2 w-full px-4 py-2 text-white bg-purple-500 rounded-md">
          <Link to="/">
            <ChevronLeftIcon className="w-6 h-6 font-bold" />
          </Link>
          <p className="flex items-center text-[11px] sm:text-base mt-0">
            {Departure} <ChevronRightIcon className="w-4 h-4" /> {Arrival} - {passengers} Penumpang - {type_of_class}
          </p>
        </div>
        <Link to="/">
          <Button color="green" className="whitespace-nowrap">
            Ubah Pencarian
          </Button>
        </Link>
      </div>
      <div className="flex gap-2 pb-4 mx-2 sm:mx-8 mt-4 border-b border-gray-600">
        <DateButton setFilterDateTicket={setFilterDateTicket} searchParams={searchParams} />
      </div>
    </div>
  );
};

export default HeaderHome;
