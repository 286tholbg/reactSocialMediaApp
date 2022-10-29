import { useState, useEffect, createContext } from "react"

const DarkModeContext = createContext()

function DarkModeContextProvider ({ children }) {

    const [darkMode, setDarkMode] = useState(
        JSON.parse(localStorage.getItem("darkMode"))
        || false
    );

    const toggle = () => {
        setDarkMode(!darkMode)
    }

    useEffect(() => {
        localStorage.setItem("darkMode", darkMode)
    }, [darkMode])

    return (
        <DarkModeContext.Provider value={{darkMode, toggle}}>
            {children}
        </DarkModeContext.Provider>
    )
}

export {DarkModeContext, DarkModeContextProvider}