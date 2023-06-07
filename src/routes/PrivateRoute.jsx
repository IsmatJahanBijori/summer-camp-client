import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading}=useContext(AuthContext)
    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }
    if(user){
        return children
    }
    return <Navigate></Navigate>
};

export default PrivateRoute;