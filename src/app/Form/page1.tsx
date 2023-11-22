'use client'
import React, { useState } from 'react'
import { useFormik, useFormikContext } from 'formik'
import { assementForm } from '../schemas'
import { useRouter } from 'next/navigation'
import { Field, Form, Formik } from 'formik'
// import Footer from './Footer'

const initialValues = {
  date_seen: '',
  mrn_number: "",
  patient_name: "",
  age: "",
  gender:"",
  // GT:"",

}
const Page1 = () => {

  const router = useRouter();
  
  const [gender , setGender] = useState('');
  // const {setFieldValue} = useFormikContext();
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: assementForm,

    onSubmit: (values,action) => {
      alert("Form Submitted....");
      console.log(values);
      router.push('/Form2');
      // action.resetForm()
    },
    

  })

  // const onNext = () => {
  //   router.push('/Form2')
  // }
  // const handleGender = (genderValue) =>{
  //     values.gender === genderValue;
  // }

  return (

    
    <>
    
      <div className='w-full h-full'>
        <form action="" onSubmit={handleSubmit} className='flex flex-col gap-10'>
          <div className='mx-3 p-2'>

            <div className='h-9'>
              <p>1/3 Personal Details</p>
              {/* <div>Madhavi</div> */}
            </div>
            <div className='h-1/3 flex flex-col gap-8 font-normal'>
              <div className='text-sm font-semibold text-gray-1'>
                <h1 className='uppercase font-semibold'>Patient Details</h1>
              </div>
              <div className='w-full h-[48px] relative bg-gray-6 shadow-md'>
                <label htmlFor="Date Seen" className='absolute w-full  left-[16px] top-[-8px] text-gray-3 text-xs'>Date Seen</label>
                <input type="text" name="date_seen" id="date_seen" className='bg-gray-6 absolute top-4 left-4 w-4/5'
                  value={values.date_seen}
                  onChange={handleChange}
                  onBlur={handleBlur} />
                <br />
                <br />
                <p className='text-red text-sm'>{(errors.date_seen && touched.date_seen) ? (<p>{errors.date_seen}</p>) : null}</p>
              </div>
              <div className='w-full h-[48px] relative bg-gray-6 shadow-md'>
                <input type="text" name="mrn_number" id="mrn_number" className='bg-gray-6 absolute left-4 top-4 w-4/5' placeholder='Medical Record Number(MRN)'
                  value={values.mrn_number}
                  onChange={handleChange}
                  onBlur={handleBlur} 
                  />
                  <br />
                  <br />
                  <p className='text-red text-sm'>{(errors.mrn_number && touched.mrn_number) ? (<p>{errors.mrn_number}</p>) : null}</p>
              </div>
              <div className='w-full h-[48px] relative bg-gray-6 shadow-md'>
                <label htmlFor="Patient's Name" className='absolute w-full left-[16px] top-[-8px] text-gray-3 text-xs'>Patient's Name</label>
                <input type="text" name="patient_name" id="patient_name" className='bg-gray-6 absolute top-4 left-4 w-4/5'
                  value={values.patient_name}
                  onChange={handleChange}
                  onBlur={handleBlur} />
                  <br />
                  <br />
                  <p className='text-red text-sm'>{(errors.patient_name && touched.patient_name) ? (<p>{errors.patient_name}</p>) : null}</p>
              </div>
              <div className='w-full h-[48px] relative bg-gray-6 shadow-md'>
                <label htmlFor="Age" className='absolute w-full left-[16px] top-[-8px] text-gray-3 text-xs w-4/5'>Age</label>
                <input type="text" name="age" id="age" className='bg-gray-6 absolute top-4 left-4'
                  value={values.age}
                  onChange={handleChange}
                  onBlur={handleBlur} />
                 <br />
                 <br />
                 <p className='text-red text-sm'>{(errors.age && touched.age) ? (<p>{errors.age}</p>) : null}</p>
                  
              </div>
              <div className='h-[81px] flex flex-col gap-4 text-sm font-medium'>
                <div className='text-gray-1'>
                  <p>Gender of patient</p>
                </div>
                <div className='h-[48px] flex gap-4 text-gray-1 font-medium'>

                  <input type="button" name='gender' id='female' value="Female" className='uppercase text-center w-1/2 bg-gray-6 hover:bg-gray-4 hover:border-2 hover:border-gray-1 focus:bg-gray-4  focus:border-2 focus:border-gray-1' 
                  // checked={values.gender=='Female'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onClick={()=>{
                    values.gender==='Female'
                    console.log(values.gender)
                  }}
                  />
                  {/* <button type='button' onClick={()=>{
                    setFieldValue('gender','Female');
                  }} className='uppercase text-center w-1/2 bg-gray-6 hover:bg-gray-4 hover:border-2 hover:border-gray-1'>Female</button> */}
                  {/* <button type='button' className='uppercase text-center w-1/2 bg-gray-6 hover:bg-gray-4 hover:border-2 hover:border-gray-1'>Male</button> */}
                  <input type="button" name='gender' id='male' value="Male" className='uppercase text-center w-1/2 bg-gray-6 hover:bg-gray-4 hover:border-2 hover:border-gray-1 focus:bg-gray-4  focus:border-2 focus:border-gray-1' 
                  // checked={values.gender=='Male'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  // onClick={()=>{

                  // }}
                  />
                  
                </div>
              </div>
            </div>
          </div>
          <div className='h-1/5 bg-gray-1 py-3'>
            <div className='mx-3 flex flex-col gap-3 text-gray-6 text-sm'>
              <div className='h-[17px] capitalize  font-semibold'>
                <p>Geriatric Trial</p>
              </div>
              <div className='font-medium'>
                <p>Is this patient a part of the geriatric cancer research?</p>
              </div>
              <div className='h-[48px] flex gap-4 text-gray-1 font-medium'>
                {/* <input type="button" name='GT' id='GT' value="YES" className='uppercase text-center w-1/2 bg-gray-6 hover:bg-gray-4 hover:border-2 hover:border-gray-1 focus:bg-gray-4  focus:border-2 focus:border-gray-1' 
                  // checked={values.gender=='Female'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onClick={()=>{
                    values.GT==='YES';
                    // console.log(values.gender)
                  }} */}
                  {/* /> */}
                <button type='button' className='uppercase text-center w-1/2 bg-gray-6 hover:bg-gray-4 hover:border-2 hover:border-gray-1'>Yes</button>
                <button type='button' className='uppercase text-center w-1/2 bg-gray-6 hover:bg-gray-4 hover:border-2 hover:border-gray-1'>No</button>
              </div>
            </div>
          </div>

          {/* <Footer/> */}
          <div className='h-[80px] py-4  flex gap-4 w-full px-7 py-4 text-sm font-medium  shadow-inner'>
            <div className='w-1/3  h-[48px] flex justify-center items-center text-center bg-gray-6 text-gray-1'>
              <button type='button' className='flex gap-2 w-full h-[48px] items-center text-center  justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M20.25 12a.75.75 0 01-.75.75H6.31l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 111.06 1.06l-5.47 5.47H19.5a.75.75 0 01.75.75z" clipRule="evenodd" />
                </svg>

                <p className='uppercase'>Back</p>
              </button>
            </div>
            <div className='w-8/12 h-[48px] flex justify-center items-center text-center bg-gray-1 text-gray-6'>
              <button className='flex gap-2 w-full h-[48px] items-center text-center  justify-center disabled:opacity-30' type='submit' disabled={isSubmitting}>
                <p className='uppercase'>Save And Next</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
      
    </>
  )
}

export default Page1