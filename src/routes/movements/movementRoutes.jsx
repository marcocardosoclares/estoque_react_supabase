import Private from "../Private";
import InOut, { 
    action as insertMovementAction,
    loader as insertMovementLoader 
} from "./InOut";

const movementRoutes = [
    {
        path: 'movimentos/:itemId/inserir',
        element: <Private><InOut /></Private>,
        action: insertMovementAction,
        loader: insertMovementLoader
    }
];

export default movementRoutes;