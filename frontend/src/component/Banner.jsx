import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
    <div className='h-full border mt-10 px-10 tablet:px-5 my-5 bg-primary flex justify-between gap-2 rounded-lg mobile:flex-col '>
    <div className='flex justify-center items-center py-16 tablet:py-10 mobile:py-5 '>
    <div className='  text-white  mobile:flex mobile:flex-col  mobile:items-center mobile:text-center'>
        <h1 className='font-semibold  text-3xl tablet:text-2xl'>Book Appointment </h1>
        <h1 className='font-semibold my-2 text-3xl tablet:text-2xl'>With 100+ Trusted Doctors</h1>
        <button className='py-2 px-4 text-[12px] bg-white  text-black rounded-full transition-all duration-300 hover:scale-110 '>Create Account  &rarr; </button>
      </div>
    </div>
      <div className=' w-1/4  flex justify-center items-center tablet:w-1/2 mobile:w-full'>
        <img className='w-[90%]   tablet:w-[100%] ' src={assets.appointment_img} alt="Image" />
      </div>
    </div>
  )
}

export default Banner