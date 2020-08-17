import {combineReducers} from 'redux';

import authReducer from './auth/authReducer';
import dashboardReducer from './dashboard/dashboardReducer';
import topOrdersReducer from './topOrders/topOrdersReducer';
import ordersReducer from './orders/ordersReducer';
import categoryReducer from './categories/categoryReducer';
import frontSlideReducer from './frontslides/frontSlideReducer';
import productsReducer from './products/productsReducer';
import uploadReducer from './upload/uploadReducer';

const rootReducer = combineReducers({
    auth: authReducer, 
    dashboard: dashboardReducer,
    topOrders: topOrdersReducer,
    orders: ordersReducer,
    category: categoryReducer,
    frontSlides: frontSlideReducer,
    products: productsReducer,
    upload: uploadReducer
})

export default rootReducer;