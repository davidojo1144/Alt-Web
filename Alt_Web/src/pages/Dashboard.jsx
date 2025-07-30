import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { dispatcherDetails } from '../lib/DispatcherDetails'
import { AltWebContext } from '../context/AltWebContext'

const Dashboard = () => {
  const {navigate, activeDelivery, pendingDelivery, successfulDelivery, totalDelivery} =  useContext(AltWebContext)


  return (
    <div>
      <div className='lg:p-8 md:p-4 md:ml-0 ml-10 p-10 relative'>
        <div className='flex justify-between'>
          <h1 className='text-xl md:text-2xl font-normal md:font-bold'>Welcome, Eric</h1>
          <div className='flex gap-12 md:gap-3 p-3 border-2 border-gray-500 rounded-2xl  justify-between'>
            <img className='w-5 h-5 cursor-pointer' src={assets.dashnotification} alt="" />
            <img className='w-5 h-5 cursor-pointer' src={assets.dashprofile} alt="" />
          </div>
        </div>  
      </div>
      <div className='w-full border border-gray-400'></div>
      <div className='lg:p-8 md:p-4 p-8' >
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 justify-between md:mb-5 mb-10'>
          <div className='w-full py-5 border border-gray-400 rounded-3xl p-8 md:p-4 bg-red-500 hover:bg-red-600 cursor-pointer' onClick={() => navigate("/totaldeliveries")}>
            <div className='flex justify-between items-center'>
              <p className='text-md  text-gray-500'>Total Dispatch</p>
              <div className='bg-white text-black rounded-3xl text-md md:text-sm  md:p-2 p-4 '>+150%</div>
            </div>
            <p className='md:text-2xl text-xl font-semibold text-black'>{totalDelivery}</p>
          </div>
           <div className='w-full py-5 border border-gray-400 rounded-3xl p-8 md:p-4 bg-white hover:bg-gray-50 cursor-pointer' onClick={() => navigate("/activedeliveries")}>
            <div className='flex justify-between items-center'>
              <p className='text-md  text-gray-500'>Active Dispatch</p>
              <div className='bg-red-500 text-white rounded-3xl text-md md:text-sm  md:p-2 p-4 '>+100%</div>
            </div>
            <p className='md:text-2xl text-xl font-semibold text-black'>{activeDelivery}</p>
          </div>
           <div className='w-full py-5 border border-gray-400 rounded-3xl p-8 md:p-4 bg-red-500 hover:bg-red-600 cursor-pointer' onClick={() => navigate("/pendingdeliveries")} >
            <div className='flex justify-between items-center'>
              <p className='text-md  text-gray-500'>Pending Dispatch</p>
              <div className='bg-white text-black rounded-3xl text-md md:text-sm  md:p-2 p-4 '>+90%</div>
            </div>
            <p className='md:text-2xl text-xl font-semibold text-black'>{pendingDelivery}</p>
          </div>
          <div className='w-full py-5 border border-gray-400 rounded-3xl p-8 md:p-4 bg-white hover:bg-gray-50 cursor-pointer' onClick={() => navigate("/successfuldeliveries")} >
            <div className='flex justify-between items-center'>
              <p className='text-md  text-gray-500'>Successful Dispatch</p>
              <div className='bg-red-500 text-white rounded-3xl text-md md:text-sm  md:p-2 p-4 '>+150%</div>
            </div>
            <p className='md:text-2xl text-xl font-semibold text-black'>{successfulDelivery}</p>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-between'>
          <div className='w-full py-5 border border-gray-400 rounded-3xl p-8 md:p-4 bg-white'>
            <div className='flex justify-between '>
              <p className='text-sm font-normal'>Dispatch Sales</p>
              <p className='font-bold'>:</p>
            </div>
            <div className='flex gap-3 mt-3 mb-8'>
              <div className='py-1 px-2 bg-red-500 rounded-2xl text-xs text-white'>Weekly</div>
              <div className='py-1 px-2 bg-gray-500 rounded-2xl text-xs text-white'>Monthly</div>
            </div>
            <img src={assets.chart} alt="" />
          </div>
          <div className='w-full py-5 border border-gray-400 rounded-3xl p-8 md:p-4 bg-white'>
            <div className='flex justify-between '>
              <p className='text-sm font-normal'>History</p>
              <p className='font-bold'>:</p>
            </div>
            <div>
              <div className='flex justify-between mb-1 mt-5'>
                <p className='font-normal text-sm'>January</p>
                <p className='font-normal text-sm'>100%</p>
              </div>
              <div className='w-full bg-red-500 py-1 rounded-3xl'></div>
            </div>
             <div>
              <div className='flex justify-between mb-1 mt-3'>
                <p className='font-normal text-sm'>Febuary</p>
                <p className='font-normal text-sm'>80%</p>
              </div>
              <div className='w-[80%] bg-red-500 py-1 rounded-3xl'></div>
            </div>
             <div>
              <div className='flex justify-between mb-1 mt-3'>
                <p className='font-normal text-sm'>March</p>
                <p className='font-normal text-sm'>95%</p>
              </div>
              <div className='w-[95%] bg-gray-500 py-1 rounded-3xl'></div>
            </div>
             <div>
              <div className='flex justify-between mb-1 mt-3'>
                <p className='font-normal text-sm'>April</p>
                <p className='font-normal text-sm'>50%</p>
              </div>
              <div className='w-[50%] bg-red-500 py-1 rounded-3xl'></div>
            </div>
          </div>
          <div className='w-full py-5 border border-gray-400 rounded-3xl p-8 md:p-4 bg-red-50'>
            <p className='mb-3 text-sm font-normal'>Dispatcher Details</p>
            <div className='space-y-5'>
              {
                dispatcherDetails.map((item, index) => (
                  <div className='flex gap-3' key={index}>
                    <img className='w-5 h-5' src={item.img} alt="" />
                    <p className='text-sm font-normal'>{item.name}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className='w-full p-5 border border-gray-400 rounded-3xl  mt-5'>
            <img src={assets.recentshipment} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Dashboard