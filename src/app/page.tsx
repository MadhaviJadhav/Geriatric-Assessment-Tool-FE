"use client"



import { useRouter } from 'next/navigation'
// import { useEffect } from 'next/navigation'
import { useState } from 'react';

import styles from "/page.module.css";
export default function Home() {
  const router = useRouter()
  const [doctorId, setDoctorId] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleSubmit = () => {
   if (doctorId && password) {
    router.push("/Dashboard")
   } else {
    alert("Doctor Id or password is incorrect")
   }
  }
  
  return (
    <>
    <title>Login Page</title>
      <div className='container w-full h-screen flex-col relative flex justify-center items-center border-2-black font-["Inter"]'>
        
        <div className='flex flex-col w-3/4 h-3/4'>
          <div className="input flex flex-col gap-5">
          
            <input className='text-start p-3 self-center bg-gray-6 text-gray-4 w-full h-1/2 font-normal focus:outline-none shadow-md ' type="text" name='username' placeholder="Doctor's ID" onChange={(e) => {
              setDoctorId(e.target.value)
            }} />
            <input className='text-start p-3 self-center bg-gray-6 text-gray-4 w-full h-1/2 font-normal focus:outline-none shadow-md' type="Password"  name='password' placeholder='Password' onChange={(e) => {
              setPassword(e.target.value)
            }}  />
            <a className='text-gray-3 400 underline  hover:no-underline' href="http://">Forgot Password?</a>
            {/* <Link href="#"><a>Forget Password?</a></Link> */}
           
          </div>
        </div>
        <button onClick={handleSubmit} className="w-3/4 font-semibold self-center bg-gray-1 hover:bg-black text-white  py-3 px-4 " type='submit'>LOGIN</button> 
      </div>
    </>
  )
}
