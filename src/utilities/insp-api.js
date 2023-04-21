import sendRequest from "./send-requests";

const BASE_URL = '/api/quotes'


export function getQuote(){
    console.log('send')
    return sendRequest(`${BASE_URL}/random`)
}