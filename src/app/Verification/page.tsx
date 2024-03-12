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
import getLoginInfo from '@/utils/loginInfo';
import { Formik } from 'formik';

interface Patient {
    patientId: number;
    patientName: string;
    age: number,
    gender: number,
    // consultingDate: string;
    // ... other properties
}

interface Doctor {
    doctorName: string
}

export default function Verification() {

    const [patientData, setPatientData] = useState<Patient>();
    const [doctorInfo, setDoctorInfo] = useState<Doctor | undefined>(undefined);
    const [isVerified, setIsVerified] = useState(false)
    const router = useRouter();
    const searchParams = useSearchParams();
    const patientId = searchParams.get('patientId');
    const token = searchParams.get('token');
    console.log(token)
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

    


    useEffect(() => {
        const doctorInfo: Doctor | null = getLoginInfo(token);
        setDoctorInfo(doctorInfo !== null ? doctorInfo : undefined)

    }, [])



    return (
        <ProtectedRoute>
            <>
                <div className="w-full h-full">
                    <header>
                        <div className="w-full h-16 bg-gray-1 flex relative items-center">
                            <div className='left-5 text-white absolute font-semibold'>
                                <p>Assessment Form</p>
                            </div>
                            <div className=" text-center right-3 absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                                    <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
                                </svg>
                            </div>

                        </div>

                    </header>

                    <section className='flex flex-col mx-6 mt-[60px] gap-6'>
                        <div className='verBox flex flex-col gap-4 py-6'>

                            <div className='relative'>
                            <div className='font-medium text-lg px-6 capitalize' >Please verify your details</div>
                            <svg className='right-3 absolute top-0' width="58" height="65" viewBox="0 0 58 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.7978 0.208337L6.80223 10.4301C5.30752 11.0791 4.33691 12.5753 4.33691 14.2315V23.7643C4.33691 32.2806 6.66925 40.7206 11.4669 48.1713C15.0684 53.7645 19.8452 60.9136 27.7932 65H31.381C40.2286 62.2502 46.8326 54.9191 50.8701 48.6496C55.6684 41.1989 58.0001 32.7596 58.0001 24.2426V14.2315C58.0001 12.5753 57.0301 11.0791 55.5348 10.4301L32.7577 0.538517C31.7428 0.0980506 27.8128 -0.232793 26.7978 0.208337Z" fill="#BABABA" />
                                <path opacity="0.3" d="M26.7978 0.208337L6.80223 10.4301C5.30752 11.0791 4.33691 12.5753 4.33691 14.2315V23.7643C4.33691 32.2806 6.66925 40.7206 11.4669 48.1713C15.0684 53.7645 19.8452 60.9136 27.7932 65H31.381C40.2286 62.2502 46.8326 54.9191 50.8701 48.6496C55.6684 41.1989 58.0001 32.7596 58.0001 24.2426V14.2315C58.0001 12.5753 57.0301 11.0791 55.5348 10.4301L32.7577 0.538517C31.7428 0.0980506 27.8128 -0.232793 26.7978 0.208337Z" fill="black" />
                                <path d="M25.9921 0.538941L3.21433 10.4298C1.71963 11.0789 0.749023 12.575 0.749023 14.2313V23.764C0.749023 32.2804 3.08136 40.7203 7.879 48.171C11.9166 54.4412 18.1685 60.8967 27.7931 64.9997C36.6407 62.25 43.2447 54.9189 47.2822 48.6494C52.0805 41.1987 54.4122 32.7594 54.4122 24.2424V14.2313C54.4122 12.575 53.4423 11.0789 51.9469 10.4298L29.1698 0.538272C28.1549 0.097806 27.007 0.0978107 25.9921 0.538941Z" fill="#BABABA" />
                                <path opacity="0.3" d="M32.983 43.7711C40.6711 40.732 44.4862 31.9164 41.5043 24.0809C38.5225 16.2454 29.8727 12.3572 22.1847 15.3962C14.4966 18.4353 10.6815 27.2508 13.6633 35.0863C16.6452 42.9218 25.2949 46.8101 32.983 43.7711Z" fill="black" />
                                <path d="M27.5813 30.4315C31.0046 30.4315 33.7798 27.6032 33.7798 24.1142C33.7798 20.6252 31.0046 17.7969 27.5813 17.7969C24.158 17.7969 21.3828 20.6252 21.3828 24.1142C21.3828 27.6032 24.158 30.4315 27.5813 30.4315Z" fill="white" />
                                <path d="M16.2607 39.5105C16.2607 39.5105 19.1465 32.4937 27.3533 32.4937C35.5602 32.4937 38.9029 39.5105 38.9029 39.5105C38.9029 39.5105 35.2421 45.0227 27.1434 44.8094C19.8107 44.6161 16.2607 39.5105 16.2607 39.5105Z" fill="white" />
                                <path d="M42.5124 29.592C42.5065 29.592 42.4967 29.5083 42.483 29.3455C42.47 29.1655 42.4524 28.927 42.4302 28.624C42.4198 28.4639 42.4081 28.2866 42.3957 28.0932C42.3742 27.8986 42.3324 27.688 42.2979 27.4588C42.2249 27.001 42.1551 26.4696 41.9811 25.8929C41.7145 24.721 41.1721 23.3365 40.3202 21.8702C39.461 20.4107 38.2245 18.886 36.542 17.5931C34.8654 16.3123 32.7508 15.2234 30.3109 14.7849C27.8874 14.3617 25.1528 14.4401 22.5487 15.4493C21.8857 15.6658 21.2632 16 20.6224 16.3136C20.0156 16.6876 19.3768 17.0324 18.8123 17.5008C18.2119 17.9207 17.6872 18.4468 17.1376 18.9524C16.6409 19.5131 16.1194 20.0612 15.6912 20.697C14.8125 21.9407 14.0452 23.3225 13.5818 24.8426C13.1007 26.3526 12.8413 27.957 12.8204 29.5893C12.8419 31.2223 13.1001 32.8267 13.5811 34.3382C14.0452 35.8582 14.8125 37.2407 15.6905 38.485C16.1188 39.1215 16.6403 39.6702 17.137 40.2303C17.6865 40.7365 18.2112 41.262 18.8116 41.6826C19.3761 42.1509 20.0156 42.4957 20.6224 42.8698C21.2632 43.1833 21.8857 43.5175 22.5487 43.7341C25.1535 44.7439 27.8887 44.8216 30.3123 44.3984C32.7521 43.9593 34.8668 42.8704 36.544 41.5896C38.2258 40.2967 39.463 38.772 40.3215 37.3124C41.1734 35.8462 41.7158 34.4624 41.9824 33.2905C42.1564 32.7131 42.2255 32.1823 42.2985 31.7246C42.3331 31.4954 42.3755 31.2848 42.3963 31.0901C42.4087 30.8961 42.4204 30.7194 42.4309 30.5593C42.453 30.2564 42.4706 30.0179 42.4837 29.8378C42.4967 29.6757 42.5065 29.592 42.5124 29.592C42.5182 29.592 42.5202 29.6757 42.5176 29.8385C42.513 30.0192 42.5065 30.259 42.4987 30.564C42.4934 30.7254 42.4869 30.9034 42.4804 31.0988C42.4641 31.2947 42.4276 31.5073 42.3983 31.7392C42.335 32.2016 42.2751 32.739 42.1102 33.3237C41.8611 34.5109 41.3318 35.9173 40.4844 37.4121C39.6299 38.9003 38.3894 40.4582 36.6893 41.7849C34.9952 43.099 32.8486 44.2211 30.3644 44.6808C27.8971 45.1252 25.1066 45.0562 22.4424 44.0344C21.7651 43.8145 21.127 43.4763 20.4725 43.1568C19.8513 42.7767 19.1975 42.4253 18.6193 41.9483C18.0053 41.5198 17.4668 40.9843 16.9049 40.4675C16.3958 39.8961 15.862 39.3354 15.4233 38.6857C14.5231 37.4148 13.7376 36.001 13.2611 34.4464C12.7676 32.9011 12.503 31.2589 12.4814 29.5893C12.503 27.9198 12.7683 26.2789 13.2617 24.7336C13.7382 23.1797 14.5237 21.7659 15.4239 20.4957C15.8626 19.8466 16.3965 19.2859 16.9056 18.7146C17.4681 18.1977 18.0059 17.6622 18.62 17.2337C19.1981 16.7574 19.852 16.4053 20.4725 16.0259C21.1276 15.707 21.7651 15.3682 22.4424 15.1483C25.1059 14.1265 27.8958 14.0575 30.3631 14.5019C32.8473 14.9616 34.9939 16.0837 36.688 17.3972C38.3881 18.7239 39.6292 20.2818 40.4838 21.7699C41.3312 23.2641 41.8605 24.6711 42.1102 25.8583C42.2757 26.443 42.335 26.9804 42.3983 27.4428C42.4276 27.674 42.4648 27.8866 42.4804 28.0833C42.4869 28.2786 42.4934 28.4566 42.4987 28.6181C42.5065 28.923 42.513 29.1628 42.5176 29.3435C42.5202 29.509 42.5182 29.592 42.5124 29.592Z" fill="#263238" />
                                <path d="M54.3394 21.6606C54.3511 21.66 54.3648 21.8114 54.3811 22.0991C54.3948 22.4233 54.4124 22.8425 54.4345 23.3614C54.4554 23.9101 54.486 24.5818 54.4489 25.3611C54.4378 25.7531 54.4254 26.1696 54.413 26.6101C54.4084 27.0532 54.3811 27.5196 54.3289 28.0085C54.2364 28.9865 54.1725 30.0627 53.9743 31.2014C53.8837 31.7721 53.8127 32.366 53.6966 32.9699C53.5695 33.5725 53.4391 34.1923 53.3049 34.8275C52.7091 37.3533 51.8838 40.0991 50.6785 42.8409C49.4687 45.5813 48.0405 48.0547 46.594 50.1959C45.8353 51.2416 45.1358 52.2514 44.3849 53.1204C44.0166 53.5595 43.6809 54.002 43.3211 54.3933C42.9606 54.7826 42.6138 55.1567 42.282 55.5147C41.6367 56.2455 40.9737 56.8268 40.421 57.3656C39.8715 57.9091 39.3643 58.3382 38.9432 58.6817C38.5462 59.0079 38.2262 59.2716 37.9785 59.4756C37.7555 59.6536 37.635 59.7433 37.6278 59.7334C37.6206 59.7241 37.7269 59.6171 37.9348 59.4211C38.1714 59.2045 38.4771 58.9255 38.8565 58.5794C39.2633 58.222 39.7554 57.7795 40.2906 57.2248C40.829 56.6747 41.477 56.0847 42.108 55.3466C42.4326 54.9859 42.7722 54.6086 43.1255 54.2159C43.4788 53.8226 43.8067 53.3782 44.1685 52.9377C44.9057 52.0674 45.5915 51.0569 46.3385 50.0139C47.7608 47.8773 49.1695 45.4192 50.3696 42.7C51.5657 39.9788 52.3929 37.2583 53.0017 34.7537C53.1393 34.1239 53.2736 33.5094 53.4046 32.9121C53.5252 32.3129 53.6008 31.7236 53.6973 31.1576C53.9059 30.0275 53.9834 28.9586 54.091 27.9873C54.151 27.5016 54.1855 27.0379 54.1986 26.5975C54.2207 26.159 54.2409 25.7444 54.2605 25.3544C54.3159 24.5785 54.3042 23.9088 54.3042 23.362C54.3087 22.8432 54.312 22.4247 54.3146 22.1004C54.3191 21.8128 54.3276 21.6613 54.3394 21.6606Z" fill="#263238" />
                            </svg>
                            </div>

                            <div className='bg-gray-6 py-3 px-6'>
                                <p className='font-normal text-sm'>Patient Name</p>
                                <p className='font-medium text-base'>{patientName}</p>
                            </div>

                            <div className='px-6'>
                                <p className='font-normal text-sm'>Treatement Under Doctor</p>
                                <p className='font-medium text-base'>Dr.&nbsp;{doctorInfo?.doctorName}</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-8'>
                            <p>Is the information above correct?</p>
                            <div>
                                <div className='h-[48px] flex gap-4 text-gray-1 font-medium'>
                                    <button type='button' className={`button ${isVerified === true ? 'button-active' : ''}`} name='isVerified' onClick={() => { setIsVerified(true) }}>Yes</button>
                                    <button type='button' className={`button ${isVerified === false ? 'button-active' : ''}`} name='isVerified' onClick={() => { setIsVerified(false) }}>No</button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className='h-[80px] py-4 flex gap-4 w-full px-7 py-4 text-sm font-medium shadow-inner absolute bottom-0'>
                        <div className='w-full h-[48px] flex justify-center items-center text-center bg-gray-1 text-gray-6'>
                            <button className="button_footer" type='submit' onClick={() => {
                                if(isVerified)
                                {
                                    router.push(`/Questionnaire?patientId=${patientId}`)
                                }
                                else{
                                    router.push('/Verification')
                                }
                            }}>
                                <p className='uppercase'>Next</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>


            </>
        </ProtectedRoute>
    )
}
