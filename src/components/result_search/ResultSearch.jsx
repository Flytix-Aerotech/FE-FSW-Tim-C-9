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
import { useSearchParams } from "react-router-dom";
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
        <div className="mt-6">
          <img src={not_found} className="w-full max-w-xs" alt="" />
        </div>
      ) : (
        <>
          {tickets?.map((item, i) => (
            <Accordion
              key={i}
              className={`px-2 py-4 mt-2 border-2 hover:border-purple-600 border-gray-200 rounded-md duration-500 ${
                open === item?.id ? "border-purple-600" : ""
              }`}
              open={open === item?.id}
              icon={<Icon id={item?.id} open={open} />}
            >
              <AccordionHeader className="p-0 border-none" onClick={() => handleOpen(item?.id)}>
                <Typography variant="h6" color="blue-gray" className="flex items-center gap-4 text-sm sm:text-base md:text-lg">
                  <img src={crown} alt="" className="w-5 h-5" /> {item?.flight?.airline} - {item?.type_of_class}
                </Typography>
              </AccordionHeader>
              <div className="flex mt-2 ml-0 sm:ml-8 justify-between gap-1 sm:gap-16">
                <div className="flex gap-4">
                  <span className="flex flex-col items-center justify-center">
                    <p className="font-bold text-xs sm:text-base mt-0">{formatTime(item?.flight?.departure_time)}</p>
                    <small className="font-semibold text-xs sm:text-base">{item?.flight?.from_id}</small>
                  </span>
                  <span className="flex flex-col items-center justify-center">
                    <small className="text-gray-500 text-xs sm:text-sm">
                      {formatDifferenceTime(item?.flight?.departure_time, item?.flight?.arrival_time)}
                    </small>
                    <small className="bg-gray-500 w-20 sm:w-28 md:w-40 h-0.5 relative">
                      <i className="absolute w-1.5 h-1.5 border-gray-500 right-0 top-1/2 -translate-y-1/2 inline-block border-r-2 border-b-2 -rotate-45"></i>
                    </small>
                    <small className="text-gray-500 text-xs sm:text-sm">Direct</small>
                  </span>
                  <span className="flex flex-col items-center justify-center">
                    <p className="font-bold text-xs sm:text-base mt-0">{formatTime(item?.flight?.arrival_time)}</p>
                    <small className="font-semibold text-xs sm:text-base">{item?.flight?.to_id}</small>
                  </span>
                  <span className="flex flex-col items-center justify-center">
                    <img src={backpack} alt="" className="w-5 h-5" />
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <Typography variant="h6" color="purple" className="font-bold text-sm sm:text-lg whitespace-nowrap">
                    IDR {formatRupiah(item?.price)}
                  </Typography>
                  <a href={`/wishlist/${item?.id}`} className="w-full">
                    <Button color="purple" className="w-full py-2 rounded-2xl">
                      Pilih
                    </Button>
                  </a>
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
                        <p className="font-bold text-black">{formatTime(item?.flight?.departure_time)}</p>{" "}
                        <p className="text-purple-600">Keberangkatan</p>
                      </span>
                      <p className="mt-1">{formatDate(item?.flight?.departure_date)}</p>
                      <p className="mt-1 text-black">
                        {item?.airport?.departure_name} - {item?.airport?.departure_terminal}
                      </p>
                    </div>
                    <CardBody className="px-4 py-2 mx-1 my-4 border-t-2 border-b-2 border-gray-400">
                      <div className="flex items-center justify-start gap-2">
                        <img src={crown} alt="" className="w-6 h-6" />
                        <div className="flex-col gap-2 flex-">
                          <p className="font-bold text-black">
                            {item?.flight?.airline} - {item?.type_of_class}
                          </p>
                          <p className="font-bold text-black">{item?.flight?.flight_number}</p>
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
                        <p className="font-bold text-black">{formatTime(item?.flight?.arrival_time)}</p> <p className="text-purple-600">Kedatangan</p>
                      </span>
                      <p className="mt-1">{formatDate(item?.flight?.arrival_date)}</p>
                      <p className="mt-1 text-black">
                        {item?.airport?.arrival_name} - {item?.airport?.arrival_terminal}
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

const ListItems = ({ handleOpen }) => {
  const list = [
    { name: "Harga", icon: CurrencyDollarIcon },
    { name: "Keberangkatan", icon: ChevronDoubleUpIcon },
    { name: "Kedatangan", icon: ChevronDoubleDownIcon },
  ];
  return (
    <nav className="shadow-md h-max lg:flex lg:flex-col gap-1 hidden w-60 rounded-xl p-5 font-sans text-base font-normal text-blue-gray-700">
      <h5 className="text-lg tracking-wider text-black">Filter</h5>
      {list.map((item, index) => (
        <ListItem onClick={handleOpen} key={index} ripple={false} className="py-1 px-1">
          <div className="flex items-center gap-3 text-sm">
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

const ConditionalFilter = (data, sorted) => {
  switch (data) {
    case "Harga - Termurah":
      sorted.sort((a, b) => {
        const priceA = parseFloat(a?.price);
        const priceB = parseFloat(b?.price);
        return priceA - priceB;
      });
      break;
    case "Harga - Termahal":
      sorted.sort((a, b) => {
        const priceA = parseFloat(a?.price);
        const priceB = parseFloat(b?.price);
        return priceB - priceA;
      });
      break;
    case "Keberangkatan - Paling Awal":
      sorted.sort((a, b) => {
        const formatA = `${a?.flight?.departure_date} ${a?.flight?.departure_time} `;
        const dateA = new Date(formatA).getTime();
        const formatB = `${b?.flight?.departure_date} ${b?.flight?.departure_time} `;
        const dateB = new Date(formatB).getTime();
        return dateA - dateB;
      });
      break;
    case "Keberangkatan - Paling Akhir":
      sorted.sort((a, b) => {
        const formatA = `${a?.flight?.departure_date} ${a?.flight?.departure_time} `;
        const dateA = new Date(formatA).getTime();
        const formatB = `${b?.flight?.departure_date} ${b?.flight?.departure_time} `;
        const dateB = new Date(formatB).getTime();
        return dateB - dateA;
      });
      break;
    case "Kedatangan - Paling Awal":
      sorted.sort((a, b) => {
        const formatA = `${a?.flight?.arrival_date} ${a?.flight?.arrival_time} `;
        const dateA = new Date(formatA).getTime();
        const formatB = `${b?.flight?.arrival_date} ${b?.flight?.arrival_time} `;
        const dateB = new Date(formatB).getTime();
        return dateA - dateB;
      });
      break;
    case "Kedatangan - Paling Akhir":
      sorted.sort((a, b) => {
        const formatA = `${a?.flight?.arrival_date} ${a?.flight?.arrival_time} `;
        const dateA = new Date(formatA).getTime();
        const formatB = `${b?.flight?.arrival_date} ${b?.flight?.arrival_time} `;
        const dateB = new Date(formatB).getTime();
        return dateB - dateA;
      });
      break;

    default:
      break;
  }
};

const ResultSearch = ({ filterDateTicket }) => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [tickets, setTickets] = React.useState([]);
  const [sortedProducts, setSortedProducts] = React.useState([]);
  const [sortOrder, setSortOrder] = React.useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const departure_date = searchParams.get("dd");
  const departure_location = searchParams.get("dl");
  const arrival_location = searchParams.get("al");
  const type_of_class = searchParams.get("toc");

  const handleClickFilter = (data) => {
    const sorted = tickets;
    ConditionalFilter(data, sorted);
    setSortOrder(data);
    setSortedProducts(sorted);
  };

  React.useEffect(() => {
    setSearchParams((params) => {
      params.set("dd", filterDateTicket === undefined ? departure_date : filterDateTicket);
      return params;
    });
  }, [filterDateTicket, setSearchParams, departure_date]);

  const { ticket } = useSelector((state) => state.ticketReducer);
  const { isLoading } = useSelector((state) => state.ticketReducer);

  React.useEffect(() => {
    dispatch(getTicketAction({ departure_date, departure_location, arrival_location, type_of_class }));
  }, [dispatch, departure_date, departure_location, arrival_location, type_of_class]);

  React.useEffect(() => {
    if (ticket) {
      setTickets(ticket);
    }
  }, [ticket]);

  return (
    <div className="w-full max-w-4xl m-auto my-8">
      <div className="grid place-items-center sm:place-items-end">
        <div className="w-max px-10">
          <FilterInput handleClickFilter={handleClickFilter} open={open} handleOpen={handleOpen} />
        </div>
      </div>
      <div className="m-auto mt-8 w-full max-w-[830px] px-2">
        {isLoading ? (
          <div className="flex flex-col items-center w-full h-full">
            <span className="mb-4">Mencari penerbangan terbaik...</span>
            <PartialLoading height={"100"} width={"150"} />
          </div>
        ) : (
          <div className="flex gap-4 justify-center lg:justify-between relative">
            <ListItems handleOpen={handleOpen} />
            <div>
              <AccordionSection tickets={sortOrder === "" ? tickets : sortedProducts} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultSearch;
