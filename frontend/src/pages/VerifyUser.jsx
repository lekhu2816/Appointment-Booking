import React, { useContext, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/Context";
import axios from "axios";

const VerifyUser = () => {
  const navigate = useNavigate();
  const { SERVER_URL } = useContext(AppContext);
  const location = useLocation();
  const email = location.state;
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRef = useRef([]);
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
    if (value != "" && index < otp.length - 1) {
      inputRef.current[index + 1].focus();
    }
  };
  const keyDownEvent = (e, index) => {
    if (e.key == "Backspace" && !otp[index] && index > 0) {
      inputRef.current[index - 1].focus();
    }
  };
  const handleSubmit = async () => {
    let verificationToken = "";
    for (let index in otp) {
      verificationToken = verificationToken + otp[index];
    }
    const url = `${SERVER_URL}/api/user/verify`;
    try {
      const response = await axios.post(url, {
        email: email,
        otp: verificationToken,
      });
      if (response.data.success) {
        setUserAuthenticated(true);
        localStorage.setItem("userAuthenticated", true);
        navigate("/");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <div className="w-[30%] p-4 mobile:shadow-none tablet:shadow-none  rounded-md   shadow-3xl text-center mobile:w-full tablet:w-[70%]">
      <h1 className="my-2 text-2xl font-bold">Verify your email</h1>
      <p className="my-2 text-[14px] text-slate-600">
        Enter the 6-digit code send to your Email address
      </p>
      <form className="my-2 flex justify-between">
        {otp.map((val, index) => {
          return (
            <div
              key={index}
              className="border-[1px] border-black text-2xl rounded-[5px]"
            >
              <input
                className="rounded-[5px]  w-[40px] aspect-square flex justify-center text-center"
                onChange={(e) => {
                  handleChange(e, index);
                }}
                ref={(element) => {
                  inputRef.current[index] = element;
                }}
                value={otp[index]}
                onKeyDown={(e) => keyDownEvent(e, index)}
                type="text"
                maxLength={1}
              />
            </div>
          );
        })}
      </form>
      <p className="text-[14px] text-slate-800">
        Don't recieve the OTP ? <span className="text-red-600">Resend</span>
      </p>
      <button
        onClick={handleSubmit}
        className="my-2 py-1 bg-primary text-white w-full rounded-[5px]"
      >
        verify
      </button>
    </div>
  );
};

export default VerifyUser;
