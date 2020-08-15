import React from 'react';
import {Route, Redirect} from 'react-router-dom';

import AuthService from '../../services/authentication_service';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => !AuthService.hasSession() ? (
            <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
        ) : (
           <Component {...props}/>
        )} />
    )
}

export default PrivateRoute;
