'use client'

import React, { createContext, useState } from "react"

interface ThemeContextType {
    toggle: () => void,
    mode: string
}

interface ThemeProviderProps {
    children: React.ReactNode
}

export const ThemeContext = createContext<ThemeContextType>({
    toggle: () => {},
    mode: "dark"
})

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [mode, setMode] = useState("dark");

    const toggle = () => {
        setMode(prev => prev === "dark" ? "light" : "dark");
    }

    return (<ThemeContext.Provider value={{ toggle, mode }}>
        <div className={`theme ${mode}`}>
            {children}
        </div>
    </ThemeContext.Provider>)
}
