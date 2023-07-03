import React from "react";
import { Button, Card, CardBody, CardFooter, Typography } from "@material-tailwind/react";
import { crown } from "../../assets/images";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getByIdTicketAction } from "../../config/Redux/action/ticketAction";
import { formatDate, formatRupiah, formatTime } from "../format_display";

const FlightDetail = ({ buttonTrigger, handleClick, text, code }) => {
  const dispatch = useDispatch();
  const params = useParams();

  const [tickets, setTickets] = React.useState([]);

  const { ticket } = useSelector((state) => state.ticketReducer);

  const adult = localStorage.getItem("adult") || 0;
  const baby = localStorage.getItem("baby") || 0;

  React.useEffect(() => {
    dispatch(getByIdTicketAction(params.id));
  }, [dispatch, params.id]);

  React.useEffect(() => {
    if (ticket) {
      setTickets(ticket);
    }
  }, [ticket]);

  return (
    <Card className="max-w-[22rem] w-full overflow-hidden rounded-none shadow-none py-4 px-2">
      <Typography variant="h5" color="blue-gray">
        {text} <span className="text-purple-500 font-bold tracking-wide">{code}</span>
      </Typography>
      <div className="flex flex-col mt-2">
        <span className="flex justify-between ">
          <p className="hidden">{ticket?.flight?.departure_date}</p>
          <p className="font-bold text-black">{formatTime(tickets?.flight?.departure_time)}</p>{" "}
          <small className="text-purple-500">Keberangkatan</small>
        </span>
        <small className="mt-1">{formatDate(tickets?.flight?.departure_date)}</small>
        <small className="mt-1 text-black">
          {tickets?.airport?.departure_name} - {tickets?.airport?.departure_terminal}
        </small>
      </div>
      <CardBody className="px-4 py-2 mx-1 my-4 border-t-2 border-b-2 border-gray-400">
        <div className="flex items-center justify-start gap-2">
          <img src={crown} alt="" className="w-6 h-6" />
          <div className="flex-col gap-2 flex-">
            <p className="font-bold text-black">
              {tickets?.flight?.airline} - {tickets?.type_of_class}
            </p>
            <p className="font-bold text-black">{tickets?.flight?.flight_number}</p>
            <div className="flex flex-col mt-3">
              <p className="font-bold text-black">Informasi:</p>
              <small>Baggage 26 kg</small>
              <small>Cabin baggage 15 kg</small>
            </div>
          </div>
        </div>
      </CardBody>
      <div className="flex flex-col mt-2">
        <span className="flex justify-between ">
          <p className="font-bold text-black">{formatTime(tickets?.flight?.arrival_time)}</p> <small className="text-purple-500">Kedatangan</small>
        </span>
        <small className="mt-1">{formatDate(tickets?.flight?.arrival_date)}</small>
        <small className="mt-1 text-black">
          {tickets?.airport?.arrival_name} - {tickets?.airport?.arrival_terminal}
        </small>
      </div>
      <CardFooter className="flex flex-col gap-3 p-0">
        <div className="px-0 py-2 mx-4 mt-4 border-t-2 border-b-2 border-gray-400 ">
          <Typography className="font-bold" color="black">
            Rincian Harga
          </Typography>
          <div className="flex flex-col gap-2">
            <span className="flex justify-between">
              <small>{adult} Adults</small> <small>IDR {formatRupiah(tickets?.price * parseInt(adult))}</small>
            </span>
            <span className="flex justify-between">
              <small>{baby} Baby</small> <small>IDR 0</small>
            </span>
            <span className="flex justify-between">
              <small>Tax</small> <small>IDR {formatRupiah(parseInt(tickets?.price * 0.1 * adult))}</small>
            </span>
          </div>
        </div>
        <span className="flex justify-between mx-4">
          <p className="font-bold text-black">Total</p>
          <p className="font-bold text-purple-500">IDR {formatRupiah(parseInt(tickets?.price * parseInt(adult) + 0.1 * tickets?.price * adult))}</p>
        </span>
      </CardFooter>
      {buttonTrigger === false ? null : (
        <Button color="red" className="mt-5" onClick={() => handleClick()}>
          Lanjut Bayar
        </Button>
      )}
    </Card>
  );
};

export default FlightDetail;
