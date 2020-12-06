import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

const AuthRoute = ({ type, ...props }) => {

    const { isLoggedIn } = useContext(GlobalContext)

    if (type === "guest" && isLoggedIn) return <Redirect to="/" />;
    else if (type === "private" && !isLoggedIn) return <Redirect to="/login" />;

    return <Route {...props} />;
}

export default AuthRoute
