import sendRequest from "./ext-send-requests";

const BASE_URL = 'https://zenquotes.io/api'
const PROXY = 'https://cors-anywhere.herokuapp.com/'

export function getQuote(){
    return sendRequest(PROXY + `${BASE_URL}/quotes`)
}