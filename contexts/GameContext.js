import React, {createContext, useState, useEffect} from 'react'

export const GameContext = createContext()

export default function GameContextProvider({children}){
    const [isPlaying, setIsPlaying] = useState(false)
    const [score, setScore] = useState(0)
    const [elements, setElements] = useState([])

    // useEffect(()=>{
    //     return ()=> {
    //         setScore(0)
    //         setElements([])
    //     }
    // },[])

    const increaseScore = () => setScore(score + 1)

    const pushElements = (el) => setElements([el, ...elements])
    const popElements = () => setElements(elements.pop())

    const value = {isPlaying, score, elements, increaseScore, setIsPlaying, pushElements, popElements}
    return(
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
        )
}