import client from './client';

const endpoint = '/token/refresh';

const getAOLS = () => client.get(endpoint);

export default {
    getAOLS,
};