import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AltWebContext } from '../context/AltWebContext'
import { searchOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import { deliveries } from '../lib/Deliveries';

const PendingDelivery = () => {
 const {pendingDelivery} = useContext(AltWebContext)
 
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
             <h1 className='text-2xl font-semibold'>Pending Deliveries</h1>
             <p className='text-xs font-normal'>you have {pendingDelivery} pending deliveries</p>
           </div>
          <div className='flex gap-5 items-center mt-5'>
           <div className='relative flex items-center'>
             <IonIcon 
               icon={searchOutline} 
               className='absolute left-3 text-gray-500'
             />
             <input 
               type="text" 
               placeholder="Search deliveries..." 
               className='w-full pl-10  py-2 text-sm border border-gray-300 rounded-md outline-none bg-gray-100 placeholder:text-gray-500'
             />
           </div>
           <button 
             className='text-xs font-light text-white py-3 md:px-4 px-2 w-[30%] md:w-[20%] lg:w-[15%] bg-red-500 hover:bg-red-600 rounded-md transition-colors duration-200'
           >
             New Shipment
           </button>
         </div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7 gap-5'>
           {
             deliveries.map((items, index) => (
               <div className='border border-gray-500 p-5 rounded' key={index}>
                 <div className='flex justify-between'>
                   <div className='space-y-1'>
                     <p className={` text-xs font-normal ${items.status === "Picked" ? "text-green-500" : "text-red-400"}`}>{items.status}</p>
                     <p className='text-md font-semibold text-black'>{items.productName}</p>
                     <p className='text-xs font-light text-gray-500'>{items.min}</p>
                   </div>
                   <div className='flex gap-2'>
                     <div className='bg-gray-300 rounded-full p-1 h-4 cursor-pointer'>
                       <img className='w-2 h-2' src={assets.deliveryimg1} alt="" />
                     </div>
                      <div className='bg-red-200 rounded-full p-1 h-4 cursor-pointer'>
                       <img className='w-2 h-2' src={assets.deliveryimg2} alt="" />
                     </div>
                   </div>
                 </div>
                 <div className='border w-full border-gray-400 mt-5'></div>
                 <p className='text-sm text-black font-medium mt-2'>Delivery Details</p>
                 <div className='flex items-center gap-2 mt-2'>
                   <img className='bg-red-500 w-3 h-3 rounded p-[1%]' src={assets.deliverycheckmark} alt="" />
                   <p className='text-gray-500 text-xs font-normal'>Pick up: {items.pickUp}</p>
                 </div>
                 <div className='flex items-center gap-2 mt-1'>
                   <img className='bg-red-500 w-3 h-3 rounded p-[1%]' src={assets.deliverycheckmark} alt="" />
                   <p className='text-gray-500 text-xs font-normal'>Drop off: {items.dropOff}</p>
                 </div>
                 <div className='border w-full border-gray-400 mt-5'></div>
                 <div className='flex justify-between items-center mt-3'>
                   <div className='space-y-1'>
                     <p className='text-xs font-normal text-gray-500'>Customer</p>
                     <p className='text-xs font-medium text-black'>{items.customerName}</p>
                   </div>
                   <div div className='space-y-1'>
                     <p className='text-xs font-normal text-gray-500'>Delivery price</p>
                     <p className='text-xs font-medium text-black'>{items.deliveryPrice}</p>
                   </div>
                 </div>
                 <div className='border w-full border-gray-400 mt-5'></div>
                 <div className='flex justify-between items-center mt-3'>
                   <div className='flex gap-3 items-center'>
                     <div className='bg-gray-300 rounded-full h-7 w-7 p-2'>
                       <img className='w-4 h-4' src={assets.deliveryprofile} alt="" />
                     </div>
                     <div>
                       <p className='text-xs font-medium text-gray-500'>{items.profileName}</p>
                       <p className='text-xs font-normal text-red-500'>change</p>
                     </div>
                   </div>
                   <div className='bg-green-200 rounded-full h-7 w-7 p-2'>
                     <img src={assets.deliveryphone} alt="" />
                   </div>
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

export default PendingDelivery
