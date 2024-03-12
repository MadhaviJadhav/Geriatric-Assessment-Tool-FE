"use client"
import moment from 'moment';
// import Head1 from '../Head1';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Head from '@/app/_components/Dashboard/Head';
import axios from 'axios';

interface Patient {
    patientId: number;
    patientName: string;
    age: number,
    gender: number,
    consultingDate:string
    

}
export default function page() {
    const steps = ["Link Created", "Form Submited", "Assmt. Completed", "Report Generated"];
    const [current, setCurrent] = useState(0)
    const [complete, setComplete] = useState(false)

    const [patientData, setPatientData] = useState<Patient>();
    
    const router = useRouter()
    const searchParams = useSearchParams();
    const patientId = searchParams.get('patientId');

    const Headers = {
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
        'Content-Type': 'application/json',
    };

    const fetchDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/patient/${patientId}`, {
                headers: Headers
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching patient details:', error);
        }
    }
    useEffect(() => {
        //   fetchDetails().then((data)=>setPatientData(data));
        fetchDetails().then((data) => setPatientData(data))
        console.log(patientData)
    }, [])

    const patientName = patientData?.patientName || 'Unknown';
    const age = patientData?.age;
    const gender = patientData?.gender||"Unknown";
    const date = patientData?.consultingDate;

    return (
        <>
            <div className='flex flex-col gap-8'>
                <div className="flex gap-1 px-5 py-5">
                    <div className="w-full h-[98px] bg-gray-6 flex flex-col  gap-1 p-2">
                        <div className="flex  justify-between mt-1">
                            <p className="h-[17px] text-sm font-semibold ml-2">{patientName}</p>
                            <p className="h-[15px] text-gray-3 text-xs font-normal">{moment(date).format('ddd, HH:mm A')}</p>
                        </div>
                        <div>
                            <p className="text-gray-1 text-sm font-normal ml-2">ID: {patientId}, {age}, {gender}</p>
                        </div>
                        <div className="w-full h-[0px] border border-gray-5"></div>
                        <div className="flex justify-between">
                            <p className="text-gray-1 text-sm font-normal ml-2">Colon Cancer</p>
                        </div>
                    </div>
                </div>

                <div className="mx-5 text-lg uppercase">
                    <Head name="" links="+ CREATE NEW FORM" to="/AssessmentForm"></Head>
                </div>
      
                <div className='relative'>
                    <div className='w-full bg-gray-6 p-4'>
                        <h1 className='uppercase text-gray-1'>Status</h1>
                        <div className="flex justify-between mt-5">
                            {
                                steps?.map((step, i) => (
                                    <div key={i} className={`step-item ${current === i + 1 && "active"} ${(i + 1 < current || complete) && "complete"}`}>
                                        <div className="step">{
                                            i+1<current || complete ? <svg className="text-white"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 6L9 17l-5-5"/>
                                          </svg> : null
                                        }</div>
                                        <p className="mt-4">{step}</p>
                                    </div>
                                ))}

                        </div>
                        <div className='mb-7'>
                            <p className='text-gray-3 text-[10px]'>{moment().format('h:mm, D MMM')}</p>
                        </div>
                    </div>

                    <div className='mx-5 bg-white flex flex-col gap-2  py-4 px-5  absolute top-[11rem] w-[89%] shadow-md'>
                        <div className='flex justify-between'>
                            <p>Assessment Form</p>
                            <p>#12</p>
                        </div>

                        <div className='flex gap-2 w-full'>
                            <button type='button' className='border-2 px-[8px] py-[4px] rounded-md text-gray-2' onClick={()=>{
                                router.push("/AssessmentForm")                            
                                }}>Open Form</button>
                            <div className='flex flex-col gap-1 text-gray-3'>
                                <p>Completion : 0%</p>
                                <div className='w-[60%] h-[3px] bg-gray-5'></div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-[115px] mx-5 mb-24'>
                        <p className='uppercase'>Assessement Report</p>
                        <p className='capitalize mt-6 text-gray-3 text-[12px]'>No Report</p>
                    </div>
                </div>
            </div>
        </>
    )
}