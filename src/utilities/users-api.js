import sendRequests from './send-requests';
const BASE_URL = '/api/users';


export function signUp(userData) {
    return sendRequests(BASE_URL, 'POST', userData);
}


  export function login(userData){
    return sendRequests(`${BASE_URL}/login`, 'POST', userData)
  }