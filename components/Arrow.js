import React from 'react'
import {View, Text} from 'react-native'
import styleVariables from '../styles/variables.json'


export default function Arrow({type, color, rotate}){

return(
    <View>
        <Text style={{fontSize: 100, color, transform:[{rotate: `${rotate}deg`}]}}>➡</Text>
    </View>
)}

Arrow.defaultProps = {
    color: styleVariables.color_three_light,
    rotate: '0'
}