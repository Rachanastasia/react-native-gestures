import React from 'react'
import {View, Text} from 'react-native'
import styleVariables from '../styles/variables.json'


export default function Arrow({ color, icon}){

return(
    <View>
        <Text style={{fontSize: 100, color}}>{icon}</Text>
    </View>
)}

Arrow.defaultProps = {
    color: styleVariables.color_three_light
}