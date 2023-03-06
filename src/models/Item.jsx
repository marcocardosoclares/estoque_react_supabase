import { insertItem } from "../controllers/Items";
import { insertMovement } from "../controllers/Movements";

export const indexColumns = { 
    'id': 'Id',
    'name': 'Nome',
    'quantity': 'Atual',
    'category_name': 'Categoria',
    'active': 'Ativo',
    'item_status': 'Status' 
};

export async function Insert(item) {
    const insertResult = await insertItem(item);
    if (insertResult.error) return insertResult; 
    
    const movement = {
        'in_out': 'I',
        'item_id': insertResult.data.id,
        'quantity': item.quantity,
        'description': 'Cadastro'
    }
    
    return await insertMovement(movement);
}