import React from 'react';
import {Route, Switch} from 'react-router-dom';

import DispatcherList from "./list";

const Dispatcher = ({match}) => {
    return (
       <Switch>
           <Route path={`${match.url}/list`} component={DispatcherList}/>
       </Switch>
    )
}

export default Dispatcher
