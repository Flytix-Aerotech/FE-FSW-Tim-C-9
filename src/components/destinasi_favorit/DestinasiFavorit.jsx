import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Button } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const DestinasiFavorit = ({ setFilter, filter }) => {
  const city = [
    { name: "Semua" },
    { name: "Jakarta" },
    { name: "Bandung" },
    { name: "Yogyakarta" },
    { name: "Surabaya" },
    { name: "Denpasar" },
    { name: "Palembang" },
    { name: "Banda Aceh" },
    { name: "Banjarmasin" },
    { name: "Kupang" },
    { name: "Makassar" },
    { name: "Manado" },
    { name: "Batam" },
  ];
  return (
    <div className="w-full max-w-4xl px-4 m-auto mt-8">
      <div className="mb-4 text-xl font-semibold">Destinasi Favorit</div>
      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          350: {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          500: {
            slidesPerView: 3,
            spaceBetween: 1,
          },
          668: {
            slidesPerView: 4,
            spaceBetween: 1,
          },
          820: {
            slidesPerView: 5,
            spaceBetween: 1,
          },
        }}
        className="w-full mySwiper"
      >
        {city.map((item, i) => (
          <SwiperSlide key={i}>
            <Button
              onClick={() => setFilter(item.name)}
              variant="outlined"
              color="purple"
              className={`${
                item.name === filter
                  ? "bg-purple-600 text-white py-2 px-2 min-w-[150px] flex gap-1 shadow-none hover:!opacity-100"
                  : "py-2 px-2 min-w-[150px] flex gap-1 shadow-none"
              } hover:text-white hover:bg-purple-600`}
            >
              <MagnifyingGlassIcon className="w-5 h-5" /> <p className="m-auto text-start">{item.name}</p>
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DestinasiFavorit;
