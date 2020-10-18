import axios from 'axios';

import {GET_COUPONS_REQUEST, GET_COUPONS_SUCCESS, GET_COUPONS_FAILED, CLIENT_ERROR, CREATE_COUPONS_REQUEST, CREATE_COUPONS_SUCCESS, CREATE_COUPONS_FAILED, DELETE_COUPON_REQUEST, DELETE_COUPON_SUCCESS, DELETE_COUPON_FAILED, GET_COUPON_BY_ID_REQUEST, GET_COUPON_BY_ID_SUCCESS, GET_COUPON_BY_ID_FAILED, EDIT_COUPON_REQUEST, EDIT_COUPON_SUCCESS, EDIT_COUPON_FAILED } from "../types";
import toast from '../../utils/toasts';
import setAuthToken from '../../utils/setAuthToken';
import AuthService from '../../services/authentication_service';
import UrlService from '../../services/url_service';

export const getCouponsRequest = () => {
    return {
        type: GET_COUPONS_REQUEST,
    }
}

export const getCoupons = (data) => {
    return {
        type: GET_COUPONS_SUCCESS,
        payload: data
    }
}

export const getCouponsError = (error) => {
    return {
        type: GET_COUPONS_FAILED,
        payload: error
    }
}

export const createCouponRequest = () => {
    return {
        type: CREATE_COUPONS_REQUEST
    }
}

export const createCouponSuccess = data => {
    return {
        type: CREATE_COUPONS_SUCCESS,
        payload: data
    }
}

export const createCouponError = error => {
    return {
        type: CREATE_COUPONS_FAILED,
        payload: error
    }
}

export const deleteCouponRequest = () => {
    return {
        type: DELETE_COUPON_REQUEST,
    }
}

export const deleteCouponSuccess = (id) => {
    return {
        type: DELETE_COUPON_SUCCESS,
        payload: id
    }
}

export const deleteCouponError = error => {
    return {
        type: DELETE_COUPON_FAILED,
        payload: error
    }
}

export const getCouponByIdRequest = () => {
    return {
        type: GET_COUPON_BY_ID_REQUEST
    }
}

export const getCouponByIdSuccess = data => {
    return {
        type: GET_COUPON_BY_ID_SUCCESS,
        payload: data
    }
}

export const getCouponByIdError = error => {
    return {
        type: GET_COUPON_BY_ID_FAILED,
        payload: error
    }
}

export const editCouponRequest = () => {
    return {
        type: EDIT_COUPON_REQUEST
    }
}

export const editCouponSuccess = data => {
    return {
        type: EDIT_COUPON_SUCCESS,
        payload: data
    }
}

export const editCouponError = error => {
    return {
        type: EDIT_COUPON_FAILED,
        payload: error
    }
}

export const apiError = (error) => {
    return {
        type: CLIENT_ERROR,
        payload: error
    }
}


//@: ACTION CREATOR -- GET ALL COUPONS
export const getAllCoupons = () => async dispatch => {
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
        dispatch(getCouponsRequest());
        const res = await axios.get(UrlService.GET_COUPONS, config);

        if(res.data.status === false){
            dispatch(getCouponsError(res.data.message));
            return toast('error', res.data.message);
        }
        console.log(res.data);
        dispatch(getCoupons(res.data.list));
    } catch (error) {
        dispatch(apiError(error));
    }
}

//@: ACTION CREATOR -- EDIT COUPONS
export const editCoupons = (data) => async dispatch => {
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
        dispatch(editCouponRequest());
        const res = await axios.put(`${UrlService.EDIT_COUPON}/${data.id}`, data,  config);

        if(res.data.status === false){
            dispatch(editCouponError(res.data.message));
            return toast('error', res.data.message);
        }

        dispatch(editCouponSuccess(res.data.list));
    } catch (error) {
        dispatch(apiError(error));
    }
}


//@: ACTION CREATOR -- GET COUPON BY ID
export const getCouponById = (id) => async dispatch => {
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
        dispatch(getCouponByIdRequest());
        const res = await axios.get(`${UrlService.GET_COUPON_BY_ID}/${id}`, config);

        if(res.data.status === false){
            dispatch(getCouponByIdError(res.data.message));
            return toast('error', res.data.message);
        }

        dispatch(getCouponByIdSuccess(res.data.item));
    } catch (error) {
        dispatch(apiError(error));
    }
}


//@: ACTION CREATOR -- CREATE COUPON
export const createCoupon = (coupon) => async dispatch => {
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
        dispatch(createCouponRequest());
        const res = await axios.post(UrlService.CREATE_COUPON, coupon, config);

        if(res.data.status === false || res.data.exception){
            dispatch(createCouponError(res.data.message));
            return toast('error', res.data.message);
        }

        dispatch(createCouponSuccess(res.data.item));
    } catch (error) {
        dispatch(apiError(error));
    }
}


//@: ACTION CREATOR -- DELETE COUPON
export const deleteCoupon = (id) => async dispatch => {
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
        dispatch(deleteCouponRequest());
        const res = await axios.delete(`${UrlService.DELETE_COUPON}/${id}`, config);

        if(res.data.status === false || res.data.exception){
            dispatch(deleteCouponError(res.data.message));
            return toast('error', res.data.message);
        }

        dispatch(deleteCouponSuccess(res.data.item));
    } catch (error) {
        dispatch(apiError(error));
    }
}
