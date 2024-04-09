import axiosServices from '../utils/axiosConfig';

export const getProducts = () => {
    return axiosServices.get('/products?populate=%2A').then((res) => res?.data);
};

export const getDetailProduct = (id: number) => {
    return axiosServices.get(`/products/${id}?populate=%2A`).then((res) => res?.data);
};

export const getMe = () => {
    return axiosServices.get(`users/me?populate=deep`).then((res) => res?.data);
};

export const getBlogs = () => {
    return axiosServices.get(`blogs?populate=%2A`).then((res) => res?.data);
};

export const postOrder = (params: any) => {
    return axiosServices.post(`oders`, { data: { ...params } }).then((res) => res?.data);
};

export const getOrder = () => {
    return axiosServices.get(`oders`).then((res) => res?.data);
};
export const deleteOrder = (id: number) => {
    return axiosServices.delete(`oders/${id}`).then((res) => res?.data);
};
export const getOrderHistory = () => {
    return axiosServices.get(`order-histories?populate=%2A`).then((res) => res?.data);
};
