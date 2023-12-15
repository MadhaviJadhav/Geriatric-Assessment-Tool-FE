
export function metadata(){
    return{
        title: 'Assessment Form'
    }
  }
export default function Layout({children}) {
    
    return (
        <>
            <div className="w-full h-full">
                
            <header>

<div className="w-full h-16 bg-gray-1 flex relative items-center">
    <div className='left-5 text-white absolute font-semibold'>
        <p>Assement Form</p>
    </div>
    <div className=" text-center right-3 absolute">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
            <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
        </svg>
    </div>

</div>
<div className="bg-gray-5 w-full h-11 flex relative">
    <div className="left-[20px] top-[10px] text-sm font-medium absolute">Name, Age, Gender</div>
    <div className="right-3 top-[10px] absolute">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
        </svg>
    </div>
</div>

</header>
{children}
            </div>
        </>
    )
}