"use client"

import Image from "next/image"
// import telephoneUse from '../../../../public/Images/Phone.jpeg'
// import transportationUse from '../../../../public/Images/Walk.jpeg'
// import shoppingGroceries from '../../../../public/Images/Groceries.jpeg'
// import preparingOwnMeals from '../../../../public/Images/Meal.jpeg'
// import doOwnHandymanWork from '../../../../public/Images/HandymanWork.jpeg'
// import doOwnLaundry from '../../../../public/Images/Laundry.jpeg'
// import medicationUse from '../../../../public/Images/Medicine.jpeg'
// import money from '../../../../public/Images/Money.jpeg'

import { Form, Formik } from "formik"
import * as Yup from 'yup'
import HeadComp from "@/app/_components/Questionnaire/Head"
import Question from "@/app/_components/Questionnaire/ActivityAndMobility/Question"
import FormikControl from "@/formik/FormikControl"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import axios from "axios"
// import money from "../../../../public/Images"

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
    telephoneUse: "",
    transportationUse: "",
    shoppingGroceries: "",
    preparingOwnMeals: "",
    doOwnHandymanWork: "",
    doOwnLaundry: "",
    medicine: "",
    money: "",
    medicationUse: ""


}

const validationSchema = Yup.object({
    telephoneUse: Yup.string().min(1, 'Required'),
    transportationUse: Yup.string().min(1, 'Required'),
    shoppingGroceries: Yup.string().min(1, 'Required'),
    preparingOwnMeals: Yup.string().min(1, 'Required'),
    doOwnHandymanWork: Yup.string().min(1, 'Required'),
    doOwnLaundry: Yup.string().min(1, 'Required'),
    medicine: Yup.string().min(1, 'Required'),
    money: Yup.string().min(1, 'Required'),
    medicationUse: Yup.string().oneOf(["Yes", "No"], 'Please choose it')
})
interface QuestionData {
    questionId: number;
    questionEnglish: string;
    questionMarathi: string;
    questionType: string;
    questionOptions: string[];
    name: string;
    // subquestions: Subquestions[];
}

interface Section {
    sectionId: number;
    sectionName: string;
    sectionDescribtion: string;
}

