import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useSelector } from 'react-redux';

const CheckOnAccess = ({ children, ...rest }) => {
    const isAuth = useSelector((state) => state.library.isAuth);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuth ? <Redirect to="/home" /> : children
            }
        />
    );
};

export default CheckOnAccess;
