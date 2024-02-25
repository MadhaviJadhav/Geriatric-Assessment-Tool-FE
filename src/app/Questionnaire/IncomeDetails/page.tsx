'use client'
import { useEffect, useState } from "react"
import HeadComp from "@/app/_components/Questionnaire/Head"
import Question from "@/app/_components/Questionnaire/IncomeDetails/Question"

import { Form, Formik, Field } from "formik"
import * as Yup from 'yup'
import FormikControl from "@/formik/FormikControl"
import '../../../../styles/global.css'
import { useRouter } from "next/navigation"

const peopleWithPatient = [
  { key: "Patient lives alone", value: "Patient lives alone" },
  { key: "1", value: "1" },
  { key: "2-3", value: "2-3" },
  { key: "More than 3", value: "More than 3" }
]

const financingTreatment = [
  { key: "savings", value: "savings" },
  { key: "Personal Loan", value: "Personal Loan" },
  { key: "Fundraiser", value: "Fundraiser" },
  { key: "Insurance", value: "Insurance" }
]

const initialValues = {
  income: 0,
  familyIncome: 0,
  peopleWithPatient: ""
}

const validationSchema = Yup.object({
  income: Yup.number(),
  familyIncome: Yup.number(),
  option1: Yup.boolean().oneOf([true], 'Please check the box'),
  peopleWithPatient: Yup.string(),
  insurance: Yup.boolean().oneOf([false, true])

})

export default function page() {
  const router = useRouter();
  const [wid, setWid] = useState(Number(window.innerWidth / 10))
  useEffect(() => {
    setWid(window.innerWidth / 10)
  })
  return (
    <>
      <div>
        <div className="mt-5">
          <HeadComp name="Income Details" count="6" progress="50%" />
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}

          onSubmit={(values) => {
             console.log(values)
             router.push('/Questionnaire/IncomeDetails')

          }}
        >
          {(formikProps) => {
            return (
              <Form>
                <div className="flex flex-col gap-6">
                  <div>
                    <Question english="Please select your monthly income" marathi="कृपया तुमचे मासिक उत्पन्न निवडा" />

                    <div className='px-5 mt-16'>
                      <div className=' relative'>
                        <p className='text-center border-2 border-gray-5 px-4 py-1 rounded absolute top-[-2.5rem]' style={{ left: `${formikProps.values.income * Number(wid) - formikProps.values.income}px` }}>{formikProps.values.income}</p>
                      </div>
                      <div className='h-8 w-full'>
                        <FormikControl
                          control='input'
                          type='range'
                          id='income'
                          name='income'
                          min={0}
                          max={10}
                          className="range-input text-center w-full"
                        />
                      </div>

                      <div className='flex justify-between text-neutral-600 text-xs font-normal  capitalize'>
                        <p>RS 00</p>
                        <p>RS 3,00,000</p>
                      </div>
                    </div>
                    <div className="px-5 mt-6">
                      <div className="box shadow-md">
                        <FormikControl
                          control="input"
                          type="text"
                          name="placeOther"
                          id="placeOther"
                          className="input_box"
                          placeholder="Personal Monthly Income"
                        />
                        <div className="relative">
                          <p className="absolute right-3 text-sm font-medium underline top-[-30px]">RS 20,000</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5">
                      <hr />
                    </div>
                  </div>
                  <div>
                    <Question english="Please select monthly income of your family" marathi="कृपया तुमच्या कुटुंबाचे मासिक उत्पन्न निवडा" />

                    <div className="flex gap-6 mb-10 px-5">
                      <div className="relative">
                        <Field type='checkbox' name='option1' className='top-1 absolute w-4 h-4' />
                      </div>
                      <label htmlFor="">Same as personal income</label>
                    </div>

                    <div className='px-5 mt-16'>
                      <div className=' relative'>
                        <p className='text-center border-2 border-gray-5 px-4 py-1 rounded absolute top-[-2.5rem]' style={{ left: `${formikProps.values.familyIncome * Number(wid) - formikProps.values.familyIncome}px` }}>{formikProps.values.familyIncome}</p>
                      </div>
                      <div className='h-8 w-full'>
                        <FormikControl
                          control='input'
                          type='range'
                          id='familyIncome'
                          name='familyIncome'
                          min={0}
                          max={10}
                          className="range-input text-center w-full"
                        />
                      </div>

                      <div className='flex justify-between text-neutral-600 text-xs font-normal  capitalize'>
                        <p>RS 00</p>
                        <p>RS 3,00,000</p>
                      </div>
                    </div>
                    <div className="px-5 mt-6">
                      <div className="box shadow-md">
                        <FormikControl
                          control="input"
                          type="text"
                          name="placeOther"
                          id="placeOther"
                          className="input_box"
                          placeholder="Monthly Family Income"
                        />
                        <div className="relative">
                          <p className="absolute right-3 text-sm font-medium underline top-[-30px]">RS 20,000</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5">
                      <hr />
                    </div>
                  </div>

                  <div className="flex flex-col gap-6">
                    <Question english="How many people are living with the patient?" marathi="रुग्णासोबत किती लोक राहतात?" />

                    <div className="px-5">
                      <FormikControl control="radio" name="peopleWithPatient" options={peopleWithPatient} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-6">
                    <Question english="Do you have Insurance?" marathi="तुमच्याकडे विमा आहे का?" />
                    <div className="px-5">
                      <div className="flex gap-4">
                        <button type="button" className="button" onClick={() =>
                          formikProps.setFieldValue('insurance', true)}>Yes</button>
                        <button type="button" className="button" onClick={() =>
                          formikProps.setFieldValue('insurance', false)}>No</button>
                        {/* <ErrorMessage component={TextError} name="insurance" /> */}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-6">
                    <Question english="How will you be covering the cost of treatment?" marathi="तुम्ही उपचाराचा खर्च कसा भागवाल?" />
                    <div className="px-5">
                      <FormikControl control="radio" name="financingTreatment" options={financingTreatment} />
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


      </div>
    </>
  )
}