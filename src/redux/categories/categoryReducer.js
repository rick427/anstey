import {GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILED, API_FAILED } from "../types";

const initialState = {
    loading: false,
    data: [],
    error: ''
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_CATEGORIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case GET_CATEGORIES_FAILED:
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