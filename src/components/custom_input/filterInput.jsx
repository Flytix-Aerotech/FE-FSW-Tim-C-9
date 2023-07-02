import React from "react";
import { Button, Dialog, Input, ListItem } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const FilterInput = ({ handleClickFilter, open, handleOpen }) => {
  const [filter, setFilter] = React.useState("Filter");

  const handleClick = () => {
    handleOpen();
    handleClickFilter(filter);
  };
  return (
    <>
      <Input
        onClick={handleOpen}
        value={filter}
        readOnly
        color="purple"
        className="!border-t-blue-gray-200 focus:!border-t-purple-500 border-2"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Dialog
        open={open}
        className="w-3/4 min-w-[75%] max-w-[70%] lg:!w-1/4 lg:!min-w-[35%] lg:!max-w-[35%]"
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
            onClick={() => setFilter("Harga - Termurah")}
            ripple={false}
            className="rounded-lg text-base py-1.5 px-3 font-normal hover:bg-purple-600 focus:bg-purple-600 focus:text-white hover:text-white"
          >
            Harga - Termurah
          </ListItem>
          <ListItem
            onClick={() => setFilter("Harga - Termahal")}
            ripple={false}
            className="rounded-lg text-base py-1.5 px-3 font-normal hover:bg-purple-600 focus:bg-purple-600 focus:text-white hover:text-white"
          >
            Harga - Termahal
          </ListItem>
          <ListItem
            onClick={() => setFilter("Keberangkatan - Paling Awal")}
            ripple={false}
            className="rounded-lg text-base py-1.5 px-3 font-normal hover:bg-purple-600 focus:bg-purple-600 focus:text-white hover:text-white"
          >
            Keberangkatan - Paling Awal
          </ListItem>
          <ListItem
            onClick={() => setFilter("Keberangkatan - Paling Akhir")}
            ripple={false}
            className="rounded-lg text-base py-1.5 px-3 font-normal hover:bg-purple-600 focus:bg-purple-600 focus:text-white hover:text-white"
          >
            Keberangkatan - Paling Akhir
          </ListItem>
          <ListItem
            onClick={() => setFilter("Kedatangan - Paling Awal")}
            ripple={false}
            className="rounded-lg text-base py-1.5 px-3 font-normal hover:bg-purple-600 focus:bg-purple-600 focus:text-white hover:text-white"
          >
            Kedatangan - Paling Awal
          </ListItem>
          <ListItem
            onClick={() => setFilter("Kedatangan - Paling Akhir")}
            ripple={false}
            className="rounded-lg text-base py-1.5 px-3 font-normal hover:bg-purple-600 focus:bg-purple-600 focus:text-white hover:text-white"
          >
            Kedatangan - Paling Akhir
          </ListItem>
        </nav>
        <div className="flex items-end justify-end p-2 border-t-2">
          <Button color="purple" onClick={handleClick}>
            Simpan
          </Button>
        </div>
      </Dialog>
    </>
  );
};

export default FilterInput;
