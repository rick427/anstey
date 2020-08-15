import axios from 'axios';

import {GET_TOP_SELLING_ORDERS_REQUEST, GET_TOP_SELLING_ORDERS_SUCCESS, GET_TOP_SELLING_ORDERS_FAILED, API_FAILED } from "../types";
import toast from '../../utils/toasts';
import setAuthToken from '../../utils/setAuthToken';
import AuthService from '../../services/authentication_service';
import UrlService from '../../services/url_service';

export const getTopOrdersRequest = () => {
    return {
        type: GET_TOP_SELLING_ORDERS_REQUEST,
    }
}

export const getTopOrders = (data) => {
    return {
        type: GET_TOP_SELLING_ORDERS_SUCCESS,
        payload: data
    }
}

export const getTopOrdersError = (error) => {
    return {
        type: GET_TOP_SELLING_ORDERS_FAILED,
        payload: error
    }
}

export const apiError = (error) => {
    return {
        type: API_FAILED,
        payload: error
    }
}

export const getAllTopOrders = () => async dispatch => {
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
        dispatch(getTopOrdersRequest());
        const res = await axios.get(UrlService.GET_TOP_SELLING_PRODUCTS, config);

        if(res.data.status === false){
            dispatch(getTopOrdersError(res.data.message));
            return toast('error', res.data.message);
        }

        dispatch(getTopOrders(res.data.items));
    } catch (error) {
        dispatch(apiError(error));
    }
}
