import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
    return (
        <div className="container">
            <div className="row min-vh-100 align-items-md-center justify-content-center">
                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout