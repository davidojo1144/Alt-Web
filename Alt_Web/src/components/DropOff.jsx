import React from 'react'
import { assets } from '../assets/assets'

const DropOff = ({setTitle}) => {
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
                       <img className='w-3 h-5 cursor-pointer' src={assets.arrowback} alt="" onClick={() => setTitle("what are you shipping")}/>
                       <h1 className='text-black text-2xl font-semibold'>Add DropOff Address</h1>
                   </div>
                   <p className='text-sm font-normal text-gray-500 ml-[8%] md:ml-[3%]'>Please enter the address your driver should deliver this item</p>

                  <div className='w-full md:w-[80%] lg:w-[70%] flex flex-col md:flex-row gap-5 mt-5'>
                     <input className='w-full py-2 border border-gray-500 outline-none rounded p-2' type="text" placeholder='First name'/>
                     <input className='w-full py-2 border border-gray-500 outline-none rounded p-2' type="text" placeholder='Last name'/>
                 </div>
                   <input className='w-full md:w-[90%] lg:w-[80%] mt-5 py-2 border border-gray-500 outline-none rounded p-2' type="text" placeholder='Address'/>
                 <div className='w-full flex flex-col md:flex-row gap-5 mt-5'>
                     <input className='w-full py-2 border border-gray-500 outline-none rounded p-2' type="text" placeholder='House number'/>
                     <input className='w-full py-2 border border-gray-500 outline-none rounded p-2' type="text" placeholder='Street name'/>
                     <input className='w-full py-2 border border-gray-500 outline-none rounded p-2' type="text" placeholder='City'/>
                     <input className='w-full py-2 border border-gray-500 outline-none rounded p-2' type="text" placeholder='State'/>
                 </div>
                 <input className='w-full md:w-[60%] lg:w-[40%] mt-5 py-2 border border-gray-500 outline-none rounded p-2' type="tel" placeholder='Phone number'/>
                  <div className='mt-12 flex flex-col md:flex-row gap-4 items-center'>
                       <label className="relative inline-flex items-center cursor-pointer">
                           <input type="checkbox" className="sr-only peer" />
                           <div className="w-11 h-6 bg-red-500 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                       </label>
                       <p className='text-gray-600 text-sm font-normal'>Perishable items</p>
                   </div>
                   <button className='bg-red-500 hover:bg-red-600 text-white py-1 px-5 rounded ml-[35%] md:ml-[40%] mt-10 md:mt-5' onClick={() => setTitle("itemtoship")}>Proceed</button>
               </div>
             </div>
             </>
           )
}

export default DropOff
