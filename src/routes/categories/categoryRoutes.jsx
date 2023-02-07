import Private from "../Private";
import Categories, { loader as categoriesLoader} from "./Categories";
import InsertCategory, { action as insertCategoryAction } from "./InsertCategory";
import ShowCategory, { loader as showCategoryLoader } from "./ShowCategory";
import UpdateCategory, { 
    loader as UpdateCategoryLoader, 
    action as UpdateCategoryAction 
} from "./UpdateCategory";

const categoryRoutes = [
    {
        path: '/categorias',
        element: <Private><Categories /></Private>,
        loader: categoriesLoader,
    },
    {
        path: 'categorias/:categoryId/visualizar',
        element: <ShowCategory />,
        loader: showCategoryLoader
    },
    {
        path: 'categorias/:categoryId/editar',
        element: <UpdateCategory />,
        loader: UpdateCategoryLoader,
        action: UpdateCategoryAction
    },
    {
        path: 'categorias/inserir',
        element: <InsertCategory />,
        action: insertCategoryAction
    }
];

export default categoryRoutes;