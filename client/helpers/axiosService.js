import axios from 'axios';

const url = 'http://localhost:3001';

const baseAxios = axios.create({
    baseURL: url,
    timeout: 3000,
});

const axiosWithCredentials = axios.create({
    baseURL: url,
    timeout: 3000,
});

axiosWithCredentials.defaults.withCredentials = true;

export { baseAxios, axiosWithCredentials };
