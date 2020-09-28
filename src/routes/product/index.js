import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ProductDetail from './detail';
import EditProducts from './edit';
import ProductsList from "./list";


const Products = ({match}) => {
    return (
       <Switch>
           <Route exact path={`${match.url}/list`} component={ProductsList}/>
           <Route exact path={`${match.url}/list/:id`} component={ProductDetail}/>
           <Route exact path={`${match.url}/list/edit/:id`} component={EditProducts}/>
       </Switch>
    )
}

export default Products
