import axios from 'axios';

import {GET_FRONT_SLIDES_REQUEST, GET_FRONT_SLIDES_SUCCESS, GET_FRONT_SLIDES_FAILED, API_FAILED } from "../types";
import toast from '../../utils/toasts';
import setAuthToken from '../../utils/setAuthToken';
import AuthService from '../../services/authentication_service';
import UrlService from '../../services/url_service';

export const getFrontSlideRequest = () => {
    return {
        type: GET_FRONT_SLIDES_REQUEST,
    }
}

export const getFrontSlides = (data) => {
    return {
        type: GET_FRONT_SLIDES_SUCCESS,
        payload: data
    }
}

export const getFrontSlideError = (error) => {
    return {
        type: GET_FRONT_SLIDES_FAILED,
        payload: error
    }
}

export const apiError = (error) => {
    return {
        type: API_FAILED,
        payload: error
    }
}

export const getAllFrontSlides = () => async dispatch => {
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
        dispatch(getFrontSlideRequest());
        const res = await axios.get(UrlService.GET_FRONT_SLIDES, config);

        if(res.data.status === false){
            dispatch(getFrontSlideError(res.data.message));
            return toast('error', res.data.message);
        }

        dispatch(getFrontSlides(res.data.list));
    } catch (error) {
        dispatch(apiError(error));
    }
}
