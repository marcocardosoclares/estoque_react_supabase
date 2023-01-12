import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./auth/AuthLayout";
import Forgot, { action as forgotAction } from "./auth/Forgot";
import ResetPassword, { action as resetAction } from "./auth/ResetPassword";
import Login, { action as authAction } from "./auth/Login";
import Dashboard from "./dashboard/Dashboard";
import ErrorPage from "./error/ErrorPage";
import ProtectedRoute from './ProtectedRoute';
import Assets,{ loader as assetsLoader} from "./assets/Assets";
import AssetForm, { action as assetAction } from "./assets/AssetForm";


const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Login />,
                action: authAction,
            },
            {
                path: 'esqueci',
                element: <Forgot />,
                action: forgotAction
            },
            {
                path: 'reset',
                element: <ResetPassword />,
                action: resetAction
            },
        ]
    },
    {
        element: <ProtectedRoute />,
        children: [
            { path: 'dashboard', element: <Dashboard /> },
            {
                path: 'itens',
                element: <Assets />,
                loader: assetsLoader,
            },
            {
                path: 'itens/inserir',
                element: <AssetForm />,
                action: assetAction
            }

        ]
    }
]);

export default router;