"use client"

import { useRouter } from "next/navigation"

// import Head1 from "./HeadComp";
// import Question from "./QuestionComp";

// import '../../../styles/global.css';
// import { Formik, Form } from "formik";
// import * as Yup from 'yup';
// import FormikControl from "@/formik/FormikControl";

// const dropdownOptions = [
//     { key: 'Native State', value: '' },
//     { key: 'Maharashtra', value: 'Maharashtra' },
//     { key: 'Gujarat', value: 'Gujarat' },
//     { key: 'Telengana', value: 'Telengana' },
//     { key: 'Others', value: 'Others' }

// ]

// const place = [
//     { key: 'Hotel Hotel', value: 'Hotel Hotel' },
//     { key: 'At the relative’s place', value: 'At the relative’s place' },
//     { key: 'At the friend’s place', value: 'At the friend’s place' },
//     { key: 'Others', value: 'Others' }

// ]

// const livingSituation = [
//     { key: 'At home, with family and helpers', value: 'At home, with family and helpers' },
//     { key: 'At the relative’s place', value: 'At the relative’s place' },
//     { key: 'At the friend’s place', value: 'At the friend’s place' },
//     { key: 'Others', value: 'Others' }

// ]

// const oras = [
//     { key: 'Yes', value: 'Yes' },
//     { key: 'No', value: 'No' }
// ]

// const maritalStatus = [
//     { key: 'Married, Lives with spouse', value: 'Married, Lives with spouse' },
//     { key: 'Unmarried', value: 'Unmarried' },
//     { key: 'Option 3', value: 'Option 3' },
//     { key: 'Others', value: 'Others' }

// ]

// const currentEducation = [
//     { key: 'Primary (Std 1 to std 5)', value: 'Primary (Std 1 to std 5)' },
//     { key: 'Secondary', value: 'Secondary' },
//     { key: 'Option 3', value: 'Option 3' },
//     { key: 'Others', value: 'Others' }
// ]
// const validationSchema = Yup.object({
//     state: Yup.string().required('Please select a state'),

// })
// const initialValues = {
//     state: "",
//     place: [],
//     livingSituation: [],
//     familyMembers: 0,
//     oras: [],
// }

// export default function page() {
//     return (
//         <>
//             <div className="flex flex-col gap-8">
//                 <div className="mt-5">
//                     <Head1 name="General Information" count="1" progress="80%" />
//                 </div>

//                 <Formik
//                     initialValues={initialValues}
//                     validationSchema={validationSchema}
//                     onSubmit={(values) => {
//                         // console.log("HII")
//                         console.log(values)
//                     }}

//                 >
//                     {(formikProps) => {
//                         return (
//                             <Form>

//                                 <div className="flex flex-col gap-8">
//                                     <div className="flex flex-col gap-4">
//                                         <Question english="Select your native state from the options below" marathi="खालील पर्यायांमधून तुमचे मूळ राज्य निवडा" />

//                                         <div className="px-5">
//                                             <div className='box text-gray-3'>

//                                                 <FormikControl control='select'
//                                                     name='state'
//                                                     options={dropdownOptions}
//                                                     className='w-full absolute text-sm top-4 bg-gray-6 px-4 apperance-none' />
//                                                 <br />
//                                                 <br />
//                                                 {/* <ErrorMessage component={TextError} name='GADoneBy'></ErrorMessage> */}

//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="flex flex-col gap-4">
//                                         <Question english="Where are you staying in Mumbai city?" marathi="तुम्ही मुंबई शहरात कुठे राहता?" />

//                                         <div className='px-5'>
//                                             <FormikControl control='radio' options={place} name='place' />
//                                         </div>

//                                         {formikProps.values.place === 'Others' && (
//                                             <div className="px-5">
//                                                 <div className="box shadow-md">
//                                                     <FormikControl
//                                                         control="input"
//                                                         type="text"
//                                                         name="placeOther"
//                                                         id="placeOther"
//                                                         className="input_box"
//                                                         placeholder="Write"
//                                                     />
//                                                 </div>
//                                             </div>
//                                         )}
//                                     </div>

