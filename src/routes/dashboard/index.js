import React from 'react';
import {Route, Switch} from 'react-router-dom';

import AdminDashboard from './admin';

const Dashboard = ({match}) => {
    return (
        <Switch>
           <Route path={`${match.url}/admin`} component={AdminDashboard}/>
       </Switch>
    )
}

export default Dashboard
