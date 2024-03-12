"use client"

import Image from "next/image"
import Phone from '../../../../public/Images/Phone.jpeg'
import Walk from '../../../../public/Images/Walk.jpeg'
import Groceries from '../../../../public/Images/Groceries.jpeg'
import Meal from '../../../../public/Images/Meal.jpeg'
import HandymanWork from '../../../../public/Images/HandymanWork.jpeg'
import Laundry from '../../../../public/Images/Laundry.jpeg'
import Medicine from '../../../../public/Images/Medicine.jpeg'
import Money from '../../../../public/Images/Money.jpeg'

import { Form, Formik } from "formik"
import * as Yup from 'yup'
import HeadComp from "@/app/_components/Questionnaire/Head"
import Question from "@/app/_components/Questionnaire/ActivityAndMobility/Question"
import FormikControl from "@/formik/FormikControl"

const telephoneUse = [
    { key: 'Without Help', value: 'Without Help' },
    { key: 'With Some Help', value: 'With Some Help' },
    { key: 'completely unable to use', value: 'completely unable to use' }
]

const transportationUse = [
    { key: 'Without Help', value: 'Without Help' },
    { key: 'With Some Help', value: 'With Some Help' },
    { key: 'completely unable to travel unless special arrangements are made', value: 'completely unable to travel unless special arrangements are made' }
]

const shoppingGroceries = [
    { key: 'Without Help', value: 'Without Help' },
    { key: 'With Some Help', value: 'With Some Help' },
    { key: 'completely unable to use', value: 'completely unable to use' }
]

const preparingOwnMeals = [
    { key: 'Without Help', value: 'Without Help' },
    { key: 'With Some Help', value: 'With Some Help' },
    { key: 'completely unable to use', value: 'completely unable to use' }
]

const doOwnHandymanWork = [
    { key: 'Without Help', value: 'Without Help' },
    { key: 'With Some Help', value: 'With Some Help' },
    { key: 'completely unable to use', value: 'completely unable to use' }
]

const doOwnLaundry = [
    { key: 'Without Help', value: 'Without Help' },
    { key: 'With Some Help', value: 'With Some Help' },
    { key: 'completely unable to use', value: 'completely unable to use' }
]

const medicine = [
    { key: 'Without Help', value: 'Without Help' },
    { key: 'With Some Help', value: 'With Some Help' },
    { key: 'completely unable to use', value: 'completely unable to use' }
]

const money = [
    { key: 'Without Help', value: 'Without Help' },
    { key: 'With Some Help', value: 'With Some Help' },
    { key: 'completely unable to use', value: 'completely unable to use' }
]

const initialValues = {
    telephoneUse: [],
    transportationUse: [],
    shoppingGroceries: [],
    preparingOwnMeals: [],
    doOwnHandymanWork: [],
    doOwnLaundry:[],
    medicine:[],
    money:[],
    medicationUse:false


}

const validationSchema = Yup.object({
    telephoneUse: Yup.string(),
    transportationUse: Yup.string(),
    shoppingGroceries: Yup.string(),
    preparingOwnMeals: Yup.string(),
    doOwnHandymanWork: Yup.string(),
    doOwnLaundry:Yup.string(),
    medicine:Yup.string(),
    money:Yup.string(),
    medicationUse:Yup.boolean().oneOf([true,false],'Please choose it')
})



