import intentSendRequest from './intents-send-requests';
import sendRequest from './send-requests';

const BASE_URL = '/api/intents';

export function getAll() {
    console.log('at intents-api.js')
    return sendRequest(`${BASE_URL}/all`);
}

export function createOne(intentData) {
    return sendRequest(`${BASE_URL}/new`,"POST",intentData);
}

