import React from "react";
import {
  CurrencyDollarIcon,
  HeartIcon,
  CubeIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemSuffix,
  ListItemPrefix,
} from "@material-tailwind/react";

export default function FilterSidebar() {
  return (
    <div className="w-12/3 flex flex-col ">
      <Card className="h-auto w-auto max-w-full p-4 shadow-xl shadow-gray-900/2 border-gray-950">
        <div className="mb-2 p-4">
          <Typography variant="h6" color="blue-gray">
            Filter
          </Typography>
        </div>
        <List>
          <ListItem>
            <ListItemPrefix>
              <CubeIcon className="h-5 w-5" />
            </ListItemPrefix>
            Transit
            <ChevronRightIcon className="icon-black h-5 w-5 ml-auto" />
          </ListItem>
          <hr className="border-t border-gray-300" />
          <ListItem>
            <ListItemPrefix>
              <HeartIcon className="h-5 w-5" />
            </ListItemPrefix>
            Fasilitas
            <ListItemSuffix>
              <ChevronRightIcon className="icon-black h-5 w-5 ml-auto" />
            </ListItemSuffix>
          </ListItem>
          <hr className="border-t border-gray-300" />
          <ListItem>
            <ListItemPrefix>
              <CurrencyDollarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Harga
            <ListItemSuffix>
              <ChevronRightIcon className="icon-black h-5 w-5 ml-auto" />
            </ListItemSuffix>
          </ListItem>
        </List>
      </Card>
    </div>
  );
}
