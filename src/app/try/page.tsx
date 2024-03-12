"use client"
import { useEffect, useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';  
import FormikControl from '@/formik/FormikControl';
import { useRouter } from 'next/navigation';
import Question from '../_components/Questionnaire/Question';
import ProgressBar from '../_components/Questionnaire/Progressbar';
import { progress } from 'framer-motion';
import TextError from '@/formik/TextError';

// Validation schema for form fields
const validationSchema = Yup.object({
  // Add validation rules for your form fields

  states: Yup.string().required('Please select a state'),
    livingPlace:Yup.string().required('Required'),
    livingSituation:Yup.string().required('Required'),
    oras:Yup.string().required('Required'),
    maritalStatus:Yup.string().required('Required'),
    currentEducation:Yup.string().required('Required'),
    familyMembers:Yup.number().required('Required'),
    occupation:Yup.string().required('Required'),
    livingPlaceOthers:Yup.string(),
    livingSituationOthers:Yup.string(),
});

// Initial values for form fields
const initialValues = {
  // Define initial values for your form fields
};

// Questionnaire page component
// ... (import statements)

// Questionnaire page component
interface Question{
  questionEnglish:string;
  questionMarathi:string;
  questionType:string;
  questionOptions:string[];
  name:string;
}
export default function QuestionnairePage() {
    const router = useRouter();
    const [questions, setQuestions] = useState<Question[]>([]);
    const [progress, setProgress] = useState(10);
  
    useEffect(() => {
      const fetchQuestions = async () => {
        try {
          const response = await axios.get('http://localhost:3001/question-master/1');
        //   const { questions } = response.data;
  
          console.log(response.data)
          setQuestions(response.data); // Set to an empty array if questions is undefined
        } catch (error) {
          console.error('Error fetching questions:', error);
        }
      };
  
      fetchQuestions();
    }, []);
  
    
  
    return (
      <div className="flex flex-col gap-8">
  
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values)=>{
            console.log(values);

          }}
        >
          {(formik) => (
            <Form>
              
              <div>Progress bar</div>
              <ProgressBar progress={progress}/>
              {/* Render questions only if questions is defined */}
              {
                questions.map((question,index) => (
                  <div key={index} className="flex flex-col gap-4">
                    <Question
                  english={question.questionEnglish}
                  marathi={question.questionMarathi}
                />
                
                <FormikControl
                      control={question.questionType}
                      options={question.questionOptions}
                      name={question.name} 
                      id={question.questionEnglish}
                      className={`${
                        question.questionType === 'select' ? 'box text-gray-3 w-full absolute text-sm bg-gray-6 px-4 apperance-none' : 
                        question.questionType === 'radio' ? 'mx-5' :
                        question.questionType === 'input' ? '' :
                        // Add more conditions based on other question types
                        ''
                      }`}
                      
                    />
                    
                  </div>
                ))}

                

                <button type='submit'>Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