export default function page() {
    return (
        <>
            <div className="mx-5 flex flex-col gap-6">
                <div className="mt-5">
                    <HeadComp name="Activity and Mobility" count="3" progress="80%" />
                </div>
                <div className="mx-5 text-sm font-medium"><p>Activities of Daily Living</p></div>
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
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col gap-7">
                                    <div>
                                    {/* <Image src={Phone} className="w-full h-40" alt="Phone"/> */}
                                    <Question english="Can you use the telephone?" marathi="तुम्ही टेलिफोन वापरू शकता का?" />
                                    </div>

                                    <div className="px-5">
                                        <FormikControl control='radio' name='telephoneUse' options={telephoneUse} />
                                    </div>
                                    <div className="relative">
                                        <p className="absolute right-3">Score</p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-7">
                                    <div>
                                    {/* <Image src={Walk} className="w-full h-40" alt="Walk"/> */}
                                    <Question english="Can you get to places beyond walking distance?" marathi="" />
                                    </div>
                                    

                                    <div className="px-5">
                                        <FormikControl className='mx-5' control='radio' name='transportationUse' options={transportationUse} />
                                    </div>
                                    <div className="relative">
                                        <p className="absolute right-3">Score</p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-7">
                                    <div>
                                    {/* <Image src={Groceries} className="w-full h-40" alt="Groceries"/> */}
                                    <Question english="Can you go shopping for groceries?" marathi="" />
                                    </div>
                                

                                    <div className="px-5">
                                        <FormikControl className='mx-5' control='radio' name='shoppingGroceries' options={shoppingGroceries} />
                                    </div>
                                    <div className="relative">
                                        <p className="absolute right-3">Score</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-7">
                                    <div>
                                    {/* <Image src={Meal} className="w-full h-40" alt="Meal"/> */}
                                    <Question english="Can you go shopping for groceries?" marathi="" />
                                    <Question english="Can you prepare your own meals?" marathi="" />
                                    </div>
                                

                                    <div className="px-5">
                                        <FormikControl className='mx-5' control='radio' name='preparingOwnMeals' options={preparingOwnMeals} />
                                    </div>
                                    <div className="relative">
                                        <p className="absolute right-3">Score</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-7">
                                <div>
                                {/* <Image src={HandymanWork} className="w-full h-40" alt="HandymanWork"/> */}
                                    <Question english="Can you do your own handyman work?" marathi="" />
                                </div>

                                    <div className="px-5">
                                        <FormikControl className='mx-5' control='radio' name='doOwnHandymanWork' options={doOwnHandymanWork} />
                                    </div>
                                    <div className="relative">
                                        <p className="absolute right-3">Score</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-7">
                                <div>
                                {/* <Image src={Laundry} className="w-full h-40" alt="Laundry"/> */}
                                    
                                    <Question english="Can you do your own laundry?" marathi="" />
                                </div>

                                    <div className="px-5">
                                        <FormikControl className='mx-5' control='radio' name='doOwnLaundry' options={doOwnLaundry} />
                                    </div>
                                    <div className="relative">
                                        <p className="absolute right-3">Score</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    
                                    <Question english="Do you take medicines or use any medications?" marathi="" />

                                    <div className="px-5">
                                        <div className="flex gap-4">
                                            <button type="button" className="button" onClick={()=>
                                            formikProps.setFieldValue('medicationUse','Yes')}>Yes</button>
                                            <button type="button" className="button" onClick={()=>
                                            formikProps.setFieldValue('medicationUse','No')}>No</button>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <p className="absolute right-3">Score</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-7">
                                <div>
                                {/* <Image src={Medicine} className="w-full h-40" alt="Medicine"/> */}
                                    
                                    <Question english="If you had to take medicine, could you do it?" marathi="" />
                                </div>

                                    <div className="px-5">
                                        <FormikControl className='mx-5' control='radio' name='medicine' options={medicine} />
                                    </div>
                                    <div className="relative">
                                        <p className="absolute right-3">Score</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-7">
                                <div>
                                {/* <Image src={Money} className="w-full h-40" alt="Money"/> */}
                                    <Question english="Can you manage your own money?" marathi="" />
                                </div>

                                    <div className="px-5">
                                        <FormikControl className='mx-5' control='radio' name='money' options={money} />
                                    </div>
                                    <div className="relative">
                                        <p className="absolute right-3">Score</p>
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
                        </Form>
                    )
                }}
            </Formik>


        </>
    )
}