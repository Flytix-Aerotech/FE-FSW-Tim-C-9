import { Typography, Accordion, AccordionHeader, AccordionBody, Button } from "@material-tailwind/react";
import React from "react";

const Icon = ({ id, open }) => {
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
};

const PaymentMethod = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div className="max-w-[500px] w-full">
      <Typography variant="h5" color="black" className="pt-2 pb-4">
        Isi Data Pembayaran
      </Typography>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader
          className={`bg-[#3c3c3c] p-4 mt-2 text-white rounded-md hover:bg-purple-600 duration-300 hover:text-white ${
            open === 1 ? "!bg-purple-600" : ""
          }`}
          onClick={() => handleOpen(1)}
        >
          Gopay
        </AccordionHeader>
        <AccordionBody>
          <p className="my-6 uppercase text-center font-bold text-xl">please pay for your ticket in the Akulaku app</p>
          <Button color="purple" className="w-full rounded-t-none">
            Bayar
          </Button>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader
          className={`bg-[#3c3c3c] p-4 mt-2 text-white rounded-md hover:bg-purple-600 duration-300 hover:text-white ${
            open === 2 ? "!bg-purple-600" : ""
          }`}
          onClick={() => handleOpen(2)}
        >
          Akulaku
        </AccordionHeader>
        <AccordionBody>
          <p className="my-6 uppercase text-center font-bold text-xl">please pay for your ticket in the Akulaku app</p>
          <Button color="purple" className="w-full rounded-t-none">
            Bayar
          </Button>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader
          className={`bg-[#3c3c3c] p-4 mt-2 text-white rounded-md hover:bg-purple-600 duration-300 hover:text-white ${
            open === 3 ? "!bg-purple-600" : ""
          }`}
          onClick={() => handleOpen(3)}
        >
          Dana
        </AccordionHeader>
        <AccordionBody>
          <p className="my-6 uppercase text-center font-bold text-xl">please pay for your ticket in the Akulaku app</p>
          <Button color="purple" className="w-full rounded-t-none">
            Bayar
          </Button>
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default PaymentMethod;
