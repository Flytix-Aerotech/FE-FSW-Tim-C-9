import React from "react";
import { Button, Dialog, Input } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const DepartureInput = ({ form }) => {
  const [open, setOpen] = React.useState(false);

  const [departure, setDeparture] = React.useState("Surabaya");
  const [searchQuery, setSearchQuery] = React.useState("");

  const { register } = form;

  const handleOpen = () => setOpen((cur) => !cur);

  const handleSubmit = (e) => {
    handleOpen();
    e.preventDefault();
    setDeparture(searchQuery);
  };

  const [recentSearches, setRecentSearches] = React.useState([]);

  const handleClearRecentSearches = () => {
    setRecentSearches([]);
  };
  return (
    <>
      <Input
        color="purple"
        variant="static"
        {...register("departure_location")}
        containerProps={{ className: "min-w-[50px]" }}
        onClick={handleOpen}
        value={departure}
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
        <div className="p-5">
          <div className="flex justify-between items-center mb-4">
            <div className="relative flex-1 mr-2 w-full">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <MagnifyingGlassIcon className="h-5 w-5" />
              </span>
              <input
                type="text"
                placeholder="Masukkan Kota"
                className="border text-black font-medium border-gray-300 text-sm rounded-lg py-2 pl-10 pr-2 flex-1 outline-none focus:border-purple-600"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button type="button" onClick={handleOpen} className="text-black hover:text-gray-700 ml-1">
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            </button>
          </div>
          <hr className="my-4 mt-2  border-gray-400" />
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Pencarian Terkini</h3>
            <button className="text-red-500 font-semibold" onClick={handleClearRecentSearches}>
              Hapus
            </button>
          </div>
          {/* Tampilkan daftar pencarian terkini */}
          {recentSearches.map((search, index) => (
            <div key={index}>{search}</div>
          ))}
          <div>
            <div className="mt-4">
              {recentSearches.includes("ABC1234") && (
                <div className="flex justify-between items-center py-2">
                  <span>ABC1234</span>
                  <button className="text-red-500 hover:text-red-700" onClick={() => handleClearRecentSearches(recentSearches.indexOf("ABC1234"))}>
                    Hapus
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-end justify-end p-2 border-t-2">
          <Button onClick={handleSubmit} color="purple">
            Simpan
          </Button>
        </div>
      </Dialog>
    </>
  );
};

export default DepartureInput;
