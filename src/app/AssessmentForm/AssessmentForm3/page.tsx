'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

import { Formik, Form, FieldArray, ErrorMessage } from 'formik'
import FormikControl from '@/formik/FormikControl'
import TextError from '@/formik/TextError'
import * as Yup from 'yup'


const initialValues = {
    pPhNumbers: ['', ''],
    patientPhoneNumbers: [],
    pEmail: '',
    cPhNumbers: '',
    careGiverPhoneNumbers: [],
    cEmail: ''
}

const validationSchema = Yup.object({
    // pPhNumbers: Yup.array().required('Required'),
    // patientPhoneNumbers: Yup.array(),
    // cPhNumber: Yup.string().required('Required'),
    pEmail: Yup.string().email('Email must be valid').required('Required'),
    // careGiverPhoneNumbers: Yup.array(),
    cEmail: Yup.string().email('Email must be valid').required('Required'),
})

export default function page() {

    const router = useRouter();

    const onBack = () => {
        router.push('/AssessmentForm/AssessmentForm2')
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values)
                    router.push('/AssessmentForm/AssessmentForm4')

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
                                            <FormikControl control='input' type='text' name='pPhNumbers[0]' id='primaryNumber' placeholder='Primary Phone Number' className='input_box' />
                                            
                                        </div>
                                        <div className='box'>
                                            <FormikControl control='input' type='text' name='pPhNumbers[1]' id='secondaryNumber' placeholder='Secondary Phone Number' className='input_box' />
                                        </div>
                                        
                                        <FieldArray name='patientPhoneNumbers'>
                                            {fieldArrayProps => {
                                                // console.log(fieldArrayProps)
                                                const { push, form } = fieldArrayProps
                                                const { values } = form
                                                const { patientPhoneNumbers } = values

                                                return (
                                                    <div>
                                                        {patientPhoneNumbers.map((phoneNumber, index) => (
                                                            <div key={index} className='box mb-8'>
                                                                <FormikControl control='input' placeholder='Phone Number ' type='text' name={`patientPhoneNumbers[${index}]`} className='input_box' />
                                                            </div>

                                                        ))}
                                                        {/* <div className='text-left'>
                                                                        <button className='className="text-gray-1 text-sm underline hover:no-underline' type='button' onClick={() => {
                                                                            remove
                                                                        }}>- Remove</button>
                                                                    </div> */}
                                                        <div className='text-right'>
                                                            <button className='className="text-gray-1 text-sm underline hover:no-underline' type='button' onClick={() => {
                                                                push('')
                                                            }}>+ add another</button>
                                                        </div>
                                                    </div>
                                                )

                                            }}
                                        </FieldArray>
                                        <div className='box'>
                                            <FormikControl control='input' type="email" name="pEmail" id="pEmail" className='input_box' placeholder='Email ID' />
                                        </div>
                                    </div>
                                    <div className=' flex flex-col gap-8 realative'>
                                        <p>Caregiver’s Contact details</p>
                                        <div className='box'>
                                            <FormikControl control='input' type="text" name="cPhNumber" id="cPhNumber" className='input_box' placeholder='Primary Phone Number' />
                                        </div>


                                        <FieldArray name='careGiverPhoneNumbers'>
                                            {fieldArrayProps => {
                                                // console.log(fieldArrayProps)
                                                const { push, form } = fieldArrayProps
                                                const { values } = form
                                                const { careGiverPhoneNumbers } = values

                                                return (
                                                    <div>
                                                        {careGiverPhoneNumbers.map((phoneNumber, index) => (
                                                            <div key={index} className='box mb-8'>
                                                                <FormikControl control='input' placeholder='Phone Number ' type='text' name={`careGiverPhoneNumbers[${index}]`} className='input_box' />
                                                            </div>

                                                        ))}
                                                        {/* <div className='text-left'>
                                                                        <button className='className="text-gray-1 text-sm underline hover:no-underline' type='button' onClick={() => {
                                                                            remove
                                                                        }}>- Remove</button>
                                                                    </div> */}
                                                        <div className='text-right'>
                                                            <button className='className="text-gray-1 text-sm underline hover:no-underline' type='button' onClick={() => {
                                                                push('')
                                                            }}>+ add another</button>
                                                        </div>
                                                    </div>
                                                )

                                            }}
                                        </FieldArray>


                                        <div className='box'>
                                            <FormikControl control='input' type="email" name="cEmail" id="cEmail" className='input_box' placeholder='Email ID' />
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
                                            <button  className='button_footer'
                                            // className={`button_footer ${(!formik.isValid || !formik.dirty) ? 'disabled' : ''}`} 
                                            type='submit' 
                                            // disabled={!formik.isValid || !formik.dirty}
                                            >
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
        </>
    )
}
