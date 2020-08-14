import React from 'react';
import {Route, Switch} from 'react-router-dom';

import FrontSlideList from "./list";

const FrontSlide = ({match}) => {
    return (
       <Switch>
           <Route path={`${match.url}/list`} component={FrontSlideList}/>
       </Switch>
    )
}

export default FrontSlide;
