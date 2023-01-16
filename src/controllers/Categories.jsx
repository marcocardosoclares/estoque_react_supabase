import { supabase } from "../services/Database";

export async function getCategories() {
    const {data, error} = await supabase.from('asset_groups').select('id, name');
    return { data, error };
}