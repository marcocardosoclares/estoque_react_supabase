import indexColumns from '../models/Category';
import { supabase } from '../services/Database';

export async function getCategories(searchQuery, sortBy) {

    let query = supabase.from('categories').select(
        Object.keys(indexColumns).join(',')
    );
    
    if (searchQuery) {
        let filter = [];
        Object.keys(indexColumns).filter(column => !['id'].includes(column)).map(column => {
            filter.push(`${column}.ilike.%${searchQuery}%`)
        });
        query = query.or(filter.join(','));
    }

    const { data, error } = await query.order(sortBy ?? 'id');

    return { data, error };
}

export async function insertCategory(category) {
    const { error } = await supabase
    .from('categories').insert(category);

    return error ? false : true;
}

export async function getCategory(id) {
    const { data, error } = await supabase
    .from('categories')
    .select()
    .eq('id',id).single();

    return { data, error };
}

export async function updateCategory(category) {
    const { error } = await supabase
    .from('categories').update(category).eq('id', category.id);

    return error ? false : true;
}
