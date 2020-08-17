import axios from 'axios';

import {IMAGE_UPLOAD_REQUEST, IMAGE_UPLOAD_SUCCESS, IMAGE_UPLOAD_FAILED, CLIENT_ERROR, CLEAR_UPLOADS} from "../types";
import toast from '../../utils/toasts';
import UrlService from '../../services/url_service';

export const uploadImageRequest = () => {
    return {
        type: IMAGE_UPLOAD_REQUEST,
    }
}

export const uploadImageSuccess = file => {
    return {
        type: IMAGE_UPLOAD_SUCCESS,
        payload: file
    }
}

export const uploadImageError = error => {
    return {
        type: IMAGE_UPLOAD_FAILED,
        payload: error
    }
}

export const clearUploads = () => {
    return {
        type: CLEAR_UPLOADS,
    }
}

export const apiError = (error) => {
    return {
        type: CLIENT_ERROR,
        payload: error
    }
}

export const uploadImage = (file) => async dispatch => {
    try {
        dispatch(uploadImageRequest());
        delete axios.defaults.headers.common['Authorization'];

        let formData = new FormData();
        formData.append('file', file);

        const res = await axios.post(UrlService.UPLOAD_IMAGE, formData);

        if(res.data.status === false){
            dispatch(uploadImageError(res.data.message));
            return toast('error', res.data.message);
        }

        dispatch(uploadImageSuccess(res.data));
    } 
    catch (error) {
        dispatch(apiError(error));
    }
}
