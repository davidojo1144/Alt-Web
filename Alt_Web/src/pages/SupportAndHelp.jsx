import React, { useContext} from 'react'
import { assets } from '../assets/assets'
import { AltWebContext } from '../context/AltWebContext'

const SupportAndHelp = () => {
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
           <div className='flex border border-gray-500 justify-between px-10 md:px-20 py-5 md:py-7 rounded-2xl md:mx-[10%]'>
               <p className='text-md font-medium text-gray-500 cursor-pointer' onClick={() => navigate("/profile")}>Profile</p>
               <p className='text-md font-medium text-red-600 cursor-pointer' >Support & Help/Personalize</p>
           </div>
           <div className='grid grid-cols-1 md:grid-cols-2 mt-8 gap-5'>
            <div>
              <p>Support & Help</p>
              <div className='border border-gray-500 p-5 md:p-2 lg:px-5 lg:pt-5 lg:pb-12 rounded-2xl mt-2'>
                <div>
                  <div className='flex gap-3 items-center'>
                    <img className='w-7 h-7' src={assets.supportIcon} alt="" />
                    <p className='text-md font-semibold'>Support & Help</p>
                  </div>
                  <p className='text-xs font-normal text-gray-500 pl-10'>Ask anything and we’d respond</p>
                </div>
                <p className='mt-7 text-xl text-red-500 font-semibold'>How can we help ?</p>
                <p className='text-sm text-gray-500 font-normal'>Lorem ipsum dolor sit amet consectetur. Porttitor risus vitae nulla quisque sit tortor eget nec orci.</p>
              </div>
            </div>
            <div>
              <p>Personalize</p>
              <div className='border border-gray-500 p-5 md:p-2 lg:px-5 lg:pt-5 lg:pb-8  rounded-2xl mt-2'>
                <div>
                  <div className='flex gap-3 items-center'>
                    <img className='w-5 h-5' src={assets.dashnotification} alt="" />
                    <p className='text-md font-semibold'>Personalize</p>
                  </div>
                  <p className='text-xs font-normal text-gray-500 pl-10'>Change your setting</p>
                </div>
                <div className='mt-8 flex items-center gap-3'>
                  <img className='w-4 h-4' src={assets.supportnotification} alt="" />
                  <p className='text-black text-sm font-normal cursor-pointer'>Notification Preference</p>
                </div>
                <div className='mt-3 flex items-center gap-3'>
                  <img className='w-4 h-4' src={assets.supportupdate} alt="" />
                  <p className='text-black text-sm font-normal cursor-pointer'>Update contact information</p>
                </div>
                <div className='mt-3 flex items-center gap-3'>
                  <img className='w-4 h-4' src={assets.supportlanguage} alt="" />
                  <p className='text-black text-sm font-normal cursor-pointer'>Languages</p>
                </div>
              </div>
            </div>
           </div>
         </div>
       </div>
       </>
     )
}

export default SupportAndHelp
