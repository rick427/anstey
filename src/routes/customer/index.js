import React from 'react';
import {Route, Switch} from 'react-router-dom';

import CustomerList from "./list";

const Customers = ({match}) => {
    return (
       <Switch>
           <Route path={`${match.url}/list`} component={CustomerList}/>
       </Switch>
    )
}

export default Customers
