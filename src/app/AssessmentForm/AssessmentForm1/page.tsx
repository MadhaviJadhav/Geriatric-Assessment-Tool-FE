'use client'

import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { useRouter } from 'next/navigation'
import FormikControl from '@/formik/FormikControl'

const initialValues = {
  date_seen: "",
  mrn_number: "",
  patient_name: "",
  age: "",
  gender: "",
  GT: "",

}

const validationSchema = Yup.object({
  date_seen: Yup.date().typeError('Invalid date format').required('Please enter the vaild date').nullable(),
  mrn_number: Yup.string().required('MRN Number is Required'),
  patient_name: Yup.string().min(2).max(25).matches(/^[a-zA-Z ]+$/, 'Name must only contain character').required("Please enter your name"),
  age: Yup.number().typeError('Age must be a Number').integer().positive().required('Age is Required'),
  gender: Yup.string().oneOf(['Female', 'Male']).required('Select the Gender'),

})
export default function page() {

  const router = useRouter()
  return (

    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values)
          router.push('/AssessmentForm/AssessmentForm2')
        }}
      >
        {formik => {
          return (
            <Form>
              <div className='w-full h-full'>
                <div className='flex flex-col gap-10'>
                  <div className='mx-3 p-2'>

                    <div className='h-9'>
                      <p>1/3 Personal Details</p>
                      {/* <div>Madhavi</div> */}
                    </div>
                    <div className='h-1/3 flex flex-col gap-8 font-normal'>
                      <div className='text-sm font-semibold text-gray-1'>
                        <h1 className='uppercase font-semibold'>Patient Details</h1>
                      </div>
                      <div className='box'>
                        <label htmlFor="Date Seen" className='label_box'>Date Seen</label>
                        <FormikControl control='input' name="date_seen" id="date_seen" className='input_box'
                        />


                      </div>
                      <div className='box'>
                        <FormikControl control='input' type="text" name="mrn_number" id="mrn_number" className='input_box' placeholder='Medical Record Number(MRN)'

                        />



                      </div>
                      <div className='box'>
                        <label htmlFor="Patient's Name" className='label_box'>Patient's Name</label>
                        <FormikControl control='input' type="text" name="patient_name" id="patient_name" className='input_box' />

                      </div>
                      <div className='box'>
                        <label htmlFor="Age" className='label_box'>Age</label>
                        <FormikControl control='input' type="text" name="age" id="age" className='input_box' />


                      </div>
                      <div className='h-[81px] flex flex-col gap-4 text-sm font-medium'>
                        <div className='text-gray-1'>
                          <p>Gender of patient</p>
                        </div>
                        <div className='h-[48px] flex gap-4 text-gray-1 font-medium'>
                          <button type='button' name='gender' onClick={() => {
                            formik.setFieldValue('gender', 'Female');
                          }} className='button'>Female</button>
                          <button type='button' name='gender' onClick={() => {
                            formik.setFieldValue('gender', 'Male');
                          }} className='button'>Male</button>

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
                        <button type='button' name='GT' onClick={() => {
                          formik.setFieldValue('GT', 'Yes');
                          // console.log("HII")
                        }} className='button'>Yes</button>
                        <button type='button' name='GT' onClick={() => {
                          formik.setFieldValue('GT', 'No');
                        }} className='button'>No</button>
                      </div>
                    </div>
                  </div>

                  {/* <Footer/> */}
                  <div className='h-[80px] py-4  flex gap-4 w-full px-7 py-4 text-sm font-medium  shadow-inner'>
                    <div className='w-1/3  h-[48px] flex justify-center items-center text-center bg-gray-6 text-gray-1'>
                      <button type='button' className='button_footer'>
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

    </>
  )
}
