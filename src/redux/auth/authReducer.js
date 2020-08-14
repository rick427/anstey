import {
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    // LOGIN_FAIL, 
    // LOGOUT_SUCCESS, 
    // LOGOUT_REQUEST
} from '../types';

const initialState = {
    loading: false,
    isAuthenticated: false,
    userData: null,
    error: ''
};

export default (state = initialState, action) => {
    switch(action.type){
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                userData: action.payload,
                error: ''
            }
        default:
            return state;
    }
}