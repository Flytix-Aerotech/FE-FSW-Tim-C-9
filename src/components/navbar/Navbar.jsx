import React from "react";
import { Navbar, Collapse, Typography, IconButton, Input, MenuList, MenuItem, Menu, MenuHandler, Avatar, Button } from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  PowerIcon,
  MagnifyingGlassIcon,
  Bars4Icon,
  XMarkIcon,
  HomeIcon,
  ArrowRightOnRectangleIcon,
  BellIcon,
  NewspaperIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { icon_user, logo_flytix } from "../../assets/images";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProfileAction, logoutAction } from "../../config/Redux/action/authAction";

const ProfileMenu = ({ handleLogout }) => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  const [users, setUsers] = React.useState([]);

  const { user } = useSelector((state) => state.authReducer);

  React.useEffect(() => {
    dispatch(getProfileAction());
  }, [dispatch]);

  React.useEffect(() => {
    if (user) {
      setUsers(user);
    }
  }, [user]);

  const profileMenuItems = [
    {
      label: "My Profile",
      icon: UserCircleIcon,
      href: "/user/profile",
    },
    {
      label: "Edit Profile",
      icon: Cog6ToothIcon,
      href: "/edit/profile",
    },
    {
      label: "History",
      icon: NewspaperIcon,
      href: "/history",
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
            className="border border-purple-500 p-0.5"
            src={users?.photo !== null ? users?.photo : icon_user}
          />
          <ChevronDownIcon strokeWidth={2.5} className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""}`} />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, href }) => {
          return (
            <Link key={label} to={href} className="border-none outline-none">
              <MenuItem onClick={closeMenu} className={`flex items-center gap-2 rounded `}>
                {React.createElement(icon, {
                  className: `h-4 w-4`,
                  strokeWidth: 2,
                })}
                <Typography as="span" variant="small" className="font-normal" color="inherit">
                  {label}
                </Typography>
              </MenuItem>
            </Link>
          );
        })}
        <MenuItem onClick={handleLogout} className="flex items-center gap-2 hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10">
          <PowerIcon className="w-4 h-4 text-red-500" />
          <Typography as="span" variant="small" className="font-normal" color="red">
            Sign Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

const NavbarComplex = () => {
  const dispatch = useDispatch();
  const [openNav, setOpenNav] = React.useState(false);

  const { isLoggedIn } = useSelector((state) => state.authReducer);

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const navList = (
    <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <a href="/">
        <Typography variant="small" color="blue-gray" className="font-normal">
          <MenuItem className="flex items-center gap-2 px-0 lg:rounded-full lg:px-3">
            <HomeIcon className="w-6 h-6" /> Home
          </MenuItem>
        </Typography>
      </a>
      <Link to="/about">
        <Typography variant="small" color="blue-gray" className="font-normal">
          <MenuItem className="flex items-center gap-2 px-0 lg:rounded-full lg:px-3">
            <InformationCircleIcon className="w-6 h-6" /> About
          </MenuItem>
        </Typography>
      </Link>
      <Link to="/notification">
        <Typography variant="small" color="blue-gray" className="font-normal">
          <MenuItem className="flex items-center gap-2 px-0 lg:rounded-full lg:px-3">
            <BellIcon className="w-6 h-6" /> Notification
          </MenuItem>
        </Typography>
      </Link>
      <div className="relative block w-full gap-2 sm:w-max lg:hidden">
        <Input color="purple" type="search" label="Type here..." className="pr-10" />
        <button className="!absolute right-2 top-2 rounded">
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
            <Typography as="a" href="/" className="mr-4 cursor-pointer py-1.5 font-medium flex gap-2 items-center">
              <img src={logo_flytix} alt="" width={"40"} className="rounded-full" />{" "}
              <span className="text-2xl font-bold tracking-wider text-purple-600 uppercase">Flytix</span>
            </Typography>
            <div className="relative hidden w-full gap-2 md:w-max lg:block">
              <Input color="purple" type="search" label="Type here..." className="pr-10" />
              <button className="!absolute right-2 top-2 rounded">
                <MagnifyingGlassIcon className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden mr-4 lg:block">{navList}</div>
            {isLoggedIn ? (
              <ProfileMenu handleLogout={handleLogout} />
            ) : (
              <Link to="/login">
                <Button color="purple" className="flex items-center gap-2" size="sm">
                  <ArrowRightOnRectangleIcon className="w-6 h-6" /> Masuk
                </Button>
              </Link>
            )}
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
    </>
  );
};

export default NavbarComplex;
