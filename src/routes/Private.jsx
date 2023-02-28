import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/Auth';

const Private = ({ children }) => {
    const { user } = useAuth();
    let location = useLocation();
    
    return user 
        ? children 
        : <Navigate to="/" state={{ from: location }} replace />;
}

export default Private