import React from 'react';
import {Route, Switch} from 'react-router-dom';

import ProductsList from "./list";

const Products = ({match}) => {
    return (
       <Switch>
           <Route path={`${match.url}/list`} component={ProductsList}/>
       </Switch>
    )
}

export default Products
