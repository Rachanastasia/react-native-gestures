import React from 'react'
import {View, StyleSheet} from 'react-native'
import ControllerButton from './ControllerButton'

export default function Controller(){
    return(
        <View style={styles.controller}>
            <ControllerButton type='Up' />
            <View style={styles.leftRightWrapper}>
                <ControllerButton type='Right' />
                <ControllerButton type='Left'/>
            </View>
            <ControllerButton type='Down' />
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