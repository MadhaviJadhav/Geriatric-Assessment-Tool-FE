"use client"

import HeadComp from "@/app/_components/Questionnaire/Head"
import { ErrorMessage, Form, Formik } from "formik"
import * as Yup from 'yup'
import FormikControl from "@/formik/FormikControl"
import Question from "@/app/_components/Questionnaire/Nutrition/Question"
import TextError from "@/formik/TextError"

const neruProblems = [
    { key: 'severe dementia or depression', value: 'severe dementia or depression' },
    { key: 'mild dementia', value: 'mild dementia' },
    { key: 'no psychological problems', value: 'no psychological problems' },
]

const BMI = [
    { key: 'BMI less than 19', value: 'BMI less than 19' },
    { key: 'BMI 19 to less than 21', value: 'BMI 19 to less than 21' },
    { key: 'BMI 21 to less than 23', value: 'BMI 21 to less than 23' },
    { key: 'BMI 23 or greater', value: 'BMI 23 or greater' },
]

const decreasedFood = [
    { key: 'severe decrease in food intake', value: 'severe decrease in food intake' },
    { key: 'Moderate decrease in food intake', value: 'Moderate decrease in food intake' },
    { key: 'No decrease in food intake', value: 'No decrease in food intake' },
]

const weightLoss = [
    { key: 'between 1 and 3kg', value: 'between 1 and 3kg' },
    { key: 'More than 3kg', value: 'More than 3kg' },
    { key: 'No weight loss', value: 'No weight loss' },
    { key: 'I don’t know', value: 'I don’t know' },
]

const mobilityLevel = [
    { key: 'bed or chair bound', value: 'bed or chair bound' },
    { key: 'able to get out of bed / chair but does not go out', value: 'able to get out of bed / chair but does not go out' },
    { key: 'I go out', value: 'I go out' },
]

const initialValues = {
    decreasedFood: '',
    weightLoss: '',
    mobilityLevel: '',
    neruProblems: '',
    BMI: ''
}

const validationSchema = Yup.object({
    decreasedFood: Yup.string().required('Required'),
    weightLoss: Yup.string().required('Required'),
    mobilityLevel: Yup.string().required('Required'),
    acuteDiease: Yup.boolean().oneOf([true, false], 'Please Choose it').required('Required'),
    neruProblems: Yup.string().required('Required'),
    BMI: Yup.string().required('Required')
})
export default function page() {
    return (
        <>
            <div className="flex flex-col gap-6">
                <div className="mt-5">
                    <HeadComp name="Nutrition" count="4" progress="80%" />
                </div>
                <div className="text-sm font-medium mx-5"><p>SCREENING</p></div>
            </div>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values)
                }}>

                {(formikProps) => {
                    return (
                        <Form>
                            <div className="flex flex-col gap-7 mt-6">
                                <div className="bg-gray-5 flex flex-col gap-6 pt-6 pb-8">
                                    <div className="flex flex-col gap-6">
                                        <div className="px-5 flex flex-col gap-7">
                                            <p className="text-sm font-semibold">Neuropsychological problems</p>
                                            <FormikControl control="radio" name="neruProblems" options={neruProblems} />
                                            <ErrorMessage component={TextError} name="neruProblems" />
                                        </div>
                                        <div className='relative'>
                                            <p className='absolute right-3'>Score:</p>
                                        </div>
                                    </div>
                                    <div className="my-6 w-full h-0 border border-black"></div>
                                    <div className="flex flex-col gap-6">
                                        <div className="px-5 lex flex-col gap-7">
                                            <p className="text-sm font-semibold">Body Mass Index (BMI) = weight in kg / (height in m) 2</p>
                                            <FormikControl control="radio" name="BMI" options={BMI} />
                                            <ErrorMessage component={TextError} name="BMI" />
                                        </div>
                                        <div className='relative'>
                                            <p className='absolute right-3'>Score:</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-7">
                                    <Question english="Has food intake decreased over the past 3 months due to loss of appetite, digestive problems, or difficulties with chewing or swallowing?" marathi="गेल्या 3 महिन्यांत अन्न सेवन कमी झाले आहे?" />

                                    <div className="px-5">
                                        <FormikControl control="radio" name="decreasedFood" options={decreasedFood} />
                                        <ErrorMessage component={TextError} name="decreasedFood" />
                                    </div>
                                    <div className='relative'>
                                        <p className='absolute right-3'>Score:</p>
                                    </div>

                                </div>
                                <div className="flex flex-col gap-7">
                                    <Question english="Weight loss during the last 3 months?" marathi="गेल्या 3 महिन्यांत किती वजन कमी झाले?" />

                                    <div className="px-5">
                                        <FormikControl control="radio" name="weightLoss" options={weightLoss} />
                                        <ErrorMessage component={TextError} name="weightLoss" />
                                    </div>
                                    <div className='relative'>
                                        <p className='absolute right-3'>Score:</p>
                                    </div>

                                </div>
                                <div className="flex flex-col gap-7">
                                    <Question english="What is your current level of mobility?" marathi="तुमची सध्याची हालचाल किती आहे?" />

                                    <div className="px-5">
                                        <FormikControl control="radio" name="mobilityLevel" options={mobilityLevel} />
                                        <ErrorMessage component={TextError} name="mobilityLevel" />
                                    </div>
                                    <div className='relative'>
                                        <p className='absolute right-3'>Score:</p>
                                    </div>


                                </div>

                                <div className="flex flex-col gap-7">
                                    <Question english="Have you suffered psychological stress or acute disease in the past 3 months?" marathi="गेल्या 3 महिन्यांत, तुम्हाला मानसिक तणाव किंवा तीव्र आजार झाला आहे का?" />

                                    <div className="px-5">
                                        <div className="flex gap-4">
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('acuteDiease', true)}>Yes</button>
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('acuteDiease', false)}>No</button>
                                            {/* <ErrorMessage component={TextError} name="acuteDiease" /> */}
                                        </div>
                                    </div>
                                    <div className='relative'>
                                        <p className='absolute right-3'>Score:</p>
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
        </>
    )
}