import {useEffect} from 'react';
import axios from 'axios';

import toast from './toasts';
import UrlService from '../services/url_service';

const RegisterCart = () => {
    useEffect(() => {
        handleRegisterCart()
    }, []);

    const handleRegisterCart = async () => {
        if(localStorage.getItem('anstey:cart_id')){
            return;
        }

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.get(UrlService.REGISTER_CART, config);
    
            if(res.data.status === false){
                return toast('error', res.data.message);
            }

            localStorage.setItem('anstey:cart_id', res.data.identifier);
        } 
        catch (error) {
            console.log(error);
        }
    };
    
    return null;
}

export default RegisterCart;
