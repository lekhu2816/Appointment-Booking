import React from 'react'
import {doctors} from '../assets/assets'
import { useNavigate } from 'react-router-dom'
const TopDoctors = () => {
    const navigate=useNavigate()
  return (
    <div className='flex flex-col items-center'>
        <h1 className='text-3xl font-semibold  '>Top Doctors to Book</h1>
        <p className='py-2 text-sm text-center text-slate-500'>Simply browse through our extensive list of trusted doctors.</p>
        <div className='py-10 w-full flex justify-center flex-wrap gap-4'>
            {
                doctors.slice(0,10).map((item,index)=>{
                  return( 
                  <div onClick={()=>navigate(`/appointment/${item._id}`)} key={index} className='cursor-pointer w-[220px] border border-blue-200 rounded-xl overflow-hidden tablet:w-[45%]
                    mobile:w-full hover:translate-y-[-10px] transition-all duration-300'>
                        <img  className='w-full bg-blue-50' src={item.image} alt="" />
                        <div className='p-4'>
                            <div className='flex gap-2 items-center text-sm'>
                                <p className='w-2 h-2 bg-green-600 rounded-full'></p><p className='text-green-600'>Available</p>
                            </div>
                            <p className='text-lg font-medium'>{item.name}</p>
                            <p className='text-gray-600 text-sm'>{item.speciality}</p>
                        </div>
                    </div>
                  )
                })
            }
        </div>
        <button className='bg-blue-100 px-10 py-2 rounded-full text-sm transition-all duration-300 hover:scale-110 '>More</button>
    </div>

  )
}

export default TopDoctors