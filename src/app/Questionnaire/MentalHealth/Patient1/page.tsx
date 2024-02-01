"use client"

import { Formik } from "formik"
import * as Yup from 'yup'
import HeadComp from "../../HeadComp"
import Question from "../QuestionComp"
import '../../../../../styles/global.css'


const initialValues = {

}
const validationSchema = Yup.object({
    content: Yup.boolean().oneOf([true, false], 'Please Choose it'),
    streamlined: Yup.boolean().oneOf([true, false], 'Please Choose it'),
    Nihilistic: Yup.boolean().oneOf([true, false], 'Please Choose it'),
    bored: Yup.boolean().oneOf([true, false], 'Please Choose it'),
    goodSpirits: Yup.boolean().oneOf([true, false], 'Please Choose it'),
    apprehensive: Yup.boolean().oneOf([true, false], 'Please Choose it'),
    feelHappy: Yup.boolean().oneOf([true, false], 'Please Choose it'),
    feelHelpless: Yup.boolean().oneOf([true, false], 'Please Choose it'),
    homebody: Yup.boolean().oneOf([true, false], 'Please Choose it'),
    memoryProblem: Yup.boolean().oneOf([true, false], 'Please Choose it'),
    appreciative: Yup.boolean().oneOf([true, false], 'Please Choose it'),
    feelPretty: Yup.boolean().oneOf([true, false], 'Please Choose it'),
    feelEnergetic: Yup.boolean().oneOf([true, false], 'Please Choose it'),
    feeldespondent: Yup.boolean().oneOf([true, false], 'Please Choose it'),
    feelenvious: Yup.boolean().oneOf([true, false], 'Please Choose it'),
    
})
export default function page() {
    return (
        <>
            <div className="flex flex-col gap-6">
                <div className="mt-5">
                    <HeadComp name="Mental Health" count="5" progress="80%" />
                </div>
                <div className="text-sm font-medium mx-5"><p>Mood Assessment (Part 1 out of 2)</p></div>
            </div>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values)
                }}>
                {(formikProps) => {
                    return (
                        <>
                            <div className="flex flex-col gap-6 mt-4">
                                <div className="mx-5">
                                    <p>Choose the best answer for how you have felt over the past week</p>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <Question english="Are you basically satisfied with your life?" marathi="तुम्ही तुमच्या जीवनात समाधानी आहात का?" />
                                    <div className="px-5">
                                        <div className="flex gap-4">
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('content', true)}>Yes</button>
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('content', false)}>No</button>
                                            {/* <ErrorMessage component={TextError} name="content" /> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <Question english="Have you dropped many of your activities and interests?" marathi="तुम्ही तुमच्या अनेक आवडी सोडल्या आहेत का?" />
                                    <div className="px-5">
                                        <div className="flex gap-4">
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('streamlined', true)}>Yes</button>
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('streamlined', false)}>No</button>
                                            {/* <ErrorMessage component={TextError} name="streamlined" /> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <Question english="Do you feel that your life is empty?" marathi="तुमचे आयुष्य रिकामे आहे असे तुम्हाला वाटते का?" />
                                    <div className="px-5">
                                        <div className="flex gap-4">
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('nihilistic', true)}>Yes</button>
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('nihilistic', false)}>No</button>
                                            {/* <ErrorMessage component={TextError} name="nihilistic" /> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <Question english="Do you often get bored?" marathi="तुम्हाला अनेकदा कंटाळा येतो का?" />
                                    <div className="px-5">
                                        <div className="flex gap-4">
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('bored', true)}>Yes</button>
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('bored', false)}>No</button>
                                            {/* <ErrorMessage component={TextError} name="bored" /> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <Question english="Are you in good spirits most of the time?" marathi="तुम्‍ही बर्‍याच वेळा उत्साही असता का?" />
                                    <div className="px-5">
                                        <div className="flex gap-4">
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('goodSpirits', true)}>Yes</button>
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('goodSpirits', false)}>No</button>
                                            {/* <ErrorMessage component={TextError} name="goodSpirits" /> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <Question english="Are you afraid that something bad is going to happen to you?" marathi="तुमच्यासोबत काहीतरी वाईट होणार आहे याची तुम्हाला भीती वाटते का?" />
                                    <div className="px-5">
                                        <div className="flex gap-4">
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('apprehensive', true)}>Yes</button>
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('apprehensive', false)}>No</button>
                                            {/* <ErrorMessage component={TextError} name="apprehensive" /> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <Question english="Do you feel happy most of the time?" marathi="तुम्हाला बहुतेक वेळा आनंदी वाटते का?" />
                                    <div className="px-5">
                                        <div className="flex gap-4">
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('feelHappy', true)}>Yes</button>
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('feelHappy', false)}>No</button>
                                            {/* <ErrorMessage component={TextError} name="feelHappy" /> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <Question english="Do you often feel helpless?" marathi="तुम्हाला अनेकदा असहाय्य वाटते का?" />
                                    <div className="px-5">
                                        <div className="flex gap-4">
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('feelHelpless', true)}>Yes</button>
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('feelHelpless', false)}>No</button>
                                            {/* <ErrorMessage component={TextError} name="feelHelpless" /> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <Question english="Do you prefer to stay at home, rather than going out and doing new things?" marathi="बाहेर जाऊन नवीन गोष्टी करण्यापेक्षा तुम्ही घरीच राहणे पसंत करता का?" />
                                    <div className="px-5">
                                        <div className="flex gap-4">
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('homebody', true)}>Yes</button>
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('homebody', false)}>No</button>
                                            {/* <ErrorMessage component={TextError} name="homebody" /> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <Question english="Do you feel you have more problems with memory than most?" marathi="तुम्हाला स्मरणशक्तीची समस्या सर्वात जास्त आहे असे तुम्हाला वाटते का?" />
                                    <div className="px-5">
                                        <div className="flex gap-4">
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('memoryProblems', true)}>Yes</button>
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('memoryProblems', false)}>No</button>
                                            {/* <ErrorMessage component={TextError} name="memoryProblems" /> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <Question english="Do you think it is wonderful to be alive now?" marathi="जीवन खूप सुंदर आहे, अस तुम्हाला वाटतंय का?तुम्ही तुमच्या जीवनात समाधानी आहात का?" />
                                    <div className="px-5">
                                        <div className="flex gap-4">
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('appreciative', true)}>Yes</button>
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('appreciative', false)}>No</button>
                                            {/* <ErrorMessage component={TextError} name="appreciative" /> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <Question english="Do you feel pretty worthless the way you are now?" marathi="तुम्ही आता जसे आहात तसे तुम्हाला खूप worthless वाटते का?" />
                                    <div className="px-5">
                                        <div className="flex gap-4">
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('feelPretty', true)}>Yes</button>
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('feelPretty', false)}>No</button>
                                            {/* <ErrorMessage component={TextError} name="feelPretty" /> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <Question english="Do you feel full of energy?" marathi="तुम्हाला उर्जा पूर्ण वाटते का?" />
                                    <div className="px-5">
                                        <div className="flex gap-4">
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('feelEnergetic', true)}>Yes</button>
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('feelEnergetic', false)}>No</button>
                                            {/* <ErrorMessage component={TextError} name="feelEnergetic" /> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <Question english="Do you feel that your situation is hopeless?" marathi="तुमची परिस्थिती हताश आहे असे तुम्हाला वाटते का?" />
                                    <div className="px-5">
                                        <div className="flex gap-4">
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('feeldespondent', true)}>Yes</button>
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('feeldespondent', false)}>No</button>
                                            {/* <ErrorMessage component={TextError} name="feeldespondent" /> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <Question english="Do you think that most people are better off than you are?" marathi="तुम्हाला असे वाटते की बहुतेक लोक तुमच्यापेक्षा चांगले आहेत?" />
                                    <div className="px-5">
                                        <div className="flex gap-4">
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('feelenvious', true)}>Yes</button>
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('feelenvious', false)}>No</button>
                                            {/* <ErrorMessage component={TextError} name="feelenvious" /> */}
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
                        </>
                    )
                }}
            </Formik>
        </>
    )
}