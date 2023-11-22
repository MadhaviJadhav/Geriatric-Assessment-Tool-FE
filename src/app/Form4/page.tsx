import React from 'react'
import Head from '../Form/Head'
import '../../../styles/global.css'

const devices = [
    {key:'Option 1', value:'Smart phone with internet'},
    {key:'Option 2', value:'Phone with internet'},
    {key:'Option 3', value:'Tablet'},
    {key:'Option 4', value:'Laptop/Computer'},
    {key:'Option 5', value:'Landline'},

]

const Form4 = () => {
    return (
        <>
            <div className='w-full h-full'>
                <Head />

                <div className='mx-3 mt-8 flex flex-col gap-10 '>
                    <div className='h-9'>
                        <p>1/3 Personal Details</p>
                    </div>

                    <div className=' flex flex-col gap-8'>
                        <p className='text-sm font-semibold uppercase'>Tech Details</p>
                        <div className='flex flex-col gap-6'>
                            <div>
                                <p>What type of Devices does the patient use?</p>
                                <p>(Select all applicable options)</p>
                            </div>
                            <div className='flex gap-2'>
                                <input type="checkbox" />
                                <label htmlFor="">Smart phone with Internet</label>
                            </div>

                            <div className='flex gap-2'>
                                <input type="checkbox" placeholder='smart phone with Interne' />
                                <label htmlFor="">Phone without Internet</label>
                            </div>

                            <div className='flex gap-2'>
                                <input type="checkbox" placeholder='smart phone with Interne' />
                                <label htmlFor="">Tablet</label>
                            </div>

                            <div className='flex gap-2'>
                                <input type="checkbox" placeholder='smart phone with Interne' />
                                <label htmlFor="">Laptop/Computer</label>
                            </div>

                            <div className='flex gap-2'>
                                <input type="checkbox" placeholder='smart phone with Interne' />
                                <label htmlFor="">Landline</label>
                            </div>
                        </div>
                    </div>
                    <div className='h-[81px] flex flex-col gap-4 text-sm font-medium'>
                        <div className='text-gray-1'>
                            <p>Does patient use social media on their phone?</p>

                        </div>
                        <div className='h-[48px] flex gap-4 text-gray-1 font-medium'>
                            <button className='button'>Yes</button>
                            <button className='button'>No</button>
                        </div>
                    </div>
                    <div className=' flex flex-col gap-8'>
                        <p className='text-sm font-semibold uppercase'>Tech Details</p>
                        <div className='flex flex-col gap-6'>
                            <div>
                                <p>Which social media/Internet platforms does the patient use?</p>
                                <p>(Select all applicable options)</p>
                            </div>
                            <div className='flex gap-2'>
                                <input type="checkbox" />
                                <label htmlFor="">Facebook</label>
                            </div>

                            <div className='flex gap-2'>
                                <input type="checkbox" placeholder='smart phone with Interne' />
                                <label htmlFor="">WhatsApp</label>
                            </div>

                            <div className='flex gap-2'>
                                <input type="checkbox" placeholder='smart phone with Interne' />
                                <label htmlFor="">Email</label>
                            </div>

                            <div className='flex gap-2'>
                                <input type="checkbox" placeholder='smart phone with Interne' />
                                <label htmlFor="">Other</label>
                            </div>
                        </div>
                    </div>
                    <div className='h-[80px] py-4  flex gap-4 w-full px-7 py-4 text-sm font-medium  shadow-inner'>
                        <div className='w-1/3  h-[48px] flex justify-center items-center text-center bg-gray-6 text-gray-1'>
                            <button type='submit'  className='button_footer'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M20.25 12a.75.75 0 01-.75.75H6.31l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 111.06 1.06l-5.47 5.47H19.5a.75.75 0 01.75.75z" clipRule="evenodd" />
                                </svg>

                                <p className='uppercase'>Back</p>
                            </button>
                        </div>
                        <div className='w-8/12 h-[48px] flex justify-center items-center text-center bg-gray-1 text-gray-6'>
                            <button className='button_footer' type='submit'>
                                <p className='uppercase'>Save And Next</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form4