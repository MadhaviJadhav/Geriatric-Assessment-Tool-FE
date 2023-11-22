'use client'

import React from 'react'
import Head from '../Form/Head'
import { useRouter } from 'next/navigation'
import '../../../styles/global.css'

import { Formik, Form, Field } from 'formik'
import { assementForm3 } from '../schemas'


const initialValues = {
    phNumbers:['','']
}

const Form3 = () => {

    const router = useRouter();

    const onBack = () => {
        router.push('/Form2')
    }

    return (
        <>
            <div className='w-full h-full'>
                <Head />

                <Formik
                initialValues={initialValues}
                validationSchema={assementForm3}
                onSubmit={(values)=>{
                    console.log(values)
                }}
                >
                    {formik => {
                        return (
                            <Form>
                                <div className='mx-3 mt-8 flex flex-col gap-10 '>
                                    <div className='h-9'>
                                        <p>1/3 Personal Details</p>
                                        {/* <div>Madhavi</div> */}
                                    </div>

                                    <div className='flex flex-col gap-8'>
                                        <div className=' flex flex-col gap-8 '>
                                            <p>Patient Contact Details</p>
                                            <div className='box'>
                                                <Field type="text" name="phNumbers[0]" id="primary_number" className='input_box' placeholder='Primary Phone Number' />
                                            </div>
                                            <div className='box'>
                                                <input type="text" name="phNumbers[1]" id="secondary_number" className='input_box' placeholder='Secondary Phone Number' />
                                            </div>

                                            <div className='text-right'>
                                                <a className="text-gray-1 text-sm underline hover:no-underline " href="http://">+ add another</a>
                                            </div>


                                            <div className='box'>
                                                <input type="text" name="mrn_number" id="mrn_number" className='input_box' placeholder='Email ID' />
                                            </div>
                                        </div>
                                        <div className=' flex flex-col gap-8 realative'>
                                            <p>Patient Contact Details</p>
                                            <div className='box'>
                                                <input type="text" name="mrn_number" id="mrn_number" className='input_box' placeholder='Primary Phone Number' />
                                            </div>

                                            <div className='text-right'>
                                                <a className="text-gray-1 text-sm underline hover:no-underline " href="http://">+ add another</a>
                                            </div>


                                            <div className='box'>
                                                <input type="text" name="mrn_number" id="mrn_number" className='input_box' placeholder='Email ID' />
                                            </div>
                                        </div>
                                        <div className='h-[80px] py-4  flex gap-4 w-full px-7 py-4 text-sm font-medium  shadow-inner'>
                                            <div className='w-1/3  h-[48px] flex justify-center items-center text-center bg-gray-6 text-gray-1'>
                                                <button type='submit' onClick={onBack} className='button_footer'>
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
                            </Form>
                        )
                    }}
                </Formik>

            </div>
        </>
    )
}

export default Form3