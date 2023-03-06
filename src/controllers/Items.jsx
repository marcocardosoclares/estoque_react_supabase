import { indexColumns } from '../models/Item';
import { supabase } from '../services/Database';

export async function getItems(searchQuery, sortBy) {

    let query = supabase.from('items_view').select(
        Object.keys(indexColumns).join(',')
    );
    
    if (searchQuery) {
        let filter = [];
        Object.keys(indexColumns).filter(column => !['id','quantity'].includes(column)).map(column => {
            filter.push(`${column}.ilike.%${searchQuery}%`)
        });
        query = query.or(filter.join(','));
    }

    return await query.order(sortBy ?? 'id');
}

export async function insertItem(item) {
    return await supabase
    .from('items')
    .insert(item)
    .select('id')
    .single();
}

export async function getItem(id) {
    return await supabase.from('items').select(
        '*, categories(id, name)'
    ).eq('id',id).single();
}

export async function updateItem(item) {
    const { error } = await supabase
    .from('items').update(item).eq('id', item.id);

    return {error};
}
