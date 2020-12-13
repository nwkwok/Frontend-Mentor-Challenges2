import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {
    const [darkTheme, setDarkTheme] = useState(false)

return ( 
    <ThemeContext.Provider
    value={{
        darkTheme, 
        setDarkTheme}}>
        {props.children}
    </ThemeContext.Provider>
    )
}