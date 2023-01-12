import { supabase } from '../services/Database';

export async function getAssets() {
    const { data, error } = await supabase.from('assets').select();

    return { data, error };
}

export async function insertAsset(asset) {
    const returnInsert = await supabase.from('assets').insert(asset);
    console.log('retorno inserção',returnInsert)

    return returnInsert;
}