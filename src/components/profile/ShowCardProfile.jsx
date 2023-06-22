import React from "react";
import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileAction } from "../../config/Redux/action/authAction";

const ShowCardProfile = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = React.useState([]);

  const { user } = useSelector((state) => state.authReducer);
  console.log(users);

  React.useEffect(() => {
    dispatch(getProfileAction());
  }, [dispatch]);

  React.useEffect(() => {
    if (user) {
      setUsers(user);
    }
  }, [user]);

  return (
    <Card className="flex-row w-full max-w-[500px] mt-10 mx-4">
      <CardHeader shadow={false} floated={false} className="w-1/3 shrink-0 m-0 rounded-r-none">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
      </CardHeader>
      <CardBody className="w-full">
        <Typography variant="h4" color="blue-gray">
          {users.full_name}
        </Typography>
        <Typography color="gray" className="font-normal mb-5">
          {users.email}
        </Typography>
        <div className="flex items-center max-w-xs gap-3 border border-purple-600 rounded-lg w-full">
          <p className="bg-purple-600 w-28 pl-3 py-1 text-white rounded-l-md">Username</p>
          <p className="py-1">{users.username}</p>
        </div>
        <div className="flex items-center max-w-xs gap-3 border border-purple-600 rounded-lg mt-5 w-full">
          <p className="bg-purple-600 w-28 pl-3 py-1 text-white rounded-l-md">No Telp</p>
          <p className="py-1">{users.phone_number}</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default ShowCardProfile;
