import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { AltWebContext } from '../context/AltWebContext'

const Profile = () => {
  const { navigate } = useContext(AltWebContext)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    about: ''
  })


  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSave = () => {
    localStorage.setItem('profileData', JSON.stringify(formData))
    setFormData({
    name: '',
    email: '',
    about: ''
    })
    navigate("/editprofile")
  }



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
        <div className='flex justify-between px-10 md:px-20  border border-gray-500 py-5 md:py-7 rounded-2xl md:mx-[10%]'>
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
                    <p className='text-xs md:text-sm font-medium text-blue-500'>Change profile picture</p>
                </div>
                <p className='text-sm md:text-md font-medium text-blue-500 cursor-pointer' onClick={() => navigate("/businessprofile")}>Business Profile</p>
            </div>
            <div className='mt-5 space-y-1'>
                <p className='text-md font-medium text-black'>Name</p>
                <input 
                className='pl-2 py-1 w-[80%] md:w-[50%] rounded border border-gray-500 outline-none' 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder='Enter name' 
                />
        </div>
        <div className='mt-5 space-y-1'>
                <p className='text-md font-medium text-black'>Email</p>
                <input 
                className='pl-2 py-1 w-[80%] md:w-[50%] rounded border border-gray-500 outline-none' 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder='Enter email'
                 />
        </div>
        <div className='mt-5 space-y-1'>
                <p className='text-md font-medium text-black'>About</p>
                <textarea 
                className='pl-2 py-1 h-20 w-[50%]  md:w-[30%] rounded border border-gray-500 outline-none' 
                name="about"
                value={formData.about}
                onChange={handleInputChange}
                placeholder='About' 
                />
        </div>
        <button 
        className='py-1 px-3 border border-gray-500 hover:bg-gray-100 text-gray-600 hover:text-black rounded ml-[80%] md:ml-[90%]' 
        disabled={!formData.name || !formData.email || !formData.about}
        onClick={handleSave}
        >Done</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile