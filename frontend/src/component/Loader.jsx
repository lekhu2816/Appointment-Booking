import React from 'react'

const Loader = () => {
  return (
   <button className='flex gap-2 items-center bg-primary text-sm text-white px-4 py-2 rounded-full'>
    <div>Please Wait</div>
    <div
    class="w-5 h-5 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"
  ></div>
   </button>
  
  )
}

export default Loader