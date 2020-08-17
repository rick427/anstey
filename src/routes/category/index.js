import React from 'react';
import {Route, Switch} from 'react-router-dom';

import CategoryList from "./list";
import EditCategories from './edit';

const Category = ({match}) => {
    return (
       <Switch>
           <Route path={`${match.url}/list`} component={CategoryList}/>
           <Route path={`${match.url}/edit/:id`} component={EditCategories}/>
       </Switch>
    )
}

export default Category
