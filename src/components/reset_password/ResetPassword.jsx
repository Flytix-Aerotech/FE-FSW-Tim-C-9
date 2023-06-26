import React from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import { resetPasswordAction } from "../../config/Redux/action/authAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const email = localStorage.getItem("email");
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(resetPasswordAction(data, history, email));
  };

  return (
    <Card color="transparent" shadow={false} className="flex flex-col items-center justify-center w-full">
      <Typography variant="h4" color="blue-gray">
        Reset Password
      </Typography>
      <form className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6 mb-4">
          <div>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                size="lg"
                label="Masukkan Password Baru"
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
              <button
                type="button"
                className="absolute p-2 transform -translate-y-1/2 bg-white top-1/2 right-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeIcon className="w-5 h-5" /> : <EyeSlashIcon className="w-5 h-5" />}
              </button>
            </div>
            {errors.password && <small className="text-red-600">{errors.password?.message}</small>}
          </div>
          <div>
            <div className="relative">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                size="lg"
                label="Ulangi Password Baru"
                color="purple"
                {...register("confirmPassword", {
                  required: "Please enter your password",
                  minLength: {
                    value: 5,
                    message: "Password Too Short",
                  },
                  maxLength: {
                    value: 18,
                    message: "Password Too Long",
                  },
                  validate: (val) => {
                    if (watch("password") !== val) {
                      return "Your passwords don't match";
                    }
                  },
                })}
              />
              <button
                type="button"
                className="absolute p-2 transform -translate-y-1/2 bg-white top-1/2 right-2"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeIcon className="w-5 h-5" /> : <EyeSlashIcon className="w-5 h-5" />}
              </button>
            </div>
            {errors.confirmPassword && <small className="text-red-600">{errors.confirmPassword?.message}</small>}
          </div>
        </div>
        <Button type="submit" className="mt-6" fullWidth color="purple">
          Simpan
        </Button>
      </form>
    </Card>
  );
};

export default ResetPassword;
