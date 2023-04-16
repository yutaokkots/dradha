import sendRequests from './send-requests';
const BASE_URL = '/api/users/profile';


export function save(sessionInfo){
    return sendRequests(`${BASE_URL}/session`, 'POST', sessionInfo)
}

export function retrieve(sessionInfo){
    return sendRequests(`${BASE_URL}/session/get`)
}


// api/users/profile/session
// 