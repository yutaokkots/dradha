import intentSendRequest from './intents-send-requests';
import sendRequest from './send-requests';

const BASE_URL = '/api/intents';

export function getAll() {

    return sendRequest(`${BASE_URL}/all`);
}

export function createOne(intentData) {
    return sendRequest(`${BASE_URL}/new`,"POST",intentData);
}

export function deleteOne(intentId) {
    return sendRequest(`${BASE_URL}/${intentId}`, "DELETE")
}

export function completeOne(intentId) {
    return sendRequest(`${BASE_URL}/${intentId}`, "PUT")
}