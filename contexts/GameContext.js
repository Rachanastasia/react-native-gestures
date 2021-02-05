import React, {createContext, useState} from 'react'

export const GameContext = createContext()

export default function GameContextProvider({children}){
    const [isPlaying, setIsPlaying] = useState(false)
    
    const value = {isPlaying, setIsPlaying}
    return(
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
        )
}