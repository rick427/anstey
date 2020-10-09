import axios from "axios";

import {
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILED,
  CLIENT_ERROR,
  CREATE_CATEGORIES_REQUEST,
  CREATE_CATEGORIES_SUCCESS,
  CREATE_CATEGORIES_FAILED,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILED,
  GET_CATEGORY_BY_ID_REQUEST,
  GET_CATEGORY_BY_ID_SUCCESS,
  GET_CATEGORY_BY_ID_FAILED,
  EDIT_CATEGORY_REQUEST,
  EDIT_CATEGORY_SUCCESS,
  EDIT_CATEGORY_FAILED,
} from "../types";
import toast from "../../utils/toasts";
import setAuthToken from "../../utils/setAuthToken";
import AuthService from "../../services/authentication_service";
import UrlService from "../../services/url_service";

export const getCategoriesRequest = () => {
  return {
    type: GET_CATEGORIES_REQUEST,
  };
};

export const getCategories = (data) => {
  return {
    type: GET_CATEGORIES_SUCCESS,
    payload: data,
  };
};

export const getCategoriesError = (error) => {
  return {
    type: GET_CATEGORIES_FAILED,
    payload: error,
  };
};

export const createCategoryRequest = () => {
  return {
    type: CREATE_CATEGORIES_REQUEST,
  };
};

export const createCategorySuccess = (data) => {
  return {
    type: CREATE_CATEGORIES_SUCCESS,
    payload: data,
  };
};

export const createCategoryError = (error) => {
  return {
    type: CREATE_CATEGORIES_FAILED,
    payload: error,
  };
};

export const deleteCategoryRequest = () => {
  return {
    type: DELETE_CATEGORY_REQUEST,
  };
};

export const deleteCategorySuccess = (id) => {
  return {
    type: DELETE_CATEGORY_SUCCESS,
    payload: id,
  };
};

export const deleteCategoryError = (error) => {
  return {
    type: DELETE_CATEGORY_FAILED,
    payload: error,
  };
};

export const getCategoryByIdRequest = () => {
  return {
    type: GET_CATEGORY_BY_ID_REQUEST,
  };
};

export const getCategoryByIdSuccess = (data) => {
  return {
    type: GET_CATEGORY_BY_ID_SUCCESS,
    payload: data,
  };
};

export const getCategoryByIdError = (error) => {
  return {
    type: GET_CATEGORY_BY_ID_FAILED,
    payload: error,
  };
};

export const editCategoryRequest = () => {
  return {
    type: EDIT_CATEGORY_REQUEST,
  };
};

export const editCategorySuccess = (data) => {
  return {
    type: EDIT_CATEGORY_SUCCESS,
    payload: data,
  };
};

export const editCategoryError = (error) => {
  return {
    type: EDIT_CATEGORY_FAILED,
    payload: error,
  };
};

export const apiError = (error) => {
  return {
    type: CLIENT_ERROR,
    payload: error,
  };
};

//@: ACTION CREATOR -- GET ALL CATEGORIES
export const getAllCategories = () => async (dispatch) => {
  //@: Global header for auth token
  if (AuthService.getToken()) {
    setAuthToken(AuthService.getToken());
  }
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    dispatch(getCategoriesRequest());
    const res = await axios.get(UrlService.GET_CATEGORIES, config);

    if (res.data.status === false) {
      dispatch(getCategoriesError(res.data.message));
      return toast("error", res.data.message);
    }

    dispatch(getCategories(res.data.list));
  } catch (error) {
    dispatch(apiError(error));
  }
};

//@: ACTION CREATOR -- EDIT CATEGORIES
export const editCategories = (data) => async (dispatch) => {
  //@: Global header for auth token
  if (AuthService.getToken()) {
    setAuthToken(AuthService.getToken());
  }
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    dispatch(editCategoryRequest());
    const res = await axios.put(
      `${UrlService.EDIT_CATEGORY}/${data.id}`,
      data,
      config
    );

    if (res.data.status === false) {
      dispatch(editCategoryError(res.data.message));
      return toast("error", res.data.message);
    }

    dispatch(editCategorySuccess(res.data.list));
  } catch (error) {
    dispatch(apiError(error));
  }
};

//@: ACTION CREATOR -- GET CATEGORY BY ID
export const getCategoryById = (id) => async (dispatch) => {
  //@: Global header for auth token
  if (AuthService.getToken()) {
    setAuthToken(AuthService.getToken());
  }
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    dispatch(getCategoryByIdRequest());
    const res = await axios.get(
      `${UrlService.GET_CATEGORY_BY_ID}/${id}`,
      config
    );

    if (res.data.status === false) {
      dispatch(getCategoryByIdError(res.data.message));
      return toast("error", res.data.message);
    }

    dispatch(getCategoryByIdSuccess(res.data.item));
  } catch (error) {
    dispatch(apiError(error.response.data));
  }
};

//@: ACTION CREATOR -- CREATE CATEGORY
export const createCategory = (category) => async (dispatch) => {
  //@: Global header for auth token
  if (AuthService.getToken()) {
    setAuthToken(AuthService.getToken());
  }
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    dispatch(createCategoryRequest());
    const res = await axios.post(UrlService.CREATE_CATEGORY, category, config);

    if (res.data.status === false || res.data.exception) {
      dispatch(createCategoryError(res.data.message));
      return toast("error", res.data.message);
    }

    dispatch(createCategorySuccess(res.data.item));
  } catch (error) {
    dispatch(apiError(error.response.data));
  }
};

//@: ACTION CREATOR -- DELETE CATEGORY
export const deleteCategory = (id) => async (dispatch) => {
  //@: Global header for auth token
  if (AuthService.getToken()) {
    setAuthToken(AuthService.getToken());
  }
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    dispatch(deleteCategoryRequest());
    const res = await axios.delete(
      `${UrlService.DELETE_CATEGORY}/${id}`,
      config
    );

    if (res.data.status === false || res.data.exception) {
      dispatch(deleteCategoryError(res.data.message));
      return toast("error", res.data.message);
    }

    dispatch(deleteCategorySuccess(res.data.item));
  } catch (error) {
    dispatch(apiError(error));
  }
};
