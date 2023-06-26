import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { logo_flytix } from "../../assets/images";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { verifyOtpAction } from "../../config/Redux/action/authAction";

const OTP = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const email = localStorage.getItem("email");

  const [otp, setOtp] = React.useState("");

  const timeoutId = React.useRef(null);
  const initialTimer = localStorage.getItem("timer") ?? 120;
  const [timer, setTimer] = React.useState(initialTimer);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { otp };
    dispatch(verifyOtpAction(data, history, email));
  };

  const censorWord = function (str) {
    return str[0] + "*".repeat(str.length - 2) + str.slice(-1);
  };

  const censorEmail = function (email) {
    const arr = email.split("@");
    return censorWord(arr[0]) + "@" + arr[1];
  };

  const countTimer = React.useCallback(() => {
    if (timer <= 0) {
      history("/email-otp");
      localStorage.removeItem("timer");
    } else {
      setTimer(timer - 1);
      localStorage.setItem("timer", timer);
    }
  }, [timer, history]);

  React.useEffect(() => {
    timeoutId.current = window.setTimeout(countTimer, 1000);
    // cleanup function
    return () => window.clearTimeout(timeoutId.current);
  }, [timer, countTimer]);

  return (
    <>
      <nav className="fixed top-0 w-screen px-10 py-4 border-b-2">
        <Typography className="mr-4 cursor-pointer py-1.5 font-medium flex gap-2 items-center">
          <img src={logo_flytix} alt="" width={"40"} className="rounded-full" />{" "}
          <span className="text-2xl font-bold tracking-wider text-purple-600 uppercase">Flytix</span>
        </Typography>
      </nav>
      <div className="grid h-screen place-items-center">
        <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-xl gap-10 px-5">
          <Typography variant="h4" className="font-bold">
            Masukkan OTP
          </Typography>
          <p className="text-center">Ketik 6 digit kode yang dikirimkan ke {censorEmail(email)}</p>
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
              <p className="mt-3 text-center">Kirim Ulang OTP dalam {timer} detik</p>
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
