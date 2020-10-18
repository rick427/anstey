import {GET_COUPONS_REQUEST, GET_COUPONS_SUCCESS, GET_COUPONS_FAILED, CLIENT_ERROR, CREATE_COUPONS_REQUEST, CREATE_COUPONS_SUCCESS, CREATE_COUPONS_FAILED, DELETE_COUPON_FAILED, DELETE_COUPON_SUCCESS, DELETE_COUPON_REQUEST, GET_COUPON_BY_ID_REQUEST, GET_COUPON_BY_ID_SUCCESS, EDIT_COUPON_REQUEST, EDIT_COUPON_FAILED, EDIT_COUPON_SUCCESS } from "../types";

const initialState = {
    loading: false,
    data: [],
    couponData: {},
    error: ''
}

export default (state = initialState, action) => {
    switch(action.type){
        case CREATE_COUPONS_REQUEST:
        case EDIT_COUPON_REQUEST:
        case DELETE_COUPON_REQUEST:
        case GET_COUPONS_REQUEST:
        case GET_COUPON_BY_ID_REQUEST:
            return {
                ...state,
                loading: true,
                data: [],
                couponData: {}
            }
        case GET_COUPON_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                couponData: action.payload
            }
        case GET_COUPONS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case CREATE_COUPONS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: [...state.data, action.payload],
                error: '',
            }
        case EDIT_COUPON_SUCCESS:
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
        case DELETE_COUPON_SUCCESS:
            return {
                ...state,
                loading: false,
                data: state.data.filter(item => item.id !== action.payload.id)
            }
        case CREATE_COUPONS_FAILED:
        case EDIT_COUPON_FAILED:
        case DELETE_COUPON_FAILED:
        case GET_COUPONS_FAILED:
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