import React from 'react'
import { assets } from '../assets/assets'
import { driverInfo } from '../lib/DriverInfo'

const ChooseDriver = ({setTitle}) => {
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
                <img className='w-3 h-5 cursor-pointer' src={assets.arrowback} alt="" onClick={() => setTitle("itemtoship")}/>
                <h1 className='text-black text-2xl font-semibold'>Choose your driver</h1>
            </div>
            <p className='text-sm font-normal text-gray-600 pl-8'>Choose from your drivers the one you will assign this order to</p>
 
           <div className='gap-5 mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
             {
               driverInfo.map((info, index) => (
                 <div className=' gap-4 p-5 space-y-3 border border-gray-500 rounded' key={index}>
                   <div className='flex justify-between'>
                     <img className='w-12 h-112' src={info.img} alt="" />
                     <div className='flex  gap-1'>
                       <img className='w-3 h-3' src={assets.star} alt="" />
                       <img className='w-3 h-3' src={assets.star1} alt="" />
                       <img className='w-3 h-3' src={assets.star2} alt="" />
                       <img className='w-3 h-3' src={assets.star3} alt="" />
                       <img className='w-3 h-3' src={assets.star4} alt="" />
                     </div>
                   </div>
                   <p className='text-md font-medium text-black'>{info.name}</p>
                 </div>
               ))
             }
           </div>
           <div className='p-5 border border-gray-500 rounded space-y-2 mt-10 md:mt-5 w-full md:w-[31.5%] lg:w-[23.5%]'>
             <img className='w-2 h-3 ml-[50%]' src={assets.map} alt="" />
             <p className='text-center text-sm text-gray-500'>Nearby Drivers</p>
           </div>
 
           <div className='mt-20 md:mt-10 md:m-20 space-y-3'>
             <p className='text-md text-gray-600 font-normal'>Please leave a note for your driver</p>
             <textarea className=' border border-gray-500 p-5 w-full rounded outline-none' name="" placeholder='Please leave a note'></textarea>
             <button className='bg-red-500 hover:bg-red-600 text-white py-1 px-5 rounded ml-[35%] md:ml-[40%]' onClick={() => setTitle("reviewshipment")}>Proceed</button>
           </div>
         </div>
       </div>
       </>
     )
}

export default ChooseDriver
