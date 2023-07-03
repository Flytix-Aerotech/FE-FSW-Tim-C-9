import React from "react";
import { Button, Dialog, Input, ListItem } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const SeatInput = ({ form }) => {
  const [open, setOpen] = React.useState(false);

  const [seatClass, setSeatClass] = React.useState("Economy");

  const { register } = form;

  const handleOpen = () => setOpen((cur) => !cur);
  return (
    <>
      <Input
        color="purple"
        variant="static"
        {...register("type_of_class")}
        containerProps={{ className: "min-w-[50px]" }}
        onClick={handleOpen}
        label="Seat Class"
        value={seatClass}
      />
      <Dialog
        open={open}
        className="w-full min-w-[85%] max-w-[80%] sm:!w-2/4 sm:!min-w-[60%] sm:!max-w-[60%] md:!w-2/4 md:!min-w-[45%] md:!max-w-[45%] lg:!w-1/4 lg:!min-w-[30%] lg:!max-w-[30%]"
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.5, y: -100 },
        }}
      >
        <div className="flex items-end justify-end p-2 border-b-2">
          <button className="text-black duration-300 bg-white hover:bg-gray-200" onClick={handleOpen}>
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col w-full gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
          <ListItem
            onClick={() => setSeatClass("First")}
            ripple={false}
            className="rounded-lg text-base py-1.5 px-3 font-normal hover:bg-purple-600 focus:bg-purple-600 focus:text-white hover:text-white"
          >
            <div className="flex flex-col gap-2">
              <span className="font-bold">First</span>
              <small>Mulai dari IDR 1.489.980</small>
            </div>
          </ListItem>
          <ListItem
            onClick={() => setSeatClass("Business")}
            ripple={false}
            className="rounded-lg text-base py-1.5 px-3 font-normal hover:bg-purple-600 focus:bg-purple-600 focus:text-white hover:text-white"
          >
            <div className="flex flex-col gap-2">
              <span className="font-bold">Business</span>
              <small>Mulai dari IDR 1.019.980</small>
            </div>
          </ListItem>
          <ListItem
            onClick={() => setSeatClass("Premium")}
            ripple={false}
            className="rounded-lg text-base py-1.5 px-3 font-normal hover:bg-purple-600 focus:bg-purple-600 focus:text-white hover:text-white"
          >
            <div className="flex flex-col gap-2">
              <span className="font-bold">Premium</span>
              <small>Mulai dari IDR 889.980</small>
            </div>
          </ListItem>
          <ListItem
            onClick={() => setSeatClass("Economy")}
            ripple={false}
            className="rounded-lg text-base py-1.5 px-3 font-normal hover:bg-purple-600 focus:bg-purple-600 focus:text-white hover:text-white"
          >
            <div className="flex flex-col gap-2">
              <span className="font-bold">Economy</span>
              <small>Mulai dari IDR 729.980</small>
            </div>
          </ListItem>
        </nav>
        <div className="flex items-end justify-end p-2 border-t-2">
          <Button color="purple" onClick={handleOpen}>
            Simpan
          </Button>
        </div>
      </Dialog>
    </>
  );
};

export default SeatInput;
