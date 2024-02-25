"use client"

import { Formik } from "formik"
import * as Yup from 'yup'
import HeadComp from "../HeadComp"
import Question from "../QuestionComp"
import '../../../../styles/global.css'


const initialValues = {
    content:"",
    streamlined:"",
    nihilistic:"",
    bored:"",
    goodSpirits:"",
    apprehensive:"",
    feelHappy:"",
    feelHelpless:"",
    homebody:"",
    memoryProblems:"",
    appreciative:"",
    feelPretty:"",
    feelEnergetic:"",
    feeldespondent:"",
    feelenvious:"",    

}
const validationSchema = Yup.object({
    content: Yup.string().oneOf(['Yes', 'No'], 'Please Choose it'),
    streamlined: Yup.string().oneOf(['Yes', 'No'], 'Please Choose it'),
    Nihilistic: Yup.string().oneOf(['Yes', 'No'], 'Please Choose it'),
    bored: Yup.string().oneOf(['Yes', 'No'], 'Please Choose it'),
    goodSpirits: Yup.string().oneOf(['Yes', 'No'], 'Please Choose it'),
    apprehensive: Yup.string().oneOf(['Yes', 'No'], 'Please Choose it'),
    feelHappy: Yup.string().oneOf(['Yes', 'No'], 'Please Choose it'),
    feelHelpless: Yup.string().oneOf(['Yes', 'No'], 'Please Choose it'),
    homebody: Yup.string().oneOf(['Yes', 'No'], 'Please Choose it'),
    memoryProblem: Yup.string().oneOf(['Yes', 'No'], 'Please Choose it'),
    appreciative: Yup.string().oneOf(['Yes', 'No'], 'Please Choose it'),
    feelPretty: Yup.string().oneOf(['Yes', 'No'], 'Please Choose it'),
    feelEnergetic: Yup.string().oneOf(['Yes', 'No'], 'Please Choose it'),
    feeldespondent: Yup.string().oneOf(['Yes', 'No'], 'Please Choose it'),
    feelenvious: Yup.string().oneOf(['Yes', 'No'], 'Please Choose it'),
    
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
                {(formik) => {
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
                                            <button type="button" className={`button ${formik.values.content === 'Yes' ? 'button-active' : ''}`}onClick={() =>
                                                formik.setFieldValue('content', 'Yes')}>Yes</button>
                                            <button type="button" className={`button ${formik.values.content === 'No' ? 'button-active' : ''}`} onClick={() =>
                                                formik.setFieldValue('content', 'No')}>No</button>
                                            {/* <ErrorMessage component={TextError} name="content" /> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <Question english="Have you dropped many of your activities and interests?" marathi="तुम्ही तुमच्या अनेक आवडी सोडल्या आहेत का?" />
                                    <div className="px-5">
                                        <div className="flex gap-4">
                                            <button type="button" className={`button ${formik.values.streamlined === 'Yes' ? 'button-active' : ''}`}onClick={() =>
                                                formik.setFieldValue('streamlined', 'Yes')}>Yes</button>
                                            <button type="button" className={`button ${formik.values.streamlined === 'No' ? 'button-active' : ''}`}onClick={() =>
                                                formik.setFieldValue('streamlined', 'No')}>No</button>
                                            {/* <ErrorMessage component={TextError} name="streamlined" /> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <Question english="Do you feel that your life is empty?" marathi="तुमचे आयुष्य रिकामे आहे असे तुम्हाला वाटते का?" />
                                    <div className="px-5">
                                        <div className="flex gap-4">
                                            <button type="button" className={`button ${formik.values.nihilistic === 'Yes' ? 'button-active' : ''}`} onClick={() =>
                                                formik.setFieldValue('nihilistic', 'Yes')}>Yes</button>
                                            <button type="button" className={`button ${formik.values.nihilistic === 'No' ? 'button-active' : ''}`} onClick={() =>
                                                formik.setFieldValue('nihilistic', 'No')}>No</button>
                                            {/* <ErrorMessage component={TextError} name="nihilistic" /> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <Question english="Do you often get bored?" marathi="तुम्हाला अनेकदा कंटाळा येतो का?" />
                                    <div className="px-5">
                                        <div className="flex gap-4">
                                            <button type="button" className={`button ${formik.values.bored === 'Yes' ? 'button-active' : ''}`} onClick={() =>
                                                formik.setFieldValue('bored', 'Yes')}>Yes</button>
                                            <button type="button" className={`button ${formik.values.bored === 'No' ? 'button-active' : ''}`} onClick={() =>
                                                formik.setFieldValue('bored', 'No')}>No</button>
                                            {/* <ErrorMessage component={TextError} name="bored" /> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <Question english="Are you in good spirits most of the time?" marathi="तुम्‍ही बर्‍याच वेळा उत्साही असता का?" />
                                    <div className="px-5">
                                        <div className="flex gap-4">
                                            <button type="button" className={`button ${formik.values.goodSpirits === 'Yes' ? 'button-active' : ''}`} onClick={() =>
                                                formik.setFieldValue('goodSpirits', 'Yes')}>Yes</button>
                                            <button type="button" className={`button ${formik.values.goodSpirits === 'No' ? 'button-active' : ''}`} onClick={() =>
                                                formik.setFieldValue('goodSpirits', 'No')}>No</button>
                                            {/* <ErrorMessage component={TextError} name="goodSpirits" /> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <Question english="Are you afraid that something bad is going to happen to you?" marathi="तुमच्यासोबत काहीतरी वाईट होणार आहे याची तुम्हाला भीती वाटते का?" />
                                    <div className="px-5">
                                        <div className="flex gap-4">
                                            <button type="button" className={`button ${formik.values.apprehensive === 'Yes' ? 'button-active' : ''}`} onClick={() =>
                                                formik.setFieldValue('apprehensive', 'Yes')}>Yes</button>
                                            <button type="button" className={`button ${formik.values.apprehensive === 'No' ? 'button-active' : ''}`} onClick={() =>
                                                formik.setFieldValue('apprehensive', 'No')}>No</button>
                                            {/* <ErrorMessage component={TextError} name="apprehensive" /> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <Question english="Do you feel happy most of the time?" marathi="तुम्हाला बहुतेक वेळा आनंदी वाटते का?" />
                                    <div className="px-5">
                                        <div className="flex gap-4">
                                            <button type="button" className={`button ${formik.values.feelHappy === 'Yes' ? 'button-active' : ''}`} onClick={() =>
                                                formik.setFieldValue('feelHappy', 'Yes')}>Yes</button>
                                            <button type="button" className={`button ${formik.values.feelHappy === 'No' ? 'button-active' : ''}`} onClick={() =>
                                                formik.setFieldValue('feelHappy', 'No')}>No</button>
                                            {/* <ErrorMessage component={TextError} name="feelHappy" /> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <Question english="Do you often feel helpless?" marathi="तुम्हाला अनेकदा असहाय्य वाटते का?" />
                                    <div className="px-5">
                                        <div className="flex gap-4">
                                            <button type="button" className={`button ${formik.values.feelHelpless === 'Yes' ? 'button-active' : ''}`} onClick={() =>
                                                formik.setFieldValue('feelHelpless', 'Yes')}>Yes</button>
                                            <button type="button" className={`button ${formik.values.feelHelpless === 'No' ? 'button-active' : ''}`} onClick={() =>
                                                formik.setFieldValue('feelHelpless', 'No')}>No</button>
                                            {/* <ErrorMessage component={TextError} name="feelHelpless" /> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <Question english="Do you prefer to stay at home, rather than going out and doing new things?" marathi="बाहेर जाऊन नवीन गोष्टी करण्यापेक्षा तुम्ही घरीच राहणे पसंत करता का?" />
                                    <div className="px-5">
                                        <div className="flex gap-4">
                                            <button type="button" className={`button ${formik.values.homebody === 'Yes' ? 'button-active' : ''}`} onClick={() =>
                                                formik.setFieldValue('homebody', 'Yes')}>Yes</button>
                                            <button type="button" className={`button ${formik.values.homebody === 'No' ? 'button-active' : ''}`} onClick={() =>
                                                formik.setFieldValue('homebody', 'No')}>No</button>
                                            {/* <ErrorMessage component={TextError} name="homebody" /> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <Question english="Do you feel you have more problems with memory than most?" marathi="तुम्हाला स्मरणशक्तीची समस्या सर्वात जास्त आहे असे तुम्हाला वाटते का?" />
                                    <div className="px-5">
                                        <div className="flex gap-4">
                                            <button type="button" className={`button ${formik.values.memoryProblems === 'Yes' ? 'button-active' : ''}`} onClick={() =>
                                                formik.setFieldValue('memoryProblems', 'Yes')}>Yes</button>
                                            <button type="button" className={`button ${formik.values.memoryProblems === 'No' ? 'button-active' : ''}`} onClick={() =>
                                                formik.setFieldValue('memoryProblems', 'No')}>No</button>
                                            {/* <ErrorMessage component={TextError} name="memoryProblems" /> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <Question english="Do you think it is wonderful to be alive now?" marathi="जीवन खूप सुंदर आहे, अस तुम्हाला वाटतंय का?तुम्ही तुमच्या जीवनात समाधानी आहात का?" />
                                    <div className="px-5">
                                        <div className="flex gap-4">
                                            <button type="button" className={`button ${formik.values.appreciative === 'Yes' ? 'button-active' : ''}`} onClick={() =>
                                                formik.setFieldValue('appreciative', 'Yes')}>Yes</button>
                                            <button type="button" className={`button ${formik.values.appreciative === 'No' ? 'button-active' : ''}`} onClick={() =>
                                                formik.setFieldValue('appreciative', 'No')}>No</button>
                                            {/* <ErrorMessage component={TextError} name="appreciative" /> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <Question english="Do you feel pretty worthless the way you are now?" marathi="तुम्ही आता जसे आहात तसे तुम्हाला खूप worthless वाटते का?" />
                                    <div className="px-5">
                                        <div className="flex gap-4">
                                            <button type="button" className={`button ${formik.values.feelPretty === 'Yes' ? 'button-active' : ''}`} onClick={() =>
                                                formik.setFieldValue('feelPretty', 'Yes')}>Yes</button>
                                            <button type="button" className={`button ${formik.values.feelPretty === 'No' ? 'button-active' : ''}`} onClick={() =>
                                                formik.setFieldValue('feelPretty', 'No')}>No</button>
                                            {/* <ErrorMessage component={TextError} name="feelPretty" /> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <Question english="Do you feel full of energy?" marathi="तुम्हाला उर्जा पूर्ण वाटते का?" />
                                    <div className="px-5">
                                        <div className="flex gap-4">
                                            <button type="button" className={`button ${formik.values.feelEnergetic === 'Yes' ? 'button-active' : ''}`} onClick={() =>
                                                formik.setFieldValue('feelEnergetic', 'Yes')}>Yes</button>
                                            <button type="button" className={`button ${formik.values.feelEnergetic === 'No' ? 'button-active' : ''}`} onClick={() =>
                                                formik.setFieldValue('feelEnergetic', 'No')}>No</button>
                                            {/* <ErrorMessage component={TextError} name="feelEnergetic" /> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <Question english="Do you feel that your situation is hopeless?" marathi="तुमची परिस्थिती हताश आहे असे तुम्हाला वाटते का?" />
                                    <div className="px-5">
                                        <div className="flex gap-4">
                                            <button type="button" className={`button ${formik.values.feeldespondent === 'Yes' ? 'button-active' : ''}`} onClick={() =>
                                                formik.setFieldValue('feeldespondent', 'Yes')}>Yes</button>
                                            <button type="button" className={`button ${formik.values.feeldespondent === 'No' ? 'button-active' : ''}`} onClick={() =>
                                                formik.setFieldValue('feeldespondent', 'No')}>No</button>
                                            {/* <ErrorMessage component={TextError} name="feeldespondent" /> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <Question english="Do you think that most people are better off than you are?" marathi="तुम्हाला असे वाटते की बहुतेक लोक तुमच्यापेक्षा चांगले आहेत?" />
                                    <div className="px-5">
                                        <div className="flex gap-4">
                                            <button type="button" className={`button ${formik.values.feelenvious === 'Yes' ? 'button-active' : ''}`} onClick={() =>
                                                formik.setFieldValue('feelenvious', 'Yes')}>Yes</button>
                                            <button type="button" className={`button ${formik.values.feelenvious === 'No' ? 'button-active' : ''}`} onClick={() =>
                                                formik.setFieldValue('feelenvious', 'No')}>No</button>
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