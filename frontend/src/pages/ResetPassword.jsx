import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ResetPassword = () => {
  const {token}=useParams();
  const[showPassword,setShowPassword]=useState(false);
  const navigate=useNavigate();
  const handleSubmit=async()=>{
    navigate('/')
  }
  return (
    <div className=' w-[30%] shadow-3xl flex justify-center items-center text-center rounded-sm mobile:w-full mobile:shadow-none  tablet:shadow-none tablet:w-[70%]'>
    <div className='p-4  w-full'>
    <h1 className='my-2 text-2xl font-bold' >Reset Password</h1>
    <p className='my-2 text-[14px] text-slate-600'>Enter new password</p>

    <div className='my-2 px-2 py-1 flex  items-center gap-2 border border-black rounded-sm'>
            <i className="fa-solid fa-lock"></i>
            <input  className='outline-none w-full'  type={showPassword ? "text" : "password"} placeholder='Enter new password' />
            <i 
              onClick={() => setShowPassword(prev => !prev)} 
              className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
            ></i>
          </div>
    <button onClick={handleSubmit} className='my-2 w-full py-1 bg-primary rounded-sm text-white'>Reset password</button>
    </div>
</div>
  )
}

export default ResetPassword