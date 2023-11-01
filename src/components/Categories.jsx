import React from 'react'
import CategoryItem from './CategoryItem'
import { FlatList, View } from 'react-native'
import { FoodItems } from '../common/data'

const Categories = ({itemActive, setitemActive }) => {
    return (
        <View>
        <FlatList data={FoodItems} renderItem={({item}) => {
        return (
        <CategoryItem key={item.id} name={item.name} image={item.image} active={item.name === itemActive}
            handlePress = {()=> setitemActive(item.name)}
        />
        )
            }} horizontal={true} showsHorizontalScrollIndicator={false} />
        </View>
)
}

export default Categories