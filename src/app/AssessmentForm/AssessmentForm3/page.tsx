'use client'

import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import { Formik, Form, FieldArray, ErrorMessage } from 'formik'
import FormikControl from '@/formik/FormikControl'
import TextError from '@/formik/TextError'
import * as Yup from 'yup'
import axios from 'axios'


// interface Patient {
//     // patientId: number;
//     // patientName: string;
//     // age:number,
//     // gender:number,
//     isCARGResearch:boolean
//     // consultingDate: string;
//     // ... other properties
// }
export default function page() {
    const searchParams = useSearchParams();
    const patientId = searchParams.get('patientId');

    // const [patientData, setPatientData] = useState<Patient>();

    // const fetchDetails = async() =>{
    //     try {
    //         const response = await axios.get(`http://localhost:3001/patient/${patientId}`, {
    //           headers: Headers
    //         });
    //         return response.data;
    //       } catch (error) {
    //         console.error('Error fetching patient details:', error);
    //       }
    // }
    // useEffect(()=>{
    //     //   fetchDetails().then((data)=>setPatientData(data));
    //     fetchDetails().then((data)=>setPatientData(data))
    //       console.log(patientData)
    // },[])

    // const isCARGResearch = patientData?.isCARGResearch;

    const initialValues = {
        // pPhNumbers: [],
        patientPhoneNumbers: [],
        // pEmail: Yup.string(),
        // CARGNumbers: '',
        CARGNumber:'',
        careGiverPhoneNumbers: [],
        // cEmail: '',
        primaryNumber: '',
        secondaryNumbers: [''],
        email: '',
        patientId:patientId
    }

    const validationSchema = Yup.object({
        primaryNumber: Yup.string(),
        secondaryNumbers: Yup.array(),
        email: Yup.string().email('Email must be valid').required('Required'),
        // CARGNumber: isCARGResearch ? Yup.string().required('Required') : Yup.string(),
        // cEmail: isCARGResearch ? Yup.string().email().required('Required') : Yup.string().email(),
    })

    

    const Headers = {
        'Authorization': 'Bearer ' + localStorage.getItem("token"), // Replace with your actual JWT token
        'Content-Type': 'application/json', // Adjust the content type as needed
      };
    const router = useRouter();

    const onBack = () => {
        router.push('/AssessmentForm/AssessmentForm2')
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async (values) => {
                    
                    let payload = {
                        primaryNumber: values.primaryNumber,
                        secondaryNumbers :[...values.secondaryNumbers, ...values.patientPhoneNumbers],
                        email : values.email,
                        patientId:values.patientId

                    }
                     try{
                        const response = await axios.post('http://localhost:3001/contact-details', payload,{
                            headers:Headers
                        })

                        console.log(response.data);
                        
                        router.push(`/AssessmentForm/AssessmentForm4?patientId=${patientId}`)
                        return 'success'
                     }
                     catch(error)
                     {
                        return error;
                     }

                }}
            >
                {formik => {
                    // console.log(formik.errors)
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
                                            <FormikControl control='input' type='text' name='primaryNumber' id='primaryNumber' placeholder='Primary Phone Number' className='input_box' />

                                        </div>
                                        <div className='box'>
                                            <FormikControl control='input' type='text' name='secondaryNumbers[0]' id='secondaryNumbers' placeholder='Secondary Phone Number' className='input_box' />
                                        </div>

                                        <FieldArray name='patientPhoneNumbers'>
                                            {fieldArrayProps => {
                                                // console.log(fieldArrayProps)
                                                const { push, form } = fieldArrayProps
                                                const { values } = form
                                                const { patientPhoneNumbers } = values

                                                return (
                                                    <div>
                                                        {patientPhoneNumbers.map((phoneNumber:string, index:number) => (
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
                                            <FormikControl control='input' type="email" name="email" id="email" className='input_box' placeholder='Email ID' />
                                        </div>
                                    </div>
                                    <div className=' flex flex-col gap-8 realative'>
                                        <p>Caregiver’s Contact details</p>
                                        <div className='box'>
                                            <FormikControl control='input' type="text" name="CARGNumber" id="CARGNumber" className='input_box' placeholder='Primary Phone Number' />
                                        </div>


                                        <FieldArray name='careGiverPhoneNumbers'>
                                            {fieldArrayProps => {
                                                // console.log(fieldArrayProps)
                                                const { push, form } = fieldArrayProps
                                                const { values } = form
                                                const { careGiverPhoneNumbers } = values

                                                return (
                                                    <div>
                                                        {careGiverPhoneNumbers.map((phoneNumber:string, index:number) => (
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
                                            <button className='button_footer'
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
