// THIRD-PARTY
import axios, { AxiosError } from 'axios';
import { useNotify } from '../hooks/useNoti';

const BASE_URL = 'http://127.0.0.1:1337/api/';
const axiosServices = axios.create({
    baseURL: BASE_URL,
});
// interceptor for http
axiosServices.interceptors.response.use(
    (response: any) => response,
    (error: AxiosError) => {
        useNotify({ title: `${error}`, status: 'error' });
    }
);

export default axiosServices;
