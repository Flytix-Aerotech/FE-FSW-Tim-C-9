import React from "react";
import { Card, CardBody, Typography, Input, Switch, CardFooter, Button } from "@material-tailwind/react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { airline_seat, flight_takeoff } from "../../assets/images";
import PassengerInput from "../custom_input/PassengerInput";
import SeatInput from "../custom_input/SeatInput";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { filterTicketAction } from "../../config/Redux/action/ticketAction";
import DepartureInput from "../custom_input/DepartureInput";
import ArrivalInput from "../custom_input/Arrivalnput";

const SearchTicket = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [showReturnDate, setShowReturnDate] = React.useState(true);

  const form = useForm();

  const { register, handleSubmit } = form;

  const onSubmit = (data) => {
    dispatch(filterTicketAction(data, history));
  };

  return (
    <div className="grid mx-4 place-items-center">
      <Card className="w-full max-w-4xl mt-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Pilih Jadwal Penerbangan spesial di <span className="font-bold text-purple-600">Flytix!</span>
            </Typography>
            <div className="flex flex-col gap-2 p-4 mt-4 border border-gray-500 rounded-lg md:flex-row md:gap-12 md:p-0 md:border-none">
              <div className="flex items-center w-full gap-10">
                <div className="flex items-center gap-3 mt-2 sm:flex">
                  <img src={flight_takeoff} alt="" className="w-6 h-6" />
                  <small className="mt-1 text-gray-500">From</small>
                </div>
                <DepartureInput form={form} />
              </div>
              <div className="flex items-center w-full gap-8">
                <div className="flex items-center gap-3 mt-2 sm:flex">
                  <img src={flight_takeoff} alt="" className="w-6 h-6" />
                  <small className="mt-1 text-gray-500">To</small>
                </div>
                <ArrivalInput form={form} />
              </div>
            </div>
            <div className="flex flex-col mt-10 lg:flex-row gap-14 md:gap-8">
              <div className="flex items-center w-full gap-10">
                <div className="hidden gap-3 sm:flex">
                  <CalendarIcon className="w-6 h-6" />
                  <small className="mt-1 text-gray-500">Date</small>
                </div>
                <div className="flex flex-col w-full gap-5 sm:flex-row">
                  <Input
                    color="purple"
                    type="date"
                    variant="static"
                    label="Departure"
                    defaultValue={new Date().toISOString().substring(0, 10)}
                    {...register("departure_date")}
                    containerProps={{ className: "min-w-[20px]" }}
                  />
                  <Input
                    color="purple"
                    type="date"
                    variant="static"
                    label="Return"
                    {...register("arrival_date")}
                    defaultValue={new Date().toISOString().substring(0, 10)}
                    disabled={showReturnDate}
                    containerProps={{ className: "min-w-[20px]" }}
                  />
                  <div className="flex justify-between">
                    <p className="block sm:hidden">Pulang-pergi?</p>
                    <Switch id="purple" color="purple" onClick={() => setShowReturnDate(!showReturnDate)} />
                  </div>
                </div>
              </div>
              <div className="flex items-center w-full gap-10">
                <div className="items-center hidden gap-3 mt-2 sm:flex">
                  <img src={airline_seat} alt="" className="w-6 h-6" />
                  <small className="mt-1 text-gray-500">To</small>
                </div>
                <PassengerInput />
                <SeatInput form={form} />
              </div>
            </div>
          </CardBody>
          <CardFooter className="w-full p-0">
            <Button type="submit" color="purple" className="w-full rounded-t-none rounded-b-lg">
              Cari Penerbangan
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default SearchTicket;
