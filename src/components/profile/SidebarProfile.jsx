import { Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { UserCircleIcon, PencilSquareIcon, PowerIcon } from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom";

const SidebarProfile = () => {
  const { pathname } = useLocation();
  const active = "bg-blue-gray-50 bg-opacity-80 text-blue-gray-900";

  return (
    <Card className="top-4 left-4 w-full max-w-[20rem] p-4 shadow-none hidden lg:block h-max">
      <List>
        <Link to="/user/profile">
          <ListItem className={pathname === "/user/profile" ? active : ""}>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
        </Link>
        <Link to="/edit/profile">
          <ListItem className={pathname === "/edit/profile" ? active : ""}>
            <ListItemPrefix>
              <PencilSquareIcon className="h-5 w-5" />
            </ListItemPrefix>
            Edit Profile
          </ListItem>
        </Link>
        <ListItem className="text-red-500 hover:bg-red-50 hover:text-red-500">
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
};

export default SidebarProfile;
