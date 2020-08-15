import axios from 'axios';

import {GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, GET_ORDERS_FAILED, API_FAILED } from "../types";
import toast from '../../utils/toasts';
import setAuthToken from '../../utils/setAuthToken';
import AuthService from '../../services/authentication_service';
import UrlService from '../../services/url_service';

export const getOrdersRequest = () => {
    return {
        type: GET_ORDERS_REQUEST,
    }
}

export const getOrders = (data) => {
    return {
        type: GET_ORDERS_SUCCESS,
        payload: data
    }
}

export const getOrdersError = (error) => {
    return {
        type: GET_ORDERS_FAILED,
        payload: error
    }
}

export const apiError = (error) => {
    return {
        type: API_FAILED,
        payload: error
    }
}

export const getAllOrders = () => async dispatch => {
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
        dispatch(getOrdersRequest());
        const res = await axios.get(UrlService.GET_ORDERS, config);

        if(res.data.status === false){
            dispatch(getOrdersError(res.data.message));
            return toast('error', res.data.message);
        }

        dispatch(getOrders(res.data.list));
    } catch (error) {
        dispatch(apiError(error));
    }
}
