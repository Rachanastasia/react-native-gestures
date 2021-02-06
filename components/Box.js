import React, {useContext, useEffect} from 'react'
import {View} from 'react-native'
import {GameContext} from '../contexts/GameContext'
import {useGenerateArrows} from '../hooks/hooks'
import Arrow from './Arrow'


export default function Box(){
const {elements} = useContext(GameContext)

useGenerateArrows()

useEffect(()=>{},[elements])

return(
    <View style={{height: '50%', overflow: 'hidden'}}>
        {elements.length ? elements.map(el => <Arrow {...el} />): null}
    </View>
)
}