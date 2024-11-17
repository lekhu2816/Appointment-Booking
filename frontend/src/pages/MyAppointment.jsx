import React, { useContext, useState } from 'react'
import { AppContext } from '../context/Context'
import { assets } from '../assets/assets';

const MyAppointment = () => {
  const {doctors}=useContext(AppContext)
  const [show,setShow]=useState(false);
  return (
    <div className='mx-10 tablet:mx-5   mobile:mx-2 '>
      <h2 className='my-5 text-lg text-gray-600 font-medium'>My Appointments</h2>
       <div className='flex flex-col gap-4'>
       {
        doctors.slice(0,3).map((item,index)=>{
          return(
            <div className='border p-2 flex gap-4'>
              <div className='w-40 '>
                <img className='w-full bg-blue-200' src={item.image} alt="" />
              </div>
              <div className='w-full gap-4 flex mobile:flex-col'>

{/* -------------------------------Doctor Appintment--------------------------- */}

                <div className='w-1/2 flex flex-col gap-2  mobile:w-full'>
                  <div>
                  <p className='text font-medium'>{item.name}</p>
                  <p className='text-sm text-gray-600'>{item.speciality}</p>
                  </div>
                  <div>
                    <p className='text-sm font-medium text-gray-900'>Address:</p>
                    <p className='text-sm text-gray-600'>{item.address.line1}</p>
                    <p className='text-sm text-gray-600'>{item.address.line2}</p>
                  </div>

                  <div>
                    <p className='text-sm font-medium text-gray-900'>Date & Time:
                      <span className='font-normal text-gray-600'>17 Dec 2024 | 03:30 PM</span>
                    </p>
                  </div>
                </div>

{/* --------------------------------Button-------------------------------------- */}


          
                <div className='w-1/2  flex flex-col gap-2 items-end justify-end mobile:w-full'>
                  {
                    show ?<div className='flex flex-col gap-2 w-full'>
                      <button className='flex justify-center w-48 p-2 rounded-md border border-gray-400  mobile:w-full'>
                      <img className='h-5' src={assets.razorpay_logo} alt="" />
                    </button>

                    <button className='flex justify-center w-48 p-2 rounded-md border border-gray-400  mobile:w-full'>
                      <img className='h-5' src={assets.stripe_logo} alt="" />
                    </button>

                    </div>: <button onClick={()=>setShow(true)} className='text-sm w-48 p-2 rounded-md border border-gray-400 text-gray-700 hover:bg-primary hover:text-white hover:border-primary mobile:w-full'>Pay Online</button>
                  }
               

                  <button className='text-sm w-48 p-2 rounded-md border border-gray-400 text-gray-700 hover:bg-red-600 hover:text-white hover:border-red-600 mobile:w-full'>Cancel Appointment</button>
                </div>
              </div>
            </div>
          )
        })
       }
       </div>
    </div>
  )
}

export default MyAppointment