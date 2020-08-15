import {GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILED, API_FAILED } from "../types";

const initialState = {
    loading: false,
    data: [],
    error: ''
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case GET_PRODUCTS_FAILED:
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