import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='h-[80vh]  my-5 rounded-md gap-4 bg-primary flex  tablet:flex-col tablet:h-[100%]  mobile:flex-col mobile:h-auto'>
      {/* left section */}
      <div className='flex flex-col gap-2 justify-center items-start px-10 py-10 w-1/2 tablet:items-center tablet:w-full mobile:items-center mobile:w-full mobile:px-1'>
        <h1 className='text-4xl text-white font-bold leading-tight mobile:text-3xl mobile:text-center'>Book Appointment <br /> With Trusted Doctors</h1>
        <div className='flex items-center gap-2'>
          <img className='h-3/4 mobile:h-10' src={assets.group_profiles} alt="img" />
          <p className='text-white text-[12px]'>Simply browse through our extensive list of trusted doctors, <br /> schedule your appointment hassle-free.</p>
        </div>
        <button className='py-2 px-4 text-[12px] bg-white rounded-full transition-all duration-300 hover:scale-110 '>Book appointment &rarr;</button>
      </div>

      {/* right section */}
      <div className='w-1/2 relative tablet:w-full mobile:w-full'>
        <img
          className='h-[80%] absolute bottom-0 tablet:relative tablet:mx-auto tablet:h-[60%] mobile:relative mobile:mx-auto mobile:h-[60%]'
          src={assets.header_img}
          alt="Image"
        />
      </div>
    </div>
  )
}

export default Header
