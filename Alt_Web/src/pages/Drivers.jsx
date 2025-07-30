import React from 'react'
import { assets } from '../assets/assets'
import { searchOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import { myDrivers } from '../lib/Drivers';

const Drivers = () => {
  return (
        <>
        <div>
          <div className='lg:p-8 md:p-4 md:ml-0 ml-10 p-8 relative'>
            <div className='flex justify-between'>
                <div className='flex gap-3 p-3 items-center justify-between'>
                    <img className='w-7 h-7 cursor-pointer' src={assets.seconglogo} alt="" />
                    <h1 className='text-xl font-bold'>Sharperly</h1>
                </div>
                <div className='flex gap-3 p-3 border-2 border-gray-500 rounded-2xl  justify-between'>
                    <img className='w-5 h-5 cursor-pointer' src={assets.messageicon} alt="" />
                    <img className='w-5 h-5 cursor-pointer' src={assets.dashnotification} alt="" />
                </div>
            </div>  
          </div>
          <div className='w-full border border-gray-400'></div>
          <div className='lg:p-8 md:p-4 p-8'>
            <div>
              <h1 className='text-2xl font-semibold'>My Drivers</h1>
              <p className='text-xs font-normal'>Here are your drivers</p>
            </div>
           <div className='flex gap-5 items-center mt-5'>
            <div className='relative flex items-center'>
              <IonIcon 
                icon={searchOutline} 
                className='absolute left-3 text-gray-500'
              />
              <input 
                type="text" 
                placeholder="Search drivers..." 
                className='w-full pl-10  py-2 text-sm border border-gray-300 rounded-md outline-none bg-gray-100 placeholder:text-gray-500'
              />
            </div>
            <button 
              className='text-xs font-light text-white py-3 md:px-4 px-2 w-[30%] md:w-[20%] lg:w-[15%] bg-red-500 hover:bg-red-600 rounded-md transition-colors duration-200'
            >
              Add new drivers
            </button>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mt-5'>
            {
                myDrivers.map((info, index) => (
                  <div key={index} className='border border-gray-400 rounded p-5'>
                      <div className='flex justify-between '>
                        <div>
                          <div className='flex gap-5'>
                            <img className='w-12 h-12' src={assets.driverimg} alt="" />
                            <p className='text-md text-black font-medium'>{info.name}</p>
                          </div>
                          <p className='pl-[30%] text-gray-500 text-xs font-normal'>5 Deliveries</p>
                        </div>
                        <div className='flex gap-2'>
                          <div className='rounded-full bg-gray-300 p-1 h-5 cursor-pointer'>
                            <img className='w-3 h-3' src={assets.driimg1} alt="" />
                          </div>
                          <div className='rounded-full bg-gray-300 p-1 h-5 cursor-pointer'>
                            <img className='w-3 h-3' src={assets.driimg2} alt="" />
                          </div>
                          <div className='rounded-full bg-gray-300 p-1 h-5 cursor-pointer'>
                            <img className='w-3 h-3' src={assets.driimg3} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className='border border-gray-300 w-full mt-3'></div>
                      <div className='mt-5 flex items-center gap-2 ml-[10%]'>
                        <img className='w-2 h-2' src={assets.drivertel} alt="" />
                        <p className='text-xs text-gray-500 font-normal'>{info.phone}</p>
                      </div>
                       <div className='mt-5 flex items-center gap-2 ml-[10%]'>
                        <img className='w-2 h-2' src={assets.driveremail} alt="" />
                        <p className='text-xs text-gray-500 font-normal'>{info.email}</p>
                      </div>
                       <div className='mt-5 flex items-center gap-2 ml-[10%]'>
                        <img className='w-2 h-2' src={assets.driverlocation} alt="" />
                        <p className='text-xs text-gray-500 font-normal'>{info.address}</p>
                      </div>
                  </div>
                ))
            }
          </div>
          </div>
        </div>
        </>
      )
}

export default Drivers
