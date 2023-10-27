import Head from "./Head";
import Head1 from "./Head1";
const Dashboard = () => {
  return (
    <>
      <title>Dashboard</title>
      <div className="w-full h-screen flex flex-col gap-5">
        <Head />
        <div className="w-full h-32  ">
          <div className="h-32 mx-5  flex flex-col gap-2">
            <Head1 name="Patients" links="See All"/>

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
        <div className="w-full h-32  ">
          <div className="h-32 mx-5  flex flex-col gap-2">
          <Head1 name="New Admission" links="See All"/>
            </div>
          </div>
        </div>



      

    </>
  )
}
export default Dashboard;