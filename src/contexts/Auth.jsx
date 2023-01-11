import React, { useState, useEffect, createContext, useContext } from 'react'
import { getSession, getUserProfile } from '../controllers/Auth'
import { supabase } from '../services/Database'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [event, setEvent] = useState(null);

  useEffect(() => {
    async function sessionInfo() {
      const session =  await getSession();
      
      if (session) {
        const profile = await getUserProfile(session.user.id)
        session.user.fullName = profile;
      }
      
      setUser(session?.user ?? null)
      setLoading(false)
    }

    sessionInfo();

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session) {
          if (session) {
            const profile = await getUserProfile(session.user.id)
            session.user.fullName = profile;
          }
        }
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
    <AuthContext.Provider value={{ user, loading, event }}>
      { children }
    </AuthContext.Provider>
  )
}
