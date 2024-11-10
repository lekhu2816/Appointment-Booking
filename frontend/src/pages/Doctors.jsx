import React from 'react'
import {useParams} from 'react-router-dom'
const Doctors = () => {
  const {speciality}=useParams();
  console.log(speciality)
  return (
    <div className='mx-10'>Doctors</div>
  )
}

export default Doctors