//                                     <div className="flex flex-col gap-4">
//                                         <Question english="How is your living situation?" marathi="राहण्याची परिस्थिती कशी आहे?" />

//                                         <div className='mx-5'>
//                                             <FormikControl control='radio' options={livingSituation} name='livingSituation' />
//                                         </div>

//                                         {formikProps.values.livingSituation === 'Others' && (
//                                             <div className="px-5">
//                                                 <div className="box shadow-md">
//                                                     <FormikControl
//                                                         control="input"
//                                                         type="text"
//                                                         name="livingSituationOther"
//                                                         id="livingSituationOther"
//                                                         className="input_box"
//                                                         placeholder="Write"
//                                                     />
//                                                 </div>
//                                             </div>
//                                         )}
//                                     </div>

//                                     <div className="flex flex-col gap-4">
//                                         <Question english="How many people are living with you at home?" marathi="तुमच्यासोबत घरात किती लोक राहतात?" />

//                                         <div className="px-5">
//                                             <div className='box shadow-md'>
//                                                 <FormikControl control='input' type="text" name="familyMembers" id="familyMembers" className='input_box' placeholder='Write'
//                                                 />
//                                             </div>
//                                         </div>

//                                     </div>

//                                     <div className="flex flex-col gap-4">
//                                         <Question english="Do you have ORAS Medical support?" marathi="तुम्हाला ORAS वैद्यकीय सहाय्य आहे का?" />

//                                         <div className='mx-5'>
//                                             <FormikControl control='radio' options={oras} name='oras' />
//                                         </div>
//                                     </div>

//                                     <div className="flex flex-col gap-4">
//                                         <Question english="What's your current level of education?" marathi="तुमची सध्याची शैक्षणिक पातळी काय आहे?" />

//                                         <div className='mx-5'>
//                                             <FormikControl control='radio' options={currentEducation} name='currentEducation' />
//                                         </div>

//                                         {formikProps.values.currentEducation === 'Others' && (
//                                             <div className="px-5">
//                                                 <div className="box shadow-md">
//                                                     <FormikControl
//                                                         control="input"
//                                                         type="text"
//                                                         name="currentEductionOther"
//                                                         id="currentEductionOther"
//                                                         className="input_box"
//                                                         placeholder="Write"
//                                                     />
//                                                 </div>
//                                             </div>
//                                         )}
//                                     </div>

//                                     <div className="flex flex-col gap-4">
//                                         <Question english="What is your marital status?" marathi="तुमची वैवाहिक स्थिती काय आहे?" />

//                                         <div className='mx-5'>
//                                             <FormikControl control='radio' options={maritalStatus} name='maritalStatus' />
//                                         </div>

//                                         {formikProps.values.maritalStatus === 'Others' && (
//                                             <div className="px-5">
//                                                 <div className="box shadow-md">
//                                                     <FormikControl
//                                                         control="input"
//                                                         type="text"
//                                                         name="maritalStatusOther"
//                                                         id="maritalStatusOther"
//                                                         className="input_box"
//                                                         placeholder="Write"
//                                                     />
//                                                 </div>
//                                             </div>
//                                         )}
//                                     </div>

//                                     <div className="flex flex-col gap-4">
//                                         <Question english="What's your occupation?" marathi="तुझा व्यवसाय काय आहे?" />

//                                         <div className="px-5">
//                                             <div className='box shadow-md'>
//                                                 <FormikControl control='input' type="text" name="occupation" id="occupation" className='input_box' placeholder='Write'
//                                                 />
//                                             </div>
//                                         </div>

//                                     </div>

//                                     <div className='h-[80px] py-4  flex gap-4 w-full px-7 py-4 text-sm font-medium  shadow-inner mt-10'>
//                                         <div className='w-1/3  h-[48px] flex justify-center items-center text-center bg-gray-6 text-gray-1'>
//                                             <button type='submit' className='button_footer'>
//                                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
//                                                     <path fillRule="evenodd" d="M20.25 12a.75.75 0 01-.75.75H6.31l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 111.06 1.06l-5.47 5.47H19.5a.75.75 0 01.75.75z" clipRule="evenodd" />
//                                                 </svg>

