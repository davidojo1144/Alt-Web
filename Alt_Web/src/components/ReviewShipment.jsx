import React from 'react'
import { assets } from '../assets/assets'

const ReviewShipment = ({setTitle}) => {
  return (
         <>
         <div>
           <div className='lg:p-8 md:p-4 md:ml-0 ml-10 p-8 relative'>
             <div className='flex justify-between'>
                 <div className='flex gap-3 p-3 items-center justify-between'>
                     <img className='w-7 h-7 cursor-pointer' src={assets.dashprofile} alt="" />
                     <h1 className='text-xl font-normal md:font-bold'>Eric</h1>
                 </div>
                 <div className='flex gap-12 md:gap-3 p-3 border-2 border-gray-500 rounded-2xl  justify-between'>
                     <img className='w-5 h-5 cursor-pointer' src={assets.messageicon} alt="" />
                     <img className='w-5 h-5 cursor-pointer' src={assets.dashnotification} alt="" />
                 </div>
             </div>  
           </div>
           <div className='w-full border border-gray-400'></div>
           <div className='lg:p-8 md:p-4 p-8'>
            <div className='flex gap-5 items-center'>
                <img className='w-3 h-5 cursor-pointer' src={assets.arrowback} alt="" onClick={() => setTitle("choosedriver")}/>
                <h1 className='text-black text-2xl font-semibold'>Review Your Shipment</h1>
            </div>
            <p className='text-sm font-normal text-gray-600 pl-8'>Please confirm your order before assigning them to your driver</p>
            <div className='border border-gray-500 rounded-2xl bg-white p-5 md:mr-[40%] mt-7'>

            </div>
           </div>
         </div>
         </>
       )
}

export default ReviewShipment
