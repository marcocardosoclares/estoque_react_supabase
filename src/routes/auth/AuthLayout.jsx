import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../contexts/Auth';

const AuthLayout = () => {
    const { user } = useAuth();

    if (user) return <Navigate to="/dashboard" />;

    return (
        <div className="container">
            <div className="row min-vh-100 align-items-md-center justify-content-center">
                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout