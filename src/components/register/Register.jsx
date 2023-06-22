import React from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerAction } from "../../config/Redux/action/authAction";
import { useForm } from "react-hook-form";

const Register = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = React.useState(false);
  const history = useNavigate();
  const toggleShowPassword = () => setShowPassword(!showPassword);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(registerAction(data, history));
  };

  return (
    <Card color="transparent" shadow={false} className="w-full flex flex-col justify-center items-center">
      <Typography variant="h4" color="blue-gray">
        Daftar
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 flex flex-col gap-4">
          <div className="relative">
            <Input
              size="lg"
              label="Nama"
              color="purple"
              {...register("full_name", {
                required: "Please enter your full name",
                pattern: { value: /^[a-zA-Z ]+$/i, message: "Please input true name." },
              })}
            />
            {errors.full_name && <small className="text-red-600">{errors.full_name?.message}</small>}
          </div>
          <div className="relative">
            <Input
              size="lg"
              label="Username"
              color="purple"
              {...register("username", {
                required: "Please enter your username",
                minLength: { value: 5, message: "Username Too Short" },
                maxLength: { value: 30, message: "Username Too Long" },
                pattern: { value: /^[a-zA-Z.!@#$%^&*-=_+ ]+$/i, message: "Please input true username." },
              })}
            />
            {errors.username && <small className="text-red-600">{errors.username?.message}</small>}
          </div>
          <div className="relative">
            <Input
              size="lg"
              label="Email"
              color="purple"
              {...register("email", {
                required: "Please enter your email",
                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Please input true email." },
              })}
            />
            {errors.email && <small className="text-red-600">{errors.email?.message}</small>}
          </div>
          <div className="relative">
            <Input
              size="lg"
              label="Nomor Telepon"
              color="purple"
              {...register("phone_number", {
                required: "Please enter your full name",
                minLength: { value: 5, message: "Password Too Short" },
                pattern: { value: /^\+?([0-9]{4})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{2,4})$/i, message: "Please input true phone number." },
              })}
            />
            {errors.phone_number && <small className="text-red-600">{errors.phone_number?.message}</small>}
          </div>
          <div>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                size="lg"
                label="Buat Password"
                color="purple"
                {...register("password", {
                  required: "Please enter your password",
                  minLength: { value: 5, message: "Password Too Short" },
                  maxLength: { value: 20, message: "Password Too Long" },
                })}
              />
              <button type="button" className="bg-white p-2 absolute top-1/2 right-2 transform -translate-y-1/2" onClick={toggleShowPassword}>
                {showPassword ? <EyeIcon className="h-5 w-5" /> : <EyeSlashIcon className="h-5 w-5" />}
              </button>
            </div>
            {errors.password && <small className="text-red-600">{errors.password?.message}</small>}
          </div>
        </div>
        <Button type="submit" className="mt-6" fullWidth color="purple">
          Daftar
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Sudah punya akun?{" "}
          <Link to="/login" className="font-medium text-purple-500 transition-colors hover:text-purple-700">
            Masuk di sini
          </Link>
        </Typography>
      </form>
    </Card>
  );
};

export default Register;
