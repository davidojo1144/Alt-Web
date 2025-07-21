import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [loginText, setLoginText] = useState("Hello there,")
  const [secondLoginText, setSecondLoginText] = useState("Welcome back,  Let's have you logged in")
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [confirmationCode, setConfirmationCode] = useState("")

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleForgotPasswordText = () => {
    setLoginText("Oooops!")
    setSecondLoginText("Seems you forgot your password, Enter your registered Email")
  }

  const handleArrowback = () => {
    setLoginText("Hello there,")
    setSecondLoginText("Welcome back,  Let's have you logged in")
    setShowConfirmation(false)
  }

  const handleReset = () => {
    setShowConfirmation(true)
  }

  const handleConfirm = () => {
    console.log("Confirmation code:", confirmationCode)
    setShowConfirmation(false)
    setLoginText("Setup your new password")
    setSecondLoginText("Enter a unique password you would remember")
  }

  return (
    <>
      <div className={`app-background relative ${showConfirmation ? 'filter blur-sm' : ''}`}>
        <div className='container flex flex-col md:flex-row justify-between md:space-y-0 space-y-10 md:pt-10 md:pb-10 pt-20 '>
          <img className=' md:h-20 w-52' src={assets.logo} alt="" />
          <div className='bg-white px-5 lg:px-16 py-20 rounded-2xl w-full md:w-[50%]'>
            {
              loginText === "Hello there," ? (
                ""
              ) : <img className='w-3 h-5 mb-7 cursor-pointer' src={assets.arrowback} onClick={handleArrowback} alt="" />
            }
            <h1 className='text-red-500 text-3xl font-bold'>{loginText}</h1>
            <p className='text-gray-500 font-medium text-md'>{secondLoginText}</p>

            <form onSubmit={handleSubmit}>
              <div className='flex flex-col pt-8 space-y-5'>
                {
                  loginText === "Setup your new password" ? (
                    ""
                  ) :   <input className='py-2 rounded-2xl border-2 border-gray-500 p-5'  type="email" placeholder='Enter your email address' required/>
                }
                {
                  loginText === "Hello there," ? (
                     <input className='py-2 rounded-2xl border-2 border-gray-500 p-5'  type="password" placeholder='Enter your password' required/>
                  ) : loginText === "Setup your new password" ? (
                    <>
                      <input className='py-2 rounded-2xl border-2 border-gray-500 p-5'  type="password" placeholder='Enter new password' required/>
                      <input className='py-2 rounded-2xl border-2 border-gray-500 p-5'  type="password" placeholder='Confirm new password' required/>
                    </>
                  ) : ""
                }
              </div>
              {
                 loginText === "Hello there," ? (
                    <p className='text-sm text-blue-600 pt-3 pl-5 cursor-pointer hover:text-blue-700' onClick={handleForgotPasswordText}>Forgot password</p>
                  ) : ""
              }
              {
                loginText === "Hello there," ? (
                <button className='bg-red-500 hover:bg-red-600 text-white py-2 w-full mt-8 rounded-2xl'>Sign in</button>
                ) : loginText === "Setup your new password" ? (
                  <button className='bg-red-500 hover:bg-red-600 text-white ml-[35%] py-1 w-[25%] mt-8 rounded-2xl'>Done</button>
                ) : (
                  <button type="button" className='bg-red-500 hover:bg-red-600 ml-[35%] md:ml-20 lg:ml-[37%] px-5 text-white py-2 mt-8 rounded-2xl' onClick={handleReset}>Reset</button>
                )
              }
              {
                loginText === "Setup your new password" ? (
                  ""
                ) : <>
                  <div className='pt-5 flex items-center justify-center gap-3'>
                    <p className='text-sm text-gray-600'>New user ?</p>
                    <p className='text-sm text-blue-600 cursor-pointer hover:text-blue-700' onClick={() => navigate("/signup")}>Create a new Account</p>
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
            </form>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white md:m-0 m-10 md:ml-[43%] pb-10 md:p-20 p-5 rounded-2xl shadow-lg w-full max-w-md">
            <h2 className="text-md font-light mb-4">Enter the code sent to your email to confirm if this is you</h2>
            <input
              type="text"
              value={confirmationCode}
              onChange={(e) => setConfirmationCode(e.target.value)}
              className="w-full py-1 px-4 border-2 border-gray-400 rounded-2xl mb-4"
              placeholder="Enter confirmation code"
            />
            <button
              onClick={handleConfirm}
              className="bg-red-500 hover:bg-red-600 text-white py-1 w-[30%] ml-[30%] rounded-2xl"
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Login