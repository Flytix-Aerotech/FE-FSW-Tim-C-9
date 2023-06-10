import { Navbar, Typography, IconButton, Button, Input } from "@material-tailwind/react";
import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import { logonav } from "../../assets/images";

const NavbarPage = () => {
  return (
    <Navbar className="">
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900">
        <Typography as="a" href="#" variant="h6" className="mr-4 ml-2 cursor-pointer py-1.5 flex items-center gap-2">
          <div className="bg-[#2196F3] rounded-full">
            <img src={logonav} alt="" width={"50"} />
          </div>
          <span className="text-2xl">Flytix</span>
        </Typography>
        <div className="ml-auto flex gap-1 md:mr-4">
          <IconButton variant="text" color="blue-gray">
            <Cog6ToothIcon className="h-4 w-4" />
          </IconButton>
          <IconButton variant="text" color="blue-gray">
            <BellIcon className="h-4 w-4" />
          </IconButton>
        </div>
        <div className="relative flex w-full gap-2 md:w-max">
          <Input
            type="search"
            label="Type here..."
            className="pr-20"
            containerProps={{
              className: "min-w-[288px]",
            }}
          />
          <Button size="sm" className="!absolute right-1 top-1 rounded">
            Search
          </Button>
        </div>
      </div>
    </Navbar>
  );
};

export default NavbarPage;
