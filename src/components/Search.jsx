import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { elevation } from '../common/styles'

const Search = ({ setTerm }) => {
    const [input, setInput] = useState("");
    const handleEndEditing = () => {
        if (!input) return
        setTerm(input)
        setInput("")
    }
return (
    <View style={[styles.container, styles.elevation]}>
        <FontAwesome name='search' size={25} />
        <TextInput style={styles.input}
            placeholder='Restaurants, Food'
            onChangeText={(text) => { setInput(text) }}
            value={input}
            onEndEditing={handleEndEditing}
        />
    </View>
)
}

export default Search

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: "row",
        marginHorizontal: 25,
        marginTop: 10,
        borderColor: "black",
        gap: 10,
        backgroundColor: "white",
        borderRadius: 40,
        padding: 15,
    },
    elevation,
    input: {
        fontSize: 20,
    }
})