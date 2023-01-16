import { supabase } from "../services/Database";

export async function getRelation(relation, fields) {
    console.log(relation, fields);
    const { data, error } = await supabase.from(relation).select(fields);

    return { data, error };
}