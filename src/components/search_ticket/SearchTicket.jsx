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
    <div className="grid place-items-center mx-4">
      <Card className="mt-2 max-w-4xl w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Pilih Jadwal Penerbangan spesial di <span className="text-purple-600 font-bold">Tiketku!</span>
            </Typography>
            <div className="flex flex-col md:flex-row gap-2 md:gap-12 mt-4 p-4 md:p-0 rounded-lg border border-gray-500 md:border-none">
              <div className="flex gap-10 items-center w-full">
                <div className="flex items-center gap-3 mt-2 sm:flex">
                  <img src={flight_takeoff} alt="" className="w-6 h-6" />
                  <small className="text-gray-500 mt-1">From</small>
                </div>
                <DepartureInput form={form} />
              </div>
              <div className="flex gap-8 items-center w-full">
                <div className="flex items-center gap-3 mt-2 sm:flex">
                  <img src={flight_takeoff} alt="" className="w-6 h-6" />
                  <small className="text-gray-500 mt-1">To</small>
                </div>
                <ArrivalInput form={form} />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-14 md:gap-8 mt-10">
              <div className="flex gap-10 items-center w-full">
                <div className="sm:flex gap-3 hidden">
                  <CalendarIcon className="w-6 h-6" />
                  <small className="text-gray-500 mt-1">Date</small>
                </div>
                <div className="w-full flex flex-col sm:flex-row gap-5">
                  <Input
                    type="date"
                    variant="static"
                    label="Departure"
                    defaultValue={new Date().toISOString().substring(0, 10)}
                    {...register("departure_date")}
                    containerProps={{ className: "min-w-[20px]" }}
                  />
                  <Input
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
              <div className="flex gap-10 items-center w-full">
                <div className="sm:flex items-center gap-3 mt-2 hidden">
                  <img src={airline_seat} alt="" className="w-6 h-6" />
                  <small className="text-gray-500 mt-1">To</small>
                </div>
                <PassengerInput />
                <SeatInput form={form} />
              </div>
            </div>
          </CardBody>
          <CardFooter className="p-0 w-full">
            <Button type="submit" color="purple" className="rounded-b-lg rounded-t-none w-full">
              Cari Penerbangan
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default SearchTicket;
