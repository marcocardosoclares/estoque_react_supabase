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
    let insertResult = null;
    insertResult = await insertItem(item);
    if (insertResult.error) return insertResult;
    
    const movement = {
        'in_out': 'I',
        'item_id': insertResult.id,
        'quantity': item.quantity,
        'amount': item.quantity,
        'description': 'Cadastro'
    }
    
    insertResult = await insertMovement(movement);
  
    return insertResult;
}