import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/Context";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
  const { SERVER_URL, setUserAuthenticated } =
    useContext(AppContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({ email: "", password: "" });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    let url = `${SERVER_URL}/api/user/signin`;
    try {
      let response = await axios.post(url, data, { withCredentials: true });
      if (response.data.success) {
        toast.success(response.data.message)
        setUserAuthenticated(true);
        localStorage.setItem("userAuthenticated", true);
        navigate("/");


      }
    } catch (error) {
      console.log(error)
      if(error.status==401||error.status==500||error.status==400){
        toast.error(error.response.data.message)
      }

     
    }
  };

  return (
    <div className="mobile:shadow-none tablet:shadow-none shadow-3xl w-[60%] flex rounded-md justify-center items-center gap-1 text-center mobile:flex-col mobile:w-full tablet:flex-col tablet:w-full">
      {/* Image Section */}
      <div className='w-1/2 flex items-end   relative mobile:w-full tablet:w-[70%]'>
  <img className='w-full  absolue bottom-0' src={assets.header_img} alt="" />
</div>

      {/* Form Section */}
      <div className=" p-5 w-1/2  tablet:w-3/4 mobile:w-full ">
        <p className="text-2xl font-bold">Login</p>
        <p className="text-sm text-slate-700 mt-2">
          Please login to book appointment
        </p>

        <form onSubmit={onHandleSubmit} className="flex flex-col gap-2 my-4">
          {/* Email Field */}
          <div className="px-2 py-1 flex gap-2 items-center border border-black rounded-sm">
            <i className="fa-solid fa-envelope"></i>
            <input
              onChange={onHandleChange}
              className="outline-none w-full"
              name="email"
              value={data.email}
              type="email"
              placeholder="Email"
            />
          </div>

          {/* Password Field */}
          <div className="mt-2 px-2 py-1 flex  items-center gap-2 border border-black rounded-sm">
            <i className="fa-solid fa-lock"></i>
            <input
              onChange={onHandleChange}
              className="outline-none w-full"
              name="password"
              value={data.password}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <i
              onClick={() => setShowPassword((prev) => !prev)}
              className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
            ></i>
          </div>

          {/* forget-password */}

          <div className="flex justify-end cursor-pointer text-sm text-blue-600">
            <p onClick={() => navigate("/auth/forgot-password")}>
              forgot-password?
            </p>
          </div>

          {/* Login Button */}
          <button className="w-full p-1 bg-primary text-white rounded-sm">
            Login
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-sm">
          Don't have an account?{" "}
          <span
            onClick={() => {
              navigate("/auth/signup");
            }}
            className="text-red-500 cursor-pointer"
          >
            Create account
          </span>
        </p>
        <div className="flex items-center justify-between gap-1 my-2">
          <hr className="w-full bg-black"/>
          <p className="text-sm">OR</p>
          <hr className="w-full bg-black" />
        </div>
        <p className="text-sm">
          Login as <Link to={'/auth/doctor/signin'} target="blank" className="text-red-500 cursor-pointer">Doctor</Link>
        </p>
      </div>
      
    </div>
  );
};

export default Signin;
