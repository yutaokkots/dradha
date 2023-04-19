import sendRequest from "./ext-send-requests";

const BASE_URL = 'https://zenquotes.io/api/'


export function getQuote(){
    return sendRequest(`${BASE_URL}/random`)
}