import { createContext, useContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies"
import Router from "next/router"

import { api } from "../lib/api";

interface User {
  id: string
  username: string
  email: string
}

interface SignInData {
  username: string
  password: string
}

interface AuthContextType {
  isAuthenticated: boolean
  user: User
  signIn: (data: SignInData) => Promise<void>
  recoverUserInformation: () => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({children}) {
  const [ user, setUser ] = useState<User | null>(null)

  const isAuthenticated = !!user

  useEffect(() => {
    recoverUserInformation()
  }, [])

  async function recoverUserInformation() {
    if (Router.asPath.includes("manager")) {
      const { 'portfolio.token': token } = parseCookies()
  
      if (token) {
        try {
          const response = await api.put('/auth/signIn', {token})
          setUser(response.data.user)
        } catch (error) {
          Router.push('/manager')
        }
      } else {
        Router.push('/manager')
      }
    }
  }

  async function signIn({username, password}: SignInData) {
    const { data } = await api.post('/auth/signIn', {username, password})
    if (data?.token) {
      setCookie(undefined, 'portfolio.token', data?.token, {
        maxAge: 60 * 60 * 1, // 1 hour
      })

      setUser(data.user)
      Router.push('/manager/main')
    }
  }
  
  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, user, recoverUserInformation }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}