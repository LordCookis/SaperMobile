import { styles } from '../styles/styles'
import * as React from 'react'
import { View, Text, TextInput } from "react-native"

export default function GameInputs({size, setSize, bombs, setBombs}:any){
  return(
    <View>
      <View style={styles.inputView}>
        <TextInput style={styles.inputSize} placeholder="Ширина" inputMode='numeric' onChangeText={sizeX => setSize({...size, X: sizeX})}></TextInput>
        <TextInput style={styles.inputSize} placeholder="Высота" inputMode='numeric' onChangeText={sizeY => setSize({...size, Y: sizeY})}></TextInput>
      </View>
      <View>
        <Text style={styles.inputText}>Бомб: </Text>
        <TextInput style={styles.input} placeholder="0" inputMode='numeric' onChangeText={bomb => setBombs({...bombs, X: bomb})}></TextInput>
      </View>
    </View>
  )
}
