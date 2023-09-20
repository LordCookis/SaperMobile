import { styles } from '../styles/styles'
import { View, Text, TextInput } from "react-native"

export default function GameInputs({size, setSize, setBombs}) {
  return(
    <View>
      <Text>Введите размер поля:</Text>
      <TextInput placeholder="Ширина" inputMode='numeric' onChangeText={sizeX => setSize({...size, X: sizeX})}></TextInput>
      <TextInput placeholder="Высота" inputMode='numeric' onChangeText={sizeY => setSize({...size, Y: sizeY})}></TextInput>
      <View>
        <Text>Бомб: </Text>
        <TextInput placeholder="0" inputMode='numeric' onChangeText={bombs => setBombs(bombs)}></TextInput>
      </View>
    </View>
  )
}
