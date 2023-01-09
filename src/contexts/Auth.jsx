import React, { useState, useEffect, createContext, useContext } from 'react'
import { redirect } from 'react-router-dom'
import { supabase } from '../services/Database'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [authError, setAuthError] = useState(null)

  async function signIn(email, password) {
    try {
      setAuthError(null);
      setLoading(true);

      const { data, error } = await supabase.auth.signInWithPassword({ 
        email, 
        password 
      });
      
      if (error) {
        throw new Error(error);
      } else {
        setUser(data.user);
        redirect("/dashboard");
      }
    } catch (err) {
      setAuthError(err);
    } finally {
      setLoading(false)
    }
    
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();

    if (error) setAuthError(error)
    setUser(null)
  }

  useEffect(() => {
    async function autoLogin() {
      const {data: session} =  await supabase.auth.getSession();

      console.log('auto login session',session.session)

      setUser(session?.user ?? null)
      setLoading(false)

      const { data: listener } = supabase.auth.onAuthStateChange(
        async (event, session) => {
          setUser(session?.user ?? null)
          setLoading(false)
        }
      )
    }

    // autoLogin();

  }, [])


  return (
    <AuthContext.Provider value={{ signIn, signOut, user, loading, authError }}>
      { children }
    </AuthContext.Provider>
  )
}
