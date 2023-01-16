import { insertItem } from "../controllers/Items";

export const itemFillables = { 
    'name': 'Nome',
    'description': 'Descrição', 
    'quantity': 'Atual',
    'minimum_quantity': 'Mínimo',
    'maximum_quantity': 'Máximo',
    'category_id': 'Categoria',
    'active': 'Ativo' 
};

export async function Insert(item) {
    let insertResult = null;
    insertResult = await insertItem(item);
    if (insertResult.error) return false;
    
    const movement = {
        in_out: 'I',
        item_id: insertResult.id,
        quantity: amount.quantity,
        amount: amount.quantity,
        description: 'Cadastro'
    }
    
    insertResult = await insertMovement(movement);
    if (insertResult.error) return false;
  
    return true;
}