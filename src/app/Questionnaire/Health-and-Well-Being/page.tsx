'use client'
import React, { useEffect, useState } from 'react';
import Head1 from "@/app/_components/Questionnaire/Head";
import Question from "@/app/_components/Questionnaire/Question";
import FormikControl from "@/formik/FormikControl";
import { Form, Formik } from "formik";
import * as Yup from 'yup';


import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';

const initialValues = {
  pain: 0,
  shortnessOfBreath: 0,
  wellbeing: 0,
  lackOfAppetite: 0,
  drowsiness: 0,
  anxiety: 0,
  depression: 0,
  tiredness: 0,
};

const validationSchema = Yup.object({
  pain: Yup.number().required('Required'),
  shortnessOfBreath: Yup.number().required('Required'),
  wellbeing: Yup.number().required('Required'),
  lackOfAppetite: Yup.number().required('Required'),
  drowsiness: Yup.number().required('Required'),
  anxiety: Yup.number().required('Required'),
  depression: Yup.number().required('Required'),
  tiredness: Yup.number().required('Required'),
});

interface Subquestions {
  name: string,
  subquestionid: number;
  questionType: string;
  min: number;
  max: number;
  minLabel?: string;
  maxLabel?: string;
  meaning?: string;
}
interface QuestionData {
  questionId: number;
  questionEnglish: string;
  questionMarathi: string;
  questionType: string;
  questionOptions: string[];
  name: string;
  subquestions: Subquestions[];
}

