import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./auth/AuthLayout";
import ErrorPage from "./error/ErrorPage";
import MainLayout from "./MainLayout";
import authRoutes from "./auth/AuthRoutes";
import dashboardRoutes from "./dashboard/dashBoardRoutes";
import itemRoutes from "./items/itemRoutes";
import categoryRoutes from "./categories/categoryRoutes";


const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthLayout />,
        errorElement: <ErrorPage />,
        children: [...authRoutes]
    },
    {
        element: <MainLayout />,
        children: [
            ...dashboardRoutes,
            ...itemRoutes,
            ...categoryRoutes
        ]
    }
]);

export default router;