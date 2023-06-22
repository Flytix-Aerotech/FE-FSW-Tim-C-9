import React from "react";
import { Button, Dialog, Input, ListItem } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const DepartureInput = ({ form }) => {
  const [open, setOpen] = React.useState(false);

  const [departure, setDeparture] = React.useState("Jakarta");

  const { register } = form;

  const handleOpen = () => setOpen((cur) => !cur);
  return (
    <>
      <Input
        variant="static"
        {...register("departure_location")}
        containerProps={{ className: "min-w-[50px]" }}
        onClick={handleOpen}
        value={departure}
      />
      <Dialog
        open={open}
        size="xl"
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.5, y: -100 },
        }}
      >
        <div className="flex items-end justify-end p-2 border-b-2">
          <button className="text-black bg-white hover:bg-gray-200 duration-300" onClick={handleOpen}>
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col gap-1 w-full p-2 font-sans text-base font-normal text-blue-gray-700">
          <ListItem
            onClick={() => setDeparture("Jakarta")}
            ripple={false}
            className="rounded-lg text-base py-1.5 px-3 font-normal hover:bg-purple-600 focus:bg-purple-600 focus:text-white hover:text-white"
          >
            Jakarta
          </ListItem>
          <ListItem
            onClick={() => setDeparture("Bandung")}
            ripple={false}
            className="rounded-lg text-base py-1.5 px-3 font-normal hover:bg-purple-600 focus:bg-purple-600 focus:text-white hover:text-white"
          >
            Bandung
          </ListItem>
          <ListItem
            onClick={() => setDeparture("Yogyakarta")}
            ripple={false}
            className="rounded-lg text-base py-1.5 px-3 font-normal hover:bg-purple-600 focus:bg-purple-600 focus:text-white hover:text-white"
          >
            Yogyakarta
          </ListItem>
          <ListItem
            onClick={() => setDeparture("Surabaya")}
            ripple={false}
            className="rounded-lg text-base py-1.5 px-3 font-normal hover:bg-purple-600 focus:bg-purple-600 focus:text-white hover:text-white"
          >
            Surabaya
          </ListItem>
          <ListItem
            onClick={() => setDeparture("Denpasar")}
            ripple={false}
            className="rounded-lg text-base py-1.5 px-3 font-normal hover:bg-purple-600 focus:bg-purple-600 focus:text-white hover:text-white"
          >
            Denpasar
          </ListItem>
          <ListItem
            onClick={() => setDeparture("Palu")}
            ripple={false}
            className="rounded-lg text-base py-1.5 px-3 font-normal hover:bg-purple-600 focus:bg-purple-600 focus:text-white hover:text-white"
          >
            Palu
          </ListItem>
          <ListItem
            onClick={() => setDeparture("Batam")}
            ripple={false}
            className="rounded-lg text-base py-1.5 px-3 font-normal hover:bg-purple-600 focus:bg-purple-600 focus:text-white hover:text-white"
          >
            Batam
          </ListItem>
          <ListItem
            onClick={() => setDeparture("Pangkal Pinang")}
            ripple={false}
            className="rounded-lg text-base py-1.5 px-3 font-normal hover:bg-purple-600 focus:bg-purple-600 focus:text-white hover:text-white"
          >
            Pangkal Pinang
          </ListItem>
          <ListItem
            onClick={() => setDeparture("Ambon")}
            ripple={false}
            className="rounded-lg text-base py-1.5 px-3 font-normal hover:bg-purple-600 focus:bg-purple-600 focus:text-white hover:text-white"
          >
            Ambon
          </ListItem>
          <ListItem
            onClick={() => setDeparture("Palembang")}
            ripple={false}
            className="rounded-lg text-base py-1.5 px-3 font-normal hover:bg-purple-600 focus:bg-purple-600 focus:text-white hover:text-white"
          >
            Palembang
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

export default DepartureInput;
