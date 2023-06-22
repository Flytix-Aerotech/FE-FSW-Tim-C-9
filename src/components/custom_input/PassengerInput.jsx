import React from "react";
import { Button, Dialog, IconButton, Input, ListItem, ListItemSuffix } from "@material-tailwind/react";
import { PlusIcon, MinusIcon, XMarkIcon } from "@heroicons/react/24/solid";

const PassengerInput = () => {
  const [open, setOpen] = React.useState(false);

  const [adult, setAdult] = React.useState(0);
  const [children, setChildren] = React.useState(0);
  const [baby, setBaby] = React.useState(0);

  const valuePassenger = adult + children + baby;
  const totalPassenger = adult + children;
  localStorage.setItem("totalPassenger", totalPassenger);

  const handleOpen = () => setOpen((cur) => !cur);
  return (
    <>
      <Input
        variant="static"
        containerProps={{ className: "min-w-[50px]" }}
        onClick={handleOpen}
        label="Passengers"
        placeholder="Passengers"
        value={`${valuePassenger} Penumpang`}
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
          <ListItem ripple={false} className="py-1 pr-1 pl-4">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-black">Dewasa</span>
              <small>(12 tahun keatas)</small>
            </div>
            <ListItemSuffix className="flex gap-1">
              <IconButton onClick={() => setAdult(Math.max(adult - 1, 0))} variant="outlined" color="purple">
                <MinusIcon className="h-5 w-5" />
              </IconButton>
              <span className="border w-10 h-10 grid place-items-center rounded-lg border-gray-300">{adult}</span>
              <IconButton onClick={() => setAdult(adult + 1)} variant="outlined" color="purple">
                <PlusIcon className="h-5 w-5" />
              </IconButton>
            </ListItemSuffix>
          </ListItem>
          <ListItem ripple={false} className="py-1 pr-1 pl-4">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-black">Anak</span>
              <small>(2 - 11 tahun)</small>
            </div>
            <ListItemSuffix className="flex gap-1">
              <IconButton onClick={() => setChildren(Math.max(children - 1, 0))} variant="outlined" color="purple">
                <MinusIcon className="h-5 w-5" />
              </IconButton>
              <span className="border w-10 h-10 grid place-items-center rounded-lg border-gray-300">{children}</span>
              <IconButton onClick={() => setChildren(children + 1)} variant="outlined" color="purple">
                <PlusIcon className="h-5 w-5" />
              </IconButton>
            </ListItemSuffix>
          </ListItem>
          <ListItem ripple={false} className="py-1 pr-1 pl-4">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-black">Bayi</span>
              <small>(Dibawah 2 tahun)</small>
            </div>
            <ListItemSuffix className="flex gap-1">
              <IconButton onClick={() => setBaby(Math.max(baby - 1, 0))} variant="outlined" color="purple">
                <MinusIcon className="h-5 w-5" />
              </IconButton>
              <span className="border w-10 h-10 grid place-items-center rounded-lg border-gray-300">{baby}</span>
              <IconButton onClick={() => setBaby(baby + 1)} variant="outlined" color="purple">
                <PlusIcon className="h-5 w-5" />
              </IconButton>
            </ListItemSuffix>
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

export default PassengerInput;
