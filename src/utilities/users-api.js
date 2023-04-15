import sendRequests from './send-requests';

const BASE_URL = '/api/users';
const headerInfo = { 'Content-Type': 'application/json' }

export function signUp(userData) {
    return sendRequests(BASE_URL, 'POST', userData);
  }

// export function checkToken() {
//     return sendRequests(`${BASE_URL}/checktoken`);
//   }

  export function login(userData){
    return sendRequests(`${BASE_URL}/login`, 'POST', userData)
  }