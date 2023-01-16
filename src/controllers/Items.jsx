import { supabase } from '../services/Database';

export async function getItems() {
    const { data, error } = await supabase.from('items').select();

    return { data, error };
}

export async function insertItem(item) {
    const {data, error} = await supabase.from('items').insert(item).select('id');
    const id = !error ? data[0].id : null;

    return { id, error };
}