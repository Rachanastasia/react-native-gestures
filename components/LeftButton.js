import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import styleVariables from '../styles/variables.json'


export default function LeftButton(){

return(
    <TouchableOpacity style={styleVariables.button}>
        <Text style={{color: styleVariables.color_white}}>Left</Text>
    </TouchableOpacity>
)
}