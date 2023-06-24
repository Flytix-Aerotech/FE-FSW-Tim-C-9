import React from "react";
import { Button, Dialog, ListItem } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const FilterInput = ({ handleClickFilter }) => {
  const [open, setOpen] = React.useState(false);

  const [filter, setFilter] = React.useState("Filter");

  const handleOpen = () => setOpen((cur) => !cur);

  const handleClick = () => {
    handleOpen();
    handleClickFilter(filter);
  };
  return (
    <>
      <input
        type="text"
        id="default-input"
        onClick={handleOpen}
        value={filter}
        className="bg-gray-50 border-2 border-purple-400 text-gray-900 text-sm rounded-lg focus:border-purple-800 block w-full p-2.5"
      ></input>
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
