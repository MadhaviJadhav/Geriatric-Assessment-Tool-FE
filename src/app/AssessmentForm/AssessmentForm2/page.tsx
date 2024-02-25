'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import * as Yup from 'yup'
import { Formik, Form, ErrorMessage } from 'formik'
import FormikControl from '@/formik/FormikControl'
import TextError from '@/formik/TextError'
import axios from 'axios'

const dropdownOptions = [
    { key: 'GA Done By', value: '' },
    { key: 'ABC', value: 'ABC' },
    { key: 'PQR', value: 'PQR' },
    { key: 'Others', value: 'Others' }

]
const initialValues = {
    patientNo: "",
    trialId: "",
    GADoneBy: "",
    isGeriatricICF: "",
    isCARGICF: "",
    reason: "",
    assessmentType: "",

}

const validationSchema = Yup.object(
    {
        patientNo: Yup.string().required('Required'),
        trialId: Yup.string().required('Required'),
        GADoneBy: Yup.string().required('Required'),
        isGeriatricICF: Yup.string().oneOf(['Yes', 'No']).required('Required'),
        isCARGICF: Yup.string().oneOf(['Yes', 'No']).required('Required'),
        reason: Yup.string().required('Required'),
        assessmentType: Yup.string().oneOf(['OPD', 'In-Patient']).required('Required')
    }
)

