// THIRD-PARTY
import axios, { AxiosError } from 'axios';

const BASE_URL = 'http://127.0.0.1:1337/api/';
const axiosServices = axios.create({
    baseURL: BASE_URL,
});
// interceptor for http
axiosServices.interceptors.response.use(
    (response: any) => response,
    (error: AxiosError) => {
        console.log(error);
    }
);

export default axiosServices;
