import {ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, ADD_TO_CART_FAILED, CLIENT_ERROR, GET_CART_REQUEST, GET_CART_SUCCESS, GET_CART_FAILED, INCREMENT_QUANTITY, DECREMENT_QUANTITY} from "../types";

const initialState = {
    loading: false,
    cart: [],
    userCartInfo: {},
    userCart: [],
    error: ''
}

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART_REQUEST:
        case GET_CART_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                userCartInfo: action.payload,
                userCart: action.payload.cartitems
            }
        case ADD_TO_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cart: [...state.cart, action.payload]
            }
        case INCREMENT_QUANTITY:
            const incrementedCart = state.userCart.map(item => {
                if(item.pid === action.payload){
                    item.quantity = parseInt(item.quantity) + 1;
                    item.total = parseInt(item.price) * parseInt(item.quantity);
                    return item;
                }
                return item;
            });
            return {
                ...state,
                userCart: incrementedCart
            }
        case DECREMENT_QUANTITY:
            const decrementedCart = state.userCart.map(item => {
                if(item.pid === action.payload){
                    if(parseInt(item.quantity) === 1) return item;
                    else{
                        item.quantity = parseInt(item.quantity) - 1;
                        item.total = parseInt(item.price) * parseInt(item.quantity);
                        return item;
                    }
                }
                return item;
            });
            return {
                ...state,
                userCart: decrementedCart
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