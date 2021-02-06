import styleVariables from '../styles/variables.json'

export function useRandomArrow(){
    const rand = Math.floor(Math.random() * 8)
    const color = useRandomColor()
    switch(rand){
        case 1: 
        case 2:
         
    }

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