import React, {useContext} from 'react'
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native'
import {GameContext} from '../contexts/GameContext'


export default function StartScreen(){
    const {setIsPlaying} = useContext(GameContext)
    return(
        <View>
            <TouchableOpacity
            onPress={()=>setIsPlaying(true)}>
                <Text>Start</Text>
            </TouchableOpacity>
        </View>
    )
}