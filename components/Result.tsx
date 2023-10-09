import { styles } from '../styles/styles'
import * as React from 'react'
import { View, Text, Pressable } from "react-native"

export default function Result({setField, size, bombs, time, win}:any){
  const newGame = () => {
    setField([])
    win.current = 0
  }

  return(
    <View style={styles.resultView}>
      {win.current === 1 ? <Text style={styles.resultWin}>ОБЕЗВРЕЖЕНО</Text> : <Text style={styles.resultLose}>ПОРАЖЕНИЕ</Text>}
      <Text style={styles.resultText}>Поле: {size.X} / {size.Y}</Text>
      <Text style={styles.resultText}>Бомб: {bombs.Y}</Text>
      {time === 0 || <Text style={styles.resultText}>Время: {time}</Text>}
      <Pressable style={styles.resultButton} onPress={newGame}>
        <Text style={styles.resultText}>НОВАЯ ИГРА</Text>
      </Pressable>
    </View>
  )
}