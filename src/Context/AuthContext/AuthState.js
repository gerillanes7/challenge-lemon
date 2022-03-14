import { useState, useEffect } from 'react'
import AuthContext from './AuthContext'


const AuthState = ({children}) => {

    const [user, setUser] = useState(() => {
       return localStorage.getItem('user') ?? null
    })

    const setUserLogged = (user) => {
        setUser(user)
        localStorage.setItem('user', JSON.stringify(user))
    }

    const removeUserLogged = () => {
        localStorage.removeItem('user')
        setUser(null)
    }

    useEffect(() => {
        if(localStorage.getItem('user')) {
            setUser(JSON.parse(localStorage.getItem('user')))
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            userLogged: user,
            setUserLogged,
            removeUserLogged
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthState