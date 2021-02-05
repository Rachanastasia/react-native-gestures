import React from 'react'
import {View, StyleSheet} from 'react-native'
import UpButton from './UpButton'
import DownButton from './DownButton'
import LeftButton from './LeftButton'
import RightButton from './RightButton'

export default function Controller(){
    return(
        <View style={styles.controller}>
            <UpButton />
            <View style={styles.leftRightWrapper}>
                <DownButton />
                <LeftButton/>
            </View>
            <RightButton />
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