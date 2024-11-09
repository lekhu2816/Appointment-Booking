import React from 'react'
import Header from '../component/Header'
import SpecialityMenu from '../component/SpecialityMenu'
import TopDoctors from '../component/TopDoctors'
const Home = () => {
  return (
    <div className='mx-10 mobile:mx-2 tablet:mx-5'>
      <Header/>
      <SpecialityMenu/>
      <TopDoctors/>
    </div>
  )
}

export default Home