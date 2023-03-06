import { getItem, updateItem } from "../controllers/Items";
import { insertMovement } from "../controllers/Movements";

export const indexColumns = { 
    'quantity': 'Quantidade',
    'balance': 'Saldo',
    'description': 'Descrição',
    'created_at': 'Data',
    'full_name': 'Usuário',
};

export async function Insert(movement) {
    const quantity = movement.in_out === 'I'
    ? +movement.item_quantity + +movement.quantity
    : +movement.item_quantity - +movement.quantity;

    const invalidQuantity = await checkQuantity(movement.item_id, quantity)
    if (invalidQuantity) return invalidQuantity;

    const { item_quantity, ...newMovement} = movement;
    const { error } = await insertMovement(newMovement);
    if (error) return {error};
    
    const itemUpdate = {
        'id': movement.item_id,
        'quantity': quantity,
    };
    return await updateItem(itemUpdate);
}

async function checkQuantity(itemId, quantity) {
    const { data, error } = await getItem(itemId);
    
    if (error) return {error}

    if (quantity > data?.maximum_quantity) return {
        'error': {'message': `O saldo não pode ser maior que 
        a quantidade máxima de ${data.maximum_quantity} unidades`}
    }

    if (quantity < 0) return {
        'error': {'message': 'O saldo não pode ser negativo'}
    }

    return null;
}