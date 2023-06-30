import {
  Card,
  CardBody,
  Typography,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
  ListItem,
  ListItemSuffix,
  IconButton,
} from "@material-tailwind/react";
import React from "react";
import { backpack, crown, not_found } from "../../assets/images";
import { useDispatch, useSelector } from "react-redux";
import { getTicketAction } from "../../config/Redux/action/ticketAction";
import { Link, useSearchParams } from "react-router-dom";
import { formatDate, formatDifferenceTime, formatRupiah, formatTime } from "../format_display";
import FilterInput from "../custom_input/filterInput";
import PartialLoading from "../loading/PartialLoading";
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon, ChevronRightIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

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
          <img src={not_found} className="w-full max-w-xs" alt="" />
        </div>
      ) : (
        <>
          {tickets.map((item, i) => (
            <Accordion
              key={i}
              className={`px-2 py-4 mt-3 border-2 hover:border-purple-600 border-gray-200 rounded-md ${open === item.id ? "border-purple-600" : ""}`}
              open={open === item.id}
              icon={<Icon id={item.id} open={open} />}
            >
              <AccordionHeader className="p-0 border-none" onClick={() => handleOpen(item.id)}>
                <Typography variant="h6" color="blue-gray" className="flex items-center gap-4 text-sm sm:text-base md:text-lg">
                  <img src={crown} alt="" className="w-5 h-5" /> {item.flight.airline} - {item.type_of_class}
                </Typography>
              </AccordionHeader>
              <div className="flex mt-2 ml-0 sm:ml-8 justify-between gap-2 sm:gap-20">
                <div className="flex gap-4">
                  <span className="flex flex-col items-center justify-center">
                    <p className="font-bold text-xs sm:text-base mt-0">{formatTime(item.flight.departure_time)}</p>
                    <small className="font-semibold text-xs sm:text-base">{item.flight.from_id}</small>
                  </span>
                  <span className="flex flex-col items-center justify-center">
                    <small className="text-gray-500 text-xs sm:text-base">
                      {formatDifferenceTime(item.flight.departure_time, item.flight.arrival_time)}
                    </small>
                    <small className="bg-gray-500 w-20 sm:w-28 md:w-44 h-0.5 relative">
                      <i className="absolute w-1.5 h-1.5 border-gray-500 right-0 top-1/2 -translate-y-1/2 inline-block border-r-2 border-b-2 -rotate-45"></i>
                    </small>
                    <small className="text-gray-500 text-xs sm:text-base">Direct</small>
                  </span>
                  <span className="flex flex-col items-center justify-center">
                    <p className="font-bold text-xs sm:text-base mt-0">{formatTime(item.flight.arrival_time)}</p>
                    <small className="font-semibold text-xs sm:text-base">{item.flight.to_id}</small>
                  </span>
                  <span className="flex flex-col items-center justify-center">
                    <img src={backpack} alt="" className="w-5 h-5" />
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <Typography variant="h6" color="purple" className="font-bold text-sm sm:text-lg">
                    IDR {formatRupiah(item.price)}
                  </Typography>
                  <Link to={`/wishlist/${item.id}`} className="w-full">
                    <Button color="purple" className="w-full py-2 rounded-2xl">
                      Pilih
                    </Button>
                  </Link>
                </div>
              </div>
              <AccordionBody className="mt-4 border-t border-gray-800">
                <div className="mx-4">
                  <Card className="w-full px-2 overflow-hidden rounded-none shadow-none">
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

const ListItems = () => {
  const list = [
    { name: "Harga", icon: CurrencyDollarIcon },
    { name: "Keberangkatan", icon: ChevronDoubleUpIcon },
    { name: "Kedatangan", icon: ChevronDoubleDownIcon },
  ];
  return (
    <nav className="shadow-md h-max lg:flex lg:flex-col gap-1 hidden w-64 rounded-xl p-5 font-sans text-base font-normal text-blue-gray-700">
      <h5 className="text-lg tracking-wider text-black">Filter</h5>
      {list.map((item, index) => (
        <ListItem key={index} ripple={false} className="py-1 px-1">
          <div className="flex items-center gap-3">
            <item.icon className="w-5 h-5" /> {item.name}
          </div>
          <ListItemSuffix>
            <IconButton variant="text" color="purple">
              <ChevronRightIcon className="w-4 h-4" />
            </IconButton>
          </ListItemSuffix>
        </ListItem>
      ))}
    </nav>
  );
};

const ResultSearch = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [tickets, setTickets] = React.useState([]);

  const [sortedProducts, setSortedProducts] = React.useState([]);
  const [sortOrder, setSortOrder] = React.useState("Harga - Termahal");

  const handleClickFilter = (data) => {
    setSortOrder(data);
    const sorted = tickets;
    sorted.sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);
      if (sortOrder === "Harga - Termahal") {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
    });
    setSortedProducts(sorted);
    setSortOrder(sortOrder === "Harga - Termahal" ? "Harga - Termurah" : "Harga - Termahal");
  };

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
    <div className="w-full max-w-4xl m-auto my-8">
      <div className="max-w-[220px] w-full ml-auto mx-10">
        <FilterInput handleClickFilter={handleClickFilter} />
      </div>
      <div className="m-auto mt-8 w-max">
        {isLoading ? (
          <div className="flex flex-col items-center w-full h-full">
            <span className="mb-4">Mencari penerbangan terbaik...</span>
            <PartialLoading height={"100"} width={"150"} />
          </div>
        ) : (
          <div className="flex gap-4 justify-between">
            <ListItems />
            <div>
              <AccordionSection tickets={sortOrder === "Harga - Termahal" ? tickets : sortedProducts} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultSearch;
