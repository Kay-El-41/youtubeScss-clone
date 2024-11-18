import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { getAccessToken } from "./googleAuth/googleAuthUtils";

export const AuthContext  =createContext()

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [token, setToken] = useState(null)
  
  const refreshToken = async () => { 
    try {
      const newToken = await getAccessToken()
      if (newToken) {
        setToken(newToken)
      }
    } catch (error) {
      console.log('Failed to refresh token:', error)
    }
  }
  useEffect(() => {
    const unsubsribe=auth.onAuthStateChanged((user) => {
        setCurrentUser(user)
    })
    const interval = setInterval(() => { refreshToken() }, 15*60*1000)//refresh every 15 minutes

    return () => {
      clearInterval(interval)
      unsubsribe()
      setLoading(false)
    } 
  }, [])
  
  const value={currentUser,token}//destructure currentUser and pass in to value
  
  return (
    <>
      <AuthContext.Provider value={value }>
        {!loading&& children}
    </AuthContext.Provider>
    </>
      )
}
