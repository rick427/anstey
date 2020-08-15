import axios from 'axios';

import {GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILED, API_FAILED } from "../types";
import toast from '../../utils/toasts';
import setAuthToken from '../../utils/setAuthToken';
import AuthService from '../../services/authentication_service';
import UrlService from '../../services/url_service';

export const getProductsRequest = () => {
    return {
        type: GET_PRODUCTS_REQUEST,
    }
}

export const getProducts = (data) => {
    return {
        type: GET_PRODUCTS_SUCCESS,
        payload: data
    }
}

export const getProductsError = (error) => {
    return {
        type: GET_PRODUCTS_FAILED,
        payload: error
    }
}

export const apiError = (error) => {
    return {
        type: API_FAILED,
        payload: error
    }
}

export const getAllProducts = () => async dispatch => {
    //@: Global header for auth token 
    if(AuthService.getToken()){
        setAuthToken(AuthService.getToken());
    }

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        dispatch(getProductsRequest());
        const res = await axios.get(UrlService.GET_PRODUCTS, config);

        if(res.data.status === false){
            dispatch(getProductsError(res.data.message));
            return toast('error', res.data.message);
        }

        dispatch(getProducts(res.data.list));
    } catch (error) {
        dispatch(apiError(error));
    }
}
