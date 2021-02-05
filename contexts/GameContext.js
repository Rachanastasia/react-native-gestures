import React, {createContext, useState, useEffect} from 'react'

export const GameContext = createContext()

export default function GameContextProvider({children}){
    const [isPlaying, setIsPlaying] = useState(false)
    const [score, setScore] = useState(0)

    useEffect(()=>{
        return ()=> setScore(0)
    },[])

    const increaseScore = () => setScore(score + 1)

    const value = {isPlaying, score, increaseScore, setIsPlaying}
    return(
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
        )
}