import React, {useContext} from 'react'
import {View, TouchableOpacity, Text} from 'react-native'
import {GameContext} from '../contexts/GameContext'
import styleVariables from '../styles/variables.json'


export default function StartScreen(){
    const {setIsPlaying} = useContext(GameContext)
    return(
        <View>
            <Text>This is where I will put the instructions</Text>
            <TouchableOpacity
            style={{...styleVariables.button, height: "100%"}}
            onPress={()=>setIsPlaying(true)}>
                <Text>Start</Text>
            </TouchableOpacity>
        </View>
    )
}

