import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/Context'
import axios from 'axios';
const DoctorsList = () => {
  const {SERVER_URL}=useContext(AppContext);
  const [doctorsList,setDoctorsList]=useState([])
 
  const fetchDoctorData=async()=>{
    
  try {
    const url=`${SERVER_URL}/api/admin/doctors`
    const response=await axios.get(url,{withCredentials:true})
    if(response.status==200){
      setDoctorsList(response.data.doctors)
    }
  } catch (error) {
     if(error.status==401||error.status==500){
      alert(error.response.data.message)
     }
  }
  }

  useEffect(()=>{
    fetchDoctorData()
  },[])
  return (
    
    <div className=' flex flex-wrap gap-4'>
       {
        doctorsList.map((item,index)=>{
          return (
            <div
            key={index}
            className="cursor-pointer w-[220px] border border-blue-200 rounded-xl overflow-hidden tablet:w-[45%]
              mobile:w-full " 
          >
            <img className="w-full hover:bg-primary bg-blue-50" src={item.image} alt="" />
            <div className="p-4">
              <div className="flex gap-2 items-center text-sm">
                <p className="w-2 h-2 bg-green-600 rounded-full"></p>
                <p className="text-green-600">Available</p>
              </div>
              <p className="text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
          )
        })
       }
    </div>
  )
}

export default DoctorsList