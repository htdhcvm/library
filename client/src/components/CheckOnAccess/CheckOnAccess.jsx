import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const CheckOnAccess = ({ children, ...rest }) => {
    const isAuth = false;

    return (
        <Route
            {...rest}
            render={({ location }) => (isAuth ? children : <Redirect to="/" />)}
        />
    );
};

export default CheckOnAccess;
