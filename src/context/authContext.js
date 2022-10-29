import { useState, useEffect, createContext } from "react"

const AuthContext = createContext()

function AuthContextProvider ({ children }) {

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user"))
        || null
    );

    const login = () => {
        setCurrentUser({
            id: 1, 
            name: 'James Tut',
            profilePic: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
        })
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])

    return (
        <AuthContext.Provider value={{currentUser, login}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthContextProvider}