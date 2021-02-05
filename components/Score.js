import React, {useContext} from 'react'
import {Text, View} from 'react-native'
import {GameContext} from '../contexts/GameContext'

export default function Score(){
    const {score} = useContext(GameContext)

    return(
        <View>
            <Text style={{color: 'red'}}>{score}</Text>
        </View>
    )
}