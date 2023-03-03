import { supabase } from "../services/Database";
import { getItem } from "./Items";

export async function insertMovement(movement) {
    const { error } = await supabase.from('movements').insert(movement);

    return { error };
}

export async function getMovements(itemId) {
    const item = await getItem(itemId);
    if(item.error) return item;

    const movements = await supabase
    .from('movements_view')
    .select('*')
    .eq('item_id',itemId);

    return movements.error 
    ? movements 
    : { ...movements, 'data': { 'item': item.data, 'movements': movements.data } };
}