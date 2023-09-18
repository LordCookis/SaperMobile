import { StatusBar } from 'expo-status-bar'
import { styles } from './styles/styles'
import { useState } from 'react'
import { Text, View } from 'react-native'
import GameInputs from './components/GameInputs'

export default function App() {
  const [size, setSize] = useState({X: 0, Y: 0})

  return (
    <View style={styles.mainView}>
      <Text style={styles.mainText}>Разрывная</Text>
      <GameInputs
        size = {size}
        setSize = {setSize}
      />
      <Text>{size.X} / {size.Y}</Text>
      <StatusBar style="auto"/>
    </View>
  )
}
