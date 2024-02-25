"use client"

import { ApiConstants } from '@/api/ApiConstants';
import axios from 'axios';
import { invalid } from 'moment';
import { useRouter } from 'next/navigation'
import { useState } from 'react';



export default function Login() {
  const router = useRouter()
  const [doctorId, setdoctorId] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleSubmit = async () => {
    if(doctorId=="" || password=="")
    {
      alert("Please fill the values")
      return null
    }


    try {
      const response = await axios.post(`http://localhost:3001${ApiConstants.LOGIN}`, { doctorId, password });

      localStorage.setItem("token", response.data)
      console.log("Login Sucessful", response.data)
      router.push('/Dashboard')
    }
    catch (error) {
      alert("Invalid user")
      localStorage.removeItem("token")
      console.log("Error..", error)
    }
  }

  return (
    <>
      <div className='container w-full h-screen flex-col relative flex justify-center items-center border-2-black font-serif'>

        <div className='flex flex-col w-3/4 h-3/4'>
          <div className="input flex flex-col gap-5">

            <input className='text-start p-3 self-center bg-gray-6 text-gray-4 w-full h-1/2 font-normal focus:outline-none shadow-md' type="text" name='doctorId' placeholder="Doctor's ID" onChange={(e) => {
              setdoctorId(e.target.value)
            }} />
            <input className='text-start p-3 self-center bg-gray-6 text-gray-4 w-full h-1/2 font-normal focus:outline-none shadow-md' type="Password" name='password' placeholder='Password' onChange={(e) => {
              setPassword(e.target.value)
            }} />
            <a className='text-gray-3 400 underline  hover:no-underline' href="http://">Forgot Password?</a>
            {/* <Link href="#"><a>Forget Password?</a></Link> */}

          </div>
        </div>
        <button onClick={handleSubmit} className="w-3/4 font-semibold self-center bg-gray-1 hover:bg-black text-white  py-3 px-4 " type='submit'>LOGIN</button>
      </div>
    </>
  )
}
