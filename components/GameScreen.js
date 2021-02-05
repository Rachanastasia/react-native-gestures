import React from 'react'
import {View, Animated} from 'react-native'

function GameScreen(props){

    return(
        <Animated.View>
            {props.children}
        </Animated.View>
    )
}

export default () => {
    return(
        <View >
            <GameScreen>

            </GameScreen>
        </View>
    )
}