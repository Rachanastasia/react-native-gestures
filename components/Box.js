import React, {useContext, useEffect} from 'react'
import {View, FlatList} from 'react-native'
import {GameContext} from '../contexts/GameContext'
import {useGenerateArrows} from '../hooks/hooks'
import Arrow from './Arrow'


export default function Box(){
const {elements} = useContext(GameContext)

useGenerateArrows()

useEffect(()=>{},[elements])
const renderItem = ({item}) => <Arrow color={item.color} icon={item.icon}/>

return(
    <View style={{height: '50%', overflow: 'hidden'}}>
       <FlatList 
        data={elements} 
        renderItem={renderItem} 
        keyExtractor={(i, index) => index}/>
    </View>
)
}