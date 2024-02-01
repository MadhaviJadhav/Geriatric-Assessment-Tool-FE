'use client'

// import { FormEvent, useState } from 'react';
// import '../../../styles/global.css'
// // import ClipboardJS from 'clipboard';
// export default function page() {

//     const [inputText, setInputText] = useState("")
//     const [copy, setCopy] = useState('Copy')
//     const copyText = (text: string) => {
//         navigator.clipboard.writeText(text);
//     };
//     const handleClick = (e: FormEvent) => {
//            e.preventDefault();

//            copyText(inputText);
//            setCopy('Copied');
//            console.log(inputText);

//            setTimeout(() => {
//             setInputText('');
//             setCopy('Copy');
//         }, 3000);
//         // e.preventDefault();

//     };
//     return (
//         <>
//             <div className="w-full h-full relative">
//                 <header>

//                     <div className="w-full h-16 bg-gray-1 flex relative items-center">
//                         <div className='left-5 text-white absolute font-semibold'>
//                             <p>Shareable Link</p>
//                         </div>
//                         <div className=" text-center right-3 absolute">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
//                                 <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
//                             </svg>
//                         </div>

//                     </div>
//                     <div className="bg-gray-5 w-full h-24 flex flex-col relative">
//                         <div className="w-[247px]  flex flex-col  gap-1 ml-2">

//                             <p className="w-[122px] text-sm font-semibold mt-1">Name Name</p>
//                             <p className="text-gray-1 text-sm font-normal ">ID: 9999988888, 72, Female</p>
//                         </div>
//                     </div>

//                 </header>

//                 <section className="w-full flex justify-center bg-transparent absolute top-32">

//                     <div className="flex flex-col gap-4 px-4  w-[90%] bg-white shadow-md pb-2">
//                         <div className="flex justify-between mt-3">
//                             <h1 className='font-semibold'>Assessment Form</h1>
//                             <p>#12</p>
//                         </div>

//                         <div className="flex justify-between bg-gray-6 py-2 px-1 text-center">
//                             <input type="text" className="bg-gray-6 w-3/5 pl-1"
//                                 onChange={(e) => { setInputText(e.target.value) }} />
//                             {/* <div className="flex gap-2"> */}
//                             <button className="flex gap-1" onClick={(e)=>{
//                                 console.log("Clicked"); handleClick(e)}
//                             }>{copy}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
//                                 <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
//                                 <path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
//                             </svg></button>

//                             {/* </div> */}
//                         </div>
//                         <div>
//                             <p>Registered Email ID</p>
//                             <div className="section flex justify-between">
//                                 <p>madhavi@gmail.com</p>
//                                 <a  className='link'>Send Link</a>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//             </div>

//         </>
//     )
// }

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';

const validationSchema = Yup.object({
     selectedDate:Yup.string()
    })
const MyForm = () => {
    return (
      <Formik
        initialValues={{
          selectedDate: null,
        }}
        validationSchema={validationSchema} // Define your validation schema
        onSubmit={(values) => {
          // Handle form submission
          console.log(values);
        }}
      >
        <Form>
          {/* Other form fields go here */}
  
          {/* Date Picker */}
          <label htmlFor="selectedDate">Selected Date</label>
          <Field name="selectedDate">
            {(props) => {
                const { field, form } = props;
              return <div>
                <DatePicker
                id="selectedDate"
                {...field}
                selected={field.value}
                onChange={(date) => form.setFieldValue('selectedDate', date)}
              />
              </div>
            }}
          </Field>
  
          {/* Display validation error if any */}
          <ErrorMessage name="selectedDate" component="div" />
  
          {/* Submit Button */}
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );
  };
  