export default function page() {
    
    const searchParams = useSearchParams();
    const patientId = searchParams.get('patientId');
    
    const Headers = {
        'Authorization': 'Bearer ' + localStorage.getItem("token"), // Replace with your actual JWT token
        'Content-Type': 'application/json', // Adjust the content type as needed
      };
      
      const router = useRouter()
    //   const patientId = router.query;
    //   console.log(search)

    const onBack = () => {
        router.push("AssessmentForm1");
    }

    return (
        <>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async (values) => {
                    try {
                        // Send a POST request to your NestJS API endpoint
                        console.log("ghjk")
                        const response1 = await axios.get('http://localhost:3001/patient',{
                            headers:Headers
                        });
                        // const createdPatient = response1.data;
                        // const patientId = createdPatient[0].id;
                        // console.log(createdPatient)
                        console.log(patientId)
                        const response = await axios.put(`http://localhost:3001/patient/${patientId}`, values, {
                            headers:Headers
                        });

                        console.log('Patient created:', response.data);
                        router.push(`/AssessmentForm/AssessmentForm3?patientId=${patientId}`);
                    } catch (error) {
                        console.error('Error creating patient:', error);
                    }
                }}
            >
                {formik => {
                    // console.log(formik.errors)
                    return (
                        <Form>
                            <div className='w-full h-full'>
                                <div className='mx-3 mt-8 flex flex-col gap-8'>

                                    <div className='text-sm font-semibold uppercase'>
                                        <p>CGA Details</p>
                                    </div>
                                    <div className='flex flex-col gap-8'>

                                        <div className='flex flex-col gap-8'>
                                            <div className='box'>
                                                <label htmlFor="Date Seen" className='label_box'>Geriatric patient number</label>
                                                <FormikControl control='input' type="text" name="patientNo" id="patientNo" className='input_box' />
                                            </div>

                                            <div className='box'>
                                                <label htmlFor="Date Seen" className='label_box'>Prospective Trial ID</label>
                                                <FormikControl control='input' type="text" name="trialId" id="trialId" className='input_box' />
                                            </div>

                                            <div className='box text-gray-3'>

                                                <FormikControl control='select'
                                                    name='GADoneBy'
                                                    options={dropdownOptions}
                                                    className='w-full absolute text-sm top-4 bg-gray-6 pl-4' />

                                                {/* <select name="" id="" className='w-full absolute text-sm top-4 bg-gray-6 pl-4'>
                                                        <option value="" className='w-full  absolute '>GA Done By</option>

                                                        <option value="">YES</option>
                                                        <option value="">No</option>
                                                    </select> */}
                                            </div>
                                        </div>
                                        <div className='h-[81px] flex flex-col gap-4 text-sm font-medium'>
                                            <div className='text-gray-1'>
                                                <p>Geriatic ICF Taken</p>
                                            </div>
                                            <div>
                                                <div className='h-[48px] flex gap-4 text-gray-1 font-medium'>
                                                    <button type='button' className={`button ${formik.values.isGeriatricICF === 'Yes' ? 'button-active' : ''}`} name='isGeriatricICF' id='isGeriatricICF' onClick={() => {
                                                        formik.setFieldValue('isGeriatricICF', 'Yes')
                                                    }}>Yes</button>
                                                    <button type='button' className={`button ${formik.values.isGeriatricICF === 'No' ? 'button-active' : ''}`} name='isGeriatricICF' id='isGeriatricICF' onClick={() => {
                                                        formik.setFieldValue('isGeriatricICF', 'No')
                                                    }}>No</button>
                                                </div>
                                                <ErrorMessage component
                                                    ={TextError} name='isGeriatricICF'></ErrorMessage>
                                            </div>
                                        </div>
                                        <div className='h-[81px] flex flex-col gap-4 text-sm font-medium'>
                                            <div className='text-gray-1'>
                                                <p>CARG ICF Taken?</p>
                                            </div>
                                            <div>
                                                <div className='flex gap-4 text-gray-1 font-medium'>
                                                    <button type='button' className={`button ${formik.values.isCARGICF === 'Yes' ? 'button-active' : ''}`} name='isCARGICF' id='isCARGICF' onClick={() => {
                                                        formik.setFieldValue('isCARGICF', 'Yes')
                                                    }}>Yes</button>
                                                    <button type='button' className={`button ${formik.values.isCARGICF === 'No' ? 'button-active' : ''}`} name='isCARGICF' id='isCARGICF' onClick={() => {
                                                        formik.setFieldValue('isCARGICF', 'No')
                                                    }}>No</button>
                                                </div>
                                                <ErrorMessage component
                                                    ={TextError} name='isCARGICF'></ErrorMessage>
                                            </div>
                                        </div>

                                        <div className='box'>
                                            <FormikControl control='input' type="text" name="reason" id="reason" className='input_box' placeholder='Reason' />
                                        </div>

                                        <div className='h-[81px] flex flex-col gap-4 text-sm font-medium'>
                                            <div className='text-gray-1'>
                                                <p>Setting of Assessment</p>
                                            </div>
                                            <div>
                                                <div className=' flex gap-4 text-gray-1 font-medium'>
                                                    <button type='button' className={`button ${formik.values.assessmentType === 'OPD' ? 'button-active' : ''}`} name='assessmentType' onClick={() => {
                                                        formik.setFieldValue('assessmentType', 'OPD')
                                                    }}>OPD</button>
                                                    <button type='button' className={`button ${formik.values.assessmentType === 'In-Patient' ? 'button-active' : ''}`} name='assessmentType' onClick={() => {
                                                        formik.setFieldValue('assessmentType', 'In-Patient')
                                                    }}>In-Patient</button>
                                                </div>
                                                <ErrorMessage component
                                                    ={TextError} name='assessmentType'></ErrorMessage>
                                            </div>
                                        </div>
                                        <div className='h-[80px] py-4  flex gap-4 w-full  text-sm font-medium  shadow-inner'>
                                            <div className='w-1/3  h-[48px] flex justify-center items-center text-center bg-gray-6 text-gray-1 p-2'>
                                                <button type='submit' onClick={onBack} className='button_footer'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                        <path fillRule="evenodd" d="M20.25 12a.75.75 0 01-.75.75H6.31l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 111.06 1.06l-5.47 5.47H19.5a.75.75 0 01.75.75z" clipRule="evenodd" />
                                                    </svg>

                                                    <p className='uppercase'>Back</p>
                                                </button>
                                            </div>
                                            <div className='w-8/12 h-[48px] flex justify-center items-center text-center bg-gray-1 text-gray-6'>
                                                <button className={`button_footer ${(!formik.isValid || !formik.dirty) ? 'disabled' : ''}`} type='submit'
                                                    disabled={!formik.isValid || !formik.dirty}
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
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </>
    )
}
