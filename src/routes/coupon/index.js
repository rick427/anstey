import React from 'react';
import {Route, Switch} from 'react-router-dom';

import CouponList from "./list";
import EditCoupon from './edit';

const Coupon = ({match}) => {
    return (
       <Switch>
           <Route path={`${match.url}/list`} component={CouponList}/>
           <Route path={`${match.url}/edit/:id`} component={EditCoupon}/>
       </Switch>
    )
}

export default Coupon