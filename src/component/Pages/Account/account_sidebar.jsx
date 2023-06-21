import {
  ArrowRightOnRectangleIcon,
  Cog8ToothIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { List, ListItem } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function AccountSideBar() {
  return (
    <div className="w-12/3 flex flex-col" id="side">
      <List>
        <ListItem>
          <PencilSquareIcon color="purple" className="h-5 w-5 mr-2" /><Link to="/Notif"> Ubah Profil </Link>
        </ListItem>
        <hr></hr>
        <ListItem>
          <Cog8ToothIcon color="purple" className="h-5 w-5 mr-2" /> Pengaturan Akun
        </ListItem>
        <hr></hr>
        <ListItem>
          <ArrowRightOnRectangleIcon color="purple" className="h-5 w-5 mr-2" />{" "}
          Keluar
        </ListItem>
        <hr></hr>
      </List>
      <span className="text-center text-gray-500 text-xs">Version 1.1.0</span>
    </div>
  );
}
