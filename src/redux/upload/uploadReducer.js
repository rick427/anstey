import {API_FAILED, IMAGE_UPLOAD_REQUEST, IMAGE_UPLOAD_SUCCESS, IMAGE_UPLOAD_FAILED, CLEAR_UPLOADS } from "../types";

const initialState = {
    image: [],
    loading: false,
    uploaded: false,
    error: ''
}

export default (state = initialState, action) => {
    switch(action.type){
        case IMAGE_UPLOAD_REQUEST:
            return {
                ...state,
                loading: true,
                uploaded: false
            }
        case IMAGE_UPLOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                image: [...state.image, action.payload.fileName],
                uploaded: true
            }
        case CLEAR_UPLOADS:
            return {
                ...state,
                loading: false,
                uploaded: false,
                image: [],
                error: ''
            }
        case IMAGE_UPLOAD_FAILED:
        case API_FAILED:
            return {
                ...state,
                loading: false,
                image: [],
                error: action.payload,
                uploaded: false
            }
        default:
            return state;
    }
}