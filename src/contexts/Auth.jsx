import React, { useState, useEffect, createContext, useContext } from 'react'
import { supabase } from '../services/Database'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {

    let authInfo = JSON.parse(
      window.localStorage.getItem(
        'sb-sbtnjrnmptiqrqycvszi-auth-token'
      )
    )

    setUser(authInfo?.user ?? null)
    setLoading(false)

    let { data: listener } =  supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null)
        setEvent(event);
        setLoading(false)
      }
    )

    return () => {
      listener.subscription;
    }
  }, [])

  return (
    <AuthContext.Provider value={{ event, loading, user }}>
      { !loading && children }
    </AuthContext.Provider>
  )
}
