import React, { useState } from "react";
import dayjs from "dayjs";
import { GenerateDate, months } from "./generateDate";
import cn from "./cn";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const CalendarModal = ({ isOpen, onClose }) => {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg p-8 w-96">
        <div className="flex justify-between items-center mb-4">
          <h1 className="font-semibold">
            {months[today.month()]}, {today.year()}
          </h1>
          <div className="flex gap-10 items-center">
            <ChevronLeftIcon
              className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(today.month(today.month() - 1));
              }}
            />
            <h1
              className="cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(currentDate);
              }}
            >
              Today
            </h1>
            <ChevronRightIcon
              className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(today.month(today.month() + 1));
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-7">
          {days.map((day, index) => (
            <h1
              key={index}
              className="text-sm text-center h-14 w-14 grid place-content-center text-gray-500 select-none"
            >
              {day}
            </h1>
          ))}
        </div>

        <div className="grid grid-cols-7">
          {GenerateDate(today.month(), today.year()).map(
            ({ date, currentMonth, today }, index) => (
              <div
                key={index}
                className="p-2 text-center h-14 grid place-content-center text-sm border-t"
              >
                <h1
                  className={cn(
                    currentMonth ? "" : "text-gray-400",
                    today ? "bg-red-600 text-white" : "",
                    selectDate.toDate().toDateString() ===
                      date.toDate().toDateString()
                      ? "bg-black text-white"
                      : "",
                    "h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none"
                  )}
                  onClick={() => {
                    setSelectDate(date);
                  }}
                >
                  {date.date()}
                </h1>
              </div>
            )
          )}
        </div>

        <div className="mt-8">
          <h1 className="font-semibold">
            Selected date {selectDate.toDate().toDateString()}
          </h1>
        </div>

        <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default function Calendar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex gap-10 sm:divide-x justify-center sm:w-1/2 mx-auto h-screen items-center sm:flex-row flex-col">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        onClick={openModal}
      >
        Open Modal
      </button>
      <CalendarModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
