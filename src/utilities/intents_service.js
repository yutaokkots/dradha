import * as intentsAPI from './intents-api';

export async function getAllIntents(userData) {
    const token = await intentsAPI.getAll(userData);
    localStorage.setItem('token', token);

    return ;
}

export async function createIntent(intentData){
    
    return await intentsAPI.createOne(intentData)
}

export function getToken() {
    const token = localStorage.getItem('token');
    if (!token) return null;
    const payload = JSON.parse(atob(token.split('.')[1]));
    if (payload.exp < Date.now() / 1000) {
            localStorage.removeItem('token');
            return null;
    }
    return token;
}

export function getUser() {
    const token = getToken();
    return token ?
        JSON.parse(atob(token.split('.')[1])).user
        :
        null;
}

export function logOut() {
    localStorage.removeItem('token');
}

export async function login(credentials) {
    const token = await usersAPI.login(credentials);
    localStorage.setItem('token', token);
    return getUser();
}
