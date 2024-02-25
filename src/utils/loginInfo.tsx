import { jwtDecode } from "jwt-decode";

interface DoctorInfo{
    doctorId:number,
    doctorName:string,
    exp:number
}
export default function getLoginInfo(token:string|null){
    // const token = localStorage.getItem("token");

    if(token!==null)
    {
        const doctorInfo : DoctorInfo = jwtDecode(token);
        return doctorInfo;
    }
    else{
        return null;

    }
}