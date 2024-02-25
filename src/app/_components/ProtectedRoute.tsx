// Import necessary dependencies
'use client'
import getLoginInfo from "@/utils/loginInfo";
import exp from "constants";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Define the ProtectedRoute component
export default function ProtectedRoute(props: any) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the code is running on the client side
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem("token");
      console.log("token ", token);
  
      if (token === null) {
        router.push('/Login');
      }
  
      if (token !== null) {
        const doctor = getLoginInfo(token);
        const expTime = doctor?.exp;
        console.log("expTime : ", expTime);
  
        if (doctor && expTime !== undefined) {
          const expTimeMilliseconds = expTime * 1000; // Convert seconds to milliseconds
          console.log("Checking ", expTimeMilliseconds > Date.now());
  
          if (expTimeMilliseconds > Date.now()) {
            setIsAuthenticated(true);
          } else {
            localStorage.removeItem("token");
            setIsAuthenticated(false);
            router.push('/Login');
          }
        } else {
          localStorage.removeItem("token");
          router.push('/Login');
        }
      } else {
        // Redirect the user to the login page or handle authentication logic
        router.push('/Login');
      }
    }
  }, [router]);
  

  if (!isAuthenticated) {
    return null; 
  }
  return props.children;
}
