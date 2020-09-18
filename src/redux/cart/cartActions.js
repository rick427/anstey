import axios from "axios";

import {
  DELETE_CART_REQUEST,
  DELETE_CART_SUCCESS,
  DELETE_CART_ERROR,
  EDIT_CART_REQUEST,
  EDIT_CART_SUCCESS,
  EDIT_CART_FAILED,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILED,
  CLIENT_ERROR,
  GET_CART_REQUEST,
  GET_CART_FAILED,
  GET_CART_SUCCESS,
  DECREMENT_QUANTITY,
  INCREMENT_QUANTITY,
} from "../types";
import toast from "../../utils/toasts";
import UrlService from "../../services/url_service";
import setAuthToken from "../../utils/setAuthToken";
import AuthService from "../../services/authentication_service";

export const addToCartRequest = () => {
  return {
    type: ADD_TO_CART_REQUEST,
  };
};

export const addToCartSuccess = (data) => {
  return {
    type: ADD_TO_CART_SUCCESS,
    payload: data,
  };
};

export const addToCartError = (error) => {
  return {
    type: ADD_TO_CART_FAILED,
    payload: error,
  };
};

export const editCartRequest = () => {
  return {
    type: EDIT_CART_REQUEST,
  };
};

export const editCartSuccess = (data) => {
  return {
    type: EDIT_CART_SUCCESS,
    payload: data,
  };
};

export const editCartError = (error) => {
  return {
    type: EDIT_CART_FAILED,
    payload: error,
  };
};

export const deleteCartRequest = () => {
  return {
    type: DELETE_CART_REQUEST,
  };
};

export const deleteCartSuccess = (id) => {
  return {
    type: DELETE_CART_SUCCESS,
    payload: id,
  };
};
export const deleteCartError = () => {
  return {
    type: DELETE_CART_ERROR,
  };
};

export const getCartRequest = () => {
  return {
    type: GET_CART_REQUEST,
  };
};

export const getCartSuccess = (data) => {
  return {
    type: GET_CART_SUCCESS,
    payload: data,
  };
};

export const getCartError = (error) => {
  return {
    type: GET_CART_FAILED,
    payload: error,
  };
};

export const decrementCart = (id) => {
  return {
    type: DECREMENT_QUANTITY,
    payload: id,
  };
};

export const incrementCart = (id) => {
  return {
    type: INCREMENT_QUANTITY,
    payload: id,
  };
};

export const apiError = (error) => {
  return {
    type: CLIENT_ERROR,
    payload: error,
  };
};

export const checkout = (data) => async (dispatch) => {
  if (AuthService.getToken()) {
    setAuthToken(AuthService.getToken());
  }
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    await axios.post(UrlService.CHECKOUT, data, config);
    //dispatch(addToCartSuccess(res.data));
  } catch (error) {
    //dispatch(addToCartError(error.response.data));
    //toast('error', error.response.data);
  }
};

export const addToCart = (cartData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    dispatch(addToCartRequest());
    const res = await axios.post(UrlService.ADD_TO_CART, cartData, config);
    dispatch(addToCartSuccess(res.data));
  } catch (error) {
    dispatch(addToCartError(error.response.data));
    toast("error", error.response.data);
  }
};

export const editCart = (cartData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    dispatch(editCartRequest());
    const res = await axios.put(UrlService.EDIT_CART, cartData, config);
    dispatch(editCartSuccess(res.data));
  } catch (error) {
    dispatch(editCartError(error.response.data));
    toast("error", error.response.data);
  }
};

export const deleteCart = (cartData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    dispatch(deleteCartRequest());
    await axios.post(UrlService.DELETE_CART_ITEM, cartData, config);
    console.log(cartData.id);
    dispatch(deleteCartSuccess(cartData.id));
  } catch (error) {
    console.log(error);
    //dispatch(deleteCartError(error.response.data));
    //toast('error', error.response.data);
  }
};

export const getCart = (data) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    dispatch(getCartRequest());
    const res = await axios.post(UrlService.GET_CART, data, config);

    if (res.data.status === false) {
      dispatch(getCartError(res.data.message));
      return toast("error", res.data.message);
    }

    dispatch(getCartSuccess(res.data));
  } catch (error) {
    dispatch(apiError(error));
  }
};
