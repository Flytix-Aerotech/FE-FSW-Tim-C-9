import { Card, CardBody, Typography, Accordion, AccordionHeader, AccordionBody, Button } from "@material-tailwind/react";
import React from "react";
import { backpack, crown, not_found } from "../../assets/images";
import { useDispatch, useSelector } from "react-redux";
import { getTicketAction } from "../../config/Redux/action/ticketAction";
import { Link, useSearchParams } from "react-router-dom";
import { formatDate, formatRupiah, formatTime } from "../format_display";
import { ProgressBar } from "react-loader-spinner";
import FilterInput from "../custom_input/filterInput";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const AccordionSection = ({ tickets }) => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      {tickets.length === 0 ? (
        <div>
          <img src={not_found} className="max-w-xs w-full" alt="" />
        </div>
      ) : (
        <>
          {tickets.map((item, i) => (
            <Accordion
              key={i}
              className="border-2 border-gray-400 rounded-md px-2 py-4 mt-6"
              open={open === item.id}
              icon={<Icon id={item.id} open={open} />}
            >
              <AccordionHeader className="border-none p-0" onClick={() => handleOpen(item.id)}>
                <Typography variant="h6" color="blue-gray" className="flex items-center gap-4">
                  <img src={crown} alt="" className="w-5 h-5" /> {item.flight.airline} - {item.type_of_class}
                </Typography>
              </AccordionHeader>
              <div className="flex ml-0 sm:ml-8 mt-2 gap-10 sm:gap-20">
                <div className="flex gap-4">
                  <span className="flex flex-col justify-center items-center">
                    <p className="font-bold">{formatTime(item.flight.departure_time)}</p>
                    <small className="font-semibold">{item.flight.from_id}</small>
                  </span>
                  <span className="flex flex-col justify-center items-center">
                    <small className="text-gray-500">1h</small>
                    <small className="bg-gray-500 w-14 sm:w-44 h-0.5 relative">
                      <small className="absolute w-1.5 h-1.5 bg-gray-500 right-0 top-1/2 -translate-y-1/2 rounded-r-3xl"></small>
                    </small>
                    <small className="text-gray-500">Direct</small>
                  </span>
                  <span className="flex flex-col justify-center items-center">
                    <p className="font-bold">{formatTime(item.flight.arrival_time)}</p>
                    <small className="font-semibold">{item.flight.to_id}</small>
                  </span>
                  <span className="flex flex-col justify-center items-center">
                    <img src={backpack} alt="" className="w-5 h-5" />
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <Typography variant="h6" color="purple" className="font-bold">
                    IDR {formatRupiah(item.price)}
                  </Typography>
                  <Link to={`/wishlist/${item.id}`} className="w-full">
                    <Button color="purple" className="rounded-2xl py-2 w-full">
                      Pilih
                    </Button>
                  </Link>
                </div>
              </div>
              <AccordionBody className="border-t border-gray-800 mt-4">
                <div className="mx-4">
                  <Card className="w-full overflow-hidden rounded-none shadow-none px-2">
                    <Typography variant="h6" color="purple" className="font-bold">
                      Detail Penerbangan
                    </Typography>
                    <div className="flex flex-col mt-2">
                      <span className="flex justify-between ">
                        <p className="font-bold text-black">{formatTime(item.flight.departure_time)}</p>{" "}
                        <p className="text-purple-600">Keberangkatan</p>
                      </span>
                      <p className="mt-1">{formatDate(item.flight.departure_date)}</p>
                      <p className="mt-1 text-black">
                        {item.airport.departure_name} - {item.airport.departure_terminal}
                      </p>
                    </div>
                    <CardBody className="px-4 py-2 mx-1 my-4 border-t-2 border-b-2 border-gray-400">
                      <div className="flex items-center justify-start gap-2">
                        <img src={crown} alt="" className="w-6 h-6" />
                        <div className="flex-col gap-2 flex-">
                          <p className="font-bold text-black">
                            {item.flight.airline} - {item.type_of_class}
                          </p>
                          <p className="font-bold text-black">{item.flight.flight_number}</p>
                          <div className="flex flex-col mt-3">
                            <p className="font-bold text-black">Informasi:</p>
                            <small>Baggage {Math.floor(Math.random() * (30 - 20 + 1) + 20)} kg</small>
                            <small>Cabin baggage {Math.floor(Math.random() * (15 - 5 + 1) + 5)} kg</small>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                    <div className="flex flex-col mt-2">
                      <span className="flex justify-between ">
                        <p className="font-bold text-black">{formatTime(item.flight.arrival_time)}</p> <p className="text-purple-600">Kedatangan</p>
                      </span>
                      <p className="mt-1">{formatDate(item.flight.arrival_date)}</p>
                      <p className="mt-1 text-black">
                        {item.airport.arrival_name} - {item.airport.arrival_terminal}
                      </p>
                    </div>
                  </Card>
                </div>
              </AccordionBody>
            </Accordion>
          ))}
        </>
      )}
    </>
  );
};

const ResultSearch = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [tickets, setTickets] = React.useState([]);

  const data = {
    departure_date: searchParams.get("dd"),
    departure_location: searchParams.get("dl"),
    arrival_location: searchParams.get("al"),
    type_of_class: searchParams.get("toc"),
  };

  const { ticket } = useSelector((state) => state.ticketReducer);
  const { isLoading } = useSelector((state) => state.ticketReducer);

  React.useEffect(() => {
    dispatch(getTicketAction(data));
  }, [dispatch]);

  React.useEffect(() => {
    if (ticket) {
      setTickets(ticket);
    }
  }, [ticket]);

  return (
    <div className="max-w-4xl w-full m-auto my-8">
      <div className="max-w-[220px] w-full ml-auto mx-10">
        <FilterInput />
      </div>
      <div className="mt-8 w-max m-auto">
        {isLoading ? (
          <div className="flex items-center flex-col w-full h-full">
            <span>Mencari penerbangan terbaik...</span>
            <ProgressBar
              height="100"
              width="150"
              ariaLabel="progress-bar-loading"
              wrapperStyle={{}}
              wrapperClass="progress-bar-wrapper"
              borderColor="#9c27b0"
              barColor="#4CAF50"
            />
          </div>
        ) : (
          <AccordionSection tickets={tickets} />
        )}
      </div>
    </div>
  );
};

export default ResultSearch;
