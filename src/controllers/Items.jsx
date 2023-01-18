import { indexColumns } from '../models/Item';
import { supabase } from '../services/Database';

export async function getItems(searchQuery, sortBy) {

    let query = supabase.from('items_view').select('*');
    
    if (searchQuery) {
        let filter = [];
        Object.keys(indexColumns).filter(column => !['id','quantity'].includes(column)).map(column => {
            filter.push(`${column}.ilike.%${searchQuery}%`)
        });
        query = query.or(filter.join(','));
    }

    const { data, error } = await query.order(sortBy ?? 'id');

    return { data, error };
}

export async function insertItem(item) {
    const {data, error} = await supabase.from('items').insert(item).select('id');
    const id = !error ? data[0].id : null;

    return { id, error };
}

export async function getItem(id) {
    const {data, error} = await supabase.from('items').select(
        '*, categories(id, name)'
    ).eq('id',id).single();

    return { data, error };
}

export async function updateItem(item) {
    if ('active' in item === false) item.active = false;

    const { error } = await supabase
    .from('items').update(item).eq('id', item.id);;

    return error ? false : true;
}
