import React from 'react'
import { assets } from '../assets/assets'

const ItemToShip = ({setTitle}) => {
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
                        <img className='w-3 h-5 cursor-pointer' src={assets.arrowback} alt="" onClick={() => setTitle("dropoff")}/>
                        <h1 className='text-black text-2xl font-semibold'>Add items to ship</h1>
                    </div>
                    <div className='mt-5 ml-[6%]'>
                        <img className='w-12 h-12 ml-[30%] md:ml-[20%] lg:ml-[10%]' src={assets.solarCart} alt="" />
                        <p className='text-sm text-gray-500 font-normal'>Add as many items as you want to ship</p>
                    </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 mt-10 md:ml-10 mr-[0%] md:mr-20 lg:mr-44 gap-10'>
                            <div className='border border-gray-500 p-3 md:p-5 rounded'>
                                <p className='text-xl text-black font-medium text-center'>Stock Fish</p>
                                <div className='mt-3 mb-3'>
                                    <p className='text-sm  text-gray-500 font-normal text-center'>Dried food</p>
                                </div>
                                <p className='text-red-600 text-sm text-end'>Item to ship</p>
                            </div>
                            <div className='border border-gray-500 p-3 md:p-5 space-y-2  rounded'>
                                <img className='w-5 h-5 ml-[45%] mt-5 cursor-pointer' src={assets.addAddress} alt="" />
                                <p className='text-center text-xl text-gray-600'>Add pickup address</p>
                            </div>
                             <div className='border border-gray-500 p-3 md:p-5 rounded'>
                                <p className='text-xl text-black font-medium text-center'>Nike air shoe</p>
                                <div className='mt-3 mb-3'>
                                    <p className='text-sm  text-gray-500 font-normal text-center'>Footwear</p>
                                </div>
                                <p className='text-red-600 text-sm text-end'>Item to ship</p>
                            </div>
                             <div className='border border-gray-500 p-3 md:p-5 rounded'>
                                <p className='text-xl text-black font-medium text-center'>Iphone 11</p>
                                <div className='mt-3 mb-3'>
                                    <p className='text-sm  text-gray-500 font-normal text-center'>Gadgets</p>
                                </div>
                                <p className='text-red-600 text-sm text-end'>Item to ship</p>
                            </div>
                        </div>
                        <button className='py-1 px-5 mt-7 ml-[65%] md:ml-[65%] lg:ml-[60%] bg-red-500 hover:bg-red-600 text-white rounded' onClick={()=> setTitle("choosedriver")}>Proceed</button>
                 </div>
               </div>
               </>
             )
}

export default ItemToShip
