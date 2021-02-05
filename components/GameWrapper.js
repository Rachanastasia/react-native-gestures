import React, {useContext} from 'react'
import {View, StyleSheet} from 'react-native'
import {GameContext} from '../contexts/GameContext'
import StartScreen from './StartScreen'
import Game from './Game'


export default function GameWrapper(){
    const {isPlaying} = useContext(GameContext)
    return(
        <View style={styles.wrapper}>
            {isPlaying ? <Game /> : <StartScreen />}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center"
    }
})