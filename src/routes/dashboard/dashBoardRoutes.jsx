import Private from "../Private";
import Dashboard from "./Dashboard";

const dashboardRoutes = [
    { 
        path: '/dashboard', 
        index: true, 
        element: <Private><Dashboard /></Private> 
    }
];

export default dashboardRoutes;