//                                                 <p className='uppercase'>Back</p>
//                                             </button>
//                                         </div>
//                                         <div className='w-8/12 h-[48px] flex justify-center items-center text-center bg-gray-1 text-gray-6'>
//                                             <button className='button_footer' type='submit'>
//                                                 <p className='uppercase'>Save And Next</p>
//                                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
//                                                     <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
//                                                 </svg>
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>

//                             </Form>
//                         )
//                     }}
//                 </Formik>
//             </div>
//         </>
//     )
// }


export default function page() {
    const router = useRouter();

    return (
        <>

            {/* <div className="relative ml-5">
            <div className="absolute top-5 -left-[0.2rem] bg-gray-5 h-10 w-10 rounded-full border-4 text-center">1</div>
            </div> */}
            <div className="px-5 mt-6 flex flex-col gap-1 w-full h-full">
                <div className="relative flex">
                    <div className="flex flex-col gap-4">
                        <div className="absolute  -left-[0.5rem] bg-gray-5 h-10 w-10 rounded-full flex items-center justify-center">
                            <p className="text-center">1</p>
                        </div>
                        <div className="border-l-2 border-gray-200 ml-3 mt-11 py-16 ">
                        </div>
                    </div>
                    <div className="pl-8 flex flex-col gap-5 top-2 w-full">
                        <div className="w-full">
                            <h1 className="text-sm font-semibold">General Information</h1>
                            <p className="text-sm font-normal">Location, occupation, education ...</p>
                        </div>
                        <div className="flex justify-between">
                            <div className="w-full">
                                <p>Completion: 0%</p>
                                <div className="w-11/12 h-[0px] border-2 border-neutral-200"></div>
                            </div>
                            <button className="w-[94px] h-[25px] px-2 border-2 border-stone-300 rounded justify-center" onClick={()=>router.push('/Questionnaire/GeneralInformation')}>START</button>
                        </div>
                        <div className="text-sm font-medium underline text-gray-2">
                            <a className="" href="">Know more</a>
                        </div>
                    </div>
                </div>

                <div className="relative flex">
                    <div className="flex flex-col gap-4">
                        <div className="absolute  -left-[0.5rem] bg-gray-5 h-10 w-10 rounded-full flex items-center justify-center">
                            <p className="text-center">2</p>
                        </div>
                        <div className="border-l-2 border-gray-200 ml-3 mt-11 py-16 ">
                        </div>
                    </div>
                    <div className="pl-8 flex flex-col gap-5 top-2 w-full">
                        <div className="w-full">
                            <h1 className="text-sm font-semibold">Health and Well-Being</h1>
                            <p className="text-sm font-normal">Hearing, Voice, Oral health</p>
                        </div>
                        <div className="flex justify-between">
                            <div className="w-full">
                                <p>Completion: 0%</p>
                                <div className="w-11/12 h-[0px] border-2 border-neutral-200"></div>
                            </div>
                            <button className="w-[94px] h-[25px] px-2 border-2 border-stone-300 rounded justify-center"  onClick={()=>router.push('/Questionnaire/HealthWellBeing')}>START</button>
                        </div>
                        <div className="text-sm font-medium underline text-gray-2">
                            <a className="" href="">Know more</a>
                        </div>
                    </div>
                </div>

                <div className="relative flex">
                    <div className="flex flex-col gap-4">
                        <div className="absolute  -left-[0.5rem] bg-gray-5 h-10 w-10 rounded-full flex items-center justify-center">
                            <p className="text-center">3</p>
                        </div>
                        <div className="border-l-2 border-gray-200 ml-3 mt-11 py-16 ">
                        </div>
                    </div>
                    <div className="pl-8 flex flex-col gap-5 top-2 w-full">
                        <div className="w-full">
                            <h1 className="text-sm font-semibold">Activity and Mobility</h1>
                            <p className="text-sm font-normal">Daily activities, Take bath, Prepare food..</p>
                        </div>
                        <div className="flex justify-between">
                            <div className="w-full">
                                <p>Completion: 0%</p>
                                <div className="w-11/12 h-[0px] border-2 border-neutral-200"></div>
                            </div>
                            <button className="w-[94px] h-[25px] px-2 border-2 border-stone-300 rounded justify-center"  onClick={()=>router.push('/Questionnaire/ActivityAndMobility')}>START</button>
                        </div>
                        <div className="text-sm font-medium underline text-gray-2">
                            <a className="" href="">Know more</a>
                        </div>
                    </div>
                </div>

                <div className="relative flex">
                    <div className="flex flex-col gap-4">
                        <div className="absolute  -left-[0.5rem] bg-gray-5 h-10 w-10 rounded-full flex items-center justify-center">
                            <p className="text-center">3</p>
                        </div>
                        <div className="border-l-2 border-gray-200 ml-3 mt-11 py-16 ">
                        </div>
                    </div>
                    <div className="pl-8 flex flex-col gap-5 top-2 w-full">
                        <div className="w-full">
                            <h1 className="text-sm font-semibold">Nutrition</h1>
                            <p className="text-sm font-normal">Food intake, weight loss..</p>
                        </div>
                        <div className="flex justify-between">
                            <div className="w-full">
                                <p>Completion: 0%</p>
                                <div className="w-11/12 h-[0px] border-2 border-neutral-200"></div>
                            </div>
                            <button className="w-[94px] h-[25px] px-2 border-2 border-stone-300 rounded justify-center"  onClick={()=>router.push('/Questionnaire/Nutrition')}>START</button>
                        </div>
                        <div className="text-sm font-medium underline text-gray-2">
                            <a className="" href="">Know more</a>
                        </div>
                    </div>
                </div>

                <div className="relative flex">
                    <div className="flex flex-col gap-4">
                        <div className="absolute  -left-[0.5rem] bg-gray-5 h-10 w-10 rounded-full flex items-center justify-center">
                            <p className="text-center">5</p>
                        </div>
                        <div className="border-l-2 border-gray-200 ml-3 mt-11 py-16 ">
                        </div>
                    </div>
                    <div className="pl-8 flex flex-col gap-5 top-2 w-full">
                        <div className="w-full">
                            <h1 className="text-sm font-semibold">Mental health</h1>
                            <p className="text-sm font-normal">Food intake, weight loss..</p>
                        </div>
                        <div className="flex justify-between">
                            <div className="w-full">
                                <p>Completion: 0%</p>
                                <div className="w-11/12 h-[0px] border-2 border-neutral-200"></div>
                            </div>
                            <button className="w-[94px] h-[25px] px-2 border-2 border-stone-300 rounded justify-center"  onClick={()=>router.push('/Questionnaire/MentalHealth')}>START</button>
                        </div>
                        <div className="text-sm font-medium underline text-gray-2">
                            <a className="" href="">Know more</a>
                        </div>
                    </div>
                </div>

                <div className="relative flex">
                    <div className="flex flex-col gap-4">
                        <div className="absolute  -left-[0.5rem] bg-gray-5 h-10 w-10 rounded-full flex items-center justify-center">
                            <p className="text-center">6</p>
                        </div>
                        <div className="ml-3 mt-8 py-16 ">
                        </div>
                    </div>
                    <div className="pl-8 flex flex-col gap-5 top-2 w-full">
                        <div className="w-full">
                            <h1 className="text-sm font-semibold">Income Details</h1>
                            <p className="text-sm font-normal">Monthly, yearly income, Insurance...</p>
                        </div>
                        <div className="flex justify-between">
                            <div className="w-full">
                                <p>Completion: 0%</p>
                                <div className="w-11/12 h-[0px] border-2 border-neutral-200"></div>
                            </div>
                            <button className="w-[94px] h-[25px] px-2 border-2 border-stone-300 rounded justify-center"  onClick={()=>router.push('/Questionnaire/IncomeDetails')}>START</button>
                        </div>
                        <div className="text-sm font-medium underline text-gray-2">
                            <a className="" href="">Know more</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[80px] py-4  flex gap-4 w-full px-5 text-sm font-medium  shadow-inner'>
                <div className='w-full  h-[48px] flex justify-center items-center text-center bg-gray-1 text-gray-6'>
                    <button type='submit' className='button_footer'>
                        <p className='uppercase'>Submit</p>
                    </button>
                </div>
                
            </div>
        </>
    )
}