import { Typography } from "@material-tailwind/react";
import { NavigationBar } from "./navbar";
import {
  BellIcon,
  ListBulletIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export const BaseLayout = ({ children }) => {
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          <ListBulletIcon color="purple" className="h-5 w-5 mr-2" />{" "}
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          <BellIcon color="gray" className="h-5 w-5 mr-2" />{" "}
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          <UserIcon color="gray" className="h-5 w-5 mr-2" />{" "}
        </a>
      </Typography>
    </ul>
  );

  return (
    <>
      <NavigationBar navList={navList} />
      {children}
    </>
  );
};
