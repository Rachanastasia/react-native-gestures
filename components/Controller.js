import React from 'react'
import {View, StyleSheet} from 'react-native'
import ControllerButton from './ControllerButton'
import styleVariables from '../styles/variables.json'


export default function Controller(){
    return(
        <View style={styles.controller}>
            <ControllerButton icon='&#8593;' color={styleVariables.color_one_dark}  />
            <View style={styles.leftRightWrapper}>
                <ControllerButton icon='&#8594;' color={styleVariables.color_two_dark} />
                <ControllerButton icon='&#8592;' color={styleVariables.color_three_dark} />
            </View>
            <ControllerButton  icon='&#8595;' color={styleVariables.color_four_dark}  />
        </View>
    )
}

const styles = StyleSheet.create({
    controller: {
        backgroundColor: 'black',
        display: 'flex',
        height: "100vh",
        width: "300px",
        alignItems: "center"
    },
    leftRightWrapper:{
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between"
    }
})