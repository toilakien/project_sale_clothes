import { createSlice } from '@reduxjs/toolkit';
import { dispatch } from '.';
import { useNotify } from '../hooks/useNoti';
import { getProducts, postOrder } from '../services';
import { BaseResponse } from '../types';
import { IProduct } from '../types/product';

type IPropState = {
    products: BaseResponse<IProduct>[];
    cart: any[];
};

const initialState: IPropState = {
    products: [],
    cart: [],
};

const shopSlice = createSlice({
    name: 'shop',
    initialState: initialState,
    reducers: {
        setProduct(state, action) {
            state.products = action.payload;
        },
        addToCart(state, action) {
            if (!isDuplicateOrder(state.cart, action.payload)) {
                state.cart = [...state.cart, action.payload];
            } else {
                useNotify({ status: 'error', title: 'Mặt hàng này đã có trong giỏ hàng !' });
            }
        },
        deleteOrderForCart(state, action) {
            state.cart = state.cart.filter((e) => e.id !== action.payload);
        },
        resetCart(state, action) {
            state.cart = action.payload;
        },
    },
});

export const { setProduct, addToCart, deleteOrderForCart, resetCart } = shopSlice.actions;

export default shopSlice.reducer;

export const getProductList = async () => {
    const response = await getProducts();
    if (response && response.data) {
        dispatch(setProduct(response.data));
    }
};

export async function postOrderCall({ params, callback }: any) {
    const response = await postOrder(params);
    if (callback && response) {
        callback(response);
    }
}

export function isDuplicateOrder(arr: any[], element: any) {
    const newArr = arr.map((e) => Number(e.id));
    return newArr.includes(Number(element.id));
}
