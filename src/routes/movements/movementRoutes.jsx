import Private from "../Private";
import InsertMovement, { 
    action as insertMovementAction,
    loader as insertMovementLoader 
} from "./InsertMovement";
import ItemMovements, {loader as ItemMovementsLoader} from "./ItemMovements";

const movementRoutes = [
    {
        path: 'movimentos/:itemId',
        element: <Private><ItemMovements /></Private>,
        loader: ItemMovementsLoader
    },
    {
        path: 'movimentos/:itemId/inserir',
        element: <Private><InsertMovement /></Private>,
        action: insertMovementAction,
        loader: insertMovementLoader
    }
];

export default movementRoutes;