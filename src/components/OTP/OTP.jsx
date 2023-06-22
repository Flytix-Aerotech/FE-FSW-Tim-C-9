import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { logo } from "../../assets/images";
import OtpInput from "react-otp-input";
// import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";

const OTP = () => {
  // const history = useNavigate();

  const [otp, setOtp] = React.useState("");

  // const handleChange = (code) => otp(otp);
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = (data) => {};

  return (
    <>
      <nav className="border-b-2 py-4 px-10 fixed top-0 w-screen">
        <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium flex gap-2 items-center">
          <img src={logo} alt="" width={"40"} className="rounded-full" />{" "}
          <span className="text-2xl font-bold tracking-wider text-purple-600 uppercase">Flytix</span>
        </Typography>
      </nav>
      <div className="flex items-center justify-center h-screen">
        <form className="max-w-xl w-full flex flex-col gap-10">
          <Typography variant="h4" className="font-bold">
            Masukkan OTP
          </Typography>
          <p className="text-center">Ketik 6 digit kode yang dikirimkan ke J*****@gmail.com</p>
          <div className="grid place-items-center">
            <OtpInput
              inputStyle={{
                border: "1px solid #CFD3DB",
                borderRadius: "20px",
                width: "50px",
                height: "50px",
                fontSize: "20px",
                color: "#303030",
                fontWeight: "500",
                caretColor: "purple",
                margin: "5px",
              }}
              focusStyle={{
                border: "2px solid #CFD3DB",
              }}
              inputType="number"
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
            />
            <p className="text-center mt-3">Kirim Ulang OTP dalam 60 detik</p>
          </div>
          <Button type="submit" className="w-full" color="purple">
            Simpan
          </Button>
        </form>
      </div>
    </>
  );
};

export default OTP;
