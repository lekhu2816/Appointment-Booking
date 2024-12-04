import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AppContext } from '../context/Context'
const Signup = () => {
  const {SERVER_URL}=useContext(AppContext)
  const navigate=useNavigate();
  const[showPassword,setShowPassword]=useState(false);
  const[data,setData]=useState({name:"",email:"",password:""});

// ----------------------------api calling----------------------------------//

  const handleChange=(e)=>{
   const {name,value}=e.target;
   setData((prev)=>({...prev,[name]:value}))
  }
  const onHandleSubmit=async(e)=>{
    e.preventDefault();
    const url=`${SERVER_URL}/api/user/signup`
    try {
      const response=await axios.post(url,data);
    if(response.data.success){
      navigate('/auth/verify',{state:data.email})
    }
    } catch (error) {
      alert(error.response.data.message)
    }
}
  return (
    <div className='mobile:shadow-none tablet:shadow-none shadow-3xl rounded-md flex w-[60%] justify-center tablet:items-center  mobile:flex-col mobile:w-full tablet:flex-col tablet:w-full '>
      <div className='w-1/2 flex items-end relative mobile:w-full tablet:w-[70%]'>
  <img className='w-full  absolue bottom-0' src={assets.header_img} alt="" />
</div>

      <div className=' p-5 w-1/2  mobile:w-full tablet:w-[70%]  text-center'>
      <p className='text-2xl font-bold'>Create Account</p>
      <p className='text-sm text-slate-700 mt-2'>Please signup to book appointment</p> 
      <form onSubmit={onHandleSubmit} className='flex flex-col gap-4 my-4'> 

        {/* username */}

        <div className='px-2 py-1 flex items-center gap-2 border-[1px] border-black rounded-sm'>
        <i className="fa-solid fa-user"></i>
        <input onChange={handleChange} className='outline-none w-full' name='name' value={data.name} type="text" placeholder='Username'/>
        </div>

       {/*user email  */}

        <div className='px-2 py-1 flex items-center gap-2 border-[1px] border-black rounded-sm'>
        <i className="fa-solid fa-envelope"></i>
        <input onChange={handleChange} className='outline-none w-full' name='email' value={data.email} type="email" placeholder='Email'/>
        </div>

        {/* user password */}

        <div className='px-2 py-1 flex  items-center gap-2 border border-black rounded-sm'>
            <i className="fa-solid fa-lock"></i>
            <input onChange={handleChange} className='outline-none w-full' name='password' value={data.password} type={showPassword ? "text" : "password"} placeholder='Password' />
            <i 
              onClick={() => setShowPassword(prev => !prev)} 
              className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
            ></i>
          </div>

        {/* Remember me */}
        <div className='flex gap-2 text-sm'>
          <input type="checkbox"/>
          <p>Remember me</p>
        </div>
        {/* submit button */}
        <button className='w-full p-1 bg-primary text-white rounded-sm'>Create Account</button>
      </form>
      <p className='text-sm'>Already have an account? <span onClick={()=>{navigate('/auth/signin')}} className='text-red-500 cursor-pointer'>Login</span></p>
      </div>
    </div>
  )
}

export default Signup