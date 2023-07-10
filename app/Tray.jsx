import { View, StyleSheet, TouchableOpacity, Text } from "react-native"

export default function Tray({ setSelectedRestaurant }) {
  const choose = () => {
    const chosen = Math.random()
    setSelectedRestaurant(chosen)
  }
  const clear = () => {
    setSelectedRestaurant(null)
  }
  return (
    <View style={styles.tray}>
      <View style={styles.buttonList}>
        <TouchableOpacity onPress={choose} style={styles.button}>
          <Text style={styles.buttonText}>Shuffle 🎲</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={clear} style={[styles.button, styles.resetButton]}>
          <Text style={[styles.buttonText, styles.resetButtonText]}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonList: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-evenly',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#786dbb',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 4,
  },
  resetButtonText: {
    color: '#333',
  },
  resetButton: {
    backgroundColor: '#ccc',
  },
  tray: {
    width: '100%',
    backgroundColor: '#e9eeff',
    height: 70,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
})