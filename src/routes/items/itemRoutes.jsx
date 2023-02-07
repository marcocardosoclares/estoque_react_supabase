import Private from "../Private";
import Items, { loader as itemsLoader} from "./Items";
import InsertItem, { action as insertItemAction } from "./InsertItem";
import ShowItem, { loader as showItemLoader } from "./ShowItem";
import UpdateItem, { 
    loader as UpdateItemLoader, 
    action as UpdateItemAction 
} from "./UpdateItem";

const itemRoutes = [
    {
        path: '/itens',
        element: <Private><Items /></Private>,
        loader: itemsLoader,
    },
    {
        path: 'itens/:itemId/visualizar',
        element: <ShowItem />,
        loader: showItemLoader
    },
    {
        path: 'itens/:itemId/editar',
        element: <UpdateItem />,
        loader: UpdateItemLoader,
        action: UpdateItemAction
    },
    {
        path: 'itens/inserir',
        element: <InsertItem />,
        action: insertItemAction
    }
];

export default itemRoutes;