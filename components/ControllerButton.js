import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import styleVariables from '../styles/variables.json'




export default function ControllerButton({icon, color}){

return(
    <TouchableOpacity style={{...styleVariables.button, backgroundColor: color }}>
        <Text style={{fontSize: 70, color: 'white'}}>{icon}</Text>
    </TouchableOpacity>
)
}

ControllerButton.defaultProps = {
    rotate: '0',
    color: styleVariables.color_two_dark
}