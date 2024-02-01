"use client"

import Head1 from "../HeadComp";
import Question from "../QuestionComp";

import { Formik, Form } from "formik";
import * as Yup from 'yup';
import FormikControl from "@/formik/FormikControl";

const states = [
    { key: 'Native State', value: '' },
    { key: 'Maharashtra', value: 'Maharashtra' },
    { key: 'Gujarat', value: 'Gujarat' },
    { key: 'Telengana', value: 'Telengana' },
    { key: 'Others', value: 'Others' }

]

const livingPlace = [
    { key: 'Hotel Hotel', value: 'Hotel Hotel' },
    { key: 'At the relative’s place', value: 'At the relative’s place' },
    { key: 'At the friend’s place', value: 'At the friend’s place' },
    { key: 'Others', value: 'Others' }

]

const livingSituation = [
    { key: 'At home, with family and helpers', value: 'At home, with family and helpers' },
    { key: 'At the relative’s place', value: 'At the relative’s place' },
    { key: 'At the friend’s place', value: 'At the friend’s place' },
    { key: 'Others', value: 'Others' }

]

const oras = [
    { key: 'Yes', value: 'Yes' },
    { key: 'No', value: 'No' }
]

const maritalStatus = [
    { key: 'Married, Lives with spouse', value: 'Married, Lives with spouse' },
    { key: 'Unmarried', value: 'Unmarried' },
    { key: 'Option 3', value: 'Option 3' },
    { key: 'Others', value: 'Others' }

]

const currentEducation = [
    { key: 'Primary (Std 1 to std 5)', value: 'Primary (Std 1 to std 5)' },
    { key: 'Secondary', value: 'Secondary' },
    { key: 'Option 3', value: 'Option 3' },
    { key: 'Others', value: 'Others' }
]
const validationSchema = Yup.object({
    states: Yup.string().required('Please select a state'),
    livingPlace:Yup.string().required('Required'),
    livingSituation:Yup.string().required('Required'),
    oras:Yup.string().required('Required'),
    maritalStatus:Yup.string().required('Required'),
    currentEducation:Yup.string().required('Required'),
    familyMembers:Yup.number().required('Required'),
    occupation:Yup.string().required('Required'),
    livingPlaceOthers:Yup.string().required('Required'),
    livingSituationOthers:Yup.string().required('Required'),

})
const initialValues = {
    states: "",
    livingPlace: "",
    livingSituation: "",
    oras:"",
    maritalStatus:"",
    currentEducation:"",
    familyMembers:0,
    occupation:"",
    livingPlaceOthers:"",
    livingSituationOthers:""
}

export default function page() {
    return (
        <>
            <div className="flex flex-col gap-8">
                <div className="mt-5">
                    <Head1 name="General Information" count="1" progress="80%" />
                </div>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        // console.log("HII")
                        console.log(values)
                    }}

                >
                    {(formikProps) => {
                        console.log(formikProps.errors)
                        return (
                            <Form>

                                <div className="flex flex-col gap-8">
                                    <div className="flex flex-col gap-4">
                                        <Question english="Select your native state from the options below" marathi="खालील पर्यायांमधून तुमचे मूळ राज्य निवडा" />

                                        <div className="px-5">
                                            <div className='box text-gray-3'>

                                                <FormikControl control='select'
                                                    name='states'
                                                    options={states}
                                                    className='w-full absolute text-sm top-4 bg-gray-6 px-4 apperance-none' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <Question english="Where are you staying in Mumbai city?" marathi="तुम्ही मुंबई शहरात कुठे राहता?" />

                                        <div className='mx-5'>
                                            <FormikControl control='radio' options={livingPlace} name='livingPlace' />
                                        </div>

                                        {formikProps.values.livingPlace === 'Others' && (
                                            <div className="px-5">
                                                <div className="box shadow-md">
                                                    <FormikControl
                                                        control="input"
                                                        type="text"
                                                        name="livingPlaceOthers"
                                                        id="livingPlaceOthers"
                                                        className="input_box"
                                                        placeholder="Write"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <Question english="How is your living situation?" marathi="राहण्याची परिस्थिती कशी आहे?" />

                                        <div className='mx-5'>
                                            <FormikControl control='radio' options={livingSituation} name='livingSituation' />
                                        </div>

                                        {formikProps.values.livingSituation === 'Others' && (
                                            <div className="px-5">
                                                <div className="box shadow-md">
                                                    <FormikControl
                                                        control="input"
                                                        type="text"
                                                        name="livingSituationOthers"
                                                        id="livingSituationOthers"
                                                        className="input_box"
                                                        placeholder="Write"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <Question english="How many people are living with you at home?" marathi="तुमच्यासोबत घरात किती लोक राहतात?" />

                                        <div className="px-5">
                                            <div className='box shadow-md'>
                                                <FormikControl control='input' type="text" name="familyMembers" id="familyMembers" className='input_box' placeholder='Write'
                                                />
                                            </div>
                                        </div>

                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <Question english="Do you have ORAS Medical support?" marathi="तुम्हाला ORAS वैद्यकीय सहाय्य आहे का?" />

                                        <div className='mx-5'>
                                            <FormikControl control='radio' options={oras} name='oras' />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <Question english="What's your current level of education?" marathi="तुमची सध्याची शैक्षणिक पातळी काय आहे?" />

                                        <div className='mx-5'>
                                            <FormikControl control='radio' options={currentEducation} name='currentEducation' />
                                        </div>

                                        {formikProps.values.currentEducation === 'Others' && (
                                            <div className="px-5">
                                                <div className="box shadow-md">
                                                    <FormikControl
                                                        control="input"
                                                        type="text"
                                                        name="currentEductionOther"
                                                        id="currentEductionOther"
                                                        className="input_box"
                                                        placeholder="Write"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <Question english="What is your marital status?" marathi="तुमची वैवाहिक स्थिती काय आहे?" />

                                        <div className='mx-5'>
                                            <FormikControl control='radio' options={maritalStatus} name='maritalStatus' />
                                        </div>

                                        {formikProps.values.maritalStatus === 'Others' && (
                                            <div className="px-5">
                                                <div className="box shadow-md">
                                                    <FormikControl
                                                        control="input"
                                                        type="text"
                                                        name="maritalStatusOther"
                                                        id="maritalStatusOther"
                                                        className="input_box"
                                                        placeholder="Write"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <Question english="What's your occupation?" marathi="तुझा व्यवसाय काय आहे?" />

                                        <div className="px-5">
                                            <div className='box shadow-md'>
                                                <FormikControl control='input' type="text" name="occupation" id="occupation" className='input_box' placeholder='Write'
                                                />
                                            </div>
                                        </div>

                                    </div>

                                    <div className='h-[80px] py-4  flex gap-4 w-full px-7 py-4 text-sm font-medium  shadow-inner mt-10'>
                                        <div className='w-1/3  h-[48px] flex justify-center items-center text-center bg-gray-6 text-gray-1'>
                                            <button type='submit' className='button_footer'>
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

                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </>
    )
}