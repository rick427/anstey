import axios from 'axios';

import {ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, ADD_TO_CART_FAILED, CLIENT_ERROR, GET_CART_REQUEST, GET_CART_FAILED, GET_CART_SUCCESS, DECREMENT_QUANTITY, INCREMENT_QUANTITY} from "../types";
import toast from '../../utils/toasts';
import UrlService from '../../services/url_service';

export const addToCartRequest = () => {
    return {
        type: ADD_TO_CART_REQUEST,
    }
}

export const addToCartSuccess = (data) => {
    return {
        type: ADD_TO_CART_SUCCESS,
        payload: data
    }
}

export const addToCartError = (error) => {
    return {
        type: ADD_TO_CART_FAILED,
        payload: error
    }
}

export const getCartRequest = () => {
    return {
        type: GET_CART_REQUEST,
    }
}

export const getCartSuccess = (data) => {
    return {
        type: GET_CART_SUCCESS,
        payload: data
    }
}

export const getCartError = (error) => {
    return {
        type: GET_CART_FAILED,
        payload: error
    }
}

export const decrementCart = (id) => {
    return {
        type: DECREMENT_QUANTITY,
        payload: id
    }
}

export const incrementCart = (id) => {
    return {
        type: INCREMENT_QUANTITY,
        payload: id
    }
}

export const apiError = (error) => {
    return {
        type: CLIENT_ERROR,
        payload: error
    }
}

export const addToCart = (cartData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        dispatch(addToCartRequest());
        const res = await axios.post(UrlService.ADD_TO_CART, cartData, config);
        dispatch(addToCartSuccess(res.data));
    } 
    catch (error) {
        dispatch(addToCartError(error.response.data));
        toast('error', error.response.data);
    }
}


export const getCart = (data) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        dispatch(getCartRequest());
        const res = await axios.post(UrlService.GET_CART, data, config);

        if(res.data.status === false){
            dispatch(getCartError(res.data.message));
            return toast('error', res.data.message);
        }

        dispatch(getCartSuccess(res.data));
    } catch (error) {
        dispatch(apiError(error));
    }
}
