import { supabase } from "../services/Database";

export async function insertMovement(movement) {
    const { error } = await supabase.from('movements').insert(movement);

    return { error };
}