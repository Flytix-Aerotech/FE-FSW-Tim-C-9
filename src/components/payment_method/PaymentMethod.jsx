import { Typography, Accordion, AccordionHeader, AccordionBody, Button } from "@material-tailwind/react";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { makePaymentAction } from "../../config/Redux/action/paymentAction";

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
  const params = useParams();
  const dispatch = useDispatch();
  const history = useNavigate();

  const pay = [
    { id: 1, name: "Gopay" },
    { id: 2, name: "Akulaku" },
  ];

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const handleSubmit = (value) => {
    dispatch(makePaymentAction(params.code, value, history));
  };

  return (
    <div className="max-w-[500px] w-full">
      <Typography variant="h5" color="black" className="pt-2 pb-4">
        Isi Data Pembayaran
      </Typography>
      {pay.map((item, index) => (
        <Accordion key={index} open={open === item.id} icon={<Icon id={item.id} open={open} />}>
          <AccordionHeader
            className={`bg-[#3c3c3c] p-4 mt-2 text-white rounded-md hover:bg-purple-600 duration-300 hover:text-white ${
              open === item.id ? "!bg-purple-600" : ""
            }`}
            onClick={() => handleOpen(item.id)}
          >
            {item.name}
          </AccordionHeader>
          <AccordionBody>
            <p className="my-6 uppercase text-center font-bold text-xl">please pay your ticket in the {item.name} app</p>
            <Button onClick={() => handleSubmit(item.name)} color="purple" className="w-full rounded-t-none">
              Bayar
            </Button>
          </AccordionBody>
        </Accordion>
      ))}
    </div>
  );
};

export default PaymentMethod;
