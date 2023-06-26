import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Button } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const city = [
  { city: "Jakarta" },
  { city: "Bandung" },
  { city: "Surabaya" },
  { city: "Makassar" },
  { city: "Palu" },
  { city: "Papua" },
  { city: "Solo" },
  { city: "Bali" },
  { city: "Lampung" },
  { city: "Malang" },
];

const DestinasiFavorit = () => {
  return (
    <div className="w-full max-w-4xl px-4 m-auto mt-8">
      <div className="mb-4 text-xl font-semibold">Destinasi Favorit</div>
      <Swiper
        slidesPerView={6}
        spaceBetween={10}
        pagination={{ clickable: true }}
        breakpoints={{
          240: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          440: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 5,
          },
        }}
        className="w-full mySwiper"
      >
        {city.map((item, i) => (
          <SwiperSlide key={i}>
            <Button variant="outlined" color="purple" className="py-2 px-2 min-w-[110px] flex gap-1 shadow-none hover:text-white hover:bg-purple-600">
              <MagnifyingGlassIcon className="w-5 h-5" /> <p className="m-auto text-start">{item.city}</p>
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DestinasiFavorit;
