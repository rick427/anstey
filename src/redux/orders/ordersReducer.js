import {GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, GET_ORDERS_FAILED, API_FAILED, GET_ORDERS_DETAILS_REQUEST, GET_ORDERS_DETAILS_FAILED, GET_ORDERS_DETAILS_SUCCESS } from "../types";

const initialState = {
    loading: false,
    data: [],
    order: {},
    error: ''
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_ORDERS_REQUEST:
        case GET_ORDERS_DETAILS_REQUEST:
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
        case GET_ORDERS_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                order: action.payload
            }
        case GET_ORDERS_FAILED:
        case GET_ORDERS_DETAILS_FAILED:
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