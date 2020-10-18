import {combineReducers} from 'redux';

import authReducer from './auth/authReducer';
import dashboardReducer from './dashboard/dashboardReducer';
import topOrdersReducer from './topOrders/topOrdersReducer';
import ordersReducer from './orders/ordersReducer';
import categoryReducer from './categories/categoryReducer';
import couponReducer from './coupons/couponReducer';
import frontSlideReducer from './frontslides/frontSlideReducer';
import productsReducer from './products/productsReducer';
import uploadReducer from './upload/uploadReducer';
import cartReducer from './cart/cartReducer';

const rootReducer = combineReducers({
    auth: authReducer, 
    dashboard: dashboardReducer,
    topOrders: topOrdersReducer,
    orders: ordersReducer,
    category: categoryReducer,
    frontSlides: frontSlideReducer,
    coupon: couponReducer,
    products: productsReducer,
    upload: uploadReducer,
    cart: cartReducer
})

export default rootReducer;