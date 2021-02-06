import {useContext, useEffect} from 'react'
import styleVariables from '../styles/variables.json'
import {GameContext} from '../contexts/GameContext'

export function useGenerateArrows(){
    const {pushElements, elements} = useContext(GameContext)

    useEffect(()=>{},[elements])
    function generateArrow(){
        const rand = Math.ceil(Math.random() * 4)
        const color = useRandomColor()
        switch(rand){
            case 1: pushElements({color, type: 'up', icon:'&#8593;'})
            case 2: pushElements({color, type: 'right', icon:'&#8594;'})
            case 3: pushElements({color, type: 'left', icon: '&#8592;'})
            case 4: pushElements({color, type: 'down', icon: '&#8595;'})
            default: pushElements({color, type: 'up', icon: '&#8593;'})
        }
    }

    setInterval(generateArrow, 10000)
    
}

function useRandomColor(){
    const rand = Math.ceil(Math.random() * 4)
    switch(rand){
        case 1: return styleVariables.color_one_dark
        case 2: return styleVariables.color_two_dark
        case 3: return styleVariables.color_three_dark
        case 4: return styleVariables.color_four_dark
        default: return styleVariables.color_three_dark
    }
}