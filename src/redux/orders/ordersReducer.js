import {GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, GET_ORDERS_FAILED, API_FAILED } from "../types";

const initialState = {
    loading: false,
    data: [],
    error: ''
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_ORDERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case GET_ORDERS_FAILED:
        case API_FAILED:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload
            }
        default:
            return state;
    }
}