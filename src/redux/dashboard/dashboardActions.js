import axios from 'axios';

import {GET_DASHBOARD_REQUEST, GET_DASHBOARD_SUCCESS, GET_DASHBOARD_FAILED, API_FAILED } from "../types";
import toast from '../../utils/toasts';
import setAuthToken from '../../utils/setAuthToken';
import AuthService from '../../services/authentication_service';
import UrlService from '../../services/url_service';

export const getDashboardRequest = () => {
    return {
        type: GET_DASHBOARD_REQUEST,
    }
}

export const getDashboard = (data) => {
    return {
        type: GET_DASHBOARD_SUCCESS,
        payload: data
    }
}

export const getDashboardError = (error) => {
    return {
        type: GET_DASHBOARD_FAILED,
        payload: error
    }
}

export const apiError = (error) => {
    return {
        type: API_FAILED,
        payload: error
    }
}

export const getDashboardDetails = () => async dispatch => {
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
        dispatch(getDashboardRequest());
        const res = await axios.get(UrlService.GET_DASHBOARD_DETAILS, config);

        if(res.data.status === false){
            dispatch(getDashboardError(res.data.message));
            return toast('error', res.data.message);
        }

        dispatch(getDashboard(res.data));
    } catch (error) {
        dispatch(apiError(error));
    }
}
