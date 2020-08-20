import axios from 'axios';

import {GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILED, API_FAILED, CREATE_PRODUCTS_REQUEST, CREATE_PRODUCTS_SUCCESS, CREATE_PRODUCTS_FAILED, DELETE_PRODUCTS_REQUEST, DELETE_PRODUCTS_SUCCESS, DELETE_PRODUCTS_FAILED, GET_PRODUCTS_BY_ID_REQUEST, GET_PRODUCTS_BY_ID_SUCCESS, GET_PRODUCTS_BY_ID_FAILED } from "../types";
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

export const createProductsRequest = () => {
    return {
        type: CREATE_PRODUCTS_REQUEST,
    }
}

export const createProducts = (data) => {
    return {
        type: CREATE_PRODUCTS_SUCCESS,
        payload: data
    }
}

export const createProductsError = (error) => {
    return {
        type: CREATE_PRODUCTS_FAILED,
        payload: error
    }
}

export const deleteProductsRequest = () => {
    return {
        type: DELETE_PRODUCTS_REQUEST,
    }
}

export const deleteProductSuccess = (data) => {
    return {
        type: DELETE_PRODUCTS_SUCCESS,
        payload: data
    }
}

export const deleteProductsError = (error) => {
    return {
        type: DELETE_PRODUCTS_FAILED,
        payload: error
    }
}

export const getProductByIdRequest = () => {
    return {
        type: GET_PRODUCTS_BY_ID_REQUEST,
    }
}

export const getProductByIdSuccess = (data) => {
    return {
        type: GET_PRODUCTS_BY_ID_SUCCESS,
        payload: data
    }
}

export const getProductByIdError = (error) => {
    return {
        type: GET_PRODUCTS_BY_ID_FAILED,
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

export const getProductsById = (id) => async dispatch => {
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
        dispatch(getProductByIdRequest());
        const res = await axios.get(`${UrlService.GET_PRODUCTS_BY_ID}/${id}`, config);
        dispatch(getProductByIdSuccess(res.data.item));

    } catch (error) {
        dispatch(getProductByIdError(error.response.data));
        toast('error', error.response.data.message);
    }
}

export const createProduct = (formData) => async dispatch => {
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
        dispatch(createProductsRequest());
        const res = await axios.post(UrlService.CREATE_PRODUCTS, formData, config);

        if(res.data.status === false){
            dispatch(createProductsError(res.data.message));
            return toast('error', res.data.message);
        }

        dispatch(createProducts(res.data.item));
    } catch (error) {
        dispatch(apiError(error));
    }
}

export const deleteProduct = (id) => async dispatch => {
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
        dispatch(deleteProductsRequest());
        const res = await axios.delete(`${UrlService.DELETE_PRODUCTS}/${id}`, config);

        if(res.data.status === false){
            dispatch(deleteProductsError(res.data.message));
            return toast('error', res.data.message);
        }

        dispatch(deleteProductSuccess(res.data.item));
    } catch (error) {
        dispatch(apiError(error));
    }
}
