import React, {useContext, Fragment} from 'react'
import {View } from 'react-native'
import {GameContext} from '../contexts/GameContext'
import StartScreen from './StartScreen'
import Game from './Game'


export default function GameWrapper(){
    const {isPlaying} = useContext(GameContext)
    return(
        <View>
            {isPlaying ? <Game /> : <StartScreen />}
        </View>
    )
}