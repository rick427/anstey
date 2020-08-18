import {ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, ADD_TO_CART_FAILED, CLIENT_ERROR, GET_CART_REQUEST, GET_CART_SUCCESS, GET_CART_FAILED} from "../types";

const initialState = {
    loading: false,
    cart: [],
    userCart: {},
    error: ''
}

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART_REQUEST:
        case GET_CART_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                userCart: action.payload
            }
        case ADD_TO_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cart: [...state.cart, action.payload]
            }
        case ADD_TO_CART_FAILED:
        case GET_CART_FAILED:
        case CLIENT_ERROR:
            return {
                ...state,
                loading: false,
                cart: [],
                userCart: {},
                error: action.payload
            }
        default:
            return state;
    }
}