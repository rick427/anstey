import axios from 'axios';

import {GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILED, API_FAILED } from "../types";
import toast from '../../utils/toasts';
import setAuthToken from '../../utils/setAuthToken';
import AuthService from '../../services/authentication_service';
import UrlService from '../../services/url_service';

export const getCategoriesRequest = () => {
    return {
        type: GET_CATEGORIES_REQUEST,
    }
}

export const getCategories = (data) => {
    return {
        type: GET_CATEGORIES_SUCCESS,
        payload: data
    }
}

export const getCategoriesError = (error) => {
    return {
        type: GET_CATEGORIES_FAILED,
        payload: error
    }
}

export const apiError = (error) => {
    return {
        type: API_FAILED,
        payload: error
    }
}

export const getAllCategories = () => async dispatch => {
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
        dispatch(getCategoriesRequest());
        const res = await axios.get(UrlService.GET_CATEGORIES, config);

        if(res.data.status === false){
            dispatch(getCategoriesError(res.data.message));
            return toast('error', res.data.message);
        }

        dispatch(getCategories(res.data.list));
    } catch (error) {
        dispatch(apiError(error));
    }
}
