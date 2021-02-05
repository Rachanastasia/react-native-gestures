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
        <DownButton />
        <LeftButton/>
        <RightButton />
        </View>
    )
}

const styles = StyleSheet.create({
    controller: {
        backgroundColor: 'black'
    }
})