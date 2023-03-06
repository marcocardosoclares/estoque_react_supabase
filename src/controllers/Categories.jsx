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

    return await query.order(sortBy ?? 'id');
}

export async function insertCategory(category) {
    return await supabase.from('categories').insert(category);
}

export async function getCategory(id) {
    return await supabase.from('categories').select().eq('id',id).single();
}

export async function updateCategory(category) {
    return await supabase.from('categories').update(category).eq('id', category.id);
}
