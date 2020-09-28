import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Order from "./order";
import OrderDetails from './order/details';

const Dashboard = ({match}) => {
    return (
       <Switch>
           <Route exact path={`${match.url}/list`} component={Order}/>
           <Route path={`${match.url}/list/:id`} component={OrderDetails}/>
       </Switch>
    )
}

export default Dashboard
