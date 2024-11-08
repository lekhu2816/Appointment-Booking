import React from 'react'
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
 
   const navigate=useNavigate();

  return (
    <div className=' w-[30%] shadow-3xl flex justify-center items-center text-center rounded-sm mobile:w-full mobile:shadow-none  tablet:shadow-none tablet:w-[70%]'>
        <div className='p-4  w-full'>
        <h1 className='my-2 text-2xl font-bold' >Forget Password</h1>
        <p className='my-2 text-[14px] text-slate-600'>We send details how to reset it.</p>
        <input className=' my-2 px-4 py-1 w-full rounded-sm border-[1px] border-black outline-none' type="email" placeholder='Enter your email'/>
        <button onClick={()=>{navigate(`/auth/reset-password/12345`)}} className='my-2 w-full py-1 bg-primary rounded-sm text-white'>Forgot Password</button>
        </div>
    </div>
  )
}

export default ForgotPassword