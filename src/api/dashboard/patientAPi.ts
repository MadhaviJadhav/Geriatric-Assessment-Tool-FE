import axios from "axios";

export const patientApi1 = async () => {
    try {
        const response = await axios.get('http://localhost:3001/patient',{
            headers:{
                Authorization:"Bearer "+ localStorage.getItem("token")
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching patient data:", error);
        // Return a default value or handle the error as needed.
        return [];
    }
}

// export const patientApi = patientApi1()
//   .then(patientData => {
//     console.log(patientData);
//     return patientData; 
//     // Now patientData contains the actual data
//   })
//   .catch(error => {
//     console.error("Error fetching patient data:", error);
//   });



// export const patientApi =  [
//     {
//         "patientId": 1,
//         "patientName": "zcsdzs",
//         "age": 12,
//         "gender": "Female",
//         "consultingDate": "2024-01-29T18:30:00.000Z",
//         "MRN": "zszcsd",
//         "isCancerResearch": "No",
//         "patientNo": "asd",
//         "trialId": "asdas",
//         "GADoneBy": [
//             "ABC"
//         ],
//         "isGeriatricICF": "Yes",
//         "isCARGICF": "No",
//         "reason": "asds",
//         "assessmentType": [
//             "OPD"
//         ]
//     },
//     {
//         "patientId": 2,
//         "patientName": "asdfghjkl",
//         "age": 65,
//         "gender": "Female",
//         "consultingDate": "2024-01-30T18:30:00.000Z",
//         "MRN": "qwerty",
//         "isCancerResearch": "No",
//         "patientNo": "wdasdas",
//         "trialId": "asdas",
//         "GADoneBy": [
//             "PQR"
//         ],
//         "isGeriatricICF": "Yes",
//         "isCARGICF": "No",
//         "reason": "MAMDdgh",
//         "assessmentType": [
//             "OPD"
//         ]
//     },
//     {
//         "patientId": 3,
//         "patientName": "ghn",
//         "age": 54,
//         "gender": "Female",
//         "consultingDate": "2024-01-30T18:30:00.000Z",
//         "MRN": "zszcsd",
//         "isCancerResearch": "No",
//         "patientNo": "wdasdas",
//         "trialId": "asdas",
//         "GADoneBy": [
//             "PQR"
//         ],
//         "isGeriatricICF": "Yes",
//         "isCARGICF": "No",
//         "reason": "asasd",
//         "assessmentType": [
//             "OPD"
//         ]
//     },
//     {
//         "patientId": 1,
//         "patientName": "zcsdzs",
//         "age": 12,
//         "gender": "Female",
//         "consultingDate": "2024-01-29T18:30:00.000Z",
//         "MRN": "zszcsd",
//         "isCancerResearch": "No",
//         "patientNo": "asd",
//         "trialId": "asdas",
//         "GADoneBy": [
//             "ABC"
//         ],
//         "isGeriatricICF": "Yes",
//         "isCARGICF": "No",
//         "reason": "asds",
//         "assessmentType": [
//             "OPD"
//         ]
//     },
//     {
//         "patientId": 2,
//         "patientName": "asdfghjkl",
//         "age": 65,
//         "gender": "Female",
//         "consultingDate": "2024-01-30T18:30:00.000Z",
//         "MRN": "qwerty",
//         "isCancerResearch": "No",
//         "patientNo": "wdasdas",
//         "trialId": "asdas",
//         "GADoneBy": [
//             "PQR"
//         ],
//         "isGeriatricICF": "Yes",
//         "isCARGICF": "No",
//         "reason": "MAMDdgh",
//         "assessmentType": [
//             "OPD"
//         ]
//     },
//     {
//         "patientId": 3,
//         "patientName": "ghn",
//         "age": 54,
//         "gender": "Female",
//         "consultingDate": "2024-01-30T18:30:00.000Z",
//         "MRN": "zszcsd",
//         "isCancerResearch": "No",
//         "patientNo": "wdasdas",
//         "trialId": "asdas",
//         "GADoneBy": [
//             "PQR"
//         ],
//         "isGeriatricICF": "Yes",
//         "isCARGICF": "No",
//         "reason": "asasd",
//         "assessmentType": [
//             "OPD"
//         ]
//     },{
//         "patientId": 1,
//         "patientName": "zcsdzs",
//         "age": 12,
//         "gender": "Female",
//         "consultingDate": "2024-01-29T18:30:00.000Z",
//         "MRN": "zszcsd",
//         "isCancerResearch": "No",
//         "patientNo": "asd",
//         "trialId": "asdas",
//         "GADoneBy": [
//             "ABC"
//         ],
//         "isGeriatricICF": "Yes",
//         "isCARGICF": "No",
//         "reason": "asds",
//         "assessmentType": [
//             "OPD"
//         ]
//     },
//     {
//         "patientId": 2,
//         "patientName": "asdfghjkl",
//         "age": 65,
//         "gender": "Female",
//         "consultingDate": "2024-01-30T18:30:00.000Z",
//         "MRN": "qwerty",
//         "isCancerResearch": "No",
//         "patientNo": "wdasdas",
//         "trialId": "asdas",
//         "GADoneBy": [
//             "PQR"
//         ],
//         "isGeriatricICF": "Yes",
//         "isCARGICF": "No",
//         "reason": "MAMDdgh",
//         "assessmentType": [
//             "OPD"
//         ]
//     },
//     {
//         "patientId": 3,
//         "patientName": "ghn",
//         "age": 54,
//         "gender": "Female",
//         "consultingDate": "2024-01-30T18:30:00.000Z",
//         "MRN": "zszcsd",
//         "isCancerResearch": "No",
//         "patientNo": "wdasdas",
//         "trialId": "asdas",
//         "GADoneBy": [
//             "PQR"
//         ],
//         "isGeriatricICF": "Yes",
//         "isCARGICF": "No",
//         "reason": "asasd",
//         "assessmentType": [
//             "OPD"
//         ]
//     }
// ]