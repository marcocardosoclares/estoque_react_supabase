import { insertItem } from "../controllers/Items";

export const indexColumns = { 
    'id': 'Id',
    'name': 'Nome',
    'quantity': 'Atual',
    'category_name': 'Categoria',
    'active': 'Ativo' 
};

export async function Insert(item) {
    let insertResult = null;
    insertResult = await insertItem(item);
    if (insertResult.error) return false;
    
    const movement = {
        'in_out': 'I',
        'item_id': insertResult.id,
        'quantity': item.quantity,
        'amount': item.quantity,
        'description': 'Cadastro'
    }
    
    insertResult = await insertMovement(movement);
    if (insertResult.error) return false;
  
    return true;
}