import * as Yup from 'yup';

export const signUpSchema = Yup.object({
   name: Yup.string().min(2).max(25).matches(/^[a-zA-Z ]+$/, 'Name must only Contain character').required("Please enter your name"),
   email: Yup.string().email().required("Please enter vaild mail"),
   password: Yup.string().min(6).required("Please enter valid password"),
   gender: Yup.string().oneOf(['Female', 'Male']).required('Select the Gender'),
   //    name:Yup.string().min(2).max(25).required("Please enter your name");
   
});


export const assementForm = Yup.object({
   date_seen: Yup.date().required('Please enter the vaild date'),
   mrn_number: Yup.string().required('MRN Number is Required'),
   patient_name: Yup.string().min(2).max(25).matches(/^[a-zA-Z ]+$/, 'Name must only contain character').required("Please enter your name"),
   age: Yup.number().integer().positive().required('Age is Required'),
   gender: Yup.string().oneOf(['Female', 'Male']).required('Select the Gender'),
   GT: Yup.string().oneOf(['Yes', 'No']).required('Select the GT'),

})

export const assementForm2 = Yup.object({
   geriatric_patient_number:Yup.string().required('Required'),
   prospective_Trial_ID:Yup.string().required('Required'),
   geriatic_icf: Yup.string().oneOf(['Yes', 'No']).required('Required'),
   carg_icf: Yup.string().oneOf(['Yes', 'No']).required('Required'),
   reason: Yup.string().required('Required'),
   setting_of_assessment: Yup.string().oneOf(['OPD', 'In-Patient']).required('Required')
})

export const assementForm3 = Yup.object({
 
   phNumbers:Yup.array().required('Required')
})

export const assementForm4 = Yup.object({
 
   devices:Yup.array().required('Required')
})