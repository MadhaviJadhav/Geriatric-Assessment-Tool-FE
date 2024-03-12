"use client"
import Question from "@/app/_components/Questionnaire/Question";
import FormikControl from "@/formik/FormikControl";
import axios from "axios";
import { ErrorMessage, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from 'yup'

interface Question {
    questionEnglish: string;
    questionMarathi: string;
    questionType: string;
    questionOptions: string[];
    name: string;
}

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

const validationSchema = Yup.object({
    states: Yup.string().required('Please select a state'),
    livingPlace: Yup.string().required('Required'),
    livingSituation: Yup.string().required('Required'),
    oras: Yup.string().required('Required'),
    maritalStatus: Yup.string().required('Required'),
    currentEducation: Yup.string().required('Required'),
    familyMembers: Yup.number().required('Required'),
    occupation: Yup.string().required('Required'),
    livingPlaceOthers: Yup.string(),
    livingSituationOthers: Yup.string(),
})
export default function page() {

    const [question, setQuestion] = useState<Question[]>([])

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get("http://localhost:3001/question-master/1")

                console.log(response.data)
                setQuestion(response.data)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchQuestions();
    }, [])
    return (
        <>

            <div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log(values)
                    }}>
                    {(formik) => {
                        // console.log(formik.errors)
                        // console.log(formik)
                        return (
                            <Form>
                                <div className="flex flex-col gap-8">
                                {
                                    question.map((question, index) => {
                                        return (
                                            <div key={index} className="flex flex-col gap-4">
                                                <Question english={question.questionEnglish} marathi={question.questionMarathi} />

                                                <FormikControl name={question.name}
                                                    control={question.questionType}
                                                    options={question.questionOptions}
                                                    id={question.name}
                                                    placeholder="Write...."
                                                    className={`${
                                                        question.questionType === 'select' ? 'box text-gray-3 w-full absolute text-sm bg-gray-6 px-4 apperance-none' : 
                                                        question.questionType === 'radio' ? 'radioButton' :
                                                        question.questionType === 'input' ? ' box shadow-md px-5' :
                                                        ''
                                                      }`}
                                                />

                                                {/* <ErrorMessage name={question.name} /> */}
                                            </div>
                                        )
                                    })
                                }
                                </div>

                                <button type="submit">Submit</button>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </>
    )
}
