import * as usersAPI from './users-api'

export async function signUp(userData){
  const token = await usersAPI.signUp(userData)
  localStorage.setItem('token', token)
  return getUser()
}

export function getToken(){
  const token = localStorage.getItem('token')
  if(!token) return null
  const payload = JSON.parse(atob(token.split('.')[1]));
  if(payload.exp < Date.now() / 1000){
    localStorage.removeItem('token')
    return null
  }
  return token
}

export function getUser(){
  const token = getToken()
  return token ? JSON.parse(atob(token.split('.')[1])).user : null
}

export function logOut(){
  localStorage.removeItem('token')
}

export function checkToken(){
    return usersAPI.checkToken()
    .then(dateStr => new Date(dateStr));
}


export async function removeToken(){
  const token = localStorage.getItem('token')
  token ? localStorage.removeItem('token') : null;
}

// login function
// 1) login
// a) Check for token on client side
// b) Check for token not expired
// if token exists, compare username and password with stored token
// 2) check for token stored in db. 
// a) Make api request. make request to 'api/users/login'
// 3) Routes -> controllers -> 
// 4) find by email address
// 5) check for password matching via hash

export async function login(userData){
  removeToken()
  const token = await usersAPI.login(userData);
  localStorage.setItem('token', token)
  return getUser()
}

