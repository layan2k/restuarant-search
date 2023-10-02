import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import Search from './src/components/Search';
import { useState } from 'react';
import Categories from './src/components/Categories';
import Restaurants from './src/components/Restaurants';

export default function App() {
  const [itemActive, setitemActive] = useState("Burger");
  return (
    <View style={styles.container}>
      <Header />
      <Search setTerm={setitemActive} />
      <Categories itemActive={itemActive} setitemActive={setitemActive} />
      <Restaurants />
      <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // }
});
