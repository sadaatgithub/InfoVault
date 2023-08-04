'use client';
import { createContext,useState } from "react";

export const burgerContext = createContext()

export const BurgerProvider = ({children}) =>{
        const [burgerOpen,setBurgerOpen] = useState(false)
        const handleBurger = () =>{
            setBurgerOpen(!burgerOpen)
            console.log(burgerOpen)
        }
        return (
            <burgerContext.Provider value={{handleBurger,burgerOpen}}>
                {children}
            </burgerContext.Provider>
            )
}