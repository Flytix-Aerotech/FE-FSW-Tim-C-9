import { Typography } from "@material-tailwind/react";
import PropTypes from "prop-types";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";

export const HeadingContainer = ({
  title,
  titleButton,
  titleButton2,
  bgColor,
  bgColor2,
}) => {
  return (
    <div className="w-screen p-2 shadow-md">
      <div className="mx-[260px] my-5">
        <Typography
          className="p-5 font-bold"
          variant="h5"
          style={{ fontFamily: "Poppins" }}
        >
          {title}
        </Typography>
        <div className="flex flex-row">
          <Button
            className={`flex items-center gap-5 w-full mx-3 text-sm shadow-none hover:shadow-none ${bgColor}`}
            size="sm"
          >
            <ArrowLeftIcon strokeWidth={2} className="h-5 w-5" />
            {titleButton}
          </Button>
          <Button
            className={`flex items-center w-400 shadow-none hover:shadow-none ${bgColor2}`}
            size="sm"
          >
            {titleButton2}
          </Button>
        </div>
        <div className="flex justify-center py-5">
          <ul className="flex w-full theme1.font-poppins">
            <li className="flex flex-col items-center list-item text-sm text-center hover:bg-purple-500 hover:border-purple-500 hover:border-r-4 hover:rounded">
              <div className="font-bold">Selasa</div>
              <div>01/03/2023</div>
            </li>
            <li className="flex flex-col items-center list-item text-sm text-center flex-shrink-0 ">
              <div className="font-bold">Rabu</div>
              <div>02/03/2023</div>
            </li>
            <li className="flex-1 flex flex-col items-center list-item text-sm text-center ">
              <div className="font-bold">Kamis</div>
              <div>03/03/2023</div>
            </li>
            <li className="flex-1 flex flex-col items-center list-item text-sm text-center ">
              <div className="font-bold">Jumat</div>
              <div>04/03/2023</div>
            </li>
            <li className="flex-1 flex flex-col items-center list-item text-sm text-center ">
              <div className="font-bold">Sabtu</div>
              <div>05/03/2023</div>
            </li>
            <li className="flex-1 flex flex-col items-center list-item text-sm text-center ">
              <div className="font-bold">Minggu</div>
              <div>06/03/2023</div>
            </li>
            <li className="flex-1 flex flex-col items-center list-item text-sm text-center ">
              <div className="font-bold">Senin</div>
              <div>07/03/2023</div>
            </li>
            <li className="flex-1 flex flex-col items-center list-item text-sm text-center ">
              <div className="font-bold">Selasa</div>
              <div>07/03/2023</div>
            </li>
          </ul>
        </div>
        <hr />
      </div>
    </div>
  );
};

HeadingContainer.propTypes = {
  title: PropTypes.string,
  titleButton: PropTypes.string,
  titleButton2: PropTypes.string,
  bgColor: PropTypes.string,
  bgColor2: PropTypes.string,
};
