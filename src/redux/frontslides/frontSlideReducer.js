import {GET_FRONT_SLIDES_REQUEST, GET_FRONT_SLIDES_SUCCESS, GET_FRONT_SLIDES_FAILED, API_FAILED } from "../types";

const initialState = {
    loading: false,
    data: [],
    error: ''
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_FRONT_SLIDES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_FRONT_SLIDES_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case GET_FRONT_SLIDES_FAILED:
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