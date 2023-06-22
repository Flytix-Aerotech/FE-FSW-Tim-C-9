import React from "react";
import { Button, Dialog, Input, ListItem } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const ArrivalInput = ({ form }) => {
  const [open, setOpen] = React.useState(false);

  const [arrival, setArrival] = React.useState("Bandung");

  const { register } = form;

  const handleOpen = () => setOpen((cur) => !cur);
  return (
    <>
      <Input variant="static" {...register("arrival_location")} containerProps={{ className: "min-w-[50px]" }} onClick={handleOpen} value={arrival} />
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
            onClick={() => setArrival("Jakarta")}
            ripple={false}
            className="rounded-lg text-base py-1.5 px-3 font-normal hover:bg-purple-600 focus:bg-purple-600 focus:text-white hover:text-white"
          >
            Jakarta
          </ListItem>
          <ListItem
            onClick={() => setArrival("Bandung")}
            ripple={false}
            className="rounded-lg text-base py-1.5 px-3 font-normal hover:bg-purple-600 focus:bg-purple-600 focus:text-white hover:text-white"
          >
            Bandung
          </ListItem>
          <ListItem
            onClick={() => setArrival("Yogyakarta")}
            ripple={false}
            className="rounded-lg text-base py-1.5 px-3 font-normal hover:bg-purple-600 focus:bg-purple-600 focus:text-white hover:text-white"
          >
            Yogyakarta
          </ListItem>
          <ListItem
            onClick={() => setArrival("Surabaya")}
            ripple={false}
            className="rounded-lg text-base py-1.5 px-3 font-normal hover:bg-purple-600 focus:bg-purple-600 focus:text-white hover:text-white"
          >
            Surabaya
          </ListItem>
          <ListItem
            onClick={() => setArrival("Denpasar")}
            ripple={false}
            className="rounded-lg text-base py-1.5 px-3 font-normal hover:bg-purple-600 focus:bg-purple-600 focus:text-white hover:text-white"
          >
            Denpasar
          </ListItem>
          <ListItem
            onClick={() => setArrival("Bandar Lampung")}
            ripple={false}
            className="rounded-lg text-base py-1.5 px-3 font-normal hover:bg-purple-600 focus:bg-purple-600 focus:text-white hover:text-white"
          >
            Bandar Lampung
          </ListItem>
          <ListItem
            onClick={() => setArrival("Medan")}
            ripple={false}
            className="rounded-lg text-base py-1.5 px-3 font-normal hover:bg-purple-600 focus:bg-purple-600 focus:text-white hover:text-white"
          >
            Medan
          </ListItem>
          <ListItem
            onClick={() => setArrival("Pontianak")}
            ripple={false}
            className="rounded-lg text-base py-1.5 px-3 font-normal hover:bg-purple-600 focus:bg-purple-600 focus:text-white hover:text-white"
          >
            Pontianak
          </ListItem>
          <ListItem
            onClick={() => setArrival("Semarang")}
            ripple={false}
            className="rounded-lg text-base py-1.5 px-3 font-normal hover:bg-purple-600 focus:bg-purple-600 focus:text-white hover:text-white"
          >
            Semarang
          </ListItem>
          <ListItem
            onClick={() => setArrival("Makassar")}
            ripple={false}
            className="rounded-lg text-base py-1.5 px-3 font-normal hover:bg-purple-600 focus:bg-purple-600 focus:text-white hover:text-white"
          >
            Makassar
          </ListItem>
          <ListItem
            onClick={() => setArrival("Labuan bajo")}
            ripple={false}
            className="rounded-lg text-base py-1.5 px-3 font-normal hover:bg-purple-600 focus:bg-purple-600 focus:text-white hover:text-white"
          >
            Labuan bajo
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

export default ArrivalInput;
