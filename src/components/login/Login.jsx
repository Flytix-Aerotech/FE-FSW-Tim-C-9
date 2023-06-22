import React from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { loginAction } from "../../config/Redux/action/authAction";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import API from "../../config/Api/baseApi";
import SweatAlert from "../../config/SweetAlert";

const Login = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(loginAction(data, history));
  };

  const onClick = async (data) => {
    await API.post(`/auth/user`, { email: data.email })
      .then((res) => {
        history(`/reset-password/${res.data.user.username}`);
      })
      .catch((error) => {
        const message = (error.response && error.response.data && error.response.data.msg) || error.msg || error.toString();
        SweatAlert(message, "warning");
      });
  };

  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <Card color="transparent" shadow={false} className="w-full flex flex-col justify-center items-center">
      <Typography variant="h4" color="blue-gray">
        Masuk
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 flex flex-col gap-1">
          <Input
            size="lg"
            label="Email"
            color="purple"
            {...register("email", {
              required: "Please enter your email",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Please input true email.",
              },
            })}
          />
          {errors.email && <small className="text-red-600">{errors.email?.message}</small>}
          <Typography color="gray" className="text-end mt-1">
            <button onClick={handleSubmit(onClick)} className="font-medium text-sm text-purple-500 transition-colors hover:text-purple-700">
              Lupa kata sandi?
            </button>
          </Typography>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              size="lg"
              label="Buat Password"
              color="purple"
              {...register("password", {
                required: "Please enter your password",
                minLength: {
                  value: 5,
                  message: "Password Too Short",
                },
                maxLength: {
                  value: 18,
                  message: "Password Too Long",
                },
              })}
            />
            <button type="button" className="bg-white p-2 absolute top-1/2 right-2 transform -translate-y-1/2" onClick={toggleShowPassword}>
              {showPassword ? <EyeIcon className="h-5 w-5" /> : <EyeSlashIcon className="h-5 w-5" />}
            </button>
          </div>
          {errors.password && <small className="text-red-600">{errors.password?.message}</small>}
        </div>
        <Button type="submit" className="mt-6" fullWidth color="purple">
          Masuk
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Belum punya akun?{" "}
          <Link to="/register" className="font-medium text-purple-500 transition-colors hover:text-purple-700">
            Daftar di sini
          </Link>
        </Typography>
      </form>
    </Card>
  );
};

export default Login;
