import React, {useState} from 'react'
import {assets} from "../assets/assets.js"
import {useNavigate}  from "react-router-dom"


const SignUp = () => {
  const [signUpText, setSignUpText] = useState("Hello there,")
  const [secondSignUpText, setSecondSignUpText] = useState("Welcome,  Let's have you signed up")

    const handleSubmit = (event) => {
    event.preventDefault()
  }

   const handleArrowback = () => {
    setSignUpText("Hello there,")
    setSecondSignUpText("Welcome,  Let's have you signed up")

  }

  const handleSignupText = () => {
    setSignUpText("Almost Done!")
    setSecondSignUpText("Enter the 6-digit code being sent via your email confirm this is you")
  }

  const handleConfirmText = () => {
    setSignUpText("")
    setSecondSignUpText("")
  }



  const navigate = useNavigate()
  


  return (
    <>
      <div className='app-background relative'>
        <div className='container flex flex-col md:flex-row justify-between md:space-y-0 space-y-10 md:pt-10 md:pb-10 pt-20 '>
            <img className=' md:h-20 w-52' src={assets.logo} alt="" />
            <div className='bg-white px-5 lg:px-16 py-20 rounded-2xl w-full md:w-[50%]'>
               {
                   signUpText === "Hello there," ? (
                      ""
                    ) : signUpText === "" ? (
                      ""
                    ) : <img className='w-3 h-5 mb-7 cursor-pointer' src={assets.arrowback} onClick={handleArrowback} alt="" />
                }
              <h1 className='text-red-500 text-3xl font-bold'>{signUpText}</h1>
              <p className='text-gray-500 font-medium text-md'>{secondSignUpText}</p>

              <form onSubmit={handleSubmit}>
                {
                  signUpText === "Hello there," ? (
                    <>
                      <div className='flex flex-col pt-8 space-y-3'>
                          <input className='py-2 rounded-2xl border-2 border-gray-500 p-5'  type="text" placeholder='Name' required/>
                          <input className='py-2 rounded-2xl border-2 border-gray-500 p-5'  type="email" placeholder='Enter email' required/>
                          <input className='py-2 rounded-2xl border-2 border-gray-500 p-5'  type="password" placeholder='Enter password' required/>
                          <input className='py-2 rounded-2xl border-2 border-gray-500 p-5'  type="password" placeholder='Confirm password' required/>
                      </div>

                      <div className='flex pt-5 space-x-3'>
                        <div className="py-0.5 px-2 border-2 border-gray-500 rounded"></div>
                        <p className="text-gray-500 text-sm font-medium">I agree, to the <span className="text-blue-500">terms</span> and <span className="text-blue-500">conditions</span></p>
                      </div>
                    </>
                    ) : signUpText === "" ? (
                      ""
                    ) : 
                    <>
                    <div className='flex gap-5 items-center pt-5'>
                      <div  className='flex flex-row items-center gap-2'>
                        <input className="w-8 h-8 p-1 border-2 border-gray-500 rounded out" type="tel" />
                        <input className="w-8 h-8 p-1 border-2 border-gray-500 rounded" type="tel" />
                        <input className="w-8 h-8 p-1 border-2 border-gray-500 rounded" type="tel" />
                      </div>
                      <div  className='flex flex-row items-center gap-2'>
                        <input className="w-8 h-8 p-1 border-2 border-gray-500 rounded out" type="tel" />
                        <input className="w-8 h-8 p-1 border-2 border-gray-500 rounded" type="tel" />
                        <input className="w-8 h-8 p-1 border-2 border-gray-500 rounded" type="tel" />
                      </div>
                    </div>
                    </>
                }

                {
                  signUpText === "Hello there," ? (
                    ""
                  ) : signUpText === "Almost Done!" ? (
                    ""
                  ) : <>
                      <p className='text-center font-bold text-2xl text-black'>Confirmed!</p>
                      <img className='w-10 h-10 ml-[42%] lg:ml-[45%] mt-3' src={assets.nerdface} alt="" />
                      <img className='w-10 h-3 ml-[42%] lg:ml-[45%] mt-3' src={assets.nerdcircle} alt="" />
                  </>
                }

                {
                  signUpText === "Hello there," ? (
                       <button className='bg-red-500 hover:bg-red-600 text-white py-2 w-full mt-8 rounded-2xl' onClick={handleSignupText}>Sign up</button>
                    ): signUpText === "" ? (
                        <button type="button" className='bg-red-500 hover:bg-red-600 ml-[38%] md:ml-[40%] lg:ml-[42%] px-5 text-white py-2 mt-8 rounded-2xl' onClick={() => navigate("/kyc")}>Ok</button>
                    ) : <button type="button" className='bg-red-500 hover:bg-red-600 ml-[35%] md:ml-20 lg:ml-[37%] px-5 text-white py-2 mt-8 rounded-2xl' onClick={handleConfirmText}>Confirm</button>
                }
             
             {
              signUpText === "Hello there," || signUpText === "Almost Done!" ? (
                <>
                  <div className='pt-5 flex items-center justify-center gap-3'>
                        <p className='text-sm text-gray-600'>Already have an account ?</p>
                        <p className='text-sm text-blue-600 cursor-pointer hover:text-blue-700' onClick={() => navigate("/")}>Sign in</p>
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
              ) : ""
             }
            </form>
            </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
