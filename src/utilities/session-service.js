//import * as timerAPI from './session-api';

export async function createSession(sessionInfo) {
    // const token = await timerAPI.save(sessionInfo);
    console.log(token)
    localStorage.setItem('session', token);
    return getSession();
}

export function getToken() {
    const token = localStorage.getItem('token');
    if (!token) return null;
    const payload = JSON.parse(atob(token.split('.')[1]));
    // if (payload.exp < Date.now() / 1000) {
    //         localStorage.removeItem('token');
    //         return null;
    // }
    return token;
}

export function getSession() {
    const token = getToken();
    return token ?
        JSON.parse(atob(token.split('.')[1])).user
        :
        null;
}

export function clearSession() {
    localStorage.removeItem('token');
}

export async function useSession(credentials) {
    //const token = await timerAPI.login(credentials);
    localStorage.setItem('token', token);
    return getSession();
}
