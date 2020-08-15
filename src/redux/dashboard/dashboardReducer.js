import {GET_DASHBOARD_REQUEST, GET_DASHBOARD_SUCCESS, GET_DASHBOARD_FAILED, API_FAILED } from "../types";

const initialState = {
    loading: false,
    data: {},
    error: ''
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_DASHBOARD_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_DASHBOARD_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case GET_DASHBOARD_FAILED:
        case API_FAILED:
            return {
                ...state,
                loading: false,
                data: {},
                error: action.payload
            }
        default:
            return state;
    }
}