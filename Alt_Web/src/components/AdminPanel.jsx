import React from 'react'
import { adminPanel } from '../lib/AdminPanel'

const AdminPanel = () => {
  return (
    <>
      <div className='md:w-[20%] lg:p-8 md:p-4 p-8 '>
        <h1 className='text-red-500 text-xl font-bold'>Admin</h1>
        <div className='mt-5 ml-[5%] space-y-10'>
          {
            adminPanel.map((item, index) => (
              <div className='flex items-center gap-3 cursor-pointer' key={index}>
                <img className='w-5 h-5' src={item.img} alt="" />
                <p className='text-md text-black font-medium'>{item.name}</p>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default AdminPanel
