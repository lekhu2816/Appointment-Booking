import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const AuthLayout = () => {
  const navigate=useNavigate();
  return (
    <>
     <div className='px-10 py-2 bg-white mobile:px-5 tablet:px-5'> 
       <img onClick={()=>{navigate('/')}} className='h-8' src={assets.logo} alt="logo" />
     </div>
     <hr />
     <div className='h-[90vh] mt-5 flex justify-center items-center mobile:h-full tablet:h-full '>
     <Outlet/>
     </div>
    </>
   
  )
}

export default AuthLayout