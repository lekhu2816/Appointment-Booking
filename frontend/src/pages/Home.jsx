import React from 'react'
import Header from '../component/Header'
import SpecialityMenu from '../component/SpecialityMenu'
import TopDoctors from '../component/TopDoctors'
import Banner from '../component/Banner'
const Home = () => {
  return (
    <div className='mx-10 mobile:mx-2 tablet:mx-5'>
      <Header/>
      <SpecialityMenu/>
      <TopDoctors/>
      <Banner/>
    </div>
  )
}

export default Home