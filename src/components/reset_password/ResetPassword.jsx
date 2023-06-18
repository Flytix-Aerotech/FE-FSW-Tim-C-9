import React from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import { resetPasswordAction } from "../../config/Redux/action/authAction";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const params = useParams();
  const [showPassword, setShowPassword] = React.useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(resetPasswordAction(data, history, params.username));
  };

  return (
    <Card color="transparent" shadow={false} className="w-full flex flex-col justify-center items-center">
      <Typography variant="h4" color="blue-gray">
        Reset Password
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 flex flex-col gap-6">
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
              <button type="button" className="bg-white p-2 absolute top-1/2 right-2 transform -translate-y-1/2" onClick={toggleShowPassword}>
                {showPassword ? <EyeIcon className="h-5 w-5" /> : <EyeSlashIcon className="h-5 w-5" />}
              </button>
            </div>
            {errors.password && <small className="text-red-600">{errors.password?.message}</small>}
          </div>
          <div>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
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
              <button type="button" className="bg-white p-2 absolute top-1/2 right-2 transform -translate-y-1/2" onClick={toggleShowPassword}>
                {showPassword ? <EyeIcon className="h-5 w-5" /> : <EyeSlashIcon className="h-5 w-5" />}
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
