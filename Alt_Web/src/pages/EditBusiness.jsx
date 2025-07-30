import React, { useContext} from 'react'
import { assets } from '../assets/assets'
import { AltWebContext } from '../context/AltWebContext'

const EditBusiness = () => {
 const {navigate} = useContext(AltWebContext)
 
 
 
   return (
     <>
     <div>
       <div className='lg:p-8 md:p-4 md:ml-0 ml-10 p-8 relative'>
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
         <div className='flex justify-between px-10 md:px-20 py-5 md:py-7 rounded-2xl md:mx-[10%]'>
             <p className='text-md font-medium text-red-500'>Profile</p>
             <p className='text-md font-medium text-gray-600'>Support & Help/Personalize</p>
         </div>
         <div className='border border-gray-500 rounded-2xl mt-3 md:mt-7 p-5 md:p-8'>
             <div className='flex justify-between md:items-center items-end'>
                 <div className='flex flex-col md:flex-row  gap-3'>
                     <input type="file"
                     id='logo-upload'
                     className='hidden' />
                     <label 
                     htmlFor="logo-upload" 
                     className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer  transition-colors overflow-hidden"
                     ><img className='w-10 h-10' src={assets.profileimg} alt="" /></label>
                     <p className='text-md md:text-xl font-medium text-blue-500'>Business profile</p>
                 </div>
                 <button className='py-1 px-3 border border-gray-500 hover:bg-gray-100 text-gray-600 hover:text-black rounded ' 
                 >Edit profile</button>
             </div>
             <div className='mt-5 space-y-1'>
                 <p className='text-md font-medium text-black'>Name</p>
                
         </div>
         <div className='mt-5 space-y-1'>
                 <p className='text-md font-medium text-black'>Business email</p>
                
         </div>
          <div className='mt-5 space-y-1'>
                 <p className='text-md font-medium text-black'>Business address</p>
                
         </div>
          <div className='mt-5 space-y-1'>
                 <p className='text-md font-medium text-black'>Registration number(CAC)</p>
                 
         </div>
         <div className='mt-5 flex flex-col md:flex-row gap-5 md:items-center md:w-[50%]'>
            <div>
                <p className='text-md font-medium text-black'>Business hotline</p>
               
            </div>
            <div>
                <p className='text-md font-medium text-black'>Alternative number</p>
                
            </div>
         </div>
         </div>
       </div>
     </div>
     </>
   )
}

export default EditBusiness
