import React from 'react'
import { assets } from '../assets/assets'

const Profile = () => {
  return (
    <>
    <div>
      <div className='lg:p-8 md:p-4 p-8'>
        <div className='flex justify-between'>
            <div className='flex gap-3 p-3 items-center justify-between'>
                <img className='w-7 h-7 cursor-pointer' src={assets.dashprofile} alt="" />
                <h1 className='text-xl font-bold'>Eric</h1>
            </div>
            <div className='flex gap-3 p-3 border-2 border-gray-500 rounded-2xl  justify-between'>
                <img className='w-5 h-5 cursor-pointer' src={assets.messageicon} alt="" />
                <img className='w-5 h-5 cursor-pointer' src={assets.dashnotification} alt="" />
            </div>
        </div>  
      </div>
      <div className='w-full border border-gray-400'></div>
      <div className='lg:p-8 md:p-4 p-8'>
        <div className='flex justify-between px-10 md:px-20  border border-gray-500 py-5 md:py-7 rounded-2xl md:mx-[10%]'>
            <p className='text-md font-medium text-red-500'>Profile</p>
            <p className='text-md font-medium text-gray-600'>Support & Help/Personalize</p>
        </div>
        <div className='border border-gray-500 rounded-2xl mt-3 md:mt-7 p-5'>
            <div className='flex justify-between md:items-center items-end'>
                <div className='flex flex-col md:flex-row  gap-3'>
                    <input type="file"
                    id='logo-upload'
                    className='hidden' />
                    <label 
                    htmlFor="logo-upload" 
                    className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer  transition-colors overflow-hidden"
                    ><img className='w-10 h-10' src={assets.profileimg} alt="" /></label>
                    <p className='text-xs md:text-sm font-medium text-blue-500'>Change profile picture</p>
                </div>
                <p className='text-sm md:text-md font-medium text-blue-500 cursor-pointer'>Business Profile</p>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile
