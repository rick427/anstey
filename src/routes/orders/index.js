import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Order from "./order";

const Dashboard = ({match}) => {
    return (
       <Switch>
           <Route path={`${match.url}/list`} component={Order}/>
       </Switch>
    )
}

export default Dashboard
