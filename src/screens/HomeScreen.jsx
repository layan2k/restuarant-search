import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Restaurants from '../components/Restaurants'
import { StatusBar } from 'expo-status-bar'

const HomeScreen = () => {
    const [itemActive, setitemActive] = useState("Burger");
return (
    <View style={styles.container}>
    <Header />
    <Search setTerm={setitemActive} />
    <Categories itemActive={itemActive} setitemActive={setitemActive} />
    <Restaurants term={itemActive} />
    <StatusBar style='auto'/>
    </View>
)
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgb(253,253,253)",
        flex: 1,
    }
});