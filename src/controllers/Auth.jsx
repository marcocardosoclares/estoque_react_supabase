import { supabase } from "../services/Database";

export async function signIn({ email, password }) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    return { data, error };
}

export async function signOut() {
    const { error } = await supabase.auth.signOut();
    return error;
}

export async function getSession() {
    const { data: { session } } =  await supabase.auth.getSession();
    return session;
}

export async function getUserProfile(userId) {
    const { data } = await supabase
      .from('profiles')
      .select(`full_name`)
      .eq('id', userId)
      .single();

    return data.full_name
}

export async function resetPasswordEmail(email) {
    const { data, error } = await supabase.auth.resetPasswordForEmail(
        email, {redirectTo: "http://127.0.0.1:5173/reset"}
    );
    return { data, error };
}

export async function resetPassword(password) {
    const { data, error } = await supabase.auth.updateUser({password})
    return { data, error };
}
