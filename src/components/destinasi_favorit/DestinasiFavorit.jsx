import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Button } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const city = [
  { city: "Yogyakarta" },
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
    <div className="w-full max-w-4xl m-auto mt-8 mb-4">
      <div className="mb-4 text-xl font-semibold">Destinasi Favorit</div>
      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="w-full mySwiper"
      >
        {city.map((item, i) => (
          <SwiperSlide key={i}>
            <Button variant="outlined" color="purple" className={`py-2 flex gap-1 shadow-none hover:text-white hover:bg-purple-600`}>
              <MagnifyingGlassIcon className="w-5 h-5" /> <p className="m-auto text-start min-w-[70px]">{item.city}</p>
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DestinasiFavorit;
