import {useEffect} from 'react';
import axios from 'axios';

import toast from './toasts';
import UrlService from '../services/url_service';
import AuthService from '../services/authentication_service';

const RegisterCart = () => {
    useEffect(() => {
        handleRegisterCart()
    }, []);

    const handleRegisterCart = async () => {
        if(AuthService.getCartId()){
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
            AuthService.setCartId(res.data.identifier)
        } 
        catch (error) {
            console.log(error);
        }
    };
    
    return null;
}

export default RegisterCart;
