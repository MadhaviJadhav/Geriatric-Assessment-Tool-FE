"use client"

import HeadComp from "../../HeadComp"
import { Formik, Form, ErrorMessage } from "formik"
import * as Yup from 'yup'
import Question from "../QuestionComp"
import FormikControl from "@/formik/FormikControl"
import TextError from "@/formik/TextError"
import '../../../../../styles/global.css'

const fluid =[
    {key:'Less than 3 cups', value:'Less than 3 cups'},
    {key:'3 to 5 cups', value:'3 to 5 cups'},
    {key:'More than 5 cups', value:'More than 5 cups'},
]
const modeOfFeeding =[
    {key:'unable to eat without assistance', value:'unable to eat without assistance'},
    {key:'self-fed with some difficulty', value:'self-fed with some difficulty'},
    {key:'self-fed without any problem', value:'self-fed without any problem'},
]

const nutritionalStatus =[
    {key:'I am malnourished', value:'I am malnourished'},
    {key:'I am not sure', value:'I am not sure'},
    {key:'I don’t have any nutritional problems', value:'I don’t have any nutritional problems'},
]

const healthStatus =[
    {key:'not as good', value:'not as good'},
    {key:'I don’t know', value:'I don’t know'},
    {key:'as good', value:'as good'},
    {key:'better', value:'better'}
]
const initialValues = {

}

const validationSchema = Yup.object({

})
export default function page() {
    return (
        <>
            <div className="flex flex-col gap-6">
                <div className="mt-5">
                    <HeadComp name="Nutrition" count="4" progress="80%" />
                </div>
                <div className="text-sm font-medium mx-5"><p>Mini Nutritional assessment</p></div>
            </div>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                {(formikProps) => {
                    return (
                        <Form>
                            <div className="flex flex-col gap-8 mt-6">
                                <div className="flex flex-col gap-5">
                                    <Question english="Do you live independently? (not in nursing home or hospital)" marathi="तुम्ही स्वतंत्रपणे जगता का? (नर्सिंग होम किंवा हॉस्पिटलमध्ये नाही)" />

                                    <div className="px-5">
                                        <div className="flex gap-4">
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('acuteDiease', true)}>Yes</button>
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('acuteDiease', false)}>No</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-5">
                                    <Question english="Do you Take more than 3 prescription drugs per day?" marathi="तुम्ही दररोज ३ पेक्षा जास्त प्रिस्क्रिप्शन औषधे घेता का?" />

                                    <div className="px-5">
                                        <div className="flex gap-4">
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('acuteDiease', true)}>Yes</button>
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('acuteDiease', false)}>No</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-5">
                                    <Question english="Do you have any Pressure sores or skin ulcers?" marathi="तुम्हाला प्रेशर फोड किंवा त्वचेचे व्रण आहेत का?" />

                                    <div className="px-5">
                                        <div className="flex gap-4">
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('acuteDiease', true)}>Yes</button>
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('acuteDiease', false)}>No</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-5">
                                    <Question english="How many full meals do you eat daily?" marathi="तुम्ही दररोज किती वेळा पोटभर जेवता?" />

                                    <div className="px-5">
                                        <div className="flex gap-4">
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('acuteDiease', true)}>1 Meal</button>
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('acuteDiease', false)}>2 Meals</button>
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('acuteDiease', false)}>3 Meals</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-5">
                                    <Question english="Select the markers below for tracking protein intake" marathi="प्रोटीन सेवन ट्रॅक करण्यासाठी खालील मार्कर निवडा" />

                                    <div className="flex flex-col gap-8">
                                        <div className="mx-5">
                                            <p>At least one serving of dairy products (milk, cheese, yoghurt) per day</p>
                                        </div>
                                        <div className="px-5">
                                            <div className="flex gap-4">
                                                <button type="button" className="button" onClick={() =>
                                                    formikProps.setFieldValue('acuteDiease', true)}>Yes</button>
                                                <button type="button" className="button" onClick={() =>
                                                    formikProps.setFieldValue('acuteDiease', false)}>No</button>
                                            </div>
                                        </div>

                                        <div className="mx-5">
                                            <p>Two or more servings of legumes or eggs per week</p>
                                        </div>
                                        <div className="px-5">
                                            <div className="flex gap-4">
                                                <button type="button" className="button" onClick={() =>
                                                    formikProps.setFieldValue('acuteDiease', true)}>Yes</button>
                                                <button type="button" className="button" onClick={() =>
                                                    formikProps.setFieldValue('acuteDiease', false)}>No</button>
                                            </div>
                                        </div>

                                        <div className="mx-5">
                                            <p>Meat, fish or poultry every day</p>
                                        </div>
                                        <div className="px-5">
                                            <div className="flex gap-4">
                                                <button type="button" className="button" onClick={() =>
                                                    formikProps.setFieldValue('acuteDiease', true)}>Yes</button>
                                                <button type="button" className="button" onClick={() =>
                                                    formikProps.setFieldValue('acuteDiease', false)}>No</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col gap-5">
                                    <Question english="Do you Consume two or more servings of fruit or vegetables per day?" marathi="तुम्ही दररोज दोन किंवा अधिक फळे किंवा भाज्या खातात का?" />

                                    <div className="px-5">
                                        <div className="flex gap-4">
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('acuteDiease', true)}>Yes</button>
                                            <button type="button" className="button" onClick={() =>
                                                formikProps.setFieldValue('acuteDiease', false)}>No</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-7">
                                    <Question english="How much fluid (water, juice, coffee, tea, milk...) do you consume per day?" marathi="तुम्ही दररोज किती द्रव (पाणी, रस, कॉफी, चहा, दूध...) पितात?" />

                                    <div className="px-5">
                                        <FormikControl control="radio" name="fluid" options={fluid} />
                                        <ErrorMessage component={TextError} name="fluid" />
                                    </div>
                                   
                                    
                                    
                                </div>

                                <div className="flex flex-col gap-7">
                                    <Question english="What is your current Mode of feeding?mobility?" marathi="तुमची सध्याची फीडिंग पद्धत काय आहे?" />

                                    <div className="px-5">
                                        <FormikControl control="radio" name="modeOfFeeding" options={modeOfFeeding} />
                                        <ErrorMessage component={TextError} name="modeOfFeeding" />
                                    </div>
                                   
                                    
                                    
                                </div>

                                <div className="flex flex-col gap-7">
                                    <Question english="How do you assess your own nutritional status?" marathi="तुम्ही तुमच्या स्वतःच्या पोषण स्थितीचे मूल्यांकन कसे करता?" />

                                    <div className="px-5">
                                        <FormikControl control="radio" name="nutritionalStatus" options={nutritionalStatus} />
                                        <ErrorMessage component={TextError} name="nutritionalStatus" />
                                    </div>
                                   
                                    
                                    
                                </div>

                                <div className="flex flex-col gap-7">
                                    <Question english="In comparison with other people of the same age, how do you consider your own health status?" marathi="समान वयाच्या इतर लोकांच्या तुलनेत, तुम्ही तुमच्या स्वतःच्या आरोग्याची स्थिती कशी मानता?" />

                                    <div className="px-5">
                                        <FormikControl control="radio" name="healthStatus" options={healthStatus} />
                                        <ErrorMessage component={TextError} name="healthStatus" />
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