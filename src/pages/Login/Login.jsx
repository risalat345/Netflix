import React from 'react'
import { useState } from 'react'
import { login,signup } from '../../firebase'
import "./login.css"
const Login = () => {
  const [sign, setsign] = useState("Sign Up")
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const user_Auth=async(event)=>{
    event.preventDefault()
    if(sign==="Sign Up"){
     await signup(name,email,password)
    }else{
      await login(email,password)
    }
  }
  return (
    <div className='login px-[2%] md:px-[8%] py-[5px] '>
      <div className="logo">
        <img width={100} src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png" alt="" />
      </div>
      <div className="flex justify-center">
        <div className="md:w-6/12 w-10/12 h-fit rounded-lg bg-black p-8">
        <h1 className='font-bold text-2xl my-5'>{sign}</h1>
        <div className='flex flex-col gap-2'>
        {sign === "Sign Up"?<input value={name} onChange={(e)=>{setname(e.target.value)}} className='flex rounded-lg w-full outline-none bg-gray-800 p-2 placeholder:text-gray-300' placeholder='Your Name' type="text" name="" id="" />:<></>}
        <input value={email} onChange={(e)=>{setemail(e.target.value)}} className='flex rounded-lg w-full outline-none bg-gray-800 p-2 placeholder:text-gray-300' placeholder='Email' type="email" name="" id="" />
        <input value={password} onChange={(e)=>{setpassword(e.target.value)}} className='flex rounded-lg w-full outline-none bg-gray-800 p-2 placeholder:text-gray-300' placeholder='Password' type="password" name="" id="" />
        <button type='submit' onClick={user_Auth} className='w-full p-3 bg-red-600 font-bold rounded-lg hover:bg-red-700'>{sign==="Sign Up"?"Sign Up":"Sign In"}</button>
        </div>
       <div className='flex justify-between m-3'>
        <div className='flex flex-row items-center gap-3'>
        <input
        type="checkbox"
        id="checkbox"
        className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
      />
      <label htmlFor="checkbox" className="text-sm text-gray-300">
        Remember me
      </label>
        </div>
        <div>
          <h1 className='text-gray-400'>Need Help?</h1>
        </div>
       </div>
       <div>
        {sign==="Sign Up"?<h1 className='text-gray-400 text-[10px] md:text-[14px]'>Already Have An Account? <span onClick={()=>{setsign("Sign In")}} className='text-white font-bold cursor-pointer'>Sign In Now</span></h1>:<h1 className='text-gray-400 text-[10px] md:text-[14px]'>New To Netflix? <span onClick={()=>{setsign("Sign Up")}} className='text-white font-bold cursor-pointer'>Sign Up Now</span></h1>}
        
       </div>
        </div>
      </div>
    </div>
  )
}

export default Login
