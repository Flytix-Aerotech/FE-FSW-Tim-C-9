import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const ProfileHeader = () => {
  return (
    <div className="w-full p-2 shadow-md">
      <div className="max-w-4xl w-full m-auto mt-6">
        <Typography className="p-5" variant="h5">
          Akun
        </Typography>
      </div>
      <div className="max-w-3xl w-full m-auto mb-6">
        <div className="flex flex-row w-full bg-purple-600 py-1 rounded-lg">
          <Link to="/">
            <Button className="flex items-center gap-3 bg-purple-600 w-full shadow-none hover:shadow-none" size="sm">
              <ArrowLeftIcon strokeWidth={2} className="h-5 w-5" /> Beranda
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
