import React from 'react'
import {View} from 'react-native'
import Controller from './Controller'
import GameScreen from './GameScreen'
import Score from './Score'
import Box from './Box'

export default function Game(){
    return(
        <View style={{display: 'flex'}}>
            {/* <Score /> */}
            {/* <GameScreen /> */}
            <Box />
            <Controller />
        </View>
    )
}