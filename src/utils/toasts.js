import {toast, Flip, Slide, Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default (status, message, duration = 4000) => {
    toast.configure();

    if(status === 'success'){
        return toast.success(message,
            {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: duration,
                transition: Bounce
            }
        )
    }
    else if(status === 'error'){
        return toast.error(message,
            {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: duration,
                transition: Flip
            }
        )
    }
    else if(status === 'info'){
        return toast.info(message,
            {
                position: toast.POSITION.TOP_CENTER,
                autoClose: duration,
                transition: Slide
            }
        )
    }
}