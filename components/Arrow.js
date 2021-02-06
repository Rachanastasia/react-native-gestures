import React from 'react'
import {View, Text} from 'react-native'


export default function Arrow({type, color, rotate}){

return(
    <View>
        <Text style={{fontSize: 100, color, transform:[{rotate: `${rotate}deg`}]}}>➡</Text>
    </View>
)}

Arrow.defaultProps = {
    color: 'red',
    rotate: '0'
}