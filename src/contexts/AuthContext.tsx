import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import axios from "axios"
import {jwtDecode} from "jwt-decode"
import Cookies from 'js-cookie'

interface User {
    email: string;
    uid : string;
}

interface AuthContextType {
    user: User | null;
    signUp : (email: string, password: string) => Promise<void>;
    logIn : (email: string, password: string) => Promise<void>;
    logOut : () => void;
    isAuthenticated : () => boolean;
}

interface AuthProviderProps {
    children : ReactNode
}

interface jwtPayload {
    user_id: string;
    email: string;
}

export const AuthContext = createContext<AuthContextType | null>(null);

const apiKey = "AIzaSyC7iIIKAOjsxSYB0lPgrIH04aUtNK836os"

const AuthProvider = ({children} : AuthProviderProps) => {
    const [user , setUser] = useState<User | null>(null)

    const signUp = async (email : string, password : string) => {
        
        try {
            const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,{
                "email":email,
                "password":password,
                "returnSecureToken": true,
            })    

            const { idToken } = response.data
            const decodedToken : jwtPayload = jwtDecode(idToken)
            const uid = decodedToken.user_id
            
            Cookies.set('access_token',idToken)
            setUser({email,uid})

        } catch (error) {
                console.log(error)
        }
    }

    const logIn = async (email : string, password : string) => {

        try {
            const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,{
                "email" : email,
                "password" : password,
            })

            const {idToken} = response.data
            const decodedToken : jwtPayload = jwtDecode(idToken)
            const uid = decodedToken.user_id
            
            Cookies.set("access_token",idToken)
            setUser({email,uid})

        } catch (error) {
            console.log(error)
        }
    }

    const logOut = () => {
        Cookies.remove('access_token');
        setUser(null)
    }

    const isAuthenticated = () => {
        return !!user
    }

    useEffect(() => {
        const token = Cookies.get('access_token')

        if (token){
            try {
                const decodedToken : jwtPayload = jwtDecode(token)
                const uid = decodedToken.user_id
                const email = decodedToken.email
                setUser({email,uid})   
            } catch (error) {
                console.error("Failed to login",error)
                logOut()
            }
        }
    },[])

    return (
        <AuthContext.Provider value={{user, signUp, logIn, logOut, isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

export const useAuth = () => {
    const context = useContext(AuthContext)

    if (!context){
        throw new Error("out of context")
    }

    return context
}