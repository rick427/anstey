import React from 'react';
import {Route, Switch} from "react-router-dom";

import Dashboard from "./dashboard";
import Orders from './orders';
import Category from './category';
import Coupon from './coupon';
import FrontSlide from './frontSlide';
import Dispatcher from './dispatcher';
import Products from './product';
import Customers from './customer';

const AdminRoutes = ({match}) => {
    return (
        <Switch>
            <Route path={`${match.url}/dashboard`} component={Dashboard}/>
            <Route path={`${match.url}/orders`} component={Orders}/>
            <Route path={`${match.url}/category`} component={Category}/>
            <Route path={`${match.url}/coupon`} component={Coupon}/>
            <Route path={`${match.url}/front/slide`} component={FrontSlide}/>
            <Route path={`${match.url}/dispatcher`} component={Dispatcher}/>
            <Route path={`${match.url}/products`} component={Products}/>
            <Route path={`${match.url}/customers`} component={Customers}/> 
        </Switch> 
    )
}

export default AdminRoutes
