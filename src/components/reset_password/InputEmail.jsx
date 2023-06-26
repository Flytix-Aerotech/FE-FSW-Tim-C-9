import { Card, Typography, Input, Button } from "@material-tailwind/react";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendOtpAction } from "../../config/Redux/action/authAction";

const InputEmail = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(sendOtpAction(data, history));
  };

  return (
    <Card color="transparent" shadow={false} className="flex flex-col items-center justify-center w-full">
      <Typography variant="h4" color="blue-gray">
        Masuk
      </Typography>
      <form className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-1 mb-4">
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
        </div>
        <Button type="submit" className="mt-6" fullWidth color="purple">
          Masuk
        </Button>
      </form>
    </Card>
  );
};

export default InputEmail;
