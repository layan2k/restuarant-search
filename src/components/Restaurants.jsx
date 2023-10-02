import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Restaurants = () => {
    return (
    <View style={styles.container}>
        <Text style={styles.header}> Top Restaurants</Text>
    </View>
)
}

export default Restaurants

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginVertical: 15,
        // flex: 1,
        height: 100
    },
    header: {
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 10,
    }
})