'use client'

import { useRouter } from 'next/navigation'
import * as Yup from 'yup'
import { Formik, Form,  ErrorMessage } from 'formik'
import FormikControl from '@/formik/FormikControl'
import TextError from '@/formik/TextError'

const dropdownOptions = [
    { key: 'GA Done By', value: '' },
    { key: 'ABC', value: 'ABC' },
    { key: 'PQR', value: 'PQR' },
    { key: 'Others', value: 'Others' }

]
const initialValues = {
    geriatric_patient_number: "",
    prospective_Trial_ID: "",
    GADoneBy: "",
    geriatic_icf: "",
    carg_icf: "",
    reason: "",
    setting_of_assessment: "",

}

const validationSchema = Yup.object(
    {
        geriatric_patient_number: Yup.string().required('Required'),
        prospective_Trial_ID: Yup.string().required('Required'),
        GADoneBy:Yup.string().required('Required'),
        geriatic_icf: Yup.string().oneOf(['Yes', 'No']).required('Required'),
        carg_icf: Yup.string().oneOf(['Yes', 'No']).required('Required'),
        reason: Yup.string().required('Required'),
        setting_of_assessment: Yup.string().oneOf(['OPD', 'In-Patient']).required('Required')
    }
)

export default function page() {

    const router = useRouter();

    const onBack = () => {
        router.push("AssessmentForm1");
    }

    return (
        <>
            
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log(values)
                        router.push('/AssessmentForm/AssessmentForm3')
                    }}
                >
                    {formik => {
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
                                                    <FormikControl control='input' type="text" name="geriatric_patient_number" id="geriatric_patient_number" className='input_box' />
                                                    <br />
                                                    <br />
                                                    {/* <ErrorMessage name='geriatric_patient_number'></ErrorMessage> */}
                                                </div>

                                                <div className='box'>
                                                    <label htmlFor="Date Seen" className='label_box'>Prospective Trial ID</label>
                                                    <FormikControl control='input' type="text" name="prospective_Trial_ID" id="prospective_Trial_ID" className='input_box' />
                                                    <br />
                                                    <br />
                                                    {/* <ErrorMessage name='prospective_Trial_ID'></ErrorMessage> */}
                                                </div>

                                                <div className='box text-gray-3'>

                                                    <FormikControl control='select'
                                                        name='GADoneBy'
                                                        options={dropdownOptions}
                                                        className='w-full absolute text-sm top-4 bg-gray-6 pl-4' />
                                                        <br/>
                                                        <br/>
                                                        <ErrorMessage component={TextError} name='GADoneBy'></ErrorMessage>
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
                                                        <button type='button' className='button' name='geriatic_icf' id='geriatic_icf' onClick={() => {
                                                            formik.setFieldValue('geriatic_icf', 'Yes')
                                                        }}>Yes</button>
                                                        <button type='button' className='button' name='geriatic_icf' id='geriatic_icf' onClick={() => {
                                                            formik.setFieldValue('geriatic_icf', 'No')
                                                        }}>No</button>
                                                    </div>
                                                    <ErrorMessage component
                                                        ={TextError} name='geriatic_icf'></ErrorMessage>
                                                </div>
                                            </div>
                                            <div className='h-[81px] flex flex-col gap-4 text-sm font-medium'>
                                                <div className='text-gray-1'>
                                                    <p>CARG ICF Taken?</p>
                                                </div>
                                                <div>
                                                    <div className='flex gap-4 text-gray-1 font-medium'>
                                                        <button type='button' className='button' name='carg_icf' id='carg_icf' onClick={() => {
                                                            formik.setFieldValue('carg_icf', 'Yes')
                                                        }}>Yes</button>
                                                        <button type='button' className='button' name='carg_icf' id='carg_icf' onClick={() => {
                                                            formik.setFieldValue('carg_icf', 'No')
                                                        }}>No</button>
                                                    </div>
                                                    <ErrorMessage component
                                                        ={TextError} name='carg_icf'></ErrorMessage>
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
                                                        <button type='button' className='button' name='setting_of_assessment' onClick={() => {
                                                            formik.setFieldValue('setting_of_assessment', 'OPD')
                                                        }}>OPD</button>
                                                        <button type='button' className='button' name='setting_of_assessment' onClick={() => {
                                                            formik.setFieldValue('setting_of_assessment', 'In-Patient')
                                                        }}>In-Patient</button>
                                                    </div>
                                                    <ErrorMessage component
                                                        ={TextError} name='setting_of_assessment'></ErrorMessage>
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
                                </div>
                            </Form>
                        )
                    }}
                </Formik>
        </>
    )
}
