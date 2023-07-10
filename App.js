import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import RestList from './app/RestList'
import Tray from './app/Tray'

export default function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState()
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>Lunch Spot 🌮</Text>
        <RestList selectedRestaurant={selectedRestaurant} />
        <StatusBar style='auto' />
      </View>
      <Tray setSelectedRestaurant={setSelectedRestaurant} />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#483d8b',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    color: 'white',
    fontSize: 30,
  },
})
