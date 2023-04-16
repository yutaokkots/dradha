import sendRequests from './send-requests';
const BASE_URL = '/api/users/profile';


// export function signUp(userData) {
//     return sendRequests(BASE_URL, 'POST', userData);
// }


//   export function login(userData){
//     return sendRequests(`${BASE_URL}/login`, 'POST', userData)
//   }

export function save(sessionInfo){
    return sendRequests(`${BASE_URL}/session`, 'POST', sessionInfo)
}

export function retrieve(sessionInfo){
    return sendRequests(`${BASE_URL}/session/get`)
}


// api/users/profile/session
// 