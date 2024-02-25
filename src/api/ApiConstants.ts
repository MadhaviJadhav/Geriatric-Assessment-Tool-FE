import { string } from "yup";

export const ApiConstants = {
    DOCTOR : {
        CREATE : '/doctor/create',
        FIND_ALL : '/doctor',
        DELETE :(doctorId:string)=>{
            return '/doctor'+ doctorId;
        },
    },
    LOGIN: '/auth/login',

    PATIENT :{
        SUBMIT : '/patient',
        FIND_ALL: '/patient'
    }
}