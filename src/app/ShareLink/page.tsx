'use client'

import { FormEvent, useEffect, useState } from 'react';
import Image from 'next/image';
import '../../../styles/global.css'
// import ClipboardJS from 'clipboard';
import Phone from '../../../public/Images/Phone.jpeg'
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import QRCode from 'qrcode.react';
import ProtectedRoute from '../_components/ProtectedRoute';

interface Patient {
    patientId: number;
    patientName: string;
    age:number,
    gender:number,
    // consultingDate: string;
    // ... other properties
  }

export default function page() {

    const [patientData, setPatientData] = useState<Patient>();
    const searchParams = useSearchParams();
    const patientId = searchParams.get('patientId');

    const Headers = {
        'Authorization': 'Bearer ' + localStorage.getItem("token"), 
        'Content-Type': 'application/json', // Adjust the content type as needed
    };
    console.log(localStorage.getItem("token") )
    const token = localStorage.getItem("token")
    const formLink = `http://localhost:3000/Verification?patientId=${patientId}&token=${token}`;
    console.log(formLink)
    const fetchDetails = async() =>{
        try {
            const response = await axios.get(`http://localhost:3001/patient/${patientId}`, {
              headers: Headers
            });
            return response.data;
          } catch (error) {
            console.error('Error fetching patient details:', error);
          }
    }
    useEffect(()=>{
        //   fetchDetails().then((data)=>setPatientData(data));
        fetchDetails().then((data)=>setPatientData(data))
          console.log(patientData)
    },[])
      
    const patientName = patientData?.patientName || 'Unknown';
    const patientGender = patientData?.gender || 'Unknown';
    const patientAge = patientData?.age || 'Unknown';
    const [inputText, setInputText] = useState("")
    const [copy, setCopy] = useState('Copy')
    const router = useRouter();
    const copyText = (text: string) => {
        navigator.clipboard.writeText(text);
    };

    useEffect(() => {
        setInputText(formLink);
    }, [formLink]);

    const handleClick = (e: FormEvent) => {
           e.preventDefault();

           copyText(inputText);
           setCopy('Copied');
           console.log(inputText);

           setTimeout(() => {
            setInputText(formLink);
            setCopy('Copy');
        }, 3000);
        // e.preventDefault();

    };
    return (
        <ProtectedRoute>
            <>
            <div className="w-full h-full">
                <header>
                    <div className="w-full h-16 bg-gray-1 flex relative items-center">
                        <div className='left-5 text-white absolute font-semibold'>
                            <p>Shareable Link</p>
                        </div>
                        <div className=" text-center right-3 absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                                <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
                            </svg>
                        </div>

                    </div>
                    <div className="bg-gray-6 w-full h-[148px] flex flex-col relative">
                        <div className="w-[247px]  flex flex-col  gap-1 ml-5 my-4">

                            <p className="w-[122px] text-sm font-semibold mt-1">{patientName}</p>
                            <p className="text-gray-1 text-[14px] font-normal ">ID:&nbsp;{patientId}, {patientAge}, {patientGender}</p>
                        </div>
                    </div>

                </header>

                <section className="w-full flex justify-center bg-transparent absolute top-32 mt-4">

                    <div className="flex flex-col gap-4 px-4  w-[90%] bg-white pb-6 verBox">
                        <div className="flex justify-between mt-3">
                            <h1 className='font-semibold'>Share via QR Code</h1>
                            <p>#12</p>
                        </div>
                         
                        
                        <div className='flex justify-center items-center pt-10 pb-6'>
                          <QRCode value={formLink} size={140}/>
                        </div>  
                        <div className="flex justify-between bg-gray-6 py-2 px-1 text-center rounded-md">
                            <input type="text" className="bg-gray-6 w-4/5 p-1 pl-1 text-black"
                                value={inputText} readOnly />
                            <button className="flex gap-1 mr-1 p-1" onClick={(e)=>{
                                console.log("Clicked"); handleClick(e)}
                            }>{copy}<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.125 22.5H8.625C7.72989 22.5 6.87145 22.1444 6.23851 21.5115C5.60558 20.8785 5.25 20.0201 5.25 19.125V8.625C5.25 7.72989 5.60558 6.87145 6.23851 6.23851C6.87145 5.60558 7.72989 5.25 8.625 5.25H19.125C20.0201 5.25 20.8785 5.60558 21.5115 6.23851C22.1444 6.87145 22.5 7.72989 22.5 8.625V19.125C22.5 20.0201 22.1444 20.8785 21.5115 21.5115C20.8785 22.1444 20.0201 22.5 19.125 22.5Z" fill="#333333"/>
                            <path d="M7.5 3.75H18.5569C18.3235 3.09246 17.8924 2.52322 17.3228 2.12038C16.7531 1.71755 16.0727 1.50084 15.375 1.5H4.875C3.97989 1.5 3.12145 1.85558 2.48851 2.48851C1.85558 3.12145 1.5 3.97989 1.5 4.875V15.375C1.50084 16.0727 1.71755 16.7531 2.12038 17.3228C2.52322 17.8924 3.09246 18.3235 3.75 18.5569V7.5C3.75 6.50544 4.14509 5.55161 4.84835 4.84835C5.55161 4.14509 6.50544 3.75 7.5 3.75Z" fill="#333333"/>
                            </svg>
                            </button>
                        </div> 
                    </div>  
                </section>
                <div className='h-[80px] py-4 flex gap-4 w-full px-7 py-4 text-sm font-medium shadow-inner absolute bottom-0'>
                <div className='w-full h-[48px] flex justify-center items-center text-center bg-gray-1 text-gray-6'>
                    <button className="button_footer" type='submit' onClick={()=>{
                      router.push('/Dashboard')
                    }}>
                        <p className='uppercase'>Back to Dashboard</p>
                    </button>
                </div>
            </div>
            </div>

        </>
        </ProtectedRoute>
    )
}

// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup'
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css';

// const validationSchema = Yup.object({
//      selectedDate:Yup.string()
//     })
// const MyForm = () => {
//     return (
//       <Formik
//         initialValues={{
//           selectedDate: null,
//         }}
//         validationSchema={validationSchema} // Define your validation schema
//         onSubmit={(values) => {
//           // Handle form submission
//           console.log(values);
//         }}
//       >
//         <Form>
//           {/* Other form fields go here */}
  
//           {/* Date Picker */}
//           <label htmlFor="selectedDate">Selected Date</label>
//           <Field name="selectedDate">
//             {(props) => {
//                 const { field, form } = props;
//               return <div>
//                 <DatePicker
//                 id="selectedDate"
//                 {...field}
//                 selected={field.value}
//                 onChange={(date) => form.setFieldValue('selectedDate', date)}
//               />
//               </div>
//             }}
//           </Field>
  
//           {/* Display validation error if any */}
//           <ErrorMessage name="selectedDate" component="div" />
  
//           {/* Submit Button */}
//           <button type="submit">Submit</button>
//         </Form>
//       </Formik>
//     );
//   };
  