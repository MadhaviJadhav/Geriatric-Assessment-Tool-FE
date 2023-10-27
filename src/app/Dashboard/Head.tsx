// import React from 'react'
import moment from 'moment';
const Head = () => {
  return (
    <>
      <header>
        
          <div className=" w-full h-16 bg-gray-1 relative">
            <div className="flex gap-4 text-center right-5 absolute inset-y-1/2 ">
              <svg className="w-5 h-5 text-gray-6 dark:text-white fill-current text-gray-6 self-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 20">
                <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-gray-6 self-center">
                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
            </div>
          </div>
          <div className="bg-gray-5 w-full h-11 flex relative">
            <div className="left-[20px] top-[10px]  absolute">Name</div>
            <div className="right-5 top-[10px] absolute">{moment().format('ddd, D, MMM YYYY')}</div>
          </div>
        
      </header>
    </>
  )
}

export default Head;