import React from "react";
import { Navbar, Collapse, Typography, IconButton, Input, MenuList, MenuItem, Menu, MenuHandler, Avatar, Button } from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  PowerIcon,
  MagnifyingGlassIcon,
  Bars4Icon,
  XMarkIcon,
  HomeIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import NavbarNotif from "./NavbarNotif";
import { logo } from "../../assets/images";

const ProfileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const profileMenuItems = [
    {
      label: "My Profile",
      icon: UserCircleIcon,
    },
    {
      label: "Edit Profile",
      icon: Cog6ToothIcon,
    },
    {
      label: "Inbox",
      icon: InboxArrowDownIcon,
    },
    {
      label: "Sign Out",
      icon: PowerIcon,
    },
  ];

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button variant="text" color="blue-gray" className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto">
          <Avatar
            variant="circular"
            size="sm"
            alt="candice wu"
            className="border border-blue-500 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon strokeWidth={2.5} className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""}`} />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${isLastItem ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10" : ""}`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography as="span" variant="small" className="font-normal" color={isLastItem ? "red" : "inherit"}>
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

const NavbarComplex = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const [test, setTest] = React.useState();
  const trigger = () => {
    console.log(test);
  };
  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const navList = (
    <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <Typography as="a" href="#" variant="small" color="blue-gray" className="font-normal">
        <MenuItem className="flex items-center gap-2 lg:rounded-full">
          <HomeIcon className="w-6 h-6" /> Home
        </MenuItem>
      </Typography>
      <Typography as="a" href="#" variant="small" color="blue-gray" className="font-normal">
        <MenuItem className="flex items-center gap-2 lg:rounded-full">
          <ExclamationCircleIcon className="w-6 h-6" /> About
        </MenuItem>
      </Typography>
      <div className="relative block w-full gap-2 md:w-max lg:hidden">
        <Input onKeyDown={trigger} type="search" label="Type here..." className="pr-10" onChange={(e) => setTest(e.target.value)} />
        <button onClick={trigger} className="!absolute right-2 top-2 rounded">
          <MagnifyingGlassIcon className="w-6 h-6" />
        </button>
      </div>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky inset-0 z-10 max-w-full px-4 py-4 rounded-none h-max lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className="flex items-center gap-4">
            <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium flex gap-2 items-center">
              <img src={logo} alt="" width={"40"} className="rounded-full" />{" "}
              <span className="text-2xl font-bold tracking-wider text-blue-400 uppercase">Flytix</span>
            </Typography>
            <div className="relative hidden w-full gap-2 md:w-max lg:block">
              <Input onKeyDown={trigger} type="search" label="Type here..." className="pr-10" onChange={(e) => setTest(e.target.value)} />
              <button onClick={trigger} className="!absolute right-2 top-2 rounded">
                <MagnifyingGlassIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden mr-4 lg:block">{navList}</div>
            <ProfileMenu />
            <IconButton
              variant="text"
              className="w-6 h-6 ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? <XMarkIcon className="w-7 h-7" /> : <Bars4Icon className="w-7 h-7" />}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>{navList}</Collapse>
      </Navbar>
      <NavbarNotif />
      {/* <div className="max-w-screen-md py-12 mx-auto">
        <Card className="mb-12 overflow-hidden">
          <img
            alt="nature"
            className="h-[32rem] w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
          />
        </Card>
      </div> */}
    </>
  );
};

export default NavbarComplex;
