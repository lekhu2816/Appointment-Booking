import React, { useState } from 'react';
import { assets } from '../assets/assets'
import {useNavigate} from 'react-router-dom'

const Signin = () => {
  const navigate=useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='mobile:shadow-none tablet:shadow-none shadow-3xl w-[60%] flex rounded-md justify-center items-center gap-1 text-center mobile:flex-col mobile:w-full tablet:flex-col tablet:w-full'>
      {/* Image Section */}
      <div className='w-1/2 tablet:w-[70%]  mobile:w-full ' >
        <img className='h-full' src={assets.header_img} alt="Header" />
      </div>

      {/* Form Section */}
      <div className=' p-5 w-1/2 tablet:w-3/4 mobile:w-full '>
        <p className='text-2xl font-bold'>Login</p>
        <p className='text-sm text-slate-700 mt-2'>Please login to book appointment</p> 
        <form className='flex flex-col gap-2 my-4'>
          {/* Email Field */}
          <div className='px-2 py-1 flex gap-2 items-center border border-black rounded-sm'>
            <i className="fa-solid fa-envelope"></i>
            <input className='outline-none w-full' type="email" placeholder='Email' />
          </div>

          {/* Password Field */}
          <div className='mt-2 px-2 py-1 flex  items-center gap-2 border border-black rounded-sm'>
            <i className="fa-solid fa-lock"></i>
            <input className='outline-none w-full' type={showPassword ? "text" : "password"} placeholder='Password' />
            <i 
              onClick={() => setShowPassword(prev => !prev)} 
              className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
            ></i>
          </div>
           <div className='flex justify-end cursor-pointer text-sm text-blue-600'>
            <p>forgot-password?</p>
           </div>
          {/* Login Button */}
          <button className='w-full p-1 bg-primary text-white rounded-sm'>Login</button>
        </form>

        {/* Signup Link */}
        <p className='text-sm'>Don't have an account? <span onClick={()=>{navigate('/auth/signup')}} className='text-red-500 cursor-pointer'>Create account</span></p>
      </div>
    </div>
  );
};

export default Signin;
