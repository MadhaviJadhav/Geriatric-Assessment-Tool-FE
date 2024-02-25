"use client"

import Head1 from "@/app/_components/Questionnaire/Head"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup';
import Question from "@/app/_components/Questionnaire/Question";
import '../../../../../styles/global.css'
import { useRouter } from "next/navigation";
import TextError from "@/formik/TextError";
// import "../../../../../styles/global.css"

// const option1= [
//     {key:'I have read and understand the instructions', value:'Yes'},
// ]
const initialValues = {
    option1: false,
    lessPhoneUse: "",
    shy: '',
    feelIrritable: '',
    feelFrustrated: '',

}
const validationSchema = Yup.object({
    option1: Yup.boolean().oneOf([true], 'Please check the box'),
    lessPhoneUse: Yup.string().oneOf(['Yes', 'No', 'Sometimes']).required('Required'),
    shy: Yup.string().oneOf(['Yes', 'No', 'Sometimes']).required('Required'),
    feelIrritable: Yup.string().oneOf(['Yes', 'No', 'Sometimes']).required('Required'),
    feelFrustrated: Yup.string().oneOf(['Yes', 'No', 'Sometimes']).required('Required'),
})
export default function page() {
    const router = useRouter()
    return (
        <>
            <div className="mt-5">
                <Head1 name="Health and Well Being" count="2" progress="80%" />
            </div>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values)
                    router.push('/Questionnaire')
                }}
            >
                {(formik) => {
                    return (
                        <Form>
                            <div className="mx-5">


                                <div className='flex flex-col gap-6'>
                                    <p>Hearing Handicap Inventory</p>
                                    <div className="w-full bg-orange-50 p-5">
                                        <p className="w-full text-sm">
                                            <span className="font-semibold underline uppercase">Instructions:</span>
                                            <span className="font-normal capitalize"> The purpose of the scale is to Identify the problems your hearing loss maybe causing you.</span>
                                        </p>
                                        <br />
                                        <div>
                                            <ul className="list-disc px-5 capitalize font-normal">
                                                <li>Check Yes, Sometimes, or No for each question</li>
                                                <li>
                                                    Do not skip any question</li>
                                                <li>If you use “Hearing Aid” please answer the way you hear WITHOUT your hearing aid</li>
                                            </ul>
                                        </div>
                                        <div className="h-4">
                                            <div className="relative">
                                                <div className="flex gap-1 text-center right-0 absolute">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-2">
                                                        <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
                                                        <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-2">
                                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                                                    </svg>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-10">
                                        <div className="flex gap-6 ">
                                            <div className="relative">
                                                <Field type='checkbox' name='option1' className='top-1 absolute w-4 h-4' />
                                            </div>
                                            <label htmlFor="">I have read and understand the instructions</label>
                                        </div>
                                        <ErrorMessage component={TextError} name="option1"/>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-8'>
                                    <div className='flex flex-col gap-4'>
                                        <Question
                                            english="Does a hearing problem cause you to use the phone less often than you would like?
                                    "
                                            marathi="ऐकण्याच्या समस्येमुळे तुम्ही तुमच्या इच्छेपेक्षा कमी वेळा फोन वापरता का?" />

                                        <div className="h-[48px] flex gap-4 text-gray-1 font-medium">
                                            <button className={`button1 ${formik.values.lessPhoneUse === 'Yes' ? 'button1-active' : ''}`}  type='button' name='lessPhoneUse' onClick={() => {
                                                formik.setFieldValue('lessPhoneUse', 'Yes')
                                            }}>Yes</button>
                                            <button className={`button1 ${formik.values.lessPhoneUse === 'Sometimes' ? 'button1-active' : ''}`}  type='button' name='lessPhoneUse' onClick={() => {
                                                formik.setFieldValue('lessPhoneUse', 'Sometimes')
                                            }}>Sometimes</button>
                                            <button className={`button1 ${formik.values.lessPhoneUse === 'No' ? 'button1-active' : ''}`}  type='button' name='lessPhoneUse' onClick={() => {
                                                formik.setFieldValue('lessPhoneUse', 'No')
                                            }}>No</button>
                                        </div>

                                        <ErrorMessage component={TextError} name="lessPhoneUse" />
                                    </div>

                                    <div className='flex flex-col gap-4'>
                                        <Question
                                            english="Does a hearing problem cause you to feel embarrassed when meeting new people?
                                    "
                                            marathi="नवीन लोकांना भेटताना ऐकण्याच्या समस्येमुळे तुम्हाला लाज वाटते का?" />

                                        <div className="h-[48px] flex gap-4 text-gray-1 font-medium">
                                            <button className={`button1 ${formik.values.shy === 'Yes' ? 'button1-active' : ''}`}  type='button' name='shy' onClick={() => {
                                                formik.setFieldValue('shy', 'Yes')
                                            }}>Yes</button>
                                            <button className={`button1 ${formik.values.shy === 'Sometimes' ? 'button1-active' : ''}`}  type='button' name='shy' onClick={() => {
                                                formik.setFieldValue('shy', 'Sometimes')
                                            }}>Sometimes</button>
                                            <button className={`button1 ${formik.values.shy === 'No' ? 'button1-active' : ''}`}  type='button' name='shy' onClick={() => {
                                                formik.setFieldValue('shy', 'No')
                                            }}>No</button>
                                        </div>
                                        <ErrorMessage component={TextError} name="shy" />
                                    </div>

                                    <div className='flex flex-col gap-4'>
                                        <Question
                                            english="Does a hearing problem cause you to avoid groups of people? Does a hearing problem make you irritable?
                                    "
                                            marathi="ऐकण्याच्या समस्येमुळे तुम्ही लोकांचे गट टाळता का?  ऐकण्याच्या समस्येमुळे तुम्हाला चिडचिड होते का?" />

                                        <div className="h-[48px] flex gap-4 text-gray-1 font-medium">
                                            <button className={`button1 ${formik.values.feelIrritable === 'Yes' ? 'button1-active' : ''}`}  name='feelIrritable' type='button' onClick={() => {
                                                formik.setFieldValue('feelIrritable', 'Yes')
                                            }}>Yes</button>
                                            <button className={`button1 ${formik.values.feelIrritable === 'Sometimes' ? 'button1-active' : ''}`}  name='feelIrritable' type='button' onClick={() => {
                                                formik.setFieldValue('feelIrritable', 'Sometimes')
                                            }}>Sometimes</button>
                                            <button className={`button1 ${formik.values.feelIrritable === 'No' ? 'button1-active' : ''}`}  name='feelIrritable' type='button' onClick={() => {
                                                formik.setFieldValue('feelIrritable', 'No')
                                            }}>No</button>
                                        </div>
                                        <ErrorMessage component={TextError} name="feelIrritable" />
                                    </div>

                                    <div className='flex flex-col gap-4'>
                                        <Question
                                            english="Does a hearing problem cause you to feel frustrated when talking to members of your family?
                                    "
                                            marathi="ऐकण्याच्या समस्येमुळे तुमच्या कुटुंबातील सदस्यांशी बोलताना तुम्हाला निराशा वाटते का?" />

                                        <div className="h-[48px] flex gap-4 text-gray-1 font-medium">
                                            <button className={`button1 ${formik.values.feelFrustrated === 'Yes' ? 'button1-active' : ''}`}  name='feelFrustrated' type='button' onClick={() => {
                                                formik.setFieldValue('feelFrustrated', 'Yes')
                                            }}>Yes</button>
                                            <button className={`button1 ${formik.values.feelFrustrated === 'Sometimes' ? 'button1-active' : ''}`}  name='feelFrustrated' type='button' onClick={() => {
                                                formik.setFieldValue('feelFrustrated', 'Sometimes')
                                            }}>Sometimes</button>
                                            <button className={`button1 ${formik.values.feelFrustrated === 'No' ? 'button1-active' : ''}`}  name='feelFrustrated' type='button' onClick={() => {
                                                formik.setFieldValue('feelFrustrated', 'No')
                                            }}>No</button>
                                        </div>
                                        <ErrorMessage component={TextError} name="feelFrustrated" />
                                    </div>
                                </div>

                                <div className='mt-24'>
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
                                        <button className={`button_footer ${(!formik.isValid || !formik.dirty) ? 'disabled' : ''}`}type='submit' 
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
                        </Form>
                    )
                }}
            </Formik>
        </>
    )
}