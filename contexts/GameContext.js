import React, {createContext, useState, useEffect} from 'react'

export const GameContext = createContext()

export default function GameContextProvider({children}){
    const [isPlaying, setIsPlaying] = useState(false)
    const [score, setScore] = useState(0)
    const [elements, setElements] = useState([])

    const increaseScore = () => setScore(score + 1)

    const pushElements = (el) => {
        let temp = elements
        if(elements.length > 5){
            elements.pop()
        }
        const newArr = [el, ...elements]
        setElements(newArr)
    }

    const value = {isPlaying, score, elements, increaseScore, setIsPlaying, pushElements}
    return(
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
        )
}