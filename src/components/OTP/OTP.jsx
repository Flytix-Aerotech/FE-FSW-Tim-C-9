import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendOtpAction, verifyOtpAction } from "../../config/Redux/action/authAction";
import { formatCensorEmail } from "../format_display";

const OTP = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const email = localStorage.getItem("email");

  const [otp, setOtp] = React.useState("");

  const timeoutId = React.useRef(null);
  const initialTimer = localStorage.getItem("timer") ?? 60;
  const [timer, setTimer] = React.useState(initialTimer);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { otp };
    dispatch(verifyOtpAction(data, history, email));
  };

  const SendEmailOtp = (e) => {
    e.preventDefault();
    const data = { email };
    dispatch(sendOtpAction(data, history));
    setTimer(60);
    localStorage.setItem("timer", 60);
  };

  const countTimer = React.useCallback(() => {
    if (timer <= 0) {
      localStorage.removeItem("timer");
    } else {
      setTimer(timer - 1);
      localStorage.setItem("timer", timer);
    }
  }, [timer]);

  React.useEffect(() => {
    timeoutId.current = window.setTimeout(countTimer, 1000);
    // cleanup function
    return () => window.clearTimeout(timeoutId.current);
  }, [timer, countTimer]);

  return (
    <>
      <div className="grid h-screen place-items-center">
        <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-xl gap-10 px-5">
          <Typography variant="h4" className="font-bold">
            Masukkan OTP
          </Typography>
          <p className="text-center">
            Ketik 6 digit kode yang dikirimkan ke <span className="font-bold">{formatCensorEmail(email)}</span>
          </p>
          <div className="grid place-items-center">
            <OtpInput
              inputStyle={{
                border: "1px solid #CFD3DB",
                borderRadius: "10px",
                padding: "10px",
                maxWidth: "50px",
                width: "100%",
                height: "100%",
                fontSize: "20px",
                color: "#303030",
                fontWeight: "600",
                caretColor: "purple",
                margin: "5px",
              }}
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => <input {...props} />}
            />
            <div className="mt-4">
              {timer <= 0 ? (
                <button onClick={SendEmailOtp} className="text-purple-500 underline hover:text-purple-700 duration-300">
                  Kirim ulang otp
                </button>
              ) : (
                <p className="mt-3 text-center">Kirim Ulang OTP dalam {timer} detik</p>
              )}
            </div>
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
