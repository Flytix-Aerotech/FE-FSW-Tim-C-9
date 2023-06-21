import { Typography } from "@material-tailwind/react";
import PropTypes from "prop-types";
import {
  ArrowLeftIcon,
  BookmarkIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";
import { Chip } from "@material-tailwind/react";

export const HeadingContainer = ({
  title,
  titleButton,
  showSearch,
  showFilter,
  bgColor,
}) => {
  return (
    <div className="w-screen p-2 shadow-md">
      <div className="mx-[260px] my-5">
        <Typography className="p-5" variant="h5">
          {title}
        </Typography>
        <div className="flex flex-row">
          <Button
            className={`flex items-center gap-3 w-full mx-5 shadow-none hover:shadow-none ${bgColor}`}
            size="sm"
          >
            <ArrowLeftIcon strokeWidth={2} className="h-5 w-5" /> {titleButton}
          </Button>
          {showFilter && (
            <Chip
              color="purple"
              className="rounded-full text-gray-800 "
              value="Filter"
              variant="outlined"
              icon={<FunnelIcon className="text-gray-800" />}
            />
          )}
          {showSearch && (
            <Button
              className={`p-0 m-0 w-fit mx-5 shadow-none hover:shadow-none bg-transparent`}
              size="sm"
            >
              <MagnifyingGlassIcon
                strokeWidth={2}
                color="purple"
                className="h-5 w-5 p-0 m-0"
              />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

HeadingContainer.propTypes = {
  title: PropTypes.string,
  titleButton: PropTypes.string,
  showSearch: PropTypes.bool,
  showFilter: PropTypes.bool,
  bgColor: PropTypes.string,
};
