import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, LOGOUT_REQUEST, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILED} from '../types';

const initialState = {
    loading: false,
    userData: null,
    error: ''
};

export default (state = initialState, action) => {
    switch(action.type){
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                userData: action.payload,
                error: ''
            }
        case LOGIN_FAIL:
        case REGISTER_FAILED:
            return {
                ...state,
                loading: false,
                userData: null,
                error: action.payload
            }
        case LOGOUT_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                userData: null,
                error: ''
            }
        default:
            return state;
    }
}