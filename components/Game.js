import React from 'react'
import {View} from 'react-native'
import Controller from './Controller'
import GameScreen from './GameScreen'
import Score from './Score'
import Arrow from './Arrow'

export default function Game(){
    return(
        <View style={{display: 'flex'}}>
            {/* <Score /> */}
            {/* <GameScreen /> */}
            {/* <Controller /> */}
            <Arrow />
        </View>
    )
}