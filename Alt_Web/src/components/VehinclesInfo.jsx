import React from 'react'

const VehinclesInfo = () => {
  return (
    <>
       <div className='flex flex-col md:flex-row gap-4 pt-8'>
        <input 
        type="text"
        placeholder='Number of drivers'
        className='w-full py-1 rounded-2xl border border-gray-400 p-3 outline-none placeholder:text-xs ' />
        <input 
        type="text"
        placeholder='Number of vehincle (cars)' 
        className='w-full py-1 rounded-2xl border border-gray-400 p-3 outline-none placeholder:text-xs '/>
    </div>

    <div className='flex flex-col md:flex-row gap-4 pt-4'>
        <input 
        type="text"
        placeholder='Number of biles'
        className='w-full py-1 rounded-2xl border border-gray-400 p-3 outline-none placeholder:text-xs ' />
        <input 
        type="text"
        placeholder='Number of vans' 
        className='w-full py-1 rounded-2xl border border-gray-400 p-3 outline-none placeholder:text-xs '/>
    </div>

    <div className='flex pt-7 space-x-3'>
        <div className="py-0.5 px-2 border-2 border-gray-500 rounded"></div>
        <p className="text-gray-500 text-sm font-medium">I agree, to the <span className="text-blue-500">terms</span> and <span className="text-blue-500">conditions</span></p>
    </div>
    </>
  )
}

export default VehinclesInfo
