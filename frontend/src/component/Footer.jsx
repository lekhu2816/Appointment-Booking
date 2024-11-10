import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className='mx-10 mt-10 p-5  tablet:mx-5 mobile:mx-2'>
     <div className='grid grid-cols-3 gap-4 mobile:grid-cols-1 mobile:grid-rows-3'>

{/* left section  */}
<div>
  <img className='h-6' src={assets.logo} alt="" />
  <p className='text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum illum corrupti excepturi sint suscipit quaerat minus tenetur alias temporibus perferendis.</p>
</div>

{/* section middle */}
 <div  className=' flex justify-center mobile:text-center'>
 <div>
   <h2 className='text-lg font-medium mb-2'>COMPANY</h2>
   <ul className='text-sm'>
    <li>Home</li>
    <li>About</li>
    <li>Contact Us</li>
    <li>Privacy Policy</li>
   </ul>
  </div>
 </div>

  {/*section right  */}

<div  className=' flex justify-center mobile:text-center'>
<div>
    <h2 className='text-lg font-medium mb-2'>GET IN TOUCH</h2>
    <div className='flex items-center gap-2'>
    <i className="fa-solid fa-envelope text-blue-600"></i>
    <p className='text-sm'>prescripto@gmail.com</p>
    </div>
    <div className='flex items-center gap-2 my-1'>
    <i className="fa-solid fa-phone text-green-700"></i>
    <p className='text-sm'>+91 950-663-1631</p>
    </div>
  </div>
</div>
</div>
      <hr className='my-5' />
      <p className='text-center text-sm text-slate-600'>Copyright © 2024 Prescripto - All Right Reserved.</p>
    </footer>
  )
}

export default Footer