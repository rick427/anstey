import {GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILED, API_FAILED, CREATE_PRODUCTS_REQUEST, CREATE_PRODUCTS_SUCCESS, CREATE_PRODUCTS_FAILED, DELETE_PRODUCTS_REQUEST, DELETE_PRODUCTS_FAILED, DELETE_PRODUCTS_SUCCESS, GET_PRODUCTS_BY_ID_REQUEST, GET_PRODUCTS_BY_ID_SUCCESS, GET_PRODUCTS_BY_ID_FAILED } from "../types";

const initialState = {
    loading: false,
    data: [],
    product: {},
    error: ''
}

export default (state = initialState, action) => {
    switch(action.type){
        case CREATE_PRODUCTS_REQUEST:
        case DELETE_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case GET_PRODUCTS_REQUEST:
        case GET_PRODUCTS_BY_ID_REQUEST:
            return {
                ...state,
                loading: true,
                data: [],
                product: {},
                error: ''
            }
        case GET_PRODUCTS_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                product: action.payload,
                error: ''
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case CREATE_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: [...state.data, action.payload],
                error: ''
            }
        case DELETE_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: state.data.filter(item => item.id !== action.payload.id),
                error: ''
            }
        case GET_PRODUCTS_FAILED:
        case CREATE_PRODUCTS_FAILED:
        case DELETE_PRODUCTS_FAILED:
        case GET_PRODUCTS_BY_ID_FAILED:
        case API_FAILED:
            return {
                ...state,
                loading: false,
                data: [],
                product: {},
                error: action.payload
            }
        default:
            return state;
    }
}