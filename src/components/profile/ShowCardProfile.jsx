import React from "react";
import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileAction } from "../../config/Redux/action/authAction";
import { icon_user } from "../../assets/images";

const ShowCardProfile = () => {
  const dispatch = useDispatch();
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
  return (
    <Card className="flex-col sm:flex-row w-full min-w-[18rem] sm:min-w-[32rem] mt-6 mb-10 mx-4 shadow-lg">
      <CardHeader
        shadow={false}
        floated={false}
        className="w-full sm:w-2/5 shrink-0 rounded-t-xl rounded-l-none rounded-r-none sm:rounded-l-xl sm:rounded-r-none m-0 bg-[#8E24AA]"
      >
        <img src={users?.photo !== null ? users?.photo : icon_user} alt="" className="object-cover w-full h-full" />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          {users?.full_name === undefined ? "" : users.full_name}
        </Typography>
        <Typography color="gray" className="mb-5 font-normal">
          {users?.email === undefined ? "" : users.email}
        </Typography>
        <div className="relative flex items-center w-full max-w-[270px] gap-3 border border-purple-600 rounded-lg overflow-hidden">
          <p className="py-1 px-3 text-white bg-purple-600 rounded-l-md">Username</p>
          <p className="py-1 whitespace-nowrap">{users?.username}</p>
          <i className="absolute bg-white h-8 w-3 top-0 right-0"></i>
        </div>
        <div className="relative flex items-center w-full max-w-[270px] gap-3 mt-5 border border-purple-600 rounded-lg overflow-hidden">
          <p className="py-1 pl-3 pr-9 text-white bg-purple-600 rounded-l-md">No Telp</p>
          <p className="py-1 whitespace-nowrap">{users?.phone_number}</p>
          <i className="absolute bg-white h-8 w-3 top-0 right-0"></i>
        </div>
      </CardBody>
    </Card>
  );
};

export default ShowCardProfile;
