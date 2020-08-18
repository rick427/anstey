import axios from 'axios';

import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, LOGOUT_REQUEST, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILED} from '../types';
import toast from '../../utils/toasts';
import UrlService from '../../services/url_service';
import AuthService from '../../services/authentication_service';

//@: ACTION - login request
export const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    }
}

//@: ACTION - login success
export const loginSuccess = (userData) => {
    return {
        type: LOGIN_SUCCESS,
        payload: userData
    }
}

//@: ACTION - login failure
export const loginFailure = error => {
    return {
        type: LOGIN_FAIL,
        payload: error
    }
}

export const registerRequest = () => {
    return {
        type: REGISTER_REQUEST,
    }
}
export const registerSuccess = (data) => {
    return {
        type: REGISTER_SUCCESS,
        payload: data
    }
}
export const registerFailed = (error) => {
    return {
        type: REGISTER_FAILED,
        payload: error
    }
}

//@: ACTION - logout request
export const logoutRequest = () => {
    return {
        type: LOGOUT_REQUEST
    }
}

//@: ACTION - logout success
export const logoutSuccess = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}

//@: ACTION CREATOR - login user
export const loginUser = (formData, routerProps) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        dispatch(loginRequest());
        const res = await axios.post(UrlService.LOGIN, formData, config);

        if(res.data.status === false){
            dispatch(loginFailure(res.data.message));
            return toast('error', res.data.message);
        }

        dispatch(loginSuccess(res.data.user));
        AuthService.setSession(res.data.user);

        if(res.data.user.role.name === 'SUPER_ADMIN'){
            toast('success', `Welcome, ${res.data.user.role.name}.`);
        }
        else{
            toast('success', `Welcome, ${res.data.user.name}`);
        }
        routerProps.history.push('/');  
    } catch (error) {
        dispatch(loginFailure(error.message));
    }
}

//@: ACTION CREATOR - register user
export const registerUser = (formData, routerProps) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        dispatch(registerRequest());
        const res = await axios.post(UrlService.REGISTER, formData, config);

        if(res.data.status === false){
            dispatch(registerFailed(res.data.message));
            return toast('error', res.data.message);
        }

        dispatch(registerSuccess(res.data.user));
        toast('success', `Registration successful. Please Sign in.`);
        routerProps.history.push('/login');  

    } catch (error) {
        dispatch(registerFailed(error.message));
    }
}

//@: ACTION CREATOR - logout user
export const logoutUser = () => dispatch => {
    dispatch(logoutRequest());
    AuthService.removeSession();
    dispatch(logoutSuccess());
}