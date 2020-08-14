import React from 'react';
import {Route, Switch} from 'react-router-dom';

import CategoryList from "./list";

const Category = ({match}) => {
    return (
       <Switch>
           <Route path={`${match.url}/list`} component={CategoryList}/>
       </Switch>
    )
}

export default Category
