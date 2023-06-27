import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Button } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const DestinasiFavorit = ({ tickets, setFilter, filter }) => {
  return (
    <div className="w-full max-w-4xl px-4 m-auto mt-8">
      <div className="mb-4 text-xl font-semibold">Destinasi Favorit</div>
      <Swiper
        slidesPerView={4}
        spaceBetween={5}
        pagination={{ clickable: true }}
        breakpoints={{
          240: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          440: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
        }}
        className="w-full mySwiper"
      >
        {tickets.map((item, i) => (
          <SwiperSlide key={i}>
            <Button
              onClick={() => setFilter(item?.flight?.arrival_location)}
              variant="outlined"
              color="purple"
              className={`${
                item?.flight?.arrival_location === filter
                  ? "bg-purple-600 text-white py-2 px-2 min-w-[150px] flex gap-1 shadow-none hover:!opacity-100"
                  : "py-2 px-2 min-w-[150px] flex gap-1 shadow-none"
              } hover:text-white hover:bg-purple-600`}
            >
              <MagnifyingGlassIcon className="w-5 h-5" /> <p className="m-auto text-start">{item?.flight?.arrival_location}</p>
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DestinasiFavorit;
