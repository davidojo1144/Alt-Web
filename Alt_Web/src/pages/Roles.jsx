import React from 'react'
import { assets } from '../assets/assets'

const Roles = () => {
  return (
    <div>
      <div className='lg:p-8 md:p-4 p-8'>
        <div className='flex justify-between'>
          <h1 className='text-2xl font-bold'>Welcome, Eric</h1>
          <div className='flex gap-3 p-3 border-2 border-gray-500 rounded-2xl  justify-between'>
            <img className='w-5 h-5 cursor-pointer' src={assets.dashnotification} alt="" />
            <img className='w-5 h-5 cursor-pointer' src={assets.dashprofile} alt="" />
          </div>
        </div>  
      </div>
      <div className='w-full border border-gray-400'></div>
      <div className='lg:p-8 md:p-4 p-8' >
        <h1 className='text-xl font-semibold'>Roles</h1>
      </div>
    </div>
  )
}

export default Roles
