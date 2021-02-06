import {useContext} from 'react'
import styleVariables from '../styles/variables.json'
import {GameContext} from '../contexts/GameContext'

export function useGenerateArrows(){
    const {pushElements} = useContext(GameContext)

    function generateArrow(){
        const rand = Math.floor(Math.random() * 8)
        const color = useRandomColor()
        switch(rand){
            case 1: pushElements({color, type: 'up', rotate: 270})
            case 2: pushElements({color, type: 'right', rotate: 0})
            case 3: pushElements({color, type: 'left', rotate: 180})
            case 4: pushElements({color, type: 'down', rotate: 90})
            default: pushElements({color, type: 'up', rotate: 270})
        }
    }

    setInterval(generateArrow, 10000)
    
}

function useRandomColor(){
    const rand = Math.floor(Math.random() * 4)
    switch(rand){
        case 1: return styleVariables.color_one_light
        case 2: return styleVariables.color_two_light
        case 3: return styleVariables.color_three_light
        case 4: return styleVariables.color_four_light
        default: return styleVariables.color_three_light
    }
}