import { Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { UserCircleIcon, PencilSquareIcon, PowerIcon } from "@heroicons/react/24/solid";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../config/Redux/action/authAction";

const SidebarProfile = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const active = "bg-blue-gray-50 bg-opacity-80 text-blue-gray-900";
  const handleLogout = () => {
    dispatch(logoutAction(history));
  };

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
        <ListItem onClick={() => handleLogout} className="text-red-500 hover:bg-red-50 hover:text-red-500">
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