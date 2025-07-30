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
            <div className='border border-gray-500 rounded-2xl bg-white p-5 md:mr-[10%] lg:mr-[40%] mt-7'>
              <div className='flex gap-3'>
                <div className='py-3 px-5 bg-red-500 rounded-3xl'></div>
                <p className='text-sm text-gray-500 font-normal'>General information</p>
              </div>
              <p className='text-sm text-gray-500 font-normal mt-3'>Inter State</p>
              <div className='border border-gray-400 w-full mt-5'></div>
              <div className='flex items-center justify-between mt-3'>
                <p className='text-sm text-gray-500 font-normal'>Total Quantity</p>
                <p className='text-sm text-gray-500 font-normal'>3</p>
              </div>
              <div className='border border-gray-400 w-full mt-5'></div>
              <div className='flex items-center justify-between mt-3'>
                <p className='text-sm text-gray-500 font-normal'>Pick up address</p>
                <p className='text-sm text-gray-500 font-normal'>3 Agip Road, Port Harcourt, Rivers State</p>
              </div>
              <div className='border border-gray-400 w-full mt-5'></div>
              <div className='flex items-center justify-between mt-3'>
                <p className='text-sm text-gray-500 font-normal'>Drop off address</p>
                <p className='text-sm text-gray-500 font-normal'>10 Aba Road, Port Harcourt, Rivers State</p>
              </div>
              <div className='border border-gray-400 w-full mt-5'></div>
              <div className='flex items-center justify-between mt-3'>
                <p className='text-sm text-gray-500 font-normal'>Driver</p>
                <p className='text-sm text-gray-500 font-normal'>Sam James</p>
              </div>
              <div className='border border-gray-400 w-full mt-5'></div>
              <div className='flex items-center justify-between mt-3'>
                <p className='text-sm text-gray-500 font-normal'>Cost of delivery</p>
                <p className='text-sm text-gray-500 font-normal'>1200 Naira</p>
              </div>
              <div className='border border-gray-400 w-full mt-5'></div>
              <div className='flex items-center justify-between mt-3'>
                <p className='text-sm text-gray-500 font-normal'>Distance covered</p>
                <p className='text-sm text-gray-500 font-normal'>2km</p>
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-7'>
              <div className='border border-gray-400 p-4 rounded'>
                <h1 className='text-xl font-medium text-black pb-2'>Stock Fish</h1>
                <p className='text-sm text-gray-500 font-normal'>Dried food</p>
                <p className='text-sm text-red-500 font-normal text-end'>item to ship</p>
              </div>
              <div className='border border-gray-400 p-4 rounded'>
                <h1 className='text-xl font-medium text-black pb-2'>Iphone 7</h1>
                <p className='text-sm text-gray-500 font-normal'>Gadgets</p>
                <p className='text-sm text-red-500 font-normal text-end'>item to ship</p>
              </div>
              <div className='border border-gray-400 p-4 rounded'>
                <h1 className='text-xl font-medium text-black pb-2'>Television</h1>
                <p className='text-sm text-gray-500 font-normal'>Electronics</p>
                <p className='text-sm text-red-500 font-normal text-end'>item to ship</p>
              </div>
            </div>
            <div className='mt-2 flex items-center gap-2'>
              <img className='w-4 h-4' src={assets.addMore} alt="" />
              <p className='text-sm text-gray-500 font-normal'>Add more items</p>
            </div>
            <div className='border border-gray-400 py-2 px-3 rounded-2xl w-full md:w-[40%] lg:w-[20%] mt-7'>
              <div className='flex items-center gap-2 mb-3'>
                <img className='w-3 h-3' src={assets.drivernote} alt="" />
                <p className='text-sm text-black font-normal'>Note for Driver</p>
              </div>
              <p className='text-xs text-gray-500 font-normal'>Kindly take 1200 Naira from the customer before picking the item</p>
            </div>
            <button className='py-1 px-7 bg-red-500 hover:bg-red-600 text-white rounded mt-7 ml-[60%] md:ml-[80%]'>Assign</button>
           </div>
         </div>
         </>
       )
}

export default ReviewShipment
