import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Link, useSearchParams } from "react-router-dom";

const DateButton = () => {
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
        440: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 7,
          spaceBetween: 50,
        },
      }}
      className="mySwiper w-full"
    >
      <SwiperSlide>
        <Button variant="outlined" color="purple" className="py-2 flex flex-col gap-1 shadow-none hover:text-white hover:bg-purple-600">
          <p className="m-auto">Selasa</p>
          <small className="m-auto">20/06/2023</small>
        </Button>
      </SwiperSlide>
      <SwiperSlide>
        <Button variant="outlined" color="purple" className="py-2 flex flex-col gap-1 shadow-none hover:text-white hover:bg-purple-600">
          <p className="m-auto">Rabu</p>
          <small className="m-auto">21/06/2023</small>
        </Button>
      </SwiperSlide>
      <SwiperSlide>
        <Button variant="outlined" color="purple" className="py-2 flex flex-col gap-1 shadow-none hover:text-white hover:bg-purple-600">
          <p className="m-auto">Kamis</p>
          <small className="m-auto">22/06/2023</small>
        </Button>
      </SwiperSlide>
      <SwiperSlide>
        <Button variant="outlined" color="purple" className="py-2 flex flex-col gap-1 shadow-none hover:text-white hover:bg-purple-600">
          <p className="m-auto">Jumat</p>
          <small className="m-auto">23/06/2023</small>
        </Button>
      </SwiperSlide>
      <SwiperSlide>
        <Button variant="outlined" color="purple" className="py-2 flex flex-col gap-1 shadow-none hover:text-white hover:bg-purple-600">
          <p className="m-auto">Sabtu</p>
          <small className="m-auto">24/06/2023</small>
        </Button>
      </SwiperSlide>
      <SwiperSlide>
        <Button variant="outlined" color="purple" className="py-2 flex flex-col gap-1 shadow-none hover:text-white hover:bg-purple-600">
          <p className="m-auto">Minggu</p>
          <small className="m-auto">25/06/2023</small>
        </Button>
      </SwiperSlide>
      <SwiperSlide>
        <Button variant="outlined" color="purple" className="py-2 flex flex-col gap-1 shadow-none hover:text-white hover:bg-purple-600">
          <p className="m-auto">Senin</p>
          <small className="m-auto">26/06/2023</small>
        </Button>
      </SwiperSlide>
      <SwiperSlide>
        <Button variant="outlined" color="purple" className="py-2 flex flex-col gap-1 shadow-none hover:text-white hover:bg-purple-600">
          <p className="m-auto">Selasa</p>
          <small className="m-auto">27/06/2023</small>
        </Button>
      </SwiperSlide>
      <SwiperSlide>
        <Button variant="outlined" color="purple" className="py-2 flex flex-col gap-1 shadow-none hover:text-white hover:bg-purple-600">
          <p className="m-auto">Rabu</p>
          <small className="m-auto">28/06/2023</small>
        </Button>
      </SwiperSlide>
      <SwiperSlide>
        <Button variant="outlined" color="purple" className="py-2 flex flex-col gap-1 shadow-none hover:text-white hover:bg-purple-600">
          <p className="m-auto">Kamis</p>
          <small className="m-auto">29/06/2023</small>
        </Button>
      </SwiperSlide>
      <SwiperSlide>
        <Button variant="outlined" color="purple" className="py-2 flex flex-col gap-1 shadow-none hover:text-white hover:bg-purple-600">
          <p className="m-auto">Jumat</p>
          <small className="m-auto">30/06/2023</small>
        </Button>
      </SwiperSlide>
    </Swiper>
  );
};

const HeaderHome = () => {
  const passengers = localStorage.getItem("totalPassenger");
  const [searchParams, setSearchParams] = useSearchParams();

  const type_of_class = searchParams.get("toc");
  const Departure = searchParams.get("dl");
  const Arrival = searchParams.get("al");
  return (
    <div className="max-w-4xl w-full m-auto mt-8">
      <Typography variant="h4">Pilih Penerbangan</Typography>
      <div className="flex flex-col md:flex-row mx-8 mt-4 gap-2">
        <div className="flex gap-3 py-2 px-4 bg-purple-500 text-white w-full rounded-md">
          <Link to="/">
            <ChevronLeftIcon className="w-6 h-6 font-bold" />
          </Link>
          <p className="flex items-center text-xs sm:text-base">
            {Departure} <ChevronRightIcon className="w-4 h-4" /> {Arrival} - {passengers} Penumpang - {type_of_class}
          </p>
        </div>
        <Link to="/">
          <Button color="green" className="whitespace-nowrap">
            Ubah Pencarian
          </Button>
        </Link>
      </div>
      <div className="flex mx-8 mt-4 gap-2 border-b border-gray-600 pb-4">
        <DateButton />
      </div>
    </div>
  );
};

export default HeaderHome;