// const ImagePath = "../../../"
export default function page() {

    const router = useRouter();
    const searchParams = useSearchParams();
    const sectionId = searchParams.get('sectionId');

    const [sectionData, setSectionData] = useState<Section>()
    const [completedQuestions, setCompletedQuestions] = useState(0);
    const [answeredQuestions, setAnsweredQuestions] = useState([]);

    const [questionSet, setQuestionSet] = useState<QuestionData[]>([])




    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/question-master/${sectionId}`)

                console.log(response.data)
                setQuestionSet(response.data)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchQuestions();
    }, [])
    // console.log()
    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/section-master/${sectionId}`);
            // console.log(response.data);
            return response.data;
            // setSectionData(response.data)
        } catch (error) {
            console.error(error);
        }
    };
    // console.log("question ", questionSet)
    useEffect(() => {
        // fetchData();
        fetchData().then((data) => setSectionData(data))
    }, []);
    // console.log(sectionData)
    const sectionName = sectionData?.sectionName || 'Unknown';

    // 


    const sendAnswerToServer = async (questionId: number, answer: string) => {
        try {
            // Assuming you have an API endpoint for storing answers
            await axios.post("http://localhost:3001/patient-question-tracker", {
                questionId: questionId,
                sectionId: sectionId,
                answer: answer,
            });

            console.log(`Answer for question ${questionId} successfully stored!`);
        } catch (error) {
            console.error(`Error storing answer for question ${questionId}:`, error);
        }
    };

    const submitForm = async (values) => {
        for (let i = 1; i < questionSet.length; i++) {
            const questionId = questionSet[i].questionId;
            const answer = values[questionSet[i].name];  // Assuming 'name' property holds the field name

            await sendAnswerToServer(questionId, answer);
        }

        try {
            await axios.post("http://localhost:3001/patient-section-master", {
                patientId: 1,
                sectionId: sectionId,
                completedStatus: Math.round((completedQuestions / questionSet.length) * 100),
            });

            console.log(`Patient's section tracker for section ${sectionId} updated!`);
        } catch (error) {
            console.error(`Error updating patient's section tracker:`, error);
        }

    };
    const ImagePath = "../../../../public/Images"
    const progress = Math.round((completedQuestions / questionSet.length) * 10);
    console.log("compe : ",completedQuestions);
    return (
        <>
            <div className="mx-5 flex flex-col gap-6">
                <div className="mt-5">
                    <HeadComp name={sectionName} count={sectionId} progress={progress} />
                </div>
                <div className="mx-5 text-sm font-medium"><p>Activities of Daily Living</p></div>
            </div>



            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {

                    submitForm(values);
                    console.log(values);
                    router.push('/Questionnaire')

                    
                }}
            >
                {(formik) => {

                    const updateProgress = (questionIndex: number, value: string) => {
                        const questionKey = `${questionIndex}_${subquestionIndex}`;

                        if (!answeredQuestions.includes(questionKey)) {
                            setCompletedQuestions((prevCount) => prevCount + 1);
                            setAnsweredQuestions((prevAnswers) => [...prevAnswers, questionKey]);
                        }

                        // Update progress based on the selected value
                        // You may need to adjust this logic based on your requirements
                        if (value === 'Yes') {
                            // Update progress accordingly
                        // } else if (value === 'Sometimes') {
                            // Update progress accordingly
                        } else if (value === 'No') {
                            // Update progress accordingly
                        }
                    };
                    return (
                        <Form>
                            <div className="flex flex-col gap-8 mt-6">

                                {questionSet.map((question, index) => {
                                    return (


                                        <div className="flex flex-col gap-">
                                            {question.questionType === 'button' ? (
                                                // Content for button type
                                                <div className="flex flex-col gap-4">
                                                    <Question english={question.questionEnglish} marathi={question.questionMarathi} />
                                                    <div className="px-5">
                                                        <div className="flex gap-4">
                                                            <button type="button" className={`button ${formik.values[question.name] === 'Yes' ? 'button-active' : ''}`} onClick={() =>
                                                                {formik.setFieldValue(question.name, 'Yes');
                                                                updateProgress(index, 'Yes');}}>Yes</button>
                                                            <button type="button" className={`button ${formik.values[question.name] === 'No' ? 'button-active' : ''}`} onClick={() =>
                                                                {formik.setFieldValue(question.name, 'No');
                                                                updateProgress(index, 'No');}
                                                                }>No</button>
                                                        </div>
                                                    </div>

                                                </div>
                                            ) : (
                                                // Content for other types
                                                <div className="">
                                                    <Image src={`/Images/${question.name}.jpeg`} width={100} height={40} className="w-full h-40" alt="Phone" />
                                                    <div className="flex flex-col gap-7">
                                                        <Question english={question.questionEnglish} marathi={question.questionMarathi} />

                                                        <div className="px-5">
                                                            <FormikControl control={question.questionType} name={question.name} options={question.questionOptions}
                                                            updateProgress={(value:string) => updateProgress(index, value)} />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )
                                })}
                                {/* <div className="flex flex-col gap-7">
                                    <div>
                                    <Image src={Phone} className="w-full h-40" alt="Phone"/>
                                    <Question english="Can you use the telephone?" marathi="तुम्ही टेलिफोन वापरू शकता का?" />
                                    </div>

                                    <div className="px-5">
                                        <FormikControl control='radio' name='telephoneUse' options={telephoneUse} />
                                    </div>
                                    
                                </div>

                                <div className="flex flex-col gap-7">
                                    <div>
                                    <Image src={Walk} className="w-full h-40" alt="Walk"/>
                                    <Question english="Can you get to places beyond walking distance?" marathi="" />
                                    </div>
                                    

                                    <div className="px-5">
                                        <FormikControl className='mx-5' control='radio' name='transportationUse' options={transportationUse} />
                                    </div>
                                    
                                </div>

                                <div className="flex flex-col gap-7">
                                    <div>
                                    <Image src={Groceries} className="w-full h-40" alt="Groceries"/>
                                    <Question english="Can you go shopping for groceries?" marathi="" />
                                    </div>
                                

                                    <div className="px-5">
                                        <FormikControl className='mx-5' control='radio' name='shoppingGroceries' options={shoppingGroceries} />
                                    </div>
                                    
                                </div>
                                <div className="flex flex-col gap-7">
                                    <div>
                                    <Image src={Meal} className="w-full h-40" alt="Meal"/>
                                    
                                    <Question english="Can you prepare your own meals?" marathi="" />
                                    </div>
                                

                                    <div className="px-5">
                                        <FormikControl className='mx-5' control='radio' name='preparingOwnMeals' options={preparingOwnMeals} />
                                    </div>
                                    
                                </div>
                                <div className="flex flex-col gap-7">
                                <div>
                                <Image src={HandymanWork} className="w-full h-40" alt="HandymanWork"/>
                                    <Question english="Can you do your own handyman work?" marathi="" />
                                </div>

                                    <div className="px-5">
                                        <FormikControl className='mx-5' control='radio' name='doOwnHandymanWork' options={doOwnHandymanWork} />
                                    </div>
                                    
                                </div>
                                <div className="flex flex-col gap-7">
                                <div>
                                <Image src={Laundry} className="w-full h-40" alt="Laundry"/>
                                    
                                    <Question english="Can you do your own laundry?" marathi="" />
                                </div>

                                    <div className="px-5">
                                        <FormikControl className='mx-5' control='radio' name='doOwnLaundry' options={doOwnLaundry} />
                                    </div>
                                     */}
                                {/* </div> */}
                                {/* <div className="flex flex-col gap-4">

                                    <Question english="Do you take medicines or use any medications?" marathi="" />

                                    <div className="px-5">
                                        <div className="flex gap-4">
                                            <button type="button" className="button" onClick={() =>
                                                formik.setFieldValue('medication', 'Yes')}>Yes</button>
                                            <button type="button" className="button" onClick={() =>
                                                formik.setFieldValue('medication', 'No')}>No</button>
                                        </div>
                                    </div> */}

                                {/* </div> */}
                                {/* <div className="flex flex-col gap-7">
                                <div>
                                <Image src={Medicine} className="w-full h-40" alt="Medicine"/>
                                    
                                    <Question english="If you had to take medicine, could you do it?" marathi="" />
                                </div>

                                    <div className="px-5">
                                        <FormikControl className='mx-5' control='radio' name='medicine' options={medicine} />
                                    </div>
                                    
                                </div>
                                <div className="flex flex-col gap-7">
                                <div>
                                <Image src={Money} className="w-full h-40" alt="Money"/>
                                    <Question english="Can you manage your own money?" marathi="" />
                                </div>

                                    <div className="px-5">
                                        <FormikControl className='mx-5' control='radio' name='money' options={money} />
                                    </div>
                                    
                                </div> */}


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
                                    <button className={`button_footer ${(!formik.isValid || !formik.dirty) ? 'disabled' : ''}`} type='submit' disabled={!formik.isValid || !formik.dirty}
                                    >
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