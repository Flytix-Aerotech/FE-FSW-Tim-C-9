import React from "react";
import { Button, Input, Card, CardBody, Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileAction, updateProfileAction } from "../../config/Redux/action/authAction";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const EditCardProfile = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [users, setUsers] = React.useState([]);

  const { user } = useSelector((state) => state.authReducer);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(updateProfileAction(data, history));
  };

  React.useEffect(() => {
    dispatch(getProfileAction());
  }, [dispatch]);

  React.useEffect(() => {
    if (user) {
      setUsers(user);
    }
  }, [user]);
  return (
    <Card className="w-full max-w-[500px] mt-10 mx-4">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Ubah Data Profil
        </Typography>
        <div className="bg-purple-300 text-white p-3 rounded-tr-lg rounded-tl-lg">Data Diri</div>
        <form className="mt-3 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Typography variant="small" color="blue-gray" className="mb-2 font-bold">
              Nama Lengkap
            </Typography>
            <Input
              size="md"
              color="purple"
              defaultValue={users.full_name}
              {...register("full_name", {
                required: "Please enter your full name",
                pattern: { value: /^[a-zA-Z ]+$/i, message: "Please input true name." },
              })}
            />
            {errors.full_name && <small className="text-red-600">{errors.full_name?.message}</small>}
          </div>
          <div>
            <Typography variant="small" color="blue-gray" className="mb-2 font-bold">
              Username
            </Typography>
            <Input
              size="md"
              color="purple"
              defaultValue={users.username}
              {...register("username", {
                required: "Please enter your username",
                minLength: { value: 5, message: "Username Too Short" },
                maxLength: { value: 30, message: "Username Too Long" },
                pattern: { value: /^[a-zA-Z.!@#$%^&*-=_+ ]+$/i, message: "Please input true username." },
              })}
            />
            {errors.username && <small className="text-red-600">{errors.username?.message}</small>}
          </div>
          <div>
            <Typography variant="small" color="blue-gray" className="mb-2 font-bold">
              Nomor Telepon
            </Typography>
            <Input
              size="md"
              color="purple"
              defaultValue={users.phone_number}
              {...register("phone_number", {
                required: "Please enter your full name",
                minLength: { value: 5, message: "Password Too Short" },
                pattern: { value: /^\+?([0-9]{4})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{2,4})$/i, message: "Please input true phone number." },
              })}
            />
            {errors.phone_number && <small className="text-red-600">{errors.phone_number?.message}</small>}
          </div>
          <div className="flex items-center justify-center">
            <Button color="purple" className="w-fit" type="submit">
              Simpan
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
};

export default EditCardProfile;
