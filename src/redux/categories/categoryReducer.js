import {GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILED, CLIENT_ERROR, CREATE_CATEGORIES_REQUEST, CREATE_CATEGORIES_SUCCESS, CREATE_CATEGORIES_FAILED, DELETE_CATEGORY_FAILED, DELETE_CATEGORY_SUCCESS, DELETE_CATEGORY_REQUEST, GET_CATEGORY_BY_ID_REQUEST, GET_CATEGORY_BY_ID_SUCCESS, EDIT_CATEGORY_REQUEST, EDIT_CATEGORY_FAILED, EDIT_CATEGORY_SUCCESS } from "../types";

const initialState = {
    loading: false,
    data: [],
    categoryData: {},
    error: ''
}

export default (state = initialState, action) => {
    switch(action.type){
        case CREATE_CATEGORIES_REQUEST:
        case EDIT_CATEGORY_REQUEST:
        case DELETE_CATEGORY_REQUEST:
        case GET_CATEGORIES_REQUEST:
        case GET_CATEGORY_BY_ID_REQUEST:
            return {
                ...state,
                loading: true,
                data: [],
                categoryData: {}
            }
        case GET_CATEGORY_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                categoryData: action.payload
            }
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case CREATE_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                data: [...state.data, action.payload],
                error: '',
            }
        case EDIT_CATEGORY_SUCCESS:
            const edited = state.data.map(item => {
                if(item.id === action.payload.id){
                    return item = action.payload;
                }
                return item;
            });
            return {
                ...state,
                loading: false,
                data: edited
            }
        case DELETE_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                data: state.data.filter(item => item.id !== action.payload.id)
            }
        case CREATE_CATEGORIES_FAILED:
        case EDIT_CATEGORY_FAILED:
        case DELETE_CATEGORY_FAILED:
        case GET_CATEGORIES_FAILED:
        case CLIENT_ERROR:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload,
            }
        default:
            return state;
    }
}