interface Section {
  sectionId: number;
  sectionName: string;
  sectionDescribtion: string;
}

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
  console.log("question ", questionSet)
  useEffect(() => {
    // fetchData();
    fetchData().then((data) => setSectionData(data))
  }, []);
  // console.log(sectionData)
  const sectionName = sectionData?.sectionName || 'Unknown';

  const updateProgress = (questionIndex: number, subquestionIndex: number) => {
    // Check if the question and subquestion are not already in the answeredQuestions array
    const questionKey = `${questionIndex}_${subquestionIndex}`;
    if (!answeredQuestions.includes(questionKey)) {
      setCompletedQuestions((prevCount) => prevCount + 1);
      setAnsweredQuestions((prevAnswers) => [...prevAnswers, questionKey]);
    }
  };


  const sendAnswerToServer = async (questionId: number, subquestionId:number, answer: string) => {
    try {
      // Assuming you have an API endpoint for storing answers
      await axios.post("http://localhost:3001/patient-question-tracker", {
        questionId: questionId,
        sectionId: sectionId,
        // subquestion: {
          subquestionId: subquestionId,
          answer: answer,
        // },
      });

      console.log(`Answer for question ${questionId} successfully stored!`);
    } catch (error) {
      console.error(`Error storing answer for question ${questionId}:`, error);
    }
  };

  const submitForm = async (values) => {
    for (let i = 0; i < questionSet.length; i++) {
      const questionId = questionSet[i].questionId;
  
      for (let j = 0; j < questionSet[i].subquestions.length; j++) {
        const subquestionId = questionSet[i].subquestions[j].subquestionid;
        const answer = values[questionSet[i].subquestions[j].name];
  
        await sendAnswerToServer(questionId, subquestionId, answer);
        console.log("answer : ", answer);
      }
    }

    try {
      await axios.post("http://localhost:3001/patient-section-master", {
        patientId: 1,
        sectionId: sectionId,
        completedStatus: Math.round((completedQuestions / questionSet.length) * 5),
      });

      console.log(`Patient's section tracker for section ${sectionId} updated!`);
    } catch (error) {
      console.error(`Error updating patient's section tracker:`, error);
    }

  };

  const [wid, setWid] = useState(Number(window.innerWidth / 10))
  useEffect(() => {
    setWid(window.innerWidth / 10)
  })
  const progress = Math.round((completedQuestions / questionSet.length)*10);
  return (

    <>
      <div>
        <div className="mt-5">
          <Head1 name={sectionName} count={sectionId} progress={progress} />
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            // Handle form submission here
            submitForm(values)
            // console.log(values);
            router.push(`/Questionnaire/Health-and-Well-Being/Health-and-Well-Being2?sectionId=${sectionId}`)
          }}
        >
          {(formik) => {
            // const { values, handleChange } = formik;

            return (
              <Form>
                <div className='flex flex-col gap-14 mt-8'>

                  {questionSet.slice(0,1).map((question, index) => {
                    return (
                      <div>
                        <div
                        >
                          <Question english={question.questionEnglish} marathi={question.questionMarathi} />

                          <div className='flex flex-col gap-16 mt-12'>

                            {question.subquestions.map((subquestion, subIndex) => {
                              return (

                                <div className='flex flex-col gap-6'>
                                  <div className='px-5 flex flex-col gap-2'>
                                    <div className=' relative'>
                                      <p
                                        key={subquestion.name}
                                        className='w-[34px] h-6 text-center border-2 border-gray-5 flex justify-center item-center rounded absolute top-[-2.5rem]'
                                        style={{ left: `${(formik.values)[subquestion.name] * Number(wid) - formik.values[subquestion.name]}px` }}
                                      >
                                        {formik.values[subquestion.name]}
                                      </p>
                                    </div>
                                    <div className='h-8 w-full'>
                                      <FormikControl
                                        control='input'
                                        type={subquestion.questionType}
                                        id={subquestion.name}
                                        name={subquestion.name}
                                        min={subquestion.min}
                                        max={subquestion.max}
                                        className="range-input text-center w-full"
                                        onChange={(e) => {
                                          formik.handleChange(e);
                                                                formik.setFieldValue(question.name, e.target.value);
                                          updateProgress(index, subIndex);
                                        }}
                                      />
                                    </div>

                                    <div className='flex justify-between text-neutral-600 text-xs font-normal  capitalize'>
                                      <p>{subquestion.minLabel}</p>
                                      <div className='flex flex-col'>
                                        <p>{subquestion.maxLabel}</p>
                                        <p className='text-[10px]'>{subquestion.meaning}</p>
                                      </div>

                                    </div>

                                  </div>
                                  <hr />
                                </div>

                              )
                            })}
                          </div>

                        </div>
                      </div>
                    )
                  })}

                  {/* <Question
                    english="Please select the number that best describes how you’re feeling right now."
                    marathi="कृपया तुम्हाला आत्ता कसे वाटत आहे याचे सर्वोत्तम वर्णन करणारा नंबर निवडा."
                  />
                  <div className='px-5'>
                    <div className=' relative'>
                      <p className='text-center border-2 border-gray-5 px-4 py-1 rounded absolute top-[-2.5rem]' style={{ left: `${formik.values.pain * Number(wid) - formik.values.pain}px` }}>{formik.values.pain}</p>
                    </div>
                    <div className='h-8 w-full'>
                      <FormikControl
                        control='input'
                        type='range'
                        id='pain'
                        name='pain'
                        min={0}
                        max={10}
                        className="range-input text-center w-full"
                      />
                    </div>

                    <div className='flex justify-between text-neutral-600 text-xs font-normal  capitalize'>
                      <p>No Pain</p>
                      <div className='flex flex-col'>
                        <p>Worst Possible</p>
                        <div className='relative'>
                          <p className='absolute right-0'>Pain</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />

                  <div className='px-5'>
                    <div className=' relative'>
                      <p className='text-center border-2 border-gray-5 px-5 py-2 rounded absolute top-[-2.5rem]' style={{ left: `${formik.values.tiredness * Number(wid) - formik.values.tiredness}px` }}>{formik.values.tiredness}</p>
                    </div>
                    <div className='h-8 w-full'>
                      <FormikControl
                        control='input'
                        type='range'
                        id='tiredness'
                        name='tiredness'
                        min={1}
                        max={10}
                        className="range-input text-center w-full"
                      />
                    </div>

                    <div className='flex justify-between text-neutral-600 text-xs font-normal  capitalize'>
                      <div className='flex flex-col'>
                        <p>No Tiredness</p>
                        <p className='text-[10px]'>(Tiredness = Lack of energy)</p>
                      </div>
                      <div className='flex flex-col'>
                        <p>Worst Possible</p>
                        <div className='relative'>
                          <p className='absolute right-0'>Tiredness</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />

                  <div className='px-5'>
                    <div className=' relative'>
                      <p className='text-center border-2 border-gray-5 px-5 py-2 rounded absolute top-[-2.5rem]' style={{ left: `${formik.values.depression * Number(wid) - formik.values.depression}px` }}>{formik.values.depression}</p>
                    </div>
                    <div className='h-8 w-full'>
                      <FormikControl
                        control='input'
                        type='range'
                        id='depression'
                        name='depression'
                        min={0}
                        max={10}
                        className="range-input text-center w-full"
                      />
                    </div>

                    <div className='flex justify-between text-neutral-600 text-xs font-normal  capitalize'>
                      <div className='flex flex-col'>
                        <p>No Depression</p>
                        <p>(Depression = Feeling low)</p>
                      </div>
                      <div className='flex flex-col'>
                        <p>Worst Possible</p>
                        <div className='relative'>
                          <p className='absolute right-0'>Depression</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />

                  <div className='px-5'>
                    <div className=' relative'>
                      <p className='text-center border-2 border-gray-5 px-5 py-2 rounded absolute top-[-2.5rem]' style={{ left: `${formik.values.anxiety * Number(wid) - formik.values.anxiety}px` }}>{formik.values.anxiety}</p>
                    </div>
                    <div className='h-8 w-full'>
                      <FormikControl
                        control='input'
                        type='range'
                        id='anxiety'
                        name='anxiety'
                        min={0}
                        max={10}
                        className="range-input text-center w-full"
                      />
                    </div>

                    <div className='flex justify-between text-neutral-600 text-xs font-normal  capitalize'>
                      <div className='flex flex-col'>
                        <p>No Anxiety</p>
                        <p className='text-[10px]'>(Anxiety = Feeling nervous)</p>
                      </div>
                      <div className='flex flex-col'>
                        <p>Worst Possible</p>
                        <div className='relative'>
                          <p className='absolute right-0'>Anxiety</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />

                  <div className='px-5'>
                    <div className=' relative'>
                      <p className='text-center border-2 border-gray-5 px-5 py-2 rounded absolute top-[-2.5rem]' style={{ left: `${formik.values.drowsiness * Number(wid) - formik.values.drowsiness}px` }}>{formik.values.drowsiness}</p>
                    </div>
                    <div className='h-8 w-full'>
                      <FormikControl
                        control='input'
                        type='range'
                        id='drowsiness'
                        name='drowsiness'
                        min={0}
                        max={10}
                        className="range-input text-center w-full"
                      />
                    </div>

                    <div className='flex justify-between text-neutral-600 text-xs font-normal  capitalize'>
                      <div className='flex flex-col'>
                        <p>No Drowsiness</p>
                        <p className='text-[10px]'>(Drowsiness = Feeling sleepy)</p>
                      </div>
                      <div className='flex flex-col'>
                        <p>Worst Possible</p>
                        <div className='relative'>
                          <p className='absolute right-0'>Drowsiness</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />

                  <div className='px-5'>
                    <div className=' relative'>
                      <p className='text-center border-2 border-gray-5 px-5 py-2 rounded absolute top-[-2.5rem]' style={{ left: `${formik.values.lackOfAppetite * Number(wid) - formik.values.lackOfAppetite}px` }}>{formik.values.lackOfAppetite}</p>
                    </div>
                    <div className='h-8 w-full'>
                      <FormikControl
                        control='input'
                        type='range'
                        id='lackOfAppetite'
                        name='lackOfAppetite'
                        min={0}
                        max={10}
                        className="range-input text-center w-full"
                      />
                    </div>

                    <div className='flex justify-between text-neutral-600 text-xs font-normal  capitalize'>
                      <p>No lack of appetite</p>
                      <div className='flex flex-col'>
                        <p>Worst Possible</p>
                        <div className='relative'>
                          <p className='absolute right-0'>lack of appetite</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />

                  <div className='px-5'>
                    <div className=' relative'>
                      <p className='text-center border-2 border-gray-5 px-5 py-2 rounded absolute top-[-2.5rem]' style={{ left: `${formik.values.wellbeing * Number(wid) - formik.values.wellbeing}px` }}>{formik.values.wellbeing}</p>
                    </div>
                    <div className='h-8 w-full'>
                      <FormikControl
                        control='input'
                        type='range'
                        id='wellbeing'
                        name='wellbeing'
                        min={0}
                        max={10}
                        className="range-input text-center w-full"
                      />
                    </div>

                    <div className='flex justify-between text-neutral-600 text-xs font-normal  capitalize'>
                      <p>Best wellbeing</p>
                      <div className='flex flex-col'>
                        <p>Worst Possible</p>
                        <div className='relative'>
                          <p className='absolute right-0'>wellbeing</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />

                  <div className='px-5'>
                    <div className=' relative'>
                      <p className='text-center border-2 border-gray-5 px-5 py-2 rounded absolute top-[-2.5rem]' style={{ left: `${formik.values.shortnessOfBreath * Number(wid) - formik.values.shortnessOfBreath}px` }}>{formik.values.shortnessOfBreath}</p>
                    </div>
                    <div className='h-8 w-full'>
                      <FormikControl
                        control='input'
                        type='range'
                        id='shortnessOfBreath'
                        name='shortnessOfBreath'
                        min={0}
                        max={10}
                        className="range-input text-center w-full"
                      />
                    </div>

                    <div className='flex justify-between text-neutral-600 text-xs font-normal  capitalize'>
                      <p>No shortness of breath</p>
                      <div className='flex flex-col'>
                        <p>Worst Possible</p>
                        <div className='relative'>
                          <p className='absolute right-0'>shortness of breath</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr /> */}
                  <div className='h-[80px] py-4  flex gap-4 w-full px-7 py-4 text-sm font-medium  shadow-inner mt-4'>
                    <div className='w-1/3  h-[48px] flex justify-center items-center text-center bg-gray-6 text-gray-1'>
                      <button type='submit' className='button_footer'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M20.25 12a.75.75 0 01-.75.75H6.31l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 111.06 1.06l-5.47 5.47H19.5a.75.75 0 01.75.75z" clipRule="evenodd" />
                        </svg>

                        <p className='uppercase'>Back</p>
                      </button>
                    </div>
                    <div className='w-8/12 h-[48px] flex justify-center items-center text-center bg-gray-1 text-gray-6'>
                      <button className={`button_footer ${(!formik.isValid || !formik.dirty) ? 'disabled' : ''}`} type='submit'
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
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
}
