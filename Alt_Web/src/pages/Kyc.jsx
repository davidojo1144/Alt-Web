import React, {useContext, useState} from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import CarDetails from '../components/CarDetails'
import VehinclesInfo from '../components/VehinclesInfo'
import { AltWebContext } from '../context/AltWebContext'


const Kyc = () => {
    const [kycText, setKycText] = useState("Hello there,")
    const [secondKycText, setSecondKycText] = useState(<>You have successfully created an account with sharperly, Would you like to know more <span className='text-blue-600'>about sharperly</span> corporate for logistics  or let us skip to the business KYC</>)


    const handleBusinessKyc = () => {
      setKycText("KYC")
      setSecondKycText("Let us get to know your business better")
    }

    const handleArrowback = () => {
      setKycText("Hello there,")
      setSecondKycText(<>You have successfully created an account with sharperly, Would you like to know more <span className='text-blue-600'>about sharperly</span> corporate for logistics  or let us skip to the business KYC</>)
    }

    const handleVehincle = () => {
      setKycText("Vehincles")
      setSecondKycText("Let’s get your vehicles information")
    }

    const handleCardetails = () => {
      setKycText("")
      setSecondKycText("")
    }


    const { navigate } = useContext(AltWebContext)



  return (
    <>
      <div className='app-background relative'>
        <div className='container flex flex-col md:flex-row justify-between md:space-y-0 space-y-10 md:pt-10 pb-10 md:pb-10 pt-20 '>
          <img className=' md:h-20 w-52' src={assets.logo} alt="" />
          <div className={`bg-white px-5 ${ kycText === "" ? "lg:px-5" : "lg:px-16" }  ${ kycText === "" ? "py-5" : "py-20" } ${ kycText === "" ? "" : "rounded-2xl" } w-full ${ kycText === "KYC" || kycText ===  "Vehincles" ? "md:w-[65%]" : "md:w-[60%]" } `}>
            { 
              kycText === "KYC" ? (
                <div className='flex gap-5 '>
                    <img className='w-3 h-5 mb-7 cursor-pointer' src={assets.arrowback} onClick={handleArrowback} alt="" />
                    <p className='font-bold text-black text-sm '>Step 2 of 2</p>
                </div>
              ) : kycText === "Vehincles" ? (
                  <img className='w-3 h-5 mb-7 cursor-pointer' src={assets.arrowback} onClick={handleBusinessKyc} alt="" />
              ) : ""
            }
            <h1 className='text-red-500 text-3xl font-bold'>{kycText}</h1>
            <p className='text-gray-500 font-medium text-md'>{secondKycText}</p>

            {
              kycText === "KYC" ? (
                <>
                <div className='ml-[42%] space-y-2 flex flex-col'>
                  <input 
                  type="file"
                  id="logo-upload"
                  className="hidden"  />
                  <label 
                    htmlFor="logo-upload" 
                    className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors overflow-hidden"
                  ><img className='w-5 h-5' src={assets.logohome} alt="" /></label>
                  <p className='font-medium text-blue-500 text-md ml-[2%]'>Logo</p>
                </div>

                <div className='flex flex-col md:flex-row gap-4 pt-4'>
                  <input 
                  type="text"
                  placeholder='Business name'
                  className='w-full py-1 rounded-2xl border border-gray-400 p-3 outline-none placeholder:text-xs ' />
                  <input 
                  type="text"
                  placeholder='Business email' 
                  className='w-full py-1 rounded-2xl border border-gray-400 p-3 outline-none placeholder:text-xs '/>
                </div>

                 <div className='flex flex-col md:flex-row gap-4 pt-4'>
                  <input 
                  type="text"
                  placeholder='Business address'
                  className='w-full py-1 rounded-2xl border border-gray-400 p-3 outline-none placeholder:text-xs ' />
                  <input 
                  type="text"
                  placeholder='CAC Registration number' 
                  className='w-full md:w-[70%] py-1 rounded-2xl border border-gray-400 p-3 outline-none placeholder:text-xs '/>
                </div>

                 <div className='flex flex-col md:flex-row gap-4 pt-4'>
                  <input 
                  type="text"
                  placeholder='Proof of address (not more than 2-months old electricity bill)'
                  className='w-full py-1 rounded-2xl border border-gray-400 p-3 outline-none placeholder:text-xs ' />
                  <input 
                  type="text"
                  placeholder='Business hotline' 
                  className='w-full md:w-[40%] py-1 rounded-2xl border border-gray-400 p-3 outline-none placeholder:text-xs '/>
                </div>

                 <div className='flex flex-col md:flex-row gap-4 pt-4'>
                  <input 
                  type="text"
                  placeholder='Alternative phone number'
                  className='w-full md:w-[50%] py-1 rounded-2xl border border-gray-400 p-3 outline-none placeholder:text-xs ' />
                  <input 
                  type="text"
                  placeholder='Would you want sharperly to give your drivers orders?' 
                  className='w-full py-1 rounded-2xl border border-gray-400 p-3 outline-none placeholder:text-xs '/>
                </div>

                <div className='bg-red-500 hover:bg-red-600 rounded-2xl py-2 flex items-center justify-center mt-5 w-[10%] ml-[45%] cursor-pointer' onClick={handleVehincle}>
                  <img className='h-5' src={assets.whitearrow} alt="" />
                </div>
                </>
              ) :  kycText === "Vehincles" ? (
                <>
                <VehinclesInfo/>
                <div className='bg-red-500 hover:bg-red-600 rounded-2xl py-2 flex items-center justify-center mt-7 w-[15%] ml-[45%] cursor-pointer' onClick={handleCardetails}>
                  <p className='text-white '>Done</p>
                </div>
                </>

              ) : kycText === "" ? (
                  <CarDetails/>
              ) : <>
                <button className='bg-red-500 hover:bg-red-600 text-white py-2 w-full mt-8 rounded-2xl' onClick={() => navigate("/roles")}>Next</button>
                <p className='mt-5 text-md text-blue-500 text-center font-medium hover:text-blue-600 cursor-pointer' onClick={handleBusinessKyc}>Skip</p>

                <div className='pt-5 flex items-center justify-center gap-3'>
                    <p className='text-sm text-gray-600'>Already have an account ?</p>
                    <p className='text-sm text-blue-600 cursor-pointer hover:text-blue-700'>Sign in</p>
                  </div>
                  <div className='flex items-center justify-center gap-5 pt-5'>
                    <div className='border border-gray-400 w-full' ></div>
                      <p className='text-gray-500 text-md'>Or</p>
                    <div className='border border-gray-400 w-full' ></div>
                  </div>
                  <div className='flex items-center justify-center gap-10 pt-5'>
                    <img className='w-10 h-10 cursor-pointer' src={assets.google} alt="" />
                    <img className='w-10 h-10 cursor-pointer' src={assets.apple} alt="" />
                  </div>
              </>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Kyc
