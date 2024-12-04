import React from 'react'
import { specialityData } from '../assets/assets'
import {Link} from 'react-router-dom'
const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 text-gray-800  py-16'>
      <h1 className='text-3xl font-normal'>Find by Speciality </h1>
      <p className='w-1/2  text-center tablet:w-3/4 mobile:w-full mobile:text-[14px]'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
      <div className='py-6 w-full flex justify-center gap-4 overflow-scroll tablet:justify-start mobile:justify-start '>
         {
            specialityData.map((item,index)=>{
                return (
                    <Link key={index} onClick={()=>scrollTo(0,0)} to={`/doctors/${item.speciality}`} className='flex flex-col items-center flex-shrink-0  gap-2  text-xs hover:translate-y-[-10px] transition-all duration-300'>
                        <img className='w-24 mobile:w-18' src={item.image} alt="image" />
                        <p className='text-sm mobile:text-[10px]'>{item.speciality}</p>
                    </Link>
                )
            })
         }
      </div>
    </div>
  )
}

export default SpecialityMenu