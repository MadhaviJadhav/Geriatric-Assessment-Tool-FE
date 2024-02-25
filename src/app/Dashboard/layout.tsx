import moment from "moment"
import ProtectedRoute from "../_components/ProtectedRoute"

export function metadata() {
    return {
        title: 'Dashboard'
    }
}
export default function Layout({ children }:any) {
    return (
        <ProtectedRoute>
            <>
            <div className="w-full h-full relative">
                <header>
                    <div className=" w-full h-16 bg-gray-1 relative text-gray-6">
                        <div className="flex absolute left-5 items-center gap-2 inset-y-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>

                            <p className="self-center">Dashboard</p>
                        </div>
                        <div className="flex gap-4  right-5 absolute inset-y-1/2 ">
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
                    
                </header>
                {children}
                <footer>
                    <>
                        <div className="w-full h-14 bg-gray-3 bottom-0"></div>
                    </>
                </footer>
            </div>
        </>
        </ProtectedRoute>
    )
}