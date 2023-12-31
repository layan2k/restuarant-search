// Header Container
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.lightHeader}>Grab your</Text>
    <Text style={styles.boldHeader}>delicious meal!</Text>
    </View>
  )
}

export default Header

// Styles
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: 60,
    marginHorizontal: 25,
  },
  lightHeader: {
    fontSize: 35,
  },
  boldHeader: {
    fontSize: 40,
    fontWeight: "bold",
  }
})