import { ArrowLeftIcon, FunnelIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Button, Typography, Chip, Popover, PopoverHandler, PopoverContent } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import SearchingHistoryInput from "../custom_input/SearchingHistoryInput";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

const HeaderHistory = ({ setSearchHistory, text, setDateFilter }) => {
  const [searchModalOpen, setIsModalOpen] = React.useState(false);
  const handleSearchModal = () => {
    setIsModalOpen(!searchModalOpen);
  };

  const [showDatePicker, setShowDatePicker] = React.useState(false);
  const handleButtonClick = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleDateChange = (date, dateString) => {
    setDateFilter(dateString);
    setShowDatePicker(false);
  };

  return (
    <div className="w-full p-2 shadow-md">
      <div className="max-w-4xl w-full m-auto mt-6">
        <Typography className="p-5" variant="h5">
          {text}
        </Typography>
      </div>
      <div className="max-w-3xl w-full m-auto mb-6 flex gap-3">
        <div className="flex flex-row w-full bg-purple-600 rounded-lg">
          <Link to="/">
            <Button className="flex items-center gap-3 bg-purple-600 w-full shadow-none hover:shadow-none" size="sm">
              <ArrowLeftIcon strokeWidth={2} className="h-5 w-5" /> Beranda
            </Button>
          </Link>
        </div>
        <Chip
          variant="outlined"
          value="Filter"
          color="purple"
          onClick={handleSearchModal}
          className="rounded-3xl hover:text-white hover:bg-purple-600 duration-300 cursor-pointer"
          icon={<FunnelIcon className="text-gray-500" />}
        />
        {searchModalOpen && <SearchingHistoryInput onClose={handleSearchModal} setSearchHistory={setSearchHistory} />}

        <Popover placement="left">
          <PopoverHandler>
            <Button onClick={handleButtonClick} className="shadow-none hover:shadow-none bg-transparent pl-1 relative" size="sm">
              <MagnifyingGlassIcon strokeWidth={2} color="purple" className="h-6 w-6 hover:scale-150 duration-300" />
            </Button>
          </PopoverHandler>
          <PopoverContent>
            <RangePicker
              className="border-purple-600 hover:border-purple-600 shadow-none"
              onChange={handleDateChange}
              onBlur={() => setShowDatePicker(false)}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default HeaderHistory;
