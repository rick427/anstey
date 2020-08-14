import {
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    LOGIN_FAIL, 
    LOGOUT_SUCCESS, 
    LOGOUT_REQUEST
} from '../types';

//toast import here.

export const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    }
}

export const loginSuccess = (userData) => {
    return {
        type: LOGIN_SUCCESS,
        payload: userData
    }
}

export const loginFailure = error => {
    return {
        type: LOGIN_FAIL,
        payload: error
    }
}

export const logoutRequest = () => {
    return {
        type: LOGOUT_REQUEST
    }
}

export const logoutSuccess = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}