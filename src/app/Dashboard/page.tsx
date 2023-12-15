"use client"

import Head1 from "./Head1";
import moment from 'moment';
export default function Dashboard ()  {

  return (
    <>
      <div className="w-full h-full mt-5 flex flex-col gap-3 relative">
        <div className="w-full h-1/10">
          <div className="h-1/10 mx-5  flex flex-col gap-2">
            <Head1 name="Patients" links="See All" />

            <div className=" h-24  flex  w-full justify-between bg-gray-6 justify-between">
              <div className=" w-1/6 h-18 bg-white m-3">
                <div className="p-2 flex flex-col items-center">
                  <p className="font-semibold text-[22px]">13</p>
                  <p className="font-normal text-xs">Total</p>
                </div>
              </div>

              <div className=" w-3/4 h-18 capitalize">
                <div className="font-semibold capitalize">
                  <p>Assesment status</p>
                </div>

                <div className="flex w-full">
                  <div className=" w-1/3 flex flex-col ">
                    <p className="font-semibold text-lg">08</p>
                    <p className="font-normal text-xs">Pending</p>
                  </div>
                  <div className=" w-1/3 flex flex-col ">
                    <p className="font-semibold text-lg">02</p>
                    <p className="font-normal text-xs">Completed</p>
                  </div>
                  <div className=" w-1/3 flex flex-col ">
                    <p className="font-semibold text-lg">06</p>
                    <p className="font-normal text-xs">Under Care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-1/10  ">
          <div className="h-1/10 mx-5  flex flex-col gap-2">
            <Head1 name="New Admission" links="See All" />

            <div className="flex gap-1">
              <div className="w-[247px] h-[83px] bg-gray-6 flex flex-col  gap-1 ">
                <div className="flex  justify-between mt-1">
                  <p className="w-[122px] h-[17px] text-sm font-semibold ml-2">Name</p>
                  <p className=" w-[89px] h-[15px] text-gray-3 text-xs font-normal">{moment().format('ddd, D:mm A')}</p>
                </div>
                <div>
                  <p className="text-gray-1 text-sm font-normal ml-2">ID:12233,age,female</p>
                </div>
                <div className="w-[247px] h-[0px] border border-gray-5"></div>
                <div className="flex justify-between">
                  <p className="text-gray-1 text-sm font-normal ml-2">Colon Cancer</p>
                  <button className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-5 text-lg uppercase">
          <Head1 name="" links="+ CREATE NEW FORM"></Head1>
        </div>
        <div className="w-full h-[0px] border border-gray-4"></div>

        <div className="mx-5 h-1/10 flex flex-col gap-2">
          <div className="">
            <Head1 name="Notifications" links="See All"></Head1>
          </div>

          <div className="flex gap-1">
            <div className="w-[247px] h-[83px] bg-gray-6 flex flex-col  gap-1">
              <div className="flex  justify-between mt-1">
                <div className="w-[122px] h-5 px-2 py-1 bg-white rounded-xl border border-white flex justify-center items-center ml-2 gap-1 whitespace-nowrap">
                  <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                  </svg>
                  </div>
                  <div className="text-zinc-500 text-[10px] font-medium font-['Inter'] uppercase">Form Submitted</div>
                </div>
                <p className=" w-[89px] h-[15px] text-gray-3 text-xs font-normal">{moment().format('ddd, D:mm A')}</p>
              </div>
              <div className="ml-2">
                <p className="w-[122px] text-zinc-800 text-sm font-semibold font-['Inter']">Anuja S</p>
                <p className="text-gray-1 text-sm font-normal">ID:12233,age,female</p>
              </div>


            </div>


          </div>
        </div>

        <div className="h-1/10 mx-5 gap-2 mb-9">
          <Head1 name="FORMS" links="See All"></Head1>

          <div className="flex gap-1">

            <div className="w-[247px] h-[83px] bg-gray-6 flex flex-col  gap-1">
            </div>

            <div className="w-[247px] h-[83px] bg-gray-6 flex flex-col  gap-1">
            </div>


          </div>

        </div>
      </div>
    </>
  )
}
