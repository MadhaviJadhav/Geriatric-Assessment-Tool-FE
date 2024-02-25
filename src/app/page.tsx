"use client"

import '../../styles/global.css'
import Login from '@/app/Login/page'
import Link from 'next/navigation'
export default function Home() {

  return (
    <>
      <div>This is home page</div>
      <a href="Login">Go to login page</a>
    </>
  